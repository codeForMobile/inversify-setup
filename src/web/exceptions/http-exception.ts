export class HttpException extends Error {
    constructor(public readonly msg: string, public readonly status: number){
        super(msg)
    }
}