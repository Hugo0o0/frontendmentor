import BoardMenu from "@/components/BoardMenu/BoardMenu";
import { Add } from "@/components/Icons/";
import Button from "@/components/UI/Button/Button";

const HeaderActions = () => {
  return (
    <div className="flex items-center gap-4 pr-8">
      <Button size="large" className="flex items-center gap-1">
        <Add />
        Add New Task
      </Button>

      <BoardMenu />
    </div>
  );
};

export default HeaderActions;
