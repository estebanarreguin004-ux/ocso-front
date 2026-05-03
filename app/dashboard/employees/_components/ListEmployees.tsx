'use client';

import { Employee, Location } from "@/entities"
import EmployeeCard from "./EmployeeCard"
import EmployeePhotoCard from "./EmployeePhotoCard"
import { useState } from "react"
import { SelectItem, Select } from "@nextui-org/react"

export default function ListEmployees({employees, locations} : {employees: Employee[], locations: Location[]}){
    const [ filter, setFilter ] = useState<string>("");
    return (
        <div className="">
        <Select 
        label="Tiendas"
        className="w-60 pl-10 py-10 top-10 my-5"
        defaultSelectedKeys={[]}
        onChange={(e)=>{
            setFilter(e.target.value)
        }}>
            {locations.map((location)=>{
                return (
                    <SelectItem key={location.locationId}>
                        {location.locationName}
                    </SelectItem>
                )
            })}
        </Select>
        <div className="h-[90vh] flex flex-wrap">
            {
            employees.filter((employee: Employee)=> {
                if(filter == "") return true;
                return String(employee.location?.locationId)==filter
            }
            ).map((employee: Employee) => {
                if(employee.employeePhoto !== "") {
                    return <EmployeePhotoCard key={employee.employeeId} employee={employee}/>
                } else {
                    return <EmployeeCard key={employee.employeeId} employee={employee}/>
                }
            })
        }
        </div>
        </div>
    )
}