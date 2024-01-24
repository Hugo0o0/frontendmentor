import HeaderLogo from "./HeaderLogo/HeaderLogo";
import HeaderPlatformName from "./HeaderLogo/HeaderPlatformName/HeaderPlatformName";
import HeaderActions from "./HeaderLogo/HeaderActions/HeaderActions";

const Header = () => {
  return (
    <header className="fixed gap-8 flex items-center border-b border-b-item-border top-0 left-0 w-full h-[97px] bg-item">
      <HeaderLogo />

      <div className="flex w-full items-center justify-between">
        <HeaderPlatformName />

        <HeaderActions />
      </div>
    </header>
  );
};

export default Header;
