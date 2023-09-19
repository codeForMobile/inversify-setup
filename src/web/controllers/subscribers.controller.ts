import { Request, Response} from 'express'
import { controller, httpDelete, httpGet, httpPatch, httpPost } from 'inversify-express-utils'
import { SubscribersService } from '@logic/subscribers.service';

@controller('/subscribers')
export class SubscribersController{
    constructor (private readonly _service: SubscribersService){}

    @httpGet('/')
    async index(_req: Request, res: Response){
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

    @httpPatch('/:id')
    async update (req: Request, res: Response) {
        const updatedSubscriber = await this._service.updateOne(req.params.id, req.body)
            res.json({
                data: {
                    subcriber: updatedSubscriber
                }
            })
    }

    @httpDelete('/:id')
    async destory (req: Request, res: Response) {
        await this._service.deleteOne(req.params.id)
        res.status(204)
    }
}