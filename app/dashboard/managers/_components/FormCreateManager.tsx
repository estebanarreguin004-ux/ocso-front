import { Button, Input } from "@nextui-org/react";
import SelectStore from "../[id]/_components/SelectStore";
import { API_URL } from "@/constants";
import { AuthHeaders } from "@/helpers/authHeaders";
import { Location } from "@/entities";
import createManager from "@/actions/managers/create";

export default async function FormCreateManager() {
    
    const response = await fetch(`${API_URL}/locations`, {
                headers: {
                    ...await AuthHeaders()
                }
     })
     const stores: Location[] = await response.json();

    return (
        <form action={createManager} className="flex flex-col gap-4">
            <h1 className="text-4xl font-bold text-white">Crear Manager</h1>
            <Input label="Nombre completo" name="managerFullName"/>
            <Input label="Salario" name="managerSalary"/>
            <Input label="Email" name="managerEmail"/>
            <Input label="Numero de telefono" name="managerPhoneNumber"/>
            <SelectStore stores={stores}/>
            <Button type="submit">Crear</Button>
        </form>
    )

}