import { MongoClient } from 'mongodb'

export const MongoHelper = {
  client: MongoClient,

  async connect (uri: string): Promise<void> {
    this.client = await MongoClient.connect(process.env.MONGO_URL as string)
  },

  async disconnect (): Promise<void> {
    await this.client.close()
  }
}
