import * as React from "react";
import { cn } from "@/lib/utils";

const Card = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "bg-white shadow rounded-lg overflow-hidden",
        className
      )}
      {...props}
    />
  );
});

Card.displayName = "Card";

const CardHeader = ({ className, ...props }) => (
  <div className={cn("p-4 border-b", className)} {...props} />
);

const CardTitle = ({ className, ...props }) => (
  <h2 className={cn("text-lg font-semibold", className)} {...props} />
);

const CardContent = ({ className, ...props }) => (
  <div className={cn("p-4", className)} {...props} />
);

const CardFooter = ({ className, ...props }) => (
  <div className={cn("p-4 border-t", className)} {...props} />
);

export { Card, CardHeader, CardTitle, CardContent, CardFooter };