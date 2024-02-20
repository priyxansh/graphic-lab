import { UserButton } from "@clerk/nextjs";

type NavBarProps = {};

const NavBar = ({}: NavBarProps) => {
  return (
    <div className="flex items-center">
      <div className="hidden lg:flex">
        <span>Search</span>
      </div>
      <div className="ml-auto">
        <UserButton />
      </div>
    </div>
  );
};

export default NavBar;
