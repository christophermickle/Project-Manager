type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode; // typing for children
};

function Button({ children, ...props }: ButtonProps) {
  return (
    <div>
      <button
        className='px-4 py-2 text-xs rounded-md md:text-base bg-slate-700 text-slate-400 hover:bg-slate-600 hover:text-slate-100'
        {...props}
      >
        {children}
      </button>
    </div>
  );
}

export default Button;
