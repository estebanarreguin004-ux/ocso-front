'use client'

import { Input, Button } from "@nextui-org/react";
import { useState } from "react";
import { generate } from "generate-password";
import { LuEye } from "react-icons/lu";
import updateUser from "@/actions/users/update";
import { User } from "@/entities";

export default function FormUpdateUser({user}: {user: User}) {
    const { userId } = user;
    const [password, setPassword] = useState<string>();
    const [visible, setVisible] = useState<boolean>(false);
    const updateUserById = updateUser.bind(null, userId);

    return (
        <form action={updateUserById} className="py-10 flex flex-col gap-2">
            <h1 className="text-whit text-xl">Actualizar usuario</h1>
            <Input defaultValue={user.userEmail} label="Email" name="userEmail"/>
            <Input value={password} label="Password" type={visible? "text": "password"} name="userPassword" endContent={
                <button type="button" onMouseDown={()=> setVisible(true)}
                onMouseUp={()=> setVisible(false)}
                ><LuEye size="25"/></button>}/>
            <Button color="danger" onPress={()=>{
                setPassword(generate({
                    length: 10
                }))
            }}>Generar contrrasea</Button>
            <Button type="submit" color="primary">Actualizar</Button>
        </form>
    )

}