export declare abstract class PassportSerializer {
    abstract serializeUser(user: any, done: Function): any;
    abstract deserializeUser(payload: any, done: Function): any;
    constructor();
    getPassportInstance(): any;
}
