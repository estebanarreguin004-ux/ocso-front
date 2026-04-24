import { Card, CardHeader, CardBody, Divider } from "@nextui-org/react";
import { Location } from "@/entities";
import { API_URL,  } from "@/constants";
import Link from "next/link";
import { AuthHeaders } from "@/helpers/authHeaders";

export default async function LocationCard( {store}: {store: string | string[] | undefined} ) {
    if(!store) return null;
    const resLocation = await fetch(`${API_URL}/locations/${store}`, {
        headers: { ...await AuthHeaders() },
        next: { tags: ['dashboard:locations', `dashboard:locations:${store}`] }
    });
    const data: Location = await resLocation.json();

    // 2. Obtener los datos del manager usando el ID obtenido
    let managerName = "N/A";
    if (data.managerId) {
        const resManager = await fetch(`${API_URL}/managers/${data.managerId}`, {
            headers: { ...await AuthHeaders() }
        });
        const managerData = await resManager.json();
        managerName = managerData.managerFullName;
    }
    return (
        <Card className="mx-10 my-4 bx-5 by-5 bg-gray-100" >
            
            <CardHeader>
                <p className="w-full"><b>{data.locationName}</b></p>
            </CardHeader>
            <Divider />
            <CardBody>
            <p>Manager: <Link href={`/dashboard/managers/${data.managerId}`}>
                        <b className="underline">{managerName}</b>
                    </Link></p>
            </CardBody>
        </Card>
    )

}