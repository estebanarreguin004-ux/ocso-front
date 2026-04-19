import Header from "./_components/Header";
import Sidebar from "./_components/_sidebar/Sidebar";

export default function LayoutDashboard( {children, locations}: Readonly<{ children: React.ReactNode; 
    locations: React.ReactNode
 }> )  {
    return <div className="bg-orange-50 flex flex-col">
        <Header />
        <div className="items-center justify-content flex flex-row h-[90vh]">
            <Sidebar />
            {children}
            {locations}
        </div>
        
    </div>

}