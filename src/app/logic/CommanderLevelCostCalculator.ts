
export class CommanderLevelCostCalculator {

    public PointsToLevel(from: number, to: number): number {
        let result = 0;
        for (let i = from; (i < to); i++) {
            result = (result + this.LevelsPoints(i));
        }

        return result;
    }

    private LevelsPoints(level: number): number {
        if (level <= 40)
            return ((level * 10) + 40);
        switch (level) {
            case 41: return 460;
            case 42: return 480;
            case 43: return 500;
            case 44: return 520;
            case 45: return 560;
            case 46: return 600; 
            case 47: return 650; 
            case 48: return 700;
            case 49: return 800;
            case 50: return 1000;
            case 51: return 1240;
            case 52: return 1500;
            case 53: return 1800;
            case 54: return 2100;
            case 55: return 2500;
            case 56: return 3000;
            case 57: return 3600; // Not sure
            case 58: return 4200; 
            case 59: return 5000; 
            case 60: return 5000;
            case 61: return 5000;
            case 62: return 5000;
            case 63: return 5000;
            case 64: return 5000;
            case 65: return 5000;
            case 66: return 5000;
            case 67: return 5000;
            case 68: return 5000;
            case 69: return 5000;
            case 70: return 5000;
            case 71: return 5000;
            case 72: return 5000;
            case 73: return 5000;
            case 74: return 5000;
            case 75: return 5000;
            case 76: return 5000;
            case 77: return 5000;
            case 78: return 5000;
            case 79: return 5000;
            case 80: return 50000000000;
        }
        return 0;
    }
}

