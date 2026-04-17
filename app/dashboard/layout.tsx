import Header from "./_components/Header";
import Sidebar from "./_components/_sidebar/Sidebar";

export default function LayoutDashboard( {children, count}: Readonly<{ children: React.ReactNode; 
    count: React.ReactNode
 }> )  {
    return <div className="bg-orange-50 flex flex-col">
        <Header />
        <div className="flex flex-row h-[90vh]">
            <Sidebar />
            {children}
            {count}
        </div>
        
    </div>

}