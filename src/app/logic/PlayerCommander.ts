import { IPlayerCommander } from "./IPlayerCommander";
export class PlayerCommander implements IPlayerCommander {
    id?: string | undefined;
    currentLevel?: number;
    maxLevel?: number;
    currentExp?: number;
    awakeningLevel?: number;
}
