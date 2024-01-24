import { Menu } from "@headlessui/react";
import { VerticleEllipses } from "@/components/Icons";
import classNames from "classnames";
import { ScaleAndFade } from "../UI/Animations";

const BoardMenu = () => {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <Menu.Button>
        <VerticleEllipses />
      </Menu.Button>

      <ScaleAndFade>
        <Menu.Items className="absolute right-0 z-10 mt-2 w-[19.2rem] origin-top-right rounded-lg bg-item shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <button
                  className={classNames(
                    active ? "bg-body text-steel-blue" : "text-steel-blue",
                    "block px-4 py-3 my-3 text-sm w-full text-left"
                  )}
                >
                  Edit Board
                </button>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button
                  className={classNames(
                    active ? "bg-body text-gray-900" : "text-gray-700",
                    "block px-4 py-3 my-3 text-sm  w-full text-left text-danger-red"
                  )}
                >
                  Delete Board
                </button>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </ScaleAndFade>
    </Menu>
  );
};

export default BoardMenu;
