import { AuthHeaders } from "@/helpers/authHeaders";
import { API_URL } from "@/constants";
import { Employee } from "@/entities";
import EmployeeCard from "../_components/EmployeeCard";
import { Image } from "@nextui-org/react";
import Link from "next/link";
import FormUpdateEmployee from "./_components/FormUpdateEmployee";

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
                <Image src={employee.employeePhoto} className="z-0 object-cover" classNames={{img: "size-60"}} isZoomed/>
            </div>

            <FormUpdateEmployee employee={employee}/>
        </div>
    )
}