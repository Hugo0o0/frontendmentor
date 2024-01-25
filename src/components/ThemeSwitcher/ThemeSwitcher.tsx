import { Switch } from "@headlessui/react";
import { useEffect, useState } from "react";
import { Moon, Sun } from "../Icons";
import useTheme from "@/utils/hooks/useTheme";

const ThemeSwitcher = () => {
  const { toggle, theme } = useTheme();
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    setEnabled(theme === "dark");
  }, [theme]);

  return (
    <div className="h-[4.8rem] gap-4 rounded-xl bg-body flex items-center justify-center">
      <Sun />
      <Switch
        checked={enabled}
        onChange={() => {
          setEnabled((prev) => !prev);
          toggle();
        }}
        className={
          "relative inline-flex h-[2rem] w-[4rem] items-center rounded-full bg-primary-default"
        }
      >
        <span
          className={`${
            enabled ? "translate-x-[2.3rem]" : "translate-x-1"
          } inline-block h-[1.4rem] w-[1.4rem] transform rounded-full bg-white transition`}
        />
      </Switch>

      <Moon />
    </div>
  );
};

export default ThemeSwitcher;
