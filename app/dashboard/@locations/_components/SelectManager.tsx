'use client'
import { Select, SelectItem } from "@nextui-org/react";
import { Manager, Location } from "@/entities";

export default function SelectManager({managers = [], locations = []}: {managers: Manager[], locations: Location[]}) {
    const disabledKeys = locations.map((location: Location) => {
        return location.managerId;
    }).filter((managerId) => managerId !== undefined) || [];
    console.log(disabledKeys)
    return (
        <Select 
        label="Manager"
        name="managerId"
        disabledKeys = {disabledKeys}
        placeholder="Selecciona un manager" >
                    { managers.map((manager: Manager) => {
                        return ( 
                        <SelectItem key={manager.managerId} value={manager.managerId}>
                            {manager.managerFullName}
                        </SelectItem>);
                    })}
        </Select>
    );
}