import { Component, OnInit } from '@angular/core';
import { CalculatorClient } from "./logic/CalculatorClient";
import { Commander } from "./logic/Commander";
import { CalculationRequest } from "./logic/CalculationRequest";
import { CalculationWeights } from "./logic/CalculationWeights";
import { PlayerCommander } from "./logic/PlayerCommander";
import { HttpClient } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';
import { CommanderQuality } from './logic/CommanderQuality';
import { MergedCommander } from './logic/MergedCommander';
import { KeyValue } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  client: CalculatorClient;
  commanders: MergedCommander[];
  visibleCommanders: MergedCommander[];
  weights: CalculationWeights;
  profiles: string[];
  currentProfileId: string =  "";
  giftTypes: string[] = ["Book", "Dessert", "Drink", "Food", "Jewelry", "Weapon"];
  gtag = (<any>window).gtag;
  profileSettings: ProfileSettings = new ProfileSettings();

  constructor(private sanitizer: DomSanitizer) {
    this.loadProfiles();
  }

  ngOnInit(): void {
    this.client = new CalculatorClient();
    this.commanders = this.client.commanders();
    this.commanders = this.commanders.sort((a, b) => a.name > b.name ? 1:-1);
    this.loadProfiles();
    this.loadPlayerCommanders();
    this.loadProfileSettings();
    this.loadWeights();
    this.processLevelCosts();
    this.gtag('config', 'GA_MEASUREMENT_ID', {
      'custom_map': {'dimension1': 'profile'}
    });
  }

  loadProfileSettings(){
    console.log("Loading profile settings for",this.currentProfileId);
    var profilesJson = localStorage.getItem("gw-fr-profileSettings" + (this.currentProfileId == "default" ? "" : this.currentProfileId));
    if(profilesJson){
      this.profileSettings = JSON.parse(profilesJson);
    } else {
      this.profileSettings =new ProfileSettings();
    }
    console.log(this.profileSettings);
    this.updateVisibleCommanders();
  }
  updateVisibleCommanders(){
    if(this.profileSettings.hideUnlocked){
      this.visibleCommanders = this.commanders.filter(c=>c.playerCommander.maxLevel>0);
    }else{
      this.visibleCommanders = this.commanders;
    }
  }

  saveProfileSettings(){
    localStorage.setItem("gw-fr-profileSettings" + (this.currentProfileId == "default" ? "" : this.currentProfileId), JSON.stringify(this.profileSettings));
    this.updateVisibleCommanders();
  }

  loadProfiles(){
    var profilesJson = localStorage.getItem("gw-fr-profiles");
    if(profilesJson){
      this.profiles = JSON.parse(profilesJson);
    }
    if(!this.profiles || this.profiles.length == 0){
      this.profiles = ["default"];
    }
    this.currentProfileId = this.profiles[0];
  }

  saveProfiles(){
    localStorage.setItem("gw-fr-profiles", JSON.stringify(this.profiles));
  }

  changeProfile(){
    this.loadPlayerCommanders();
    this.loadProfileSettings();
    this.loadWeights();
    this.onValuesChanged()
    this.gtag('event', 'changeProfile');
  }

  addProfile(title: string){
    title = title.replace(/[\W_]+/g,"");
    if(this.profiles.filter(p=>p == title).length!=0){
      return;
    }
    this.profiles.push(title);
    this.currentProfileId = title;
    this.gtag('event', 'addProfile', {
      'profile': title
    });
    this.saveProfiles();
    this.changeProfile();
  }

  deleteProfile(){
    if(this.profiles.length>1 && confirm("Are you sure you want to permanently delete this profile?")){
      localStorage.removeItem("gw-fr-playerCommanders" + (this.currentProfileId == "default" ? "" : this.currentProfileId));
      localStorage.removeItem("gw-fr-calculationWeights" + (this.currentProfileId == "default" ? "" : this.currentProfileId));
      localStorage.removeItem("gw-fr-profileSettings" + (this.currentProfileId == "default" ? "" : this.currentProfileId));
      this.profiles = this.profiles.filter(p =>p != this.currentProfileId);
      this.currentProfileId = this.profiles[0];
      this.gtag('event', 'deleteProfile');
      this.saveProfiles();
      this.changeProfile();
    }
  }

  askProfile(){
    var profileName = window.prompt("Enter new profile name (only letters and numbers are allowed)");
    if(profileName){
      this.addProfile(profileName);
    }
  }

  processLevelCosts() {
    let costs = this.loadLevelCosts()
    costs.forEach(cost => {
      var commander = this.commanders.filter(c => c.id == cost.id);
      if (commander && commander.length > 0) {
        commander[0].cost = cost.value;
        commander[0].needsUnlock = cost.needsUnlock;
        commander[0].needsUpgrade = cost.needsUpgrade;
      }
    });
  }

  decreaseLevel(playerCommander: PlayerCommander) {
    if (playerCommander.currentLevel > 1) {
      playerCommander.currentLevel--;
      this.onValuesChanged();
      this.gtag('event', 'decreaseLevel');
    }
  }

  increaseLevel(playerCommander: PlayerCommander) {
    if (playerCommander.currentLevel < playerCommander.maxLevel) {
      playerCommander.currentLevel++;
      this.onValuesChanged();
      this.gtag('event', 'increaseLevel');
    }
  }

  checkMaxLevel(playerCommander: PlayerCommander) {
    if (playerCommander.maxLevel > 0 && playerCommander.currentLevel == 0) {
      playerCommander.currentLevel = 1;
    }
  }

  onValuesChanged() {
    localStorage.setItem("gw-fr-playerCommanders" + (this.currentProfileId == "default" ? "" : this.currentProfileId), JSON.stringify(this.commanders.map(c => c.playerCommander)));
    this.processLevelCosts();
  }

  onWeightsChanged() {
    localStorage.setItem("gw-fr-calculationWeights" +  (this.currentProfileId == "default" ? "" : this.currentProfileId), JSON.stringify(this.weights));
    this.processLevelCosts();
  }

  exportData() {
    let data = JSON.stringify({
      commanders: this.commanders.map(c => c.playerCommander),
      weights: this.weights
    });
    this.download(this.currentProfileId + ".json", data);
    this.gtag('event', 'exportData');
  }

  handleFiles(files: File[]){
    if(files && files.length>0){
      var file = files[0];
      var fileName = file.name.replace(".json","")
      if(this.currentProfileId !=fileName){
        if(this.profiles.filter(p=>p == fileName).length!=0){
          this.currentProfileId = fileName;
          this.changeProfile();
        } else {
          this.addProfile(fileName);
        }
      }
      const reader = new FileReader();
      reader.onloadend = e => {
        var data = JSON.parse(reader.result.toString());
        console.log(data);
        if (data && data.commanders && data.weights) {
          this.loadPlayerCommanders(JSON.stringify(data.commanders));
          this.loadWeights(JSON.stringify(data.weights));
          this.onValuesChanged();
          this.onWeightsChanged();
        } else {
          alert("Failed to import the data.")
        }
      }
      reader.readAsText(file);
      console.log(document.getElementById("input"));
      (document.getElementById("input") as HTMLInputElement).value = "";
    }
  }

  importData() {
    document.getElementById("input").click();
    this.gtag('event', 'importData');
    return;
  }

  resetData() {
    if (window.confirm("This will reset all the data. Are you sure?")) {
      this.weights = new CalculationWeights();
      this.weights.aptitude = 2;
      this.weights.combat = 2;
      this.weights.leadership = 2;
      this.weights.finance = 0;
      this.weights.command = 2;
      this.commanders.forEach(c => {
        var playerCommander = new PlayerCommander();
        playerCommander.id = c.id;
        playerCommander.currentLevel = 0;
        playerCommander.maxLevel = 0;
        c.playerCommander = playerCommander;
      });
      this.onValuesChanged();
      this.gtag('event', 'resetData');
    }
  }

  getRange(max: number): number[] {
    var range: number[] = [];
    for (var i = 1; i <= max; i++) {
      range.push(i);
    }
    return range;
  }

  getCommandersByGiftType(giftType: string): Commander[] {
    if (!this.commanders) {
      return [];
    }

    var commanders = this.commanders.filter(c => c.preferredGift == giftType && c.cost >= 0);
    if (!this.profileSettings.suggestUnlocks) {
      commanders = commanders.filter(c => c.needsUnlock == false);
    }
    if (!this.profileSettings.suggestUpgrades) {
      commanders = commanders.filter(c => c.needsUpgrade == false);
    }
    commanders = commanders.sort((a, b) => a.cost > b.cost ? 1 : -1).reverse();
    return commanders;
  }

  getMaxLevels(): CommanderQuality[] {
    var result = [];
    result.push(new CommanderQuality("None", 0, this.sanitizer.bypassSecurityTrustStyle("black")));
    result.push(new CommanderQuality("Common", 10, this.sanitizer.bypassSecurityTrustStyle("grey")));
    result.push(new CommanderQuality("Uncommon", 20, this.sanitizer.bypassSecurityTrustStyle("green")));
    result.push(new CommanderQuality("Rare", 30, this.sanitizer.bypassSecurityTrustStyle("blue")));
    result.push(new CommanderQuality("Epic", 45, this.sanitizer.bypassSecurityTrustStyle("purple")));
    result.push(new CommanderQuality("Legendary", 80, this.sanitizer.bypassSecurityTrustStyle("orange")));
    return result;
  }

  private loadLevelCosts(): any[] {
    var request = new CalculationRequest();
    request.commanders = this.commanders.map(c => c.playerCommander);
    request.weights = this.weights;
    return this.client.nextLevel(request);
  }

  private loadWeights(json: string = undefined): void {
    var weightsJson = json ? json : localStorage.getItem("gw-fr-calculationWeights" + (this.currentProfileId == "default" ? "" : this.currentProfileId));
    var weights: CalculationWeights;
    if (weightsJson) {
      weights = JSON.parse(weightsJson);
    } else {
      weights = new CalculationWeights();
      weights.aptitude = 2;
      weights.combat = 2;
      weights.leadership = 2;
      weights.finance = 0;
      weights.command = 2;
    }
    this.weights = weights;
  }

  private loadPlayerCommanders(json: string = undefined): void {
    var playerCommandersJson = json ? json : localStorage.getItem("gw-fr-playerCommanders" + (this.currentProfileId == "default" ? "" : this.currentProfileId));
    var playerCommanders: PlayerCommander[];
    if (playerCommandersJson) {
      playerCommanders = JSON.parse(playerCommandersJson);
    } else {
      playerCommanders = [];
    }
    this.commanders.forEach(commander => {
      var filteredPCs = playerCommanders.filter(pc => pc.id == commander.id);
      if (filteredPCs.length == 0) {
        var playerCommander = new PlayerCommander();
        playerCommander.id = commander.id;
        playerCommander.currentLevel = 0;
        playerCommander.maxLevel = 0;
        playerCommander.awakeningLevel = 0;
        commander.playerCommander = playerCommander;
      } else {
        commander.playerCommander = filteredPCs[0];
      }
    });
  }

  fallbackCopyTextToClipboard(text) {
    var textArea = document.createElement("textarea");
    textArea.value = text;
    textArea.style.position = "fixed";  //avoid scrolling to bottom
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();

    try {
      var successful = document.execCommand('copy');
      var msg = successful ? 'successful' : 'unsuccessful';
      console.log('Fallback: Copying text command was ' + msg);
    } catch (err) {
      console.error('Fallback: Oops, unable to copy', err);
    }

    document.body.removeChild(textArea);
  }
  copyTextToClipboard(text) {
    if (!navigator.clipboard) {
      this.fallbackCopyTextToClipboard(text);
      return;
    }
    navigator.clipboard.writeText(text).then(function () {
      alert("Data copied to the clipboard");
    }, function (err) {
      alert("Could not export the data");
    });
  }

  download(filename: string, text: string) {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);
  
    element.style.display = 'none';
    document.body.appendChild(element);
  
    element.click();
  
    document.body.removeChild(element);
  }

  showGuide(){
    console.log('guide');
    var modal = <HTMLDivElement>document.getElementById("myModal");
    console.log(modal);

    // Get the button that opens the modal
    var btn = <HTMLButtonElement>document.getElementById("myBtn");
    
    // Get the <span> element that closes the modal
    var span = <HTMLSpanElement>document.getElementsByClassName("close")[0];
    
    // When the user clicks on the button, open the modal
    modal.style.display = "block";
    
    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
      modal.style.display = "none";
    }
    
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }    
  }
}
export class ProfileSettings {
  hideUnlocked: boolean = false;
  suggestUpgrades: boolean = true;
  suggestUnlocks: boolean = false;
}