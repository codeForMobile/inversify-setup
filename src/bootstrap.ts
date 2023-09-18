import 'dotenv/config'
import 'reflect-metadata'
import './web/subscribers.controller'
import { App } from './web/application'

console.clear()

export async function bootstarp() {
  new App().setup()
}

bootstarp()