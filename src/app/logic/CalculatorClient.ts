import { Injectable } from '@angular/core';
import { CommanderLevelValueCalculator } from "./CommanderLevelValueCalculator";
import { Commanders } from "./Commanders";
import { CalculationRequest } from './CalculationRequest';
import { Commander } from './Commander';
@Injectable()
export class CalculatorClient {
    levelValueCalculator: CommanderLevelValueCalculator;
    constructor() {
        this.levelValueCalculator = new CommanderLevelValueCalculator();
    }
    nextLevel(body: CalculationRequest) {
        let result = [];
        body.commanders.forEach(c => {
            result.push({ id: c.id, value: this.levelValueCalculator.GetValueForNextLevel(c, body.weights), needsUpgrade: c.currentLevel == c.maxLevel && c.currentLevel != 0, needsUnlock: c.maxLevel==0 });
        });
        return result;
    }
    commanders(): Commander[] {
        return new Commanders().commanders;
    }
}
