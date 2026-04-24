import { Card, CardBody, CardHeader, Divider} from "@nextui-org/react"
import { Manager } from "@/entities"
import Link from "next/link"

export default function ManagerCard({manager}: {manager: Manager}) {
    console.log("Datos del manager:", manager);
    return (
        <Card className="mx-10 my-4 bx-5 by-5 bg-gray-100"> 
            <CardHeader className="text-center">
                <p className="w-full text-3xl"><b>{manager.managerFullName}</b></p>
            </CardHeader>
            <Divider />
            <CardBody className="text-lg">
                <p className="w-full">Email: <b>{manager.managerEmail}</b></p>
                <p className="w-full">Teléfono: <b>{manager.managerPhoneNumber}</b></p>
                
                {manager.location ? (
                    <div className="w-full">
                        <p>Tienda: <Link href={{
                            pathname: `/dashboard?stor=${manager?.location?.locationId}`}}>
                                <b className="underline">{manager.location.locationName}</b>
                            </Link>
                        </p>
                    </div>
                ) : (
                    <p>No tiene tienda asignada</p>
                )
                }
            </CardBody>
        </Card>
    );
    
}