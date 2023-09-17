import 'dotenv/config'
import 'reflect-metadata'
import './subscribers.controller'
import { App } from './application'

console.clear()

export async function bootstarp() {
  new App().setup()
}

bootstarp()