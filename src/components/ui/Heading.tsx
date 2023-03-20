import type { HTMLAttributes } from "react";
import { forwardRef } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const headingVariants = cva("text-white text-center lg:text-left font-bold", {
  variants: {
    size: {
      default: "text-4xl md:text-5xl lg:text-6xl",
      large: "text-3xl md:text-4xl lg:text-5xl",
      medium: "text-3xl md:text-4xl lg:text-5xl",
      small: "text-xl md:text-3xl lg:text-4xl font-normal",
    },
  },
  defaultVariants: {
    size: "default",
  },
});

interface HeadingProps extends HTMLAttributes<HTMLHeadingElement>, VariantProps<typeof headingVariants> {}

const Heading = forwardRef<HTMLHeadingElement, HeadingProps>(({ children, className, size, ...props }, ref) => {
  const cname = cn(headingVariants({ size, className }));
  if (size === "default")
    return (
      <h3 className={cname} ref={ref} {...props}>
        {children}
      </h3>
    );
  if (size === "small")
    return (
      <h5 className={cname} ref={ref} {...props}>
        {children}
      </h5>
    );
  if (size === "large")
    return (
      <h1 className={cname} ref={ref} {...props}>
        {children}
      </h1>
    );
  else
    return (
      <h2 className={cname} ref={ref} {...props}>
        {children}
      </h2>
    );
});

Heading.displayName = "Heading";

export default Heading;
