import { Collection } from "mongodb";
import { Quote } from "@/models";

export class QuotesService {


    constructor(private quotes: () => Collection<Quote>) {}

    getRandomQuotes(count: number): Promise<Quote[]> {
       return this.quotes().aggregate([{ $sample: { size: count } }]).toArray()
    }

}

export function initServices(db: { quotes: () => Collection<Quote> }): [QuotesService] {
    return [new QuotesService(db.quotes)];
}