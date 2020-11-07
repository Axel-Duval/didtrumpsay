import { MongoClient } from 'mongodb';
import { Quote } from '@/models';

export async function initDatabase() {
    const databaseURL = process.env.DATABASE_URL;

    if (databaseURL === undefined) {
        console.error("You must specify a database url in env variable DATABASE_URL");
        process.exit(1);
    }

    const client = new MongoClient(databaseURL, { useNewUrlParser: true, useUnifiedTopology: true });

    try
    {
        await client.connect();
        return {
            client,
            quotes: () => client.db().collection<Quote>('questions'),
        };
    }
    catch(err)
    {
        console.error(err);
        console.error('Unable to connect to database.');
        process.exit(1);
    }
}