import { Container } from 'inversify'
import { DBService } from './db.service'

export const container = new Container({
    defaultScope: 'Singleton'
})

container.bind(DBService).toSelf()