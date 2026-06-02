import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

export const flowHoverButtonClasses =
  'relative cursor-pointer z-0 inline-flex items-center justify-center gap-2 overflow-hidden transition-all duration-500 before:absolute before:inset-0 before:-z-10 before:translate-x-[150%] before:translate-y-[150%] before:scale-[2.5] before:rounded-[100%] before:transition-transform before:duration-1000 before:content-[""] hover:scale-105 hover:before:translate-x-[0%] hover:before:translate-y-[0%] active:scale-95 active:before:translate-x-[0%] active:before:translate-y-[0%] active:before:duration-300';

type FlowHoverButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  icon?: ReactNode;
  children?: ReactNode;
};

export function Button({ icon, children, className, ...props }: FlowHoverButtonProps) {
  return (
    <button
      className={cn(
        `${flowHoverButtonClasses} rounded-md border border-zinc-300 bg-zinc-100 px-4 py-2 font-semibold text-zinc-800 before:bg-zinc-800 hover:text-zinc-100`,
        className,
      )}
      {...props}
    >
      {icon}
      <span>{children}</span>
    </button>
  );
}
