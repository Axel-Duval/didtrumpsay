import { Collection, ObjectId } from "mongodb";
import { Quote } from "@/models";

export class QuotesService {


    constructor(private quotes: () => Collection<Quote>) {}

    getRandomQuotes(count: number): Promise<Quote[]> {
       return this.quotes().aggregate([{ $sample: { size: count } }]).toArray()
    }

    async addCorrectAnswer(_id: string): Promise<string | null> {
        const result = await this.quotes().updateOne({ _id: new ObjectId(_id) }, { $inc: { "answers.correct": 1 }});
        if (result.result.ok === 1) {
            return _id;
        } else {
            return null;
        }
    }

    async addIncorrectAnswer(_id: string): Promise<string | null> {
        const result = await this.quotes().updateOne({ _id: new ObjectId(_id) }, { $inc: { "answers.incorrect": 1 }});
        if (result.result.ok === 1) {
            return _id;
        } else {
            return null;
        }
    }

}

export function initServices(db: { quotes: () => Collection<Quote> }): [QuotesService] {
    return [new QuotesService(db.quotes)];
}