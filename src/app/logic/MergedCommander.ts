import { Commander } from "./Commander";
import { GiftType } from "./GiftType";
import { PlayerCommander } from "./PlayerCommander";
export class MergedCommander implements Commander {
  id?: string;
  name?: string;
  preferredGift?: GiftType;
  aptitude?: number;
  finance?: number;
  command?: number;
  combat?: number;
  leadership?: number;
  awakable?: boolean;
  playerCommander?: PlayerCommander;
  cost?: number;
  needsUnlock?: boolean;
  needsUpgrade?: boolean;
  awakeningLevel?: number;
}
