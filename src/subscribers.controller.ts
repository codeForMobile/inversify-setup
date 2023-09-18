import { Request, Response} from 'express'
import { controller, httpGet, httpPost } from 'inversify-express-utils'
import { SubscribersService } from './subscribers.service';

@controller('/subscribers')
export class SubscribersController{
    constructor (private readonly _service: SubscribersService){}

    @httpGet('/')
    async index(_req, res){
        const subscribers = await this._service.all()
        res.json({
            data: {
                subscribers
            }
        })
    }

    @httpGet('/:id')
    async show(req: Request, res:Response) {
        const subscriber = await this._service.findOne(req.params.id)
        res.json({
            data: {
                subscriber
            }
        })
    }

    @httpPost('/')
    async store(req:Request, res:Response){
        const subscriber = await this._service.create(req.body)
        res.sendStatus(201).json({
            data: {
                subscriber
            }
        })
    }
}