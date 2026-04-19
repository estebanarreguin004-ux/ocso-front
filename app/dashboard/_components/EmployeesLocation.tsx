import { Employee } from "@/entities";
import { API_URL } from "@/constants";
import { Card, CardHeader, CardBody, Divider } from "@nextui-org/react";
import { AuthHeaders } from "@/helpers/authHeaders";

export default async function EmployeesLocation({ store }: { store: string | string[] | undefined }) {
    if (!store || store === "" || store === "undefined") {
        return (
            <div className="p-4 border border-dashed rounded text-gray-400">
                Selecciona una tienda para ver la lista de empleados.
            </div>
        );
    }

    const response = await fetch(`${API_URL}/employees/location/${store}`, {
        method: "GET",
        headers: {
            ...await AuthHeaders()
        },
        next: { 
            tags: ['dashboard:locations:employees']
        }
    });
    const data: Employee[] = await response.json();
    if(!data) return null

    return data.map((employee: Employee) => {
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

