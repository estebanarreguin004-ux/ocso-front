import { Employee } from "@/entities";
import { Card, CardHeader, CardBody, Divider, CardFooter, Button } from "@nextui-org/react";
import Link from "next/link";

export default function EmployeeCard({employee}: {employee:Employee}){
    return (
    <Card className="mx-10 my-4 bx-5 by-5 bg-gray-100 hover:scale-[110%] hover:bg-blue-100 size-72 min-h-72" > 
            <CardHeader>
                <h1 className="text-xl"><b>{employee.employeeName}</b></h1>
                <h1 className="text-xl"><b>{employee.employeeLastName}</b></h1>
            </CardHeader>
            <Divider />
            <CardBody>
            <p className="w-full">Email: <b>{employee.employeeEmail}</b></p>
            <p className="w-full">Teléfono: <b>{employee.employeePhoneNumber}</b></p>
            </CardBody>
            <CardFooter className="absolute bottom-0 py-2 h-15">
                <Link href={`/dashboard/employees/${employee.employeeId}`}>
                <Button variant="ghost">Actualizar infomacion</Button>
                </Link>
            </CardFooter>
    </Card>
    )
}