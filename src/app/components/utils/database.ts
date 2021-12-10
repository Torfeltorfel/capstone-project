import { MongoClient } from 'mongodb';
import type { Collection } from 'mongodb';

let client: MongoClient;

export async function connectDatabase(url: string): Promise<void> {
  client = new MongoClient(url);
  await client.connect();
}

export function getSessions(): Collection<Document> {
  return client.db().collection('SessionsCollection');
}
