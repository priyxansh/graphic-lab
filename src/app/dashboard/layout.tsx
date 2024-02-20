import NavBar from "@/components/NavBar";
import OrganizationSidebar from "@/components/SideBar/OrganizationSidebar";
import SideBar from "@/components/SideBar/SideBar";

type layoutProps = {
  children: React.ReactNode;
};

const layout = ({ children }: layoutProps) => {
  return (
    <div className="min-h-screen grid grid-cols-[auto,250px,1fr]">
      <SideBar />
      <OrganizationSidebar />
      <div className="flex flex-col col-span-2 lg:col-span-1">
        <NavBar />
        <main className="flex flex-grow flex-col">
          {children}
        </main>
      </div>
    </div>
  );
};

export default layout;
