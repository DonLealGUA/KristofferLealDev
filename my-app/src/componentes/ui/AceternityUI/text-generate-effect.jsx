"use client";
import { useEffect } from "react";
import { motion, useAnimate } from "framer-motion";
import { cn } from "/src/lib/utils.js";

export const TextGenerateEffect = ({
  words,
  className,
  filter = true,
  duration = 0.5,
  fontSize = "2xl", // default size
}) => {
  const [scope, animate] = useAnimate();
  const wordsArray = words.split(" ");

  useEffect(() => {
    animate(
      scope.current.querySelectorAll("span"),
      { opacity: 1, filter: filter ? "blur(0px)" : "none" },
      {
        duration,
        delay: (i) => i * 0.2,
      }
    );
  }, [animate, duration, filter]);

  return (
    <div className={cn("font-bold", className)}>
      <motion.div
        ref={scope}
        className={`mt-4 leading-snug tracking-wide text-${fontSize}`} // Apply font size here
      >
        {wordsArray.map((word, idx) => (
          <motion.span
            key={idx}
            className="opacity-0 inline-block mr-1 text-white dark:text-white"
            style={{ filter: filter ? "blur(10px)" : "none" }}
          >
            {word}{" "}
          </motion.span>
        ))}
      </motion.div>
    </div>
  );
};
