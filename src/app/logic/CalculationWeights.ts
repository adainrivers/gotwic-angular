import { ICalculationWeights } from "./ICalculationWeights";
export class CalculationWeights implements ICalculationWeights {
    aptitude?: number;
    finance?: number;
    command?: number;
    combat?: number;
    leadership?: number;
}
