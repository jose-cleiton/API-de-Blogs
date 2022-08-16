const MessageStandard = require('./MessageStandard');

class PasswordMessage extends MessageStandard {
    static set setMinCharacter(min) {
        this.minCharacter = min;
    }

    static setMessage() {
        this.errNumber = '400';
        this.msgName = '"password"';
    }

    static createMessage() {
        return { ...super.createMessage(),
'string.min': `${this.errNumber}|${this.msgName} ${this
                .characterLengthMessage(this.minCharacter)}` };
    }

    static characterLengthMessage(min) {
        return `length must be at least ${min} characters long`;
    }

    static get getMessage() {
        this.setMessage();
        return this.createMessage();
    }
}
PasswordMessage.minCharacter = 6;
module.exports = PasswordMessage;
