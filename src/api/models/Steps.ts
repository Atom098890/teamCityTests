import {Step} from "./Step";

export class Steps {
    private count: number;
    private step: object;

    constructor() {
        this.step = new Step().getStep;
    }

    get getSteps(): object {
        return {
            steps: this.step
        }
    }
}