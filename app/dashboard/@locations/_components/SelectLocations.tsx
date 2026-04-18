'use client';

import { Location } from "@/entities";
import { Select, SelectItem } from "@nextui-org/react";
import { useRouter } from "next/navigation";

export default function SelectLocations({ locations, store }: { locations: Location[] , store: string | string[] | undefined }) {
    

    const router = useRouter();
    return <Select 
    label="Tienda"
    placeholder="Selecciona una tienda" 
    classNames = {{
            mainWrapper: "hover:ring-2 ring-red-300 rounded-x1 transition-all"
    }}
    selectedKeys={store ? store : "0"}
    onChange={((e) => {
        if(e.target.value === "0" || e.target.value == "") {
            router.push(`/dashboard`);
        } else {
            router.push(`/dashboard?store=${e.target.value}`);
        } 
    })}
    >
         {locations.map((location: Location) => {
            return (
                <SelectItem key={location.locationId} value={location.locationId}>
                    {location.locationName}
                </SelectItem>
            );
        })}               
    </Select>
}



