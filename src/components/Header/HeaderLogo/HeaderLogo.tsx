import { DarkLogo, LightLogo } from "@/components/Icons";
import useTheme from "@/utils/hooks/useTheme";

const HeaderLogo = () => {
  const { theme } = useTheme();

  const logo = theme === "dark" ? <LightLogo /> : <DarkLogo />;

  return (
    <div className="pr-48 pl-10 flex items-center h-full border-r-[1px] border-r-item-border">
      {logo}
    </div>
  );
};

export default HeaderLogo;
