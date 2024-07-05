import * as React from "react";
import { cn } from "@/lib/utils";

const Input = React.forwardRef(({ className, ...props }, ref) => (
  <input
    ref={ref}
    className={cn(
      "block w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2",
      className
    )}
    {...props}
  />
));

Input.displayName = "Input";

export { Input };