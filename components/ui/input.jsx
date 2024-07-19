import * as React from "react";

import { cn } from "../../lib/utils";

const Input = React.forwardRef(({ className, type, ...props }, ref) => {
  return (
    <input
      type={type}
      className={cn(
        "flex h-10 w-full rounded-md outline-none dark:bg-white px-3 py-2 text-sm disabled:cursor-not-allowed disabled:opacity-50  bg-slate-950  placeholder:text-slate-400  transition-all duration-500 ease-in-out",
        className
      )}
      ref={ref}
      {...props}
    />
  );
});
Input.displayName = "Input";

export { Input };
