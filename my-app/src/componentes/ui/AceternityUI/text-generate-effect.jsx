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

  // Split words by spaces and newlines
  const wordsArray = words.split(/(\s+)/); 

  // Create an array of invisible placeholders
  const invisiblePlaceholders = Array(16).fill('\u200B'); 

  const fullArray = [...wordsArray, ...invisiblePlaceholders]; 

  useEffect(() => {
    animate(
      scope.current.querySelectorAll("span:not(.space)"),
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
        {fullArray.map((word, idx) => (
          <motion.span
            key={idx}
            className={`opacity-0 inline-block ${word.trim() === "" ? 'space' : ''}`} // Add class for spaces
            style={{
              filter: word.trim() === "" || !filter ? "none" : "blur(10px)",
              marginRight: word.trim() === "" ? "0" : "0.5rem", // Adjust spacing for non-space words
            }}
          >
            {word} {/* Render the word with space intact */}
          </motion.span>
        ))}
      </motion.div>
    </div>
  );
};
