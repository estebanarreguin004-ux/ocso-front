import updateManager from "@/actions/managers/update"
import { Manager } from "@/entities"
import { AuthHeaders } from "@/helpers/authHeaders"
import { Input, Button } from "@nextui-org/react"
import { API_URL } from "@/constants"
import SelectStore from "./SelectStore"

export default async function FormUpdateManager ({manager}: {manager: Manager}){
    const updateManagerWithId = updateManager.bind(null, manager.managerId)
    const responseStores = await fetch(`${API_URL}/locations`, {
        headers: {
            ...await AuthHeaders()
        }
    })
    const stores = await responseStores.json()
    const salary = String(manager.managerSalary)

    return(
        <form action={updateManagerWithId} className="bg-orange-300 rounded-md flex flex-col gap-2 flex-grow-0">
            <h1 className="text-2xl text-white font-bold text-center">Actualiza manager</h1>

            <Input required isRequired label="Nombre completo" defaultValue={manager.managerFullName} placeholder="Marco Aurelio" name="managerFullName" />
            <Input required isRequired label="Email" defaultValue={manager.managerEmail} placeholder="manager@ocso.com" name="managerEmail" />
            <Input required isRequired label="Salario" defaultValue={salary} placeholder="12000" name="managerSalary" />
            <Input required isRequired label="Número de teléfono"defaultValue={manager.managerPhoneNumber} placeholder="1234567" name="managerPhoneNumber" />
            <SelectStore stores={stores} defaultStore={manager?.location?.locationId} />
            <Button color="primary" type="submit">
                Actualizar
            </Button>

        </form>
    )
}