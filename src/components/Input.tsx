import React from 'react';

interface InputProps {
  label?: string;
  textarea?: boolean;
  props?: React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement>;
}

const Input: React.FC<InputProps> = ({ label, textarea, props }) => {
  const classes =
    "w-full p-1 border-b-2 rounded-sm border-slate-300 bg-slate-200 text-slate-600 focus:outline-none focus:border-slate-600";

  return (
    <p className='flex flex-col gap-1 my-4'>
      <label className='text-sm font-bold uppercase text-slate-500'>
        {label}
      </label>
      {textarea ? (
        <textarea className={classes} {...props} />
      ) : (
        <input className={classes} {...props} />
      )}
    </p>
  );
}

export default Input;

// function Input({ label, textarea, ...props }: InputProps) {
//   return (
//     <p className='flex flex-col gap-1 my-4'>
//       <label className='text-sm font-bold uppercase text-slate-500'>
//         {label}
//       </label>
//       {textarea ? (
//         <textarea className={classes} {...props} />
//       ) : (
//         <input className={classes} {...props} />
//       )}
//     </p>
//   );
// }

// export default Input;
