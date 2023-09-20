import { injectable } from "inversify";
import { DBContext } from "@data/db.context";
import { ISubscriber } from "./subscribers.model";

@injectable()
export class SubscribersRepository {
    constructor(private readonly _dbContext: DBContext){}

    async all() {
        return this._dbContext.subscriber.find({})
    }

    async findOne(id: string) {
        return this._dbContext.subscriber.findById(id)
    }

    async create(entity: Partial<ISubscriber>) {
        return this._dbContext.subscriber.create(entity)
    }

    async updateOne(subscriber: any, payload: any) {
        subscriber.name = payload.name
        subscriber.subscribedToChannel = payload.subscribedToChannel
        return subscriber.save()
    }

    async deleteOne(id:string){
        return this._dbContext.subscriber.deleteOne({_id: id})
    }
}
