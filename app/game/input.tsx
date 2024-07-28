import {Button, Input} from "@nextui-org/react";
import React, {useState} from "react";
import {isEmptyOrSpaces} from "@/utils/string";
import {Keys} from "@/utils/keyboard";

type KEvent = React.KeyboardEvent<HTMLInputElement>;

export default function GameInput(props: any /* TODO type */) {
    const [guess, setGuess] = useState('');

    const submit = () => {
        const candidate = guess.trim();
        if (isEmptyOrSpaces(candidate)) {
            console.log("EMPTY GUESS"); // TODO animation + message
            return;
        }

        props.submit(candidate);
        setGuess("");
    };

    const onKeyDown = (e: KEvent) => {
        if (e.key === Keys.Enter) submit();
    }

    return (
        // ideas for hints:
        //    - %age of similar letters
        //    - first word
        //    - length in letters
        //    - length in words
        //    - %age of semantic similarity

        <div className="flex w-1/2 h-8 mt-auto">
            <Input
                value={guess}
                onValueChange={setGuess}
                onKeyDown={onKeyDown}
                isClearable
                classNames={{
                    label: "text-black/50 dark:text-white/90",
                    input: [
                        // "bg-transparent",
                        "text-black/90 dark:text-white/90",
                        // "placeholder:text-default-700/50 dark:placeholder:text-white/60",
                        "h-full",
                        "outline-none",
                        "flex-1"
                    ],
                    innerWrapper: [
                        "h-full",
                        "flex px-2",
                        // "bg-transparent",
                    ],
                    inputWrapper: [
                        "h-full",
                        "rounded-l-lg",
                        "shadow-xl",
                        "bg-black/15 dark:bg-white/15",
                        // "bg-default-200/50",
                        // "dark:bg-default/60",
                        "backdrop-blur-xl",
                        "backdrop-saturate-200",
                        // "hover:bg-default-200/70",
                        // "dark:hover:bg-default/70",
                        // "group-data-[focus=true]:bg-default-200/50",
                        // "dark:group-data-[focus=true]:bg-default/60",
                        "!cursor-text",
                    ]
                }}
                type="text" placeholder="Enter your guess"/>
            <Button
                className="aspect-[3] h-full rounded-r-lg bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg"
                onPress={() => submit()}
            >
                Guess
            </Button>
        </div>
    );
}
