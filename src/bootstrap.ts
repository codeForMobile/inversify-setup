import './paths'
import 'dotenv/config'
import 'reflect-metadata'
import { App } from '@web/application'
import { MorganMode } from '@web/lib/abstract-application'

console.clear()

export async function bootstarp() {
  new App({
    containerOptions: {
      defaultScope: 'Singleton'
    },
    morgan: {
      mode: MorganMode.DEV
    }
    
  })
}

bootstarp()