import {Button, Input} from "@nextui-org/react";
import React, {useRef, useState} from "react";
import {isEmptyOrSpaces} from "@/utils/string";
import {Keys} from "@/utils/keyboard";

type KEvent = React.KeyboardEvent<HTMLInputElement>;

export default function GameInput(props: any /* TODO type */) {
    const inputRef: React.MutableRefObject<HTMLInputElement | null> = useRef(null);

    const [guess, setGuess] = useState('');
    const [bounce, setBounce] = useState(false);

    const submit = () => {
        const candidate = guess.trim();
        inputRef.current?.focus();

        if (isEmptyOrSpaces(candidate)) {
            setBounce(true);
            setTimeout(() => setBounce(false), 200)
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

        <div className="flex w-full h-8">
            <Input
                ref={inputRef}
                value={guess}
                onValueChange={setGuess}
                onKeyDown={onKeyDown}
                isClearable
                isDisabled={props.disabled}
                type="text"
                placeholder="Enter your guess"
                onAnimationEnd={() => setBounce(false)}
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
                        "rounded-l",
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
                        bounce ? "animate-wiggle" : "",
                        // bounce ? "transition-transform translate-y-10 duration-250" : "",
                    ]
                }}
            />
            <Button
                className="aspect-[3] h-full rounded-r bg-gradient-to-tr from-pink-500 to-yellow-500 text-white"
                onPress={() => submit()}
                disableRipple={true}
                variant="flat"
            >
                Guess
            </Button>
        </div>
    );
}
