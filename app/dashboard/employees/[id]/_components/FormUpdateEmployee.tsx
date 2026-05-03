import { updateEmployee } from "@/actions/employees/update";
import { Employee } from "@/entities";
import { Input, Button } from "@nextui-org/react";

export default function FormUpdateEmployee({employee}: {employee: Employee}) {
    const { employeeId } = employee;

    const updateEmployeeById = updateEmployee.bind(null, employeeId);
    return (
        <form action={updateEmployeeById} className="flex flex-col gap-2 p-5 rounded-md m-2 bg-orange-600 h-fit">
            <Input label="Nombre" name="employeeName" defaultValue={employee.employeeName}></Input>
            <Input label="Apellido" name="employeeLastName" defaultValue={employee.employeeLastName}></Input>
            <Input label="Email" name="employeeEmail" defaultValue={employee.employeeEmail}></Input>
            <Input label="Numero de teléfono" name="employeePhoneNumber" defaultValue={employee.employeePhoneNumber}></Input>
            <Input type="file" name="employeePhoto"  defaultValue={employee.employeePhoto}></Input>
            <Button type="submit" color="primary">Actualizar datos</Button>
        </form>
    )
}