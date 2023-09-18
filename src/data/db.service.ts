import { injectable } from "inversify"
import mongoose from "mongoose"
import { subscriberModel } from "./subscribers.model"

@injectable()
export class DBService {
    private _db: typeof mongoose
    async connect(){
        this._db = await mongoose.connect(process.env.DB_URI as string)
          console.log('connected to db')
    }

    get subscriber() {
        return this._db.model('Subscriber', subscriberModel)
    }
}