import { ReactElement } from "react";

interface SidebarButtonType {
  icon: ReactElement;
  title: string;
}
const SidebarButton = ({ icon, title }: SidebarButtonType) => {
  return (
    <div className="flex font-medium gap-6 w-full items-center rounded-lg hover:bg-[#272727] hover:text-white pl-3 py-2 mb-0 mt-0">
      {icon}
      {title}
    </div>
  );
};

export default SidebarButton;
