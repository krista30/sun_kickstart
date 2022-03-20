export class CustomError {
    message!: string;
    status!: number;
    additionalInfo!: any;

    constructor(message: string, status: number = 500, additionalInfoInfo: any = {}) {
        this.message = message;
        this.status = status;
        this.additionalInfo = additionalInfoInfo;
    }
}