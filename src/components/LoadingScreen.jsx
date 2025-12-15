import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const CYCLES_PER_LETTER = 3;
const SHUFFLE_TIME = 150;
const CHARS = "!@#$%^&*():{};|,.<>/?";

export const LoadingScreen = ({ onComplete }) => {
    const [text, setText] = useState("");
    const fullText = "<Welcome>";

    useEffect(() => {
        let pos = 0;

        const intervalRef = setInterval(() => {
            const scrambled = fullText
                .split("")
                .map((char, index) => {
                    if (pos / CYCLES_PER_LETTER > index) {
                        return char;
                    }

                    const randomCharIndex = Math.floor(Math.random() * CHARS.length);
                    const randomChar = CHARS[randomCharIndex];

                    return randomChar;
                })
                .join("");

            setText(scrambled);
            pos++;

            if (pos >= fullText.length * CYCLES_PER_LETTER) {
                clearInterval(intervalRef);
                setTimeout(() => {
                    onComplete();
                }, 1000);
            }
        }, SHUFFLE_TIME);

        return () => clearInterval(intervalRef);
    }, [onComplete]);

    return (
        <div className="fixed inset-0 z-50 bg-[black] text-gray-100 flex flex-col items-center justify-center">
            <div className="flex flex-col items-center">
                <div className="mb-4 text-4xl font-mono font-bold text-center">
                    <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                    >
                        {text}
                    </motion.span>
                    <span className="animate-blink ml-1"> | </span>
                </div>
                <div className="w-[200px] h-[2px] bg-gray-800 rounded relative overflow-hidden">
                    <div className="w-[40%] h-full bg-blue-500 shadow-[0_0_15_#3b82f6] animate-loading-bar"></div>
                </div>
            </div>
        </div>
    );
};