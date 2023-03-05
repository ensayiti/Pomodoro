import React, { useState, useEffect } from "react";
import Bell from "../assets/ding.mp3"
import Tick from "../assets/tick.mp3"

const Timer = () => {
    const [timeLeft, setTimeLeft] = useState(25 * 60); // 25 minutes
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        let countdownInterval = null;

        if (isActive && timeLeft > 0) {
            countdownInterval = setInterval(() => {
                setTimeLeft(timeLeft - 1);
            }, 1000);
        } else {
            clearInterval(countdownInterval);

            // Play sound when timer reaches 0
            if (timeLeft === 0) {
                const audio = new Audio(Bell);
                audio.play();
            }
        }

        return () => clearInterval(countdownInterval);
    }, [isActive, timeLeft]);

    const minutes = Math.floor(timeLeft / 60)
        .toString()
        .padStart(2, "0");
    const seconds = (timeLeft % 60).toString().padStart(2, "0");

    const startTimer = () => {
        setIsActive(true);
    };

    const stopTimer = () => {
        setIsActive(false);
    };

    const resetTimer = () => {
        setIsActive(false);
        setTimeLeft(25 * 60);
    };

    return (
        <>
            <div className="container mx-auto flex items-center justify-center flex-col h-screen">
                <h1 className="text-6xl my-5">{`${minutes}:${seconds}`}</h1>

                <div className="flex justify-center gap-3">
                    <button className="btn btn-primary" onClick={startTimer}>Start</button>
                    <button className="btn btn-accent" onClick={stopTimer}>Stop</button>
                    <button className="btn btn-secondary" onClick={resetTimer}>Reset</button>
                </div>
            </div>
        </>
    );
};

export default Timer;