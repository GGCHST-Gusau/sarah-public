const SecondaryButton = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <button
      className={`py-2 px-6 rounded-sm text-white bg-secondary-gold font-medium ${className}`}
    >
      {children}
    </button>
  );
};

export default SecondaryButton;
