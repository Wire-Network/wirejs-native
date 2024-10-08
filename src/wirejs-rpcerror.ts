/**
 * @module RPC-Error
 */
// copyright defined in wirejs/LICENSE.txt

/** Holds detailed error information */
export class RpcError extends Error {
    /** Detailed error information */
    public json: any;
    public details: any;

    constructor(json: any) {
        if (json.error && json.error.details && json.error.details.length && json.error.details[0].message) {
            super(json.error.details[0].message);
            this.details = json.error.details;
        } else if (json.processed && json.processed.except && json.processed.except.message) {
            super(json.processed.except.message);
            this.details = json.processed.except;
        } else if (json.result && json.result.except && json.result.except.message) {
            super(json.result.except.message);
            this.details = json.result.except;
        } else {
            super(json.message);
        }
        Object.setPrototypeOf(this, RpcError.prototype);
        this.json = json;
    }
}
