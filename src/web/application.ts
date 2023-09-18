import express from "express"
import { InversifyExpressServer } from "inversify-express-utils"
import { container } from "../di-container"
import { DBService } from "../data/db.service"

export class App {
    async setup(){
        const _db = container.get(DBService)
        await _db.connect()
        const server = new InversifyExpressServer(container)
        server.setConfig((app) =>{
          app.use(express.json())
        })
        const app = server.build()
        app.listen(process.env.PORT, () => {
          console.log(`server is starting up at port http://localhost:${process.env.PORT}`)
        })
        return {}
    }
}