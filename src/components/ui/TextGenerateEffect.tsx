import { useEffect } from "react";
import { motion, stagger, useAnimate } from "motion/react";
import { cn } from "../../lib/cn";
import { useTranslation } from "react-i18next";
import { useTheme } from "../../contexts/ThemeProvider";

export const TextGenerateEffect = ({
  words,
  className,
  filter = true,
  duration = 0.5,
}: {
  words: string;
  className?: string;
  filter?: boolean;
  duration?: number;
}) => {
  const [scope, animate] = useAnimate();
  const wordsArray = words.split(" ");

  const { i18n } = useTranslation(); 
  const { theme } = useTheme();    

  useEffect(() => {
    animate(
      "span",
      {
        opacity: 1,
        filter: filter ? "blur(0px)" : "none",
      },
      {
        duration: duration,
        delay: stagger(0.2),
      }
    );
  }, [scope.current, i18n, theme]);

  const renderWords = () => (
    <motion.div ref={scope}>
      {wordsArray.map((word, idx) => (
        <motion.span
          key={word + idx}
          className={`${idx > 3 ? "text-purple" : "text-black opacity-0 dark:text-white"} opacity-0`}
          style={{
            filter: filter ? "blur(10px)" : "none",
          }}
        >
          {word}{" "}
        </motion.span>
      ))}
    </motion.div>
  );

  return (
    <div className={cn("font-bold", className)}>
      <div className="my-4">
        <div className="leading-snug tracking-wide text-black dark:text-white">
          {renderWords()}
        </div>
      </div>
    </div>
  );
};
