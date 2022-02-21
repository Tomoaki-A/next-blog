import Header from "src/components/Header";
import SideNav from "src/components/SideNav";

const Layout = ({ children }) => {
  return (
    <div className="text-white h-screen mx-auto">
      <Header />
      <div className="flex pt-16">
        <SideNav />
        <div className="bg-neutral-800 flex-grow overflow-y-scroll px-32 py-16">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
