import { GiftType } from './GiftType';
import { ICommander } from "./ICommander";
export class Commander implements ICommander {
    readonly id?: string | undefined;
    readonly name?: string | undefined;
    preferredGift?: GiftType;
    readonly aptitude?: number;
    readonly finance?: number;
    readonly command?: number;
    readonly combat?: number;
    readonly leadership?: number;
    readonly awakable?: boolean;
}
