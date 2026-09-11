import Image from "next/image";

const Logo = () => {
  return (
    <div className="flex items-center gap-2">
      <Image
        src="/logo.jpeg"
        alt="Green Garden College of Health Sciences and Technology (GGCHST) Gusau Logo"
        width={48}
        height={42}
        className="h-10 w-12"
      />
      <div className="flex flex-col gap-px">
        <span className="lg:text-lg font-bold leading-tight">
          <span className="max-md:hidden lg:max-xl:hidden">ALHAJA</span> SARAH{" "}
          <span className="max-md:hidden lg:max-xl:hidden">MEMORIAL</span>{" "}
          ACADEMY{" "}
        </span>
        <span className="text-sm leading-tight">Motto: Light Upon Light</span>
      </div>
    </div>
  );
};

export default Logo;
