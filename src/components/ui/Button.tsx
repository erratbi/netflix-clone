import type { HTMLAttributes } from "react";
import { forwardRef } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";

export const buttonVariants = cva(
  "inline-flex items-center justify-center font-medium rounded text-sm transition-all focus:outline-none active:bg-zinc-600 disabled:opacity-50 disable:pointer-events-none",
  {
    variants: {
      variant: {
        default: "bg-white text-red-600 hover:bg-red-100",
        primary: "bg-red-600 text-white hover:bg-red-700",
        outline: "bg-transparent text-white hover:bg-white/10 border-white border",
        ghost: "bg-transparent text-white hover:bg-white/10",
        link: "bg-transparent underline-offset-4 hover:underline text-white hover:bg-transparent",
      },
      size: {
        default: "h-8 px-4",
        small: "h-9 px-2 rounded-md",
        large: "h-12 text-lg px-8 rounded-md",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

interface ButtonProps extends HTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  type?: "button" | "submit" | "reset" | undefined;
  isLoading?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(({ isLoading, children, className, variant, size, ...props }, ref) => {
  return (
    <button className={cn(buttonVariants({ variant, size, className }))} disabled={isLoading} ref={ref} {...props}>
      {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
      {children}
    </button>
  );
});

Button.displayName = "Button";

export default Button;
