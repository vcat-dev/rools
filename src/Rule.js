import arrify from 'arrify';

export class Rule {
    constructor({
        name, when, then, priority = 0, final = false, extend, activationGroup,
    }) {
        this.name = name;
        this.when = arrify(when);
        this.then = then;
        this.priority = priority;
        this.final = final;
        this.extend = arrify(extend);
        this.activationGroup = activationGroup;
    }
}
