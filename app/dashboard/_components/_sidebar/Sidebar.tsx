import { LuStore, LuUser, LuTruck, LuWheat, LuUsers } from "react-icons/lu";
import NavItem from "./NavItem";

export default function Sidebar() {
    return (
        <nav className="h-[90vh] w-[10vw] bg-orange-200 flex flex-col items-center justify-start py-4 gap-10">
            <NavItem icon={<LuStore className="text-5xl" />} path="/dashboard" />
            <NavItem icon={<LuTruck className="text-5xl" />} path="/dashboard/providers" />
            <NavItem icon={<LuWheat className="text-5xl" />} path="/dashboard/products" />
            <NavItem icon={<LuUser className="text-5xl" />} path="/dashboard/employees" />
            <NavItem icon={<LuUsers className="text-5xl" />} path="/dashboard/managers" />
        </nav>
    )

}
