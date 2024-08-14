import { PlayerCommander } from './PlayerCommander';
import { CalculationWeights } from './CalculationWeights';
export interface ICalculationRequest {
    commanders?: (PlayerCommander | undefined)[] | undefined;
    weights?: CalculationWeights | undefined;
}
