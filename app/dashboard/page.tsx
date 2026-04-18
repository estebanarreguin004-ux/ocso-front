import EmployeesLocation from "./_components/EmployeesLocation";

export default function DashboardPage({ searchParams }: { searchParams: { store?: string } }) {
    return (
    <>
        <div className="h-full w-4/12 ">
        <div className="h-[90vh] overflow-hidden overflow-y-auto">
            <EmployeesLocation store={searchParams?.store || ""} />
        </div>
        
        </div>

    </>
    )
}