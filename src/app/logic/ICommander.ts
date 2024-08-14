import { GiftType } from './GiftType';
export interface ICommander {
    id?: string | undefined;
    name?: string | undefined;
    preferredGift?: GiftType;
    aptitude?: number;
    finance?: number;
    command?: number;
    combat?: number;
    leadership?: number;
    awakable? : boolean;
}
