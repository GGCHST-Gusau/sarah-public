const PrimaryButton = ({
  children,
  onClick,
  disabled,
}: {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`py-2 px-4 rounded-sm text-white bg-primary-blue font-medium ${
        disabled ? "opacity-40 cursor-not-allowed!" : ""
      }`}
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
