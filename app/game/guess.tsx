import {Progress} from "@nextui-org/react";
import {Guess} from "@/app/domain/guess";

interface GameGuessProps {
    guess: Guess
}

export default function GameGuess(props: GameGuessProps) {
    let value = props.guess.percentage();
    if (value === 0) value = 1;

    return (
        <Progress
            label={props.guess.label}
            value={value}
            showValueLabel={false}
            classNames={{
                base: "w-full animate-fade-right",
                track: "h-2 overflow-clip rounded-sm",
                indicator: ["bg-gradient-to-r from-pink-500 to-yellow-500 rounded-sm",
                    "transition ease-in-out duration-1000"],
                label: "tracking-wider font-medium text-default-600",
                value: "text-foreground/60",
            }}
        />
    )
}
