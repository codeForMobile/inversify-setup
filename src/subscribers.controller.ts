import { controller, httpGet } from 'inversify-express-utils'
import { DBService } from './db.service';

@controller('/subscribers')
export class SubscribersController{
    constructor (private readonly _dbContext: DBService){}

    @httpGet('/')
    async index(_req, res){
        res.json(await this._dbContext.subscriber.find({}))
    }
}