import { Navbar } from "@/components/dashboard/NavBar/NavBar";
import OrganizationSidebar from "@/components/dashboard/SideBar/OrganizationSidebar";
import SideBar from "@/components/dashboard/SideBar/SideBar";

type layoutProps = {
  children: React.ReactNode;
};

const layout = ({ children }: layoutProps) => {
  return (
    <div className="min-h-screen grid grid-cols-[auto,auto,1fr]">
      <SideBar />
      <OrganizationSidebar />
      <div className="flex flex-col col-span-2 lg:col-span-1">
        <Navbar />
        <main className="flex flex-grow flex-col">{children}</main>
      </div>
    </div>
  );
};

export default layout;
