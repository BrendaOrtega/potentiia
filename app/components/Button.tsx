import { cn } from "~/utils/cn";

export const Button = ({
  className,
  label,
  variant,
}: {
  className?: string;
  label: string;
  variant?: string;
}) => {
  return (
    <button
      className={cn(
        "px-4 text-white rounded-full bg-mexicanpink h-12 family-oswald",
        {
          "border border-mexicanpink bg-white text-mexicanpink":
            variant === "outline",
          "bg-white text-mexicanpink": variant === "white",
        }
      )}
    >
      {label}
    </button>
  );
};
