import express from "express"
import { InversifyExpressServer } from "inversify-express-utils"
import { DBContext } from "@data/db.context"
import { Application } from "@web/lib/abstract-application"
import { Container } from "inversify"
import { SubscribersRepository } from "@data/subscribers.repository"
import { SubscribersService } from "@logic/services/subscribers.service"

import '@web/controllers/subscribers.controller'
import { HttpException } from "./exceptions/http-exception"
import { NotFoundException, ValidationException } from "@logic/exceptions"
import { BaseHttpResponse } from "./lib/base-http-response"
import morgan from "morgan"
export class App extends Application{
    configureServices(container: Container): void {
      container.bind(DBContext).toSelf()
      container.bind(SubscribersRepository).toSelf()
      container.bind(SubscribersService).toSelf()
    }
    async setup(){
        const _db = this.container.get(DBContext)
        await _db.connect()
        const server = new InversifyExpressServer(this.container)
        server.setErrorConfig((app) =>{
          //@ts-ignore
          app.use((err, req, res,next) =>{
            if(err instanceof ValidationException) {
              const response = BaseHttpResponse.failed(err.message, 419)
              return res.status(response.statusCode).json(response)
            }
            if(err instanceof NotFoundException) {
              const response = BaseHttpResponse.failed(err.message, 404)
              return res.status(response.statusCode).json(response)
            }
            if(err instanceof Error) {
              const response = BaseHttpResponse.failed(err.message, 500)
              return res.status(response.statusCode).json(response)
            }
            next()
          })
        })

        server.setConfig((app) =>{
          app.use(express.json())
          app.use(morgan('dev'))
        })
        const app = server.build()
        app.listen(process.env.PORT, () => {
          console.log(`server is starting up at port http://localhost:${process.env.PORT}`)
        })
    }
}