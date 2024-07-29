import {similarity} from "@/utils/string";

export class Guess {
    public similarity: number;

    constructor(public label: string, answer: string) {
        this.similarity = similarity(label, answer);
    }

    public percentage = () => this.similarity * 99 + 1;
}

