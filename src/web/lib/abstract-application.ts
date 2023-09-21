import { Container, interfaces } from 'inversify'

export enum MorganMode {
    DEV = 'dev', 
    TINY = 'tiny'
    // Add more if you want
}

export interface IAbstractApplicationOptions {
    containerOptions: interfaces.ContainerOptions
    morgan: {
        mode: MorganMode
    }
}
export abstract class Application {

    protected readonly container: Container
    
    constructor(options: IAbstractApplicationOptions){
        this.container = new Container(options.containerOptions)
        this.configureServices(this.container)
    
        this.setup(options)
    }
    abstract setup(options: IAbstractApplicationOptions): Promise<void> | void
    abstract configureServices(container: Container): void
}