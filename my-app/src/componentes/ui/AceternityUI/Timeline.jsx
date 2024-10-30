"use client";
import { useScroll, useTransform, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

export const Timeline = ({ data }) => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
      console.log("Calculated Height:", rect.height); // Debugging
    }
  }, [ref, data]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0%", "end 100%"],
  });

  // Transformations for height
  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);

  return (
    <div className="w-full font-sans md:px-10">
      <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10">
        <h2 className="text-lg md:text-4xl mb-4 max-w-4xl text-neutral-300">
          My Journey as a Software Developer
        </h2>
        <p className="text-neutral-500 text-sm md:text-base max-w-full">
          Below is a timeline showcasing my journey and growth as a developer, highlighting significant university projects and work experience.
        </p>
      </div>
      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {data.map((item, index) => (
          <div key={index} className="flex flex-col md:flex-row justify-start pt-10 md:pt-40 md:gap-10">
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <div className="h-10 absolute left-3 w-10 rounded-full bg-black flex items-center justify-center">
                <div className="h-4 w-4 rounded-full bg-neutral-800 border border-neutral-700 p-2" />
              </div>
              <h3 className="hidden md:block text-xl md:pl-20 md:text-5xl font-bold text-neutral-500">
                {item.title}
              </h3>
            </div>

            <div className="relative pl-20 pr-4 md:pl-4 w-full">
              <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-neutral-500">
                {item.title}
              </h3>
              <div className="text-neutral-500">{item.content}</div>
            </div>
          </div>
        ))}

        {/* Background gradient effect */}
        <div
          style={{ height: height + "px" }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
        >
          {/* Scrolling vibrant gradient effect */}
          <motion.div
            style={{
              height: heightTransform,
              opacity: 1, // Ensure visibility for testing
              zIndex: 10,
            }}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-b from-purple-500 via-blue-500 to-transparent rounded-full"
          />
        </div>
      </div>

      {/* Responsive Adjustments */}
      <style jsx>{`
    @media (max-width: 425px) {
      .max-w-7xl {
        padding-left: 1rem; /* Adjust padding for smaller screens */
        padding-right: 1rem;
      }
      .text-lg {
        font-size: 1.5rem; /* Smaller font size for titles */
      }
      .text-sm {
        font-size: 0.875rem; /* Smaller font size for paragraph */
      }
      .pl-20 {
        padding-left: 4rem; /* Further reduce left padding to move the line more to the left */
      }
      .pr-4 {
        padding-right: 2rem; /* Reduce right padding */
      }
      .h-4 {
        margin-left: -1.8rem; /* Move more to the left (negative value) */
      }
    }
`}</style>
    </div>
  );
};
