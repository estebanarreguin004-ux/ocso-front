import { API_URL } from "@/constants";
import { Employee, Location } from "@/entities";
import { AuthHeaders } from "@/helpers/authHeaders";
import EmployeePhotoCard from "./_components/EmployeePhotoCard";
import EmployeeCard from "./_components/EmployeeCard";
import FormCreateEmployee from "./[id]/_components/FromCreateEmployee";
import CreateEmployee from "./_components/CreateEmployee";
import ListEmployees from "./_components/ListEmployees";
import { LuPlus } from "react-icons/lu";

const EmployeesPage = async () => {
    const response = await fetch(`${API_URL}/employees`, {
            headers: {
                ...await AuthHeaders()
            }
    })
    const employees: Employee[] = await response.json()
    
    const responseLocations = await fetch(`${API_URL}/locations`, {
        headers: {
            ...await AuthHeaders()
        }
    })
    const locations: Location[] = await responseLocations.json()

    return (
        <div>
        <div>
            <ListEmployees employees={employees} locations={locations}/>
        </div>
        <div className="absolute bottom-10 right-10">
            <CreateEmployee icon={<LuPlus size="20"/>}>
                <FormCreateEmployee/>
            </CreateEmployee>
        </div>
        </div>
    )
    
}

export default EmployeesPage;