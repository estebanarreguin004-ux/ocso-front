import { Card, CardBody, CardHeader, Divider} from "@nextui-org/react"
import { API_URL } from "@/constants"
import { AuthHeaders } from "@/helpers/authHeaders"
import { Manager } from "@/entities"
import ManagerCard from "./_components/ManagerCard"
import DeleteManagerButton from "./_components/DeleteManagerButton"
import FormUpdateManager from "./_components/FormUpdateManager"
import UpdateManager from "./_components/UpdateManager"

export default async function ManagerPage({params} : {params: {id: string}}){
    const response = await fetch(`${API_URL}/managers/${params.id}`, {
        headers: {
                    ...await AuthHeaders()
        },
        next: {
            tags: [`dashboard:managers:${params.id}`]
        }
    })
    const data: Manager = await response.json();
    return (
        <div className="w-8/12 flex flex-col items-center gap-10">
            <ManagerCard manager={data}/>
            <DeleteManagerButton managerId={data.managerId} />
            <UpdateManager>
                <FormUpdateManager manager={data}/>
            </UpdateManager>

        </div>
    )
}