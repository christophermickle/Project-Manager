import { ForwardedRef, forwardRef } from "react";

interface InputProps {
  label?: string;
  textarea?: boolean;
  props?: React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement>;
}

const Input = forwardRef(
  (
    { label, textarea, props }: InputProps,
    ref: ForwardedRef<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const classes =
      "w-full p-1 border-b-2 rounded-sm border-slate-300 bg-slate-200 text-slate-600 focus:outline-none focus:border-slate-600";

    return (
      <p className='flex flex-col gap-1 my-4'>
        <label className='text-sm font-bold uppercase text-slate-500'>
          {label}
        </label>
        {textarea ? (
          <textarea
            ref={ref as ForwardedRef<HTMLTextAreaElement>}
            className={classes}
            {...props}
          />
        ) : (
          <input
            ref={ref as ForwardedRef<HTMLInputElement>}
            className={classes}
            {...props}
          />
        )}
      </p>
    );
  }
);

export default Input;
