import { Manager } from "@/entities";
import { API_URL } from "@/constants";
import { Card, CardHeader, CardBody, Divider } from "@nextui-org/react";
import { AuthHeaders } from "@/helpers/authHeaders";
import Link from "next/link";

export default async function ManagerCards() {

    const response = await fetch(`${API_URL}/managers`, {
        method: "GET",
        headers: {
            ...await AuthHeaders()
        },
        next: { 
            tags: ['dashboard:managers']
        }
    });
    const data: Manager[] = await response.json();

    return (<div>
        {data.map((manager: Manager) => {
        return (
            <Link key={manager.managerId} href={`/dashboard/managers/${manager.managerId}`}>
            <Card className="mx-10 my-4 bx-5 by-5 bg-gray-100 hover:scale-[110%] hover:bg-blue-100" > 
            <CardHeader>
                <p className="w-full">Nombre: <b>{manager.managerFullName}</b></p>
            </CardHeader>
            <Divider />
            <CardBody>
            <p className="w-full">Email: <b>{manager.managerEmail}</b></p>
            <p className="w-full">Teléfono: <b>{manager.managerPhoneNumber}</b></p>
            <p className="w-full">Salario: <b>{manager.managerSalary}</b></p>
            </CardBody>
            </Card>
            </Link>
        )
             
    })}
    </div>
    );
    }
