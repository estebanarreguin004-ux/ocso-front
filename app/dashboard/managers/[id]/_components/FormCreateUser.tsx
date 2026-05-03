'use client'

import RegisterEmploye from "@/actions/users/register-employee";
import { Employee } from "@/entities";
import { Input, Button } from "@nextui-org/react";
import { useState } from "react";
import { generate } from "generate-password";
import { LuEye } from "react-icons/lu";
import RegisterManager from "@/actions/users/register-manager";
import { Manager } from "@/entities";

export default function FormCreateUserManager({manager}: {manager: Manager}) {
    const [password, setPassword] = useState<string>();
    const [visible, setVisible] = useState<boolean>(false);
    const { managerId } = manager;
    const registerManagerById = RegisterManager.bind(null, managerId);

    return (
        <form action={registerManagerById} className="py-10 flex flex-col gap-2">
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
            }}>Generar contraseña</Button>
            <Button type="submit" color="primary">Crear</Button>
        </form>
    )


}