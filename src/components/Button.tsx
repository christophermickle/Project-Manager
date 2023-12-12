type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode; // typing for children
};

function Button({ children, ...props }: ButtonProps) {
  return (
    <div>
      <button
        className="px-4 py-2 text-xs rounded-md md:text-base bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-slate-200"
        {...props}
      >
        {children}
      </button>
    </div>
  );
}

export default Button;
