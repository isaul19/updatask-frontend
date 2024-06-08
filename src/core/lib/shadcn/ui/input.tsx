import * as React from "react";

import { cn } from "@lib/shadcn/utils";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  errorMessage?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(({ className, errorMessage, type, ...props }, ref) => {
  return (
    <>
      <input
        type={type}
        className={cn(
          "flex h-10 w-full rounded-md border border-slate-200 bg-white px-3 py-6 text-base ring-offset-white file:border-0 file:bg-transparent file:text-base file:font-medium placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-800 dark:bg-slate-950 dark:ring-offset-slate-950 dark:placeholder:text-slate-400 dark:focus-visible:ring-slate-300 font-normal mt-2.5",
          className,
        )}
        ref={ref}
        {...props}
      />
      <div>{errorMessage && <p className="bg-red-400 py-2 text-white text-center mt-3 text-sm">{errorMessage}</p>}</div>
    </>
  );
});
Input.displayName = "Input";

export { Input };
