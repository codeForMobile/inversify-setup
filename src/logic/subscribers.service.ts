import { injectable } from "inversify";
import { SubscribersRepository } from "@data/subscribers.repository";
import { CreateSubscriberDto, GetOneSubscriberDto, UpdateSubscriberDto } from "./dtos";
import { SubscriberDto } from "./dtos/subscribers/subscriber.dto";

@injectable()
export class SubscribersService {
    constructor(private readonly _subscribersRepo: SubscribersRepository){}

    async all() {
       const subscribers = await this._subscribersRepo.all()
       return SubscriberDto.fromMany(subscribers)
    } 

    async findOne(getOneSubscriberDto : GetOneSubscriberDto) {
        const foundSubscriber = await this._subscribersRepo.findOne(getOneSubscriberDto.id)
        if (!foundSubscriber) {
            throw new Error('No subscribers were found with given id')
        }
        return SubscriberDto.from(foundSubscriber)
    }

    async create(createSubscriberDto: CreateSubscriberDto) {
        const createdSubscriber = await this._subscribersRepo.create(createSubscriberDto)
        return SubscriberDto.from(createdSubscriber)
    }

    async updateOne(updateSubscriberDto: UpdateSubscriberDto) {
        //TODO: Implement proper mapping
        return this._subscribersRepo.updateOne({
            _id: updateSubscriberDto.id,
            name: updateSubscriberDto.name,
            channel: updateSubscriberDto.channel
        })
    }

    async deleteOne({id}: GetOneSubscriberDto) {
        await this._subscribersRepo.deleteOne(id)        
        return true
    }
}