

export class CreateSubscriberDto {
    constructor(public readonly name: string, public readonly channel:string){}

    static from (body: Partial<CreateSubscriberDto>) {
        if (!body.channel) throw new Error('Missing channel')
        if (!body.name) throw new Error('Missing name')
        return new CreateSubscriberDto(body.name, body.channel)
    }
}