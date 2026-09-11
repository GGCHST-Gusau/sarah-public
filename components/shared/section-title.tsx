interface Props {
  label: string;
  title: string;
  subtitle?: string;
  className?: string;
  titleClassName?: string;
}
const SectionTitle = ({
  title,
  label,
  subtitle,
  className,
  titleClassName,
}: Props) => {
  return (
    <div className={`flex flex-col gap-1 ${className}`}>
      <h2
        className={`uppercase font-bold tracking-wider text-primary-blue ${titleClassName}`}
      >
        {title}
      </h2>
      <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold">{label}</h3>
      <p className="max-w-3xl mt-2">{subtitle}</p>
    </div>
  );
};

export default SectionTitle;
