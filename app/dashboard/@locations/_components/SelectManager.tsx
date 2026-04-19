'use client'
import { Select, SelectItem } from "@nextui-org/react";
import { Manager, Location } from "@/entities";

interface SelectManagerProps {
    managers: Manager[];
    locations: Location[];
    defaultManager?: string;
}

export default function SelectManager({managers, locations, defaultManager}: SelectManagerProps) {
    const disabledKeys = locations.map((location: Location) => {
        if(location.managerId === defaultManager) {
            return location.managerId;
        }
        return location.managerId;
    }).filter((managerId) => managerId !== undefined) || [];
    console.log(disabledKeys)
    return (
        <Select 
        defaultSelectedKeys={defaultManager ? [defaultManager] : []}
        label="Manager"
        name="managerId"
        disabledKeys = {disabledKeys!= undefined ? [] : []}
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