export const Button = ({
    onClick,
    children,
    className,
  }: {
    onClick: () => void;
    children: React.ReactNode;
    className?: string;
  }) => {
    return (
      <button
        onClick={onClick}
        className={`bg-white hover:bg-blue-900 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow ${className}`}
      >
        {children}
      </button>
    );
  };