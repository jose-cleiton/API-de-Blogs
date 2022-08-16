"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const MessageStandard_1 = __importDefault(require("./MessageStandard"));
class EmailMessage extends MessageStandard_1.default {
    static setMessage() {
        this.errNumber = '400';
        this.msgName = '"email"';
        this.MUST_BE_A_VALID_EMAIL = 'must be a valid email';
    }
    static createMessage() {
        return {
            'any.required': `${this.errNumber}|${this.msgName} ${this.IS_REQUIRED}`,
            'string.email': `${this.errNumber}|${this.msgName} ${this.MUST_BE_A_VALID_EMAIL}`
        };
    }
    static get getMessage() {
        this.setMessage();
        return this.createMessage();
    }
}
module.exports = EmailMessage;
