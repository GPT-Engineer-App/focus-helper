import * as React from "react";
import { cn } from "@/lib/utils";

const buttonVariants = {
  outline: "border border-gray-300 text-gray-700",
  destructive: "bg-red-500 text-white",
};

const Button = React.forwardRef(({ variant, className, ...props }, ref) => {
  return (
    <button
      ref={ref}
      className={cn(
        "px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2",
        buttonVariants[variant],
        className
      )}
      {...props}
    />
  );
});

Button.displayName = "Button";

export { Button };