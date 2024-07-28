"use client"

import React, {useCallback, useEffect, useState} from "react";
import Image from "next/image";
import GameInput from "@/app/game/input";
import GameGuess from "@/app/game/guess";
import {nPush} from "@/utils/array";
import {Guess} from "@/app/domain/guess";
import {Button} from "@nextui-org/react";

const guessStorageKey = "guesses";
const answer = "cat looking at a fish tank";
const MAX_GUESSES = 5;
let initGuesses = true;

export default function Game() {
    const [guesses, setGuesses] = useState<Guess[]>([]);
    const [score, setScore] = useState(0);
    const [gameOver, setGameOver] = useState<boolean>(false);

    useEffect(() => {
        if (!initGuesses) return;
        initGuesses = false;

        console.log("readLocalStorage", JSON.stringify(guesses));
        const guessesLabels: string[] = JSON.parse(localStorage.getItem(guessStorageKey) || "[]") || [];
        setGuesses(guessesLabels.map(label => new Guess(label, answer)));
        console.log(JSON.stringify(guessesLabels));
        console.log(JSON.stringify(guesses));
    }, [guesses]);

     useEffect(() => {
        console.log("checkGameOver", JSON.stringify(guesses));
        if (guesses.length >= MAX_GUESSES) setGameOver(true);
        setScore(Math.max(...guesses.map(guess => guess.similarity)));
    }, [guesses]);

    useEffect(() => {
        console.log("write local storage", JSON.stringify(guesses));
        localStorage.setItem(guessStorageKey, JSON.stringify(guesses.map(guess => guess.label)));
    }, [guesses]);

    const addGuess = useCallback((guess: string) => {
        console.log("addGuess", JSON.stringify(guesses));
        const newGuesses = nPush(guesses, new Guess(guess, answer));
        setGuesses(newGuesses);
        localStorage.setItem(guessStorageKey, JSON.stringify(newGuesses.map(guess => guess.label)));
    }, [guesses]);

    const resetLocalStorage = () => {
        setGuesses([]);
        localStorage.setItem(guessStorageKey, JSON.stringify([]));
        setGameOver(false);
    };

    return (
        <main className="flex flex-col gap-4 items-center p-24 flex-1">
            <Image
                src={"data:image/png;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAFBQUFBVUFpkZFp9h3iHfbmqm5uquf/I18jXyP////////////////////////////////////////////////8BUFBQUFVQWmRkWn2HeId9uaqbm6q5/8jXyNfI///////////////////////////////////////////////////CABEIBAAEAAMBIgACEQEDEQH/xAAZAAEBAQEBAQAAAAAAAAAAAAAAAQIDBAX/2gAIAQEAAAAA824i69lcvJlpr0dgIhJMySSI0p14+3fDo4b7wqExasFqouaLAACc+HKIIEA6IGvZXl4RpfT2AhEkmZJIjVL04+3XHbjvvCoZg1AtsFiiAAxx4ZIECANgb9dnl4xa9PcCESSSZkhNUvXh7d8NuO+8KhmFsC2oWCwAjlw5EBAQAupRv13Pk5xV9PcBESSSZkhNUvTj7dcduO+8KhmFsFWopCwBjhxygEBAA1Upv2OflxFX19QERJJJmRC0vXh7dcd3hvvCwkhbAtqALAcOPIgEBAAN2Znfnv2Tzccla9myUREkkkzELVdOPt1x3eG+wqGYW5sW2oLAlxw4RAEAgAFumJvd9efJzhXX10472REkkkzELVdOPt1x2477wCTNLBbagJU48OaAIBAANb69fFpiO718vNiGnf0k8z1EJJJJMxC2nXh7dctuG+8AkgsUtrNBy48ZACAIAGunXel8NZy329HHzSGum/Sc/M9eiJJJJMpC1XXh7dctuG+8LCSJbBWgJx8+IAIAgA307apZfBpMHo9PDzQb7PSefE9OyJJGZJJC2nXh7dctuG+8LCTNLBVqHn4YAEAIAu+nXaoar51swdvV5eULro9VeQ9VIjKZkkkLadeHs3y1eOu8AmYW5Ktrlw4wAgBAF3166pFukmPErB09fl5wu2vXqeO79AiJJmSSItV14+vfLTlrvAJklsCzjwwAQAIC9evS2FtpnHLE5W3Eb9fm5C7m/VvPk322IiSZkkiNKdeHt1y05a7wCZRSVy48ggABAa69etIXRM45ZW68ttxG/Tw5w1pv1az5c+vcIkSZkkiNKdePr3x3eOu8AmYmkxx4kAAAQ117bKW0Z5c83XSb0+fNXEa9PDENadvRc+Xn6O4iJJMySI1R14+vfLV467wEZM3hxwAAABrr21bC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"}
                width={0}
                height={0}
                sizes="100vw"
                style={{width: '33vh', height: 'auto'}}
                alt="Uploaded Image"/>

            <div className="w-1/2 flex flex-col gap-4 items-center flex-1">
                {guesses.map((guess, index) =>
                    <GameGuess key={index} guess={guess}/>)}

                <div>
                    {gameOver && <div className="flex flex-row justify-between">
                        <p>Your Score:</p>
                        <p>{score}%</p>
                    </div>}
                    <GameInput submit={addGuess} disabled={gameOver}/>
                </div>
                {/* TODO test only*/}
                <Button onClick={resetLocalStorage}>Reset LS</Button>
            </div>
        </main>
    );
}
