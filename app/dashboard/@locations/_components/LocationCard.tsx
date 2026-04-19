import { Card, CardHeader, CardBody, Divider } from "@nextui-org/react";
import { Location } from "@/entities";
import { API_URL,  } from "@/constants";
import axios from "axios";
import Link from "next/link";
import { AuthHeaders } from "@/helpers/authHeaders";

export default async function LocationCard( {store}: {store: string | string[] | undefined} ) {
    if(!store) return null;
    const { data } = await axios.get<Location>(`${API_URL}/locations/${store}`, {
        headers: {
            ...await AuthHeaders()
        }
    });
    return (
        <Card className="mx-10 my-4 bx-5 by-5 bg-gray-100" >
            
            <CardHeader>
                <p className="w-full"><b>{data.locationName}</b></p>
            </CardHeader>
            <Divider />
            <CardBody>
            <p>Manager: <Link href={{ pathname: '/dashboard/managers' }}><b>{data.managerId ? data.managerId : 'N/A'}</b></Link></p>
            </CardBody>
        </Card>
    )

}