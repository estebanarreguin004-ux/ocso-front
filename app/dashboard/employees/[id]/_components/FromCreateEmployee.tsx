
import { Input, Button } from "@nextui-org/react";
import { createEmployee } from "@/actions/employees/create";
import { API_URL } from "@/constants";
import { AuthHeaders } from "@/helpers/authHeaders";
import SelectLocation from "./SelectLocation";
import { Location } from "@/entities";

export default async function FormCreateEmployee() {
    const responseLocations = await fetch(`${API_URL}/locations`, {
                headers: {
                    ...AuthHeaders()
                }
            })
    const locations: Location[] = await responseLocations.json()

    return (
        <form action={createEmployee} className="flex flex-col gap-2 p-5 rounded-md m-2 bg-orange-600 h-fit">
            <Input isRequired label="Nombre" name="employeeName" placeholder="Marco"></Input>
            <Input isRequired label="Apellido" name="employeeLastName" placeholder="Aurelio"></Input>
            <Input isRequired label="Email" name="employeeEmail" placeholder="MarcoAu@gmail.com"></Input>
            <SelectLocation key="location" stores={locations}/>
            <Input isRequired label="Numero de teléfono" name="employeePhoneNumber" placeholder="442 420 4923"></Input>
            <Input type="file" name="employeePhoto"></Input>
            <Button type="submit" color="primary">Añadir empleado</Button>
        </form>
    )
}