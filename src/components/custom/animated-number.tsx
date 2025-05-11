import { useEffect, useState } from "react";
import { animate } from "motion/react";

interface AnimatedNumberProps {
  value: string;
}

export function AnimatedNumber({ value }: AnimatedNumberProps) {
  const [displayValue, setDisplayValue] = useState(value);

  useEffect(() => {
    const cleanValue = value.replace(/[^0-9.]/g, "");
    const from = parseFloat(displayValue.replace(/[^0-9.]/g, "")) || 0;
    const to = parseFloat(cleanValue) || 0;

    const controls = animate(from, to, {
      duration: 1,
      onUpdate: (value) => {
        // Preserve the formatting (commas, decimal places) from the original value
        const formatted = value.toFixed(2);
        let result = "";
        let valueIndex = 0;

        for (let i = 0; i < value.toString().length + 5; i++) {
          if (
            value.toString()[valueIndex] === "." ||
            isNaN(parseInt(value.toString()[valueIndex]))
          ) {
            if (valueIndex < value.toString().length) {
              result += value.toString()[valueIndex];
            }
            valueIndex++;
          } else if (value.toString()[valueIndex]) {
            result += formatted[valueIndex];
            valueIndex++;
          }
        }

        // Add back any non-numeric formatting from the original value
        const formattedValue = new Intl.NumberFormat("en-US", {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        }).format(value);

        setDisplayValue(formattedValue);
      },
    });

    return () => controls.stop();
  }, [value]);

  return <>{displayValue}</>;
}
