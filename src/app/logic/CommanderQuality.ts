import { SafeStyle } from '@angular/platform-browser';
export class CommanderQuality {
  Title: string;
  MaxLevel: number;
  Color: SafeStyle;
  constructor(title: string, maxLevel: number, color: SafeStyle) {
    this.Title = title;
    this.MaxLevel = maxLevel;
    this.Color = color;
  }
}
