import { updateEmployee } from "@/actions/employees/update";
import { Employee } from "@/entities";
import { Input, Button } from "@nextui-org/react";
import { API_URL} from "@/constants";
import SelectLocation from "./SelectLocation";
import { Location } from "@/entities";
import { AuthHeaders } from "@/helpers/authHeaders";

export default async function FormUpdateEmployee({employee}: {employee: Employee}) {
    const responseLocations = await fetch(`${API_URL}/locations`, {
                    headers: {
                        ...AuthHeaders()
                    }
                })
        const locations: Location[] = await responseLocations.json()
    const { employeeId } = employee;

    const updateEmployeeById = updateEmployee.bind(null, employeeId);
    return (
        <form action={updateEmployeeById} className="flex flex-col gap-2 p-5 rounded-md m-2 bg-orange-600 h-fit">
            <Input label="Nombre" name="employeeName" defaultValue={employee.employeeName}></Input>
            <Input label="Apellido" name="employeeLastName" defaultValue={employee.employeeLastName}></Input>
            <Input label="Email" name="employeeEmail" defaultValue={employee.employeeEmail}></Input>
            <Input label="Numero de teléfono" name="employeePhoneNumber" defaultValue={employee.employeePhoneNumber}></Input>
            <SelectLocation stores={locations}/>
            <Input type="file" name="employeePhoto" ></Input>
            <Button type="submit" color="primary">Actualizar datos</Button>
        </form>
    )
}