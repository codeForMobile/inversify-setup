import './paths'
import 'dotenv/config'
import 'reflect-metadata'
import { App } from '@web/application'

console.clear()

export async function bootstarp() {
  new App({
    defaultScope: 'Singleton'
  })
}

bootstarp()