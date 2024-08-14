import { Commander } from "./Commander";
import { GiftType } from "./GiftType";
export class Commanders {
    public commanders: Commander[];
    public constructor() {
        this.commanders =
            [
                {
                    "id": "daenerys",
                    "name": "Daenerys Targaryen",
                    "preferredGift": GiftType.Book,
                    "aptitude": 0,
                    "finance": 0,
                    "command": 5,
                    "combat": 5,
                    "leadership": 5,
                    "awakable": true
                },
                {
                    "id": "baelish",
                    "name": "Petyr Baelish",
                    "preferredGift": GiftType.Book,
                    "aptitude": 5,
                    "finance": 5,
                    "command": 0,
                    "combat": 0,
                    "leadership": 3,
                    "awakable": true
                },
                {
                    "id": "kevin",
                    "name": "Kevin",
                    "preferredGift": GiftType.Book,
                    "aptitude": 0,
                    "finance": 0,
                    "command": 4,
                    "combat": 3,
                    "leadership": 3,
                    "awakable": true
                },
                {
                    "id": "seg",
                    "name": "Seg",
                    "preferredGift": GiftType.Book,
                    "aptitude": 0,
                    "finance": 0,
                    "command": 0,
                    "combat": 5,
                    "leadership": 4,
                    "awakable": true
                },
                {
                    "id": "feis",
                    "name": "Feis",
                    "preferredGift": GiftType.Book,
                    "aptitude": 3,
                    "finance": 3,
                    "command": 0,
                    "combat": 0,
                    "leadership": 0,
                    "awakable": true
                },
                {
                    "id": "robert",
                    "name": "Robert",
                    "preferredGift": GiftType.Book,
                    "aptitude": 3,
                    "finance": 2,
                    "command": 0,
                    "combat": 0,
                    "leadership": 0,
                    "awakable": true
                },
                {
                    "id": "sansa",
                    "name": "Sansa Stark",
                    "preferredGift": GiftType.Dessert,
                    "aptitude": 4,
                    "finance": 4,
                    "command": 0,
                    "combat": 0,
                    "leadership": 3,
                    "awakable": true
                },
                {
                    "id": "varys",
                    "name": "Varys",
                    "preferredGift": GiftType.Dessert,
                    "aptitude": 5,
                    "finance": 4,
                    "command": 0,
                    "combat": 0,
                    "leadership": 2,
                    "awakable": true
                },
                {
                    "id": "leila",
                    "name": "Leila Mormont",
                    "preferredGift": GiftType.Dessert,
                    "aptitude": 0,
                    "finance": 0,
                    "command": 5,
                    "combat": 3,
                    "leadership": 0,
                    "awakable": true
                },
                {
                    "id": "sinara",
                    "name": "Sinara",
                    "preferredGift": GiftType.Dessert,
                    "aptitude": 0,
                    "finance": 4,
                    "command": 0,
                    "combat": 4,
                    "leadership": 0,
                    "awakable": true
                },
                {
                    "id": "andrea",
                    "name": "Andrea",
                    "preferredGift": GiftType.Dessert,
                    "aptitude": 3,
                    "finance": 0,
                    "command": 0,
                    "combat": 0,
                    "leadership": 4,
                    "awakable": true
                },
                {
                    "id": "meranda",
                    "name": "Meranda",
                    "preferredGift": GiftType.Dessert,
                    "aptitude": 0,
                    "finance": 3,
                    "command": 0,
                    "combat": 4,
                    "leadership": 0,
                    "awakable": true
                },
                {
                    "id": "sheila",
                    "name": "Sheila",
                    "preferredGift": GiftType.Dessert,
                    "aptitude": 0,
                    "finance": 2,
                    "command": 0,
                    "combat": 4,
                    "leadership": 0,
                    "awakable": true
                },
                {
                    "id": "cersei",
                    "name": "Cersei Lannister",
                    "preferredGift": GiftType.Drink,
                    "aptitude": 5,
                    "finance": 4,
                    "command": 0,
                    "combat": 0,
                    "leadership": 5,
                    "awakable": true
                },
                {
                    "id": "tyrion",
                    "name": "Tyrion Lannister",
                    "preferredGift": GiftType.Drink,
                    "aptitude": 5,
                    "finance": 5,
                    "command": 0,
                    "combat": 2,
                    "leadership": 0,
                    "awakable": true
                },
                {
                    "id": "raymond",
                    "name": "Raymond",
                    "preferredGift": GiftType.Drink,
                    "aptitude": 0,
                    "finance": 4,
                    "command": 2,
                    "combat": 3,
                    "leadership": 0,
                    "awakable": true
                },
                {
                    "id": "barret",
                    "name": "Barret",
                    "preferredGift": GiftType.Drink,
                    "aptitude": 0,
                    "finance": 0,
                    "command": 3,
                    "combat": 3,
                    "leadership": 0,
                    "awakable": true
                },
                {
                    "id": "arslan",
                    "name": "Arslan",
                    "preferredGift": GiftType.Drink,
                    "aptitude": 2,
                    "finance": 0,
                    "command": 3,
                    "combat": 0,
                    "leadership": 0,
                    "awakable": true
                },
                {
                    "id": "merrel",
                    "name": "Merrel Peake",
                    "preferredGift": GiftType.Drink,
                    "aptitude": 3,
                    "finance": 0,
                    "command": 2,
                    "combat": 0,
                    "leadership": 0,
                    "awakable": true
                },
                {
                    "id": "theon",
                    "name": "Theon Greyjoy",
                    "preferredGift": GiftType.Food,
                    "aptitude": 3,
                    "finance": 0,
                    "command": 0,
                    "combat": 3,
                    "leadership": 4,
                    "awakable": true
                },
                {
                    "id": "gorell",
                    "name": "Gorell",
                    "preferredGift": GiftType.Food,
                    "aptitude": 1,
                    "finance": 0,
                    "command": 4,
                    "combat": 0,
                    "leadership": 0,
                    "awakable": true
                },
                {
                    "id": "haley",
                    "name": "Haley",
                    "preferredGift": GiftType.Food,
                    "aptitude": 0,
                    "finance": 0,
                    "command": 3,
                    "combat": 2,
                    "leadership": 0,
                    "awakable": true
                },
                {
                    "id": "russell",
                    "name": "Russell",
                    "preferredGift": GiftType.Food,
                    "aptitude": 0,
                    "finance": 0,
                    "command": 2,
                    "combat": 3,
                    "leadership": 0,
                    "awakable": true
                },
                {
                    "id": "soren",
                    "name": "Soren",
                    "preferredGift": GiftType.Food,
                    "aptitude": 3,
                    "finance": 0,
                    "command": 2,
                    "combat": 0,
                    "leadership": 0,
                    "awakable": true
                },
                {
                    "id": "margaery",
                    "name": "Margaery Tyrell",
                    "preferredGift": GiftType.Jewelry,
                    "aptitude": 4,
                    "finance": 5,
                    "command": 2,
                    "combat": 0,
                    "leadership": 0,
                    "awakable": true
                },
                {
                    "id": "melisandre",
                    "name": "Melisandre",
                    "preferredGift": GiftType.Jewelry,
                    "aptitude": 2,
                    "finance": 5,
                    "command": 0,
                    "combat": 3,
                    "leadership": 0,
                    "awakable": true
                },
                {
                    "id": "laena",
                    "name": "Laena Waters",
                    "preferredGift": GiftType.Jewelry,
                    "aptitude": 0,
                    "finance": 3,
                    "command": 0,
                    "combat": 0,
                    "leadership": 4,
                    "awakable": true
                },
                {
                    "id": "Jeane",
                    "name": "Jeane",
                    "preferredGift": GiftType.Jewelry,
                    "aptitude": 4,
                    "finance": 1,
                    "command": 0,
                    "combat": 0,
                    "leadership": 0,
                    "awakable": true
                },
                {
                    "id": "jon",
                    "name": "Jon Snow",
                    "preferredGift": GiftType.Weapon,
                    "aptitude": 0,
                    "finance": 0,
                    "command": 5,
                    "combat": 5,
                    "leadership": 5,
                    "awakable": true
                },
                {
                    "id": "sandor",
                    "name": "Sandor Clegane",
                    "preferredGift": GiftType.Weapon,
                    "aptitude": 0,
                    "finance": 0,
                    "command": 5,
                    "combat": 5,
                    "leadership": 4,
                    "awakable": true
                },
                {
                    "id": "jaime",
                    "name": "Jaime Lannister",
                    "preferredGift": GiftType.Weapon,
                    "aptitude": 0,
                    "finance": 0,
                    "command": 3,
                    "combat": 5,
                    "leadership": 4,
                    "awakable": true
                },
                {
                    "id": "robb",
                    "name": "Robb Stark",
                    "preferredGift": GiftType.Weapon,
                    "aptitude": 0,
                    "finance": 0,
                    "command": 5,
                    "combat": 4,
                    "leadership": 2,
                    "awakable": true
                },
                {
                    "id": "arya",
                    "name": "Arya Stark",
                    "preferredGift": GiftType.Weapon,
                    "aptitude": 0,
                    "finance": 0,
                    "command": 5,
                    "combat": 5,
                    "leadership": 0,
                    "awakable": true
                },
                {
                    "id": "mengo",
                    "name": "Mengo",
                    "preferredGift": GiftType.Weapon,
                    "aptitude": 0,
                    "finance": 0,
                    "command": 4,
                    "combat": 3,
                    "leadership": 1,
                    "awakable": true
                },
                {
                    "id": "chris",
                    "name": "Chris",
                    "preferredGift": GiftType.Weapon,
                    "aptitude": 3,
                    "finance": 0,
                    "command": 2,
                    "combat": 0,
                    "leadership": 0,
                    "awakable": true
                },
                {
                    "id": "julien",
                    "name": "Julien",
                    "preferredGift": GiftType.Drink,
                    "aptitude": 0,
                    "finance": 3,
                    "command": 3,
                    "combat": 4,
                    "leadership": 0,
                    "awakable": true
                },
                {
                    "id": "kravras",
                    "name": "Kravras",
                    "preferredGift": GiftType.Drink,
                    "aptitude": 4,
                    "finance": 2,
                    "command": 0,
                    "combat": 0,
                    "leadership": 0,
                    "awakable": true
                },
                {
                    "id": "sabrina",
                    "name": "Sabrina",
                    "preferredGift": GiftType.Jewelry,
                    "aptitude": 0,
                    "finance": 0,
                    "command": 3,
                    "combat": 3,
                    "leadership": 4,
                    "awakable": true
                },
                {
                    "id": "obiehn",
                    "name": "O'Biehn",
                    "preferredGift": GiftType.Food,
                    "aptitude": 0,
                    "finance": 3,
                    "command": 0,
                    "combat": 2,
                    "leadership": 0,
                    "awakable": true
                },
                {
                    "id": "annie",
                    "name": "Annie",
                    "preferredGift": GiftType.Book,
                    "aptitude": 3,
                    "finance": 4,
                    "command": 0,
                    "combat": 3,
                    "leadership": 0,
                    "awakable": true
                },
                {
                    "id": "egbert",
                    "name": "Egbert",
                    "preferredGift": GiftType.Dessert,
                    "aptitude": 2,
                    "finance": 0,
                    "command": 0,
                    "combat": 0,
                    "leadership": 3,
                    "awakable": true
                },
                {
                    "id": "hector",
                    "name": "Hector",
                    "preferredGift": GiftType.Weapon,
                    "aptitude": 3,
                    "finance": 4,
                    "command": 0,
                    "combat": 0,
                    "leadership": 4,
                    "awakable": true
                },
                {
                    "id": "enzo",
                    "name": "Enzo",
                    "preferredGift": GiftType.Book,
                    "aptitude": 0,
                    "finance": 3,
                    "command": 3,
                    "combat": 4,
                    "leadership": 0,
                    "awakable": true
                },
                {
                    "id": "simonblackmyre",
                    "name": "Simon Blackmyre",
                    "preferredGift": GiftType.Food,
                    "aptitude": 4,
                    "finance": 4,
                    "command": 0,
                    "combat": 0,
                    "leadership": 2,
                    "awakable": true
                },
                {
                    "id": "latzkarin",
                    "name": "Latz Karin",
                    "preferredGift": GiftType.Book,
                    "aptitude": 3,
                    "finance": 3,
                    "command": 0,
                    "combat": 4,
                    "leadership": 0,
                    "awakable": true
                },
                {
                    "id": "uma",
                    "name": "Uma",
                    "preferredGift": GiftType.Dessert,
                    "aptitude": 4,
                    "finance": 0,
                    "command": 0,
                    "combat": 3,
                    "leadership": 0,
                    "awakable": true
                },
                {
                    "id": "drake",
                    "name": "Drake",
                    "preferredGift": GiftType.Drink,
                    "aptitude": 3,
                    "finance": 0,
                    "command": 3,
                    "combat": 4,
                    "leadership": 0,
                    "awakable": true
                },
                {
                    "id": "rhea",
                    "name": "Rhea",
                    "preferredGift": GiftType.Jewelry,
                    "aptitude": 0,
                    "finance": 3,
                    "command": 0,
                    "combat": 4,
                    "leadership": 3,
                    "awakable": true
                },
                {
                    "id": "winton",
                    "name": "Winton",
                    "preferredGift": GiftType.Drink,
                    "aptitude": 0,
                    "finance": 0,
                    "command": 3,
                    "combat": 4,
                    "leadership": 0,
                    "awakable": true
                },
                {
                    "id": "patelo",
                    "name": "Patelo",
                    "preferredGift": GiftType.Weapon,
                    "aptitude": 0,
                    "finance": 0,
                    "command": 0,
                    "combat": 5,
                    "leadership": 3,
                    "awakable": true
                },
                {
                    "id": "lareo",
                    "name": "Lareo",
                    "preferredGift": GiftType.Food,
                    "aptitude": 0,
                    "finance": 3,
                    "command": 0,
                    "combat": 4,
                    "leadership": 0,
                    "awakable": true
                },
                {
                    "id": "salma",
                    "name": "Salma",
                    "preferredGift": GiftType.Food,
                    "aptitude": 4,
                    "finance": 0,
                    "command": 0,
                    "combat": 4,
                    "leadership": 0,
                    "awakable": true
                },
                {
                    "id": "darius",
                    "name": "Darius",
                    "preferredGift": GiftType.Jewelry,
                    "aptitude": 4,
                    "finance": 0,
                    "command": 0,
                    "combat": 5,
                    "leadership": 0,
                    "awakable": true
                },
                {
                    "id": "daena",
                    "name": "Daena",
                    "preferredGift": GiftType.Food,
                    "aptitude": 0,
                    "finance": 4,
                    "command": 0,
                    "combat": 5,
                    "leadership": 0,
                    "awakable": true
                },
                {
                    "id": "daeron",
                    "name": "Daeron",
                    "preferredGift": GiftType.Weapon,
                    "aptitude": 0,
                    "finance": 4,
                    "command": 0,
                    "combat": 5,
                    "leadership": 0,
                    "awakable": true
                },
                {
                    "id": "senelle",
                    "name": "Senelle",
                    "preferredGift": GiftType.Dessert,
                    "aptitude": 0,
                    "finance": 4,
                    "command": 0,
                    "combat": 5,
                    "leadership": 0,
                    "awakable": true
                },
                {
                    "id": "zhea",
                    "name": "Zhea",
                    "preferredGift": GiftType.Jewelry,
                    "aptitude": 0,
                    "finance": 0,
                    "command": 3,
                    "combat": 3,
                    "leadership": 4,
                    "awakable": true
                },
                {
                    "id": "ayrmidon",
                    "name": "Ayrmidon",
                    "preferredGift": GiftType.Drink,
                    "aptitude": 0,
                    "finance": 0,
                    "command": 5,
                    "combat": 5,
                    "leadership": 4,
                    "awakable": true
                },
                {
                    "id": "sararer",
                    "name": "Sararer",
                    "preferredGift": GiftType.Book,
                    "aptitude": 5,
                    "finance": 5,
                    "command": 0,
                    "combat": 4,
                    "leadership": 0,
                    "awakable": true
                },
                {
                    "id": "vorian",
                    "name": "Vorian",
                    "preferredGift": GiftType.Weapon,
                    "aptitude": 5,
                    "finance": 5,
                    "command": 0,
                    "combat": 4,
                    "leadership": 0,
                    "awakable": true
                },
                {
                    "id": "cassana",
                    "name": "Cassana",
                    "preferredGift": GiftType.Dessert,
                    "aptitude": 5,
                    "finance": 5,
                    "command": 0,
                    "combat": 4,
                    "leadership": 0,
                    "awakable": true
                }
            ];
    }
    public Get(id: string): Commander {
        return this.commanders.filter(c => c.id == id)[0];
    }
}
