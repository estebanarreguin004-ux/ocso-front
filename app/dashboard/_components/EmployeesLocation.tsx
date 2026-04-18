import { Employee } from "@/entities";
import axios from "axios";
import { API_URL, TOKEN_NAME } from "@/constants";
import { cookies } from "next/headers";
import { Card, CardHeader, CardBody, Divider } from "@nextui-org/react";

export default async function EmployeesLocation({ store }: { store: string | string[] | undefined }) {
    if (!store || store === "" || store === "undefined") {
        return (
            <div className="p-4 border border-dashed rounded text-gray-400">
                Selecciona una tienda para ver la lista de empleados.
            </div>
        );
    }

    const token = await cookies().get(TOKEN_NAME)?.value;
    const { data } = await axios.get<Employee[]>(`${API_URL}/employees/location/${store}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    if(!data) return null

    return data.map(employee => {
        const fullName = `${employee.employeeName} ${employee.employeeLastName}`;
        return <Card className="mx-10 my-4 bx-5 by-5 bg-gray-100" > 
            <CardHeader>
                <p className="w-full">Nombre: <b>{fullName}</b></p>
            </CardHeader>
            <Divider />
            <CardBody>
            <p className="w-full">Email: <b>{employee.employeeEmail}</b></p>
                <p className="w-full">Teléfono: <b>{employee.employeePhoneNumber}</b></p>
            </CardBody>
            </Card>
    });
    }

