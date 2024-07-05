import * as React from "react";
import { Dialog as RadixDialog, DialogContent as RadixDialogContent, DialogOverlay, DialogTitle as RadixDialogTitle } from "@radix-ui/react-dialog";
import { cn } from "@/lib/utils";

const Dialog = ({ children, ...props }) => (
  <RadixDialog {...props}>
    <DialogOverlay className="fixed inset-0 bg-black/50" />
    {children}
  </RadixDialog>
);

const DialogContent = React.forwardRef(({ className, ...props }, ref) => (
  <RadixDialogContent
    ref={ref}
    className={cn(
      "fixed inset-0 m-auto bg-white rounded-lg shadow-lg p-6 max-w-md w-full",
      className
    )}
    {...props}
  />
));

DialogContent.displayName = "DialogContent";

const DialogHeader = ({ className, ...props }) => (
  <div className={cn("mb-4", className)} {...props} />
);

const DialogTitle = ({ className, ...props }) => (
  <RadixDialogTitle className={cn("text-lg font-semibold", className)} {...props} />
);

const DialogTrigger = ({ children, ...props }) => (
  <RadixDialog.Trigger {...props}>{children}</RadixDialog.Trigger>
);

export { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger };