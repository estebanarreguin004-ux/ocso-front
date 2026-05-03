import { Card, CardBody, CardHeader, Divider} from "@nextui-org/react"
import { Manager } from "@/entities"
import Link from "next/link"
import ModalGeneric from "@/app/dashboard/_components/Modal";
import FormUpdateUser from "./FormUpdateUser";
import { LuPlus } from "react-icons/lu";
import FormCreateUserManager from "./FormCreateUser";

export default function ManagerCard({manager}: {manager: Manager}) { 
    return (
        <Card className="mx-10 my-4 bx-5 by-5 bg-gray-100 px-2 w-fit"> 
            <CardHeader className="text-center gap-8" >
                <p className="w-full text-3xl"><b>{manager.managerFullName}</b></p>
                {
                    manager.user && manager.user.userId ? (
                        <ModalGeneric icon={<LuPlus/>}>
                            <FormUpdateUser user={manager.user}/>
                        </ModalGeneric>
                    ) : (
                        <ModalGeneric icon={<LuPlus/>}>
                            <FormCreateUserManager manager={manager}/>
                        </ModalGeneric>
                    )
                }
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