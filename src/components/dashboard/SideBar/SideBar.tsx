import { NewButton } from "./NewButton";
import OrganizationList from "./OrganizationList";

type SideBarProps = {};

const SideBar = ({}: SideBarProps) => {
  return (
    <aside className="bg-blue-950 w-[60px] flex p-3 flex-col gap-y-4 text-white">
      <OrganizationList />
      <NewButton />
    </aside>
  );
};

export default SideBar;
