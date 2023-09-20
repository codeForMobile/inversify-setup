import { injectable } from "inversify"
import mongoose from "mongoose"
import { ISubscriber, subscriberModel } from "@data/subscribers.model"

@injectable()
export class DBContext {
    private _db: typeof mongoose
    async connect(){
        this._db = await mongoose.connect(process.env.DB_URI as string)
          console.log('connected to db')
    }

    get subscriber() {
        return this._db.model<ISubscriber>('Subscriber', subscriberModel)
    }
}