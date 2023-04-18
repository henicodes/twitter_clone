import Sidebar from "./layout/Sidebar";

interface LayoutProps {
    Children: React.ReactNode;
}
const Layout: React.FC<LayoutProps> = ({ Children }) => {
  return (
    <div className="h-screen bg-black">
        <div className="Container h-full mx-auto xl:px-30 max-w-6xl">
        <div className="grid grid-cols-4 h-full">
            <Sidebar/>
        <div className="col-span-3 lg:col-span-2 border-x-[1px] border-neutral-800">
{Children}
    </div>
    </div>
    </div>
    </div>
  );
}
export default Layout;