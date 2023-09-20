import { injectable } from "inversify";
import { SubscribersRepository } from "@data/subscribers.repository";
import { CreateSubscriberDto } from "./dtos";
import { SubscriberDto } from "./dtos/subscribers/subscriber.dto";

@injectable()
export class SubscribersService {
    constructor(private readonly _subscribersRepo: SubscribersRepository){}

    async all() {
       return this._subscribersRepo.all()
    } 

    async findOne(id: string) {
        return this._subscribersRepo.findOne(id)
    }

    async create(createSubscriberDto: CreateSubscriberDto) {
        const createdSubscriber = await this._subscribersRepo.create(createSubscriberDto)
        return SubscriberDto.from(createdSubscriber)
    }

    async updateOne(id: string, payload: any) {
        const subscriber = await this.findOne(id)
        return this._subscribersRepo.updateOne(subscriber, payload)
    }

    async deleteOne(id:string) {
        return this._subscribersRepo.deleteOne(id)        
    }
}