import React from "react";
import Image from "next/image";
import {Button, Input} from "@nextui-org/react";

export default function Game() {
    return (
        <main className="flex flex-col gap-4 items-center p-24 flex-1">
            <Image
                src={"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAIAAADTED8xAAADMElEQVR4nOzVwQnAIBQFQYXff81RUkQCOyDj1YOPnbXWPmeTRef+/3O/OyBjzh3CD95BfqICMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMO0TAAD//2Anhf4QtqobAAAAAElFTkSuQmCC\n"}
                width={0}
                height={0}
                sizes="100vw"
                style={{width: '33vh', height: 'auto'}}
                alt="Uploaded Image"/>
            <div className="flex w-1/2 h-8 mt-auto gap-4">
                <Input
                    isClearable
                    classNames={{
                        label: "text-black/50 dark:text-white/90",
                        input: [
                            // "bg-transparent",
                            "text-black/90 dark:text-white/90",
                            // "placeholder:text-default-700/50 dark:placeholder:text-white/60",
                            "h-full",
                            "outline-none"
                        ],
                        innerWrapper: [
                            "h-full",
                            "flex px-2",
                            // "bg-transparent",
                        ],
                        inputWrapper: [
                            "h-full",
                            "rounded-lg",
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
                    type="email" placeholder="Enter your guess"/>
                <Button
                    className="aspect-[3] h-full rounded-lg bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg">
                    Guess
                </Button>
            </div>
        </main>
    );
}
