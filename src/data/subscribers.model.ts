import mongoose from 'mongoose'

export interface ISubscriber {
  _id: string, 
  channel: string,
  name: string,
  createdAt: Date
}

export const subscriberModel = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  channel: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    required: true,
    default: Date.now
  }
})
export type Subscriber = typeof subscriberModel

//module.exports = mongoose.model('Subscriber', subscriberSchema)