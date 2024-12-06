import {CheckedBase} from "./CheckedBase";
import {UncheckedBase} from "./UncheckedBase";

export class Route {
    private checkBase: CheckedBase;
    private uncheckBase: UncheckedBase;

    constructor() {
        this.checkBase = new CheckedBase();
        this.uncheckBase = new UncheckedBase();
    }

    get checked() {
        return this.checkBase;
    }

    get unchecked() {
        return this.uncheckBase;
    }
}