"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class MessageStandard {
    static createMessage() {
        this.errMessage = {
            'any.required': `${this.errNumber}|${this.msgName} ${this.IS_REQUIRED}`,
            'string.min': `${this.errNumber}|${this.msgName} ${this.IS_REQUIRED}`
        };
        return this.errMessage;
    }
    static get getMessage() {
        return this.errMessage;
    }
}
exports.default = MessageStandard;
MessageStandard.errNumber = 'Numero não implementado';
MessageStandard.msgName = 'Nome não implementado';
MessageStandard.IS_REQUIRED = 'is required';
MessageStandard.errMessage = {};
