import { PlayerCommander } from './PlayerCommander';
import { CalculationWeights } from './CalculationWeights';
import { ICalculationRequest } from "./ICalculationRequest";
export class CalculationRequest implements ICalculationRequest {
    commanders?: (PlayerCommander | undefined)[] | undefined;
    weights?: CalculationWeights | undefined;
}
