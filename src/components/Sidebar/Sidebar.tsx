import BoardSelection from "@/components/BoardSelection/BoardSelection";
import ThemeSwitcher from "@/components/ThemeSwitcher/ThemeSwitcher";
import HideSiderBar from "./HideSiderBar";
import { useState } from "react";

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  if (!isSidebarOpen) {
    return <HideSiderBar toggleSidebar={setIsSidebarOpen} />;
  }

  return (
    <aside className="basis-[30rem] flex flex-col relative bg-item h-full border-r-[1px] border-r-item-borderborder-r-[1px] border-r-item-border">
      <BoardSelection />
      <div className="p-5 mb-28">
        <ThemeSwitcher />
      </div>
      <HideSiderBar toggleSidebar={setIsSidebarOpen} isOpen={isSidebarOpen} />
    </aside>
  );
};

export default Sidebar;
