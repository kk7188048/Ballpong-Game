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
        className={`glowing-btn ${className}`}
      >
        {children}
      </button>
    );
  };

  // <button class='glowing-btn'><span class='glowing-txt'>C<span class='faulty-letter'>L</span>ICK</span></button>