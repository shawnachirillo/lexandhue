"use client";

import { motion } from "framer-motion";

type FallingWordProps = {
  words: string[];
};

export default function FallingWord({ words }: FallingWordProps) {
  return (
    <div className="pointer-events-none select-none overflow-hidden">
      {words.map((word, wordIndex) => (
        <div key={word} className="block overflow-hidden leading-none">
          {word.split("").map((letter, letterIndex) => (
            <motion.span
              key={`${word}-${letter}-${letterIndex}`}
              initial={{
                y: "-120%",
                opacity: 0,
                rotate: -3,
              }}
              animate={{
                y: "0%",
                opacity: 1,
                rotate: 0,
              }}
              transition={{
                delay: wordIndex * 0.35 + letterIndex * 0.035,
                duration: 1.2,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="inline-block"
            >
              {letter}
            </motion.span>
          ))}
        </div>
      ))}
    </div>
  );
}