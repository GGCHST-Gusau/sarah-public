interface Props {
  // label: string;
  // title: string;
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  id?: string;
}
const PageSection = ({ children, className, style, id }: Props) => {
  return (
    <section id={id} style={style} className={`py-16 md:py-24 ${className}`}>
      <div className="container flex flex-col gap-6 md:gap-12">
        {/* <div className="flex flex-col text-center gap-1">
          <h2 className="uppercase font-bold tracking-wider text-primary-blue">
            {title}
          </h2>
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold">
            {label}
          </h3>
        </div> */}
        {children}
      </div>
    </section>
  );
};

export default PageSection;
