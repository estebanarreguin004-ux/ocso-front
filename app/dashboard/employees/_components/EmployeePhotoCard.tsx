import { Employee } from "@/entities";
import { Card, CardHeader, CardBody, Divider, Image, CardFooter, Button} from "@nextui-org/react";
import Link from "next/link";

export default function EmployeePhotoCard({employee}: {employee:Employee}){
    return (
    <Card className="mx-10 my-4 bx-5 by-5 bg-gray-100 hover:scale-[110%] hover:bg-blue-100 max-h-72 " isFooterBlurred > 
            <CardHeader className="absolute top-0 bg-opacity-25 bg-black">
                <h1 className="text-xl"><b>{employee.employeeName} {employee.employeeLastName}</b></h1>
            </CardHeader>
            <Divider />
            <Image src={employee.employeePhoto} className="z-0 object-cover" classNames={{img: "size-72"}}/>
            <CardFooter className="absolute bottom-0 py-2 h-15">
            <Link href={`/dashboard/employees/${employee.employeeId}`}>
                <Button variant="ghost">Actualizar infomacion</Button>
                </Link>
            </CardFooter>
            </Card>
    )
}