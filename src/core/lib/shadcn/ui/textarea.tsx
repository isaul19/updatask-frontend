import * as React from "react";

import { cn } from "@lib/shadcn/utils";

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  errorMessage?: string;
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(({ className, errorMessage, ...props }, ref) => {
  return (
    <>
      <textarea
        className={cn(
          "flex min-h-[80px] w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-base ring-offset-white placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary  focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-800 dark:bg-slate-950 dark:ring-offset-slate-950 dark:placeholder:text-slate-400 dark:focus-visible:ring-slate-300 font-normal mt-2.5",
          className,
        )}
        ref={ref}
        {...props}
      />
      <div>{errorMessage && <p className="bg-red-400 py-2 text-white text-center mt-3 text-sm">{errorMessage}</p>}</div>
    </>
  );
});
Textarea.displayName = "Textarea";

export { Textarea };
