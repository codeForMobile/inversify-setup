import { BaseMiddleware } from '@web/lib/base-middleware'
import { Request, Response, NextFunction } from 'express'

export class ValidateRequestMiddleware  extends BaseMiddleware{
    constructor(private readonly _DtoClass : { from: any}) {
        super()
    }
    public execute(
        req: Request, 
        _: Response,
        next: NextFunction
    ): void | Promise<void> {
        req.body = this._DtoClass.from(req.body)
        next()
    }

    static with(dto: any){
        return new ValidateRequestMiddleware(dto).execute
    }

}