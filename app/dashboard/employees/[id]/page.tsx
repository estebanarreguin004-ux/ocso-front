import { AuthHeaders } from "@/helpers/authHeaders";
import { API_URL } from "@/constants";
import { Employee } from "@/entities";
import Link from "next/link";
import FormUpdateEmployee from "./_components/FormUpdateEmployee";
import DeleteEmployee from "./_components/DeleteEmployee";
import CreateUser from "./_components/CreateUser";
import FormCreateUser from "./_components/FormCreateUser";
import { LuUser } from "react-icons/lu";
import FormUpdateUser from "./_components/FormUpdateUser";

export default async function EmployeePage({params}: {params: {id: string}}) {
    const responseEmployee = await fetch(`${API_URL}/employees/${params.id}`, {
            headers: {
                        ...await AuthHeaders()
            },
            next: {
                tags: [`dashboard:employees:${params.id}`]
            }
        })
    const employee: Employee = await responseEmployee.json();
    return (
        <div className="w-full flex flex-row ">
            <div className="min-w-100 flex flex-col gap-2 bg-white rounded-md px-10 py-2 items-center h-fit ">
                <h1 className="text-2xl"><b>{employee.employeeName} {employee.employeeLastName}</b></h1>
                <h1>{employee.employeeEmail}</h1>
                <h1>{employee.employeePhoneNumber}</h1>
                <Link href={`/dashboard?store=${employee.location?.locationId}`}>                
                    <h1>{employee.location?.locationName}</h1>
                </Link>
                <div className="py-5">
                <DeleteEmployee employeeId={employee.employeeId}/>
                </div>
                <div>
                <CreateUser icon={<LuUser size="20"/>} photo={employee?.employeePhoto}>
                    { 
                    !employee.user ?
                    (<FormCreateUser employee={employee} />) : (<FormUpdateUser user={employee.user} />)
                    }
                </CreateUser>
                </div>
                
            </div>

            <FormUpdateEmployee employee={employee}/>

        </div>
    )
}