'use client'

import RegisterEmploye from "@/actions/users/register-employee";
import { Employee } from "@/entities";
import { Input, Button } from "@nextui-org/react";
import { useState } from "react";
import { generate } from "generate-password";
import { LuEye } from "react-icons/lu";

export default function FormCreateUser({employee}: {employee: Employee}) {
    const [password, setPassword] = useState<string>();
    const [visible, setVisible] = useState<boolean>(false);
    const { employeeId } = employee;
    const registerEmployeeById = RegisterEmploye.bind(null, employeeId);

    return (
        <form action={registerEmployeeById} className="py-10 flex flex-col gap-2">
            <h1 className="text-whit text-xl">Crear usuario</h1>
            <Input label="Email" name="userEmail"/>
            <Input value={password} label="Password" type={visible? "text": "password"} name="userPassword" endContent={
                <button type="button" onMouseDown={()=> setVisible(true)}
                onMouseUp={()=> setVisible(false)}
                ><LuEye size="25"/></button>}/>
            <Button color="danger" onPress={()=>{
                setPassword(generate({
                    length: 10
                }))
            }}>Generar contrrasea</Button>
            <Button type="submit">Crear</Button>
        </form>
    )


}