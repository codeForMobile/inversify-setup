export class NotFoundException extends Error{
    constructor() {
        super('Missing subcriber')
    }
}