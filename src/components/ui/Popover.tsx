"use client";

import * as React from "react";
import { createContext, useContext, useState } from "react";
import { cn } from "../../lib/utils";

interface PopoverContextType {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const PopoverContext = createContext<PopoverContextType | undefined>(undefined);

const usePopover = () => {
  const context = useContext(PopoverContext);
  if (!context) {
    throw new Error("usePopover must be used within a Popover");
  }
  return context;
};

interface PopoverProps {
  children: React.ReactNode;
}

const Popover = ({ children }: PopoverProps) => {
  const [open, setOpen] = useState(false);

  return (
    <PopoverContext.Provider value={{ open, setOpen }}>
      <div className="relative">{children}</div>
    </PopoverContext.Provider>
  );
};

interface PopoverTriggerProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
}

const PopoverTrigger = React.forwardRef<HTMLButtonElement, PopoverTriggerProps>(
  ({ className, children, onClick, ...props }, ref) => {
    const { setOpen } = usePopover();

    return (
      <button
        ref={ref}
        className={cn("", className)}
        onClick={(e) => {
          setOpen(true);
          onClick?.(e);
        }}
        {...props}
      >
        {children}
      </button>
    );
  }
);
PopoverTrigger.displayName = "PopoverTrigger";

interface PopoverContentProps extends React.HTMLAttributes<HTMLDivElement> {
  align?: "start" | "center" | "end";
  sideOffset?: number;
}

const PopoverContent = React.forwardRef<HTMLDivElement, PopoverContentProps>(
  (
    { className, align = "center", sideOffset = 4, children, ...props },
    ref
  ) => {
    const { open, setOpen } = usePopover();

    if (!open) return null;

    return (
      <>
        <div className="fixed inset-0 z-40" onClick={() => setOpen(false)} />
        <div
          ref={ref}
          className={cn(
            "absolute z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95",
            "top-full mt-1",
            align === "start" && "left-0",
            align === "center" && "left-1/2 -translate-x-1/2",
            align === "end" && "right-0",
            className
          )}
          style={{ marginTop: sideOffset }}
          {...props}
        >
          {children}
        </div>
      </>
    );
  }
);
PopoverContent.displayName = "PopoverContent";

export { Popover, PopoverTrigger, PopoverContent };
