import { forwardRef, Fragment, type InputHTMLAttributes } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { Transition } from "@headlessui/react";

const textFieldVariants = cva("peer bg-transparent placeholder:text-transparent focus:outline-none", {
  variants: {
    variant: {
      default: "text-4xl md:text-5xl lg:text-6xl",
    },
  },
  defaultVariants: {},
});

interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement>, VariantProps<typeof textFieldVariants> {
  error?: string;
  hasError?: boolean;
}

const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  ({ placeholder, hasError, className, onChange, error, type = "text", ...props }, ref) => {
    return (
      <div className={cn("relative w-fit transition-all", { "pb-6": hasError })}>
        <div
          className={cn(
            "relative rounded border border-zinc-700 bg-zinc-900/80 px-4 pt-4 pb-1 transition-colors focus-within:border-white",
            { "border-red-500 focus-within:border-red-500": hasError }
          )}
        >
          <input
            ref={ref}
            type={type}
            onChange={onChange}
            placeholder={placeholder}
            className={cn(
              "peer w-full bg-transparent transition-colors placeholder:select-none placeholder:text-transparent focus:outline-none",
              { "text-red-500": hasError },
              className
            )}
            {...props}
          />
          <label
            className={cn(
              "pointer-events-none absolute left-4 z-10 -translate-y-4  text-sm transition-colors transition-all peer-placeholder-shown:-translate-y-1.5 peer-placeholder-shown:text-base peer-focus:-translate-y-4 peer-focus:text-sm",
              { "text-red-500": hasError }
            )}
          >
            {placeholder}
          </label>
        </div>
        <Transition
          show={hasError}
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 translate-y-4"
          enterTo="transform opacity-100 translate-y-0"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 translate-y-0"
          leaveTo="transform opacity-0 translate-y-4"
        >
          <p className="absolute mt-1 w-full text-left text-sm text-red-500">{error}</p>
        </Transition>
      </div>
    );
  }
);

TextField.displayName = "TextField";

export default TextField;
