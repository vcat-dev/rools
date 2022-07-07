export class RuleError extends Error {
    constructor(message, error) {
        super(message);
        this.cause = error;
    }
}
