import * as React from "react";
import { cn } from "@/lib/utils";

const Textarea = React.forwardRef(({ className, ...props }, ref) => (
  <textarea
    ref={ref}
    className={cn(
      "block w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2",
      className
    )}
    {...props}
  />
));

Textarea.displayName = "Textarea";

export { Textarea };