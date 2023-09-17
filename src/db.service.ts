import { injectable } from "inversify"
import mongoose from "mongoose"

@injectable()
export class DBService {
    async connect(){
        await mongoose.connect(process.env.DB_URI as string).catch(
            console.error
          )
          console.log('connected to db')
    }
}