import { CalculationWeights } from "./CalculationWeights";
import { PlayerCommander } from "./PlayerCommander";
import { Commanders } from './Commanders';
import { CommanderLevelCostCalculator } from './CommanderLevelCostCalculator';
export class CommanderLevelValueCalculator {
    private _commanders: Commanders;
    private _levelCostCalculator: CommanderLevelCostCalculator;
    public constructor() {
        this._commanders = new Commanders();
        this._levelCostCalculator = new CommanderLevelCostCalculator();
    }
    public GetValueForNextLevel(playerCommander: PlayerCommander, calculationWeights: CalculationWeights): number {
        if ((playerCommander.currentLevel == 80)) {
            return 0;
        }
        let commander = this._commanders.Get(playerCommander.id);
        let pointsToLevel = this._levelCostCalculator.PointsToLevel(playerCommander.currentLevel, (playerCommander.currentLevel + 1));
        const aptitude = calculationWeights.aptitude * (commander.aptitude + (commander.aptitude > 0 && this.IsStarredAwakening(commander.id, playerCommander.awakeningLevel) ? 1 : 0));
        const finance = calculationWeights.finance * (commander.finance + (commander.finance > 0 && this.IsStarredAwakening(commander.id, playerCommander.awakeningLevel) ? 1 : 0));
        const command = calculationWeights.command * (commander.command + (commander.command > 0 && this.IsStarredAwakening(commander.id, playerCommander.awakeningLevel) ? 1 : 0));
        const combat = calculationWeights.combat * (commander.combat + (commander.combat > 0 && this.IsStarredAwakening(commander.id, playerCommander.awakeningLevel) ? 1 : 0));
        const leadership = calculationWeights.leadership * (commander.leadership + (commander.leadership > 0 && this.IsStarredAwakening(commander.id, playerCommander.awakeningLevel) ? 1 : 0));
        return Math.round((aptitude + finance + command + combat + leadership) / pointsToLevel * 1000);
    }

    private IsStarredAwakening(commanderId: string, awakeningLevel: number): boolean {
        if(!awakeningLevel){
            return false;
        }
        
        if (awakeningLevel < 2) {
            return false;
        }
        
        return true;
    }
}
