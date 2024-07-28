import {similarity} from "@/utils/string";

export class Guess {
    public similarity: number;

    constructor(public label: string, answer: string) {
        this.similarity = similarity(label, answer);
    }

    public percentage = () => Math.round(this.similarity * 10000) / 100;
}
