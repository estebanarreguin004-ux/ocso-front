import { API_URL } from "@/constants";
import { Employee } from "@/entities";
import { AuthHeaders } from "@/helpers/authHeaders";
import EmployeePhotoCard from "./_components/EmployeePhotoCard";
import EmployeeCard from "./_components/EmployeeCard";

const EmployeesPage = async () => {
    const response = await fetch(`${API_URL}/employees`, {
            headers: {
                ...await AuthHeaders()
            }
        })
        const employees: Employee[] = await response.json()

    return (
            employees.map((employee: Employee) => {
                if(employee.employeePhoto !== "") {
                    return <EmployeePhotoCard key={employee.employeeId} employee={employee}/>
                } else {
                    return <EmployeeCard key={employee.employeeId} employee={employee}/>
                }
            })
    )
    
}

export default EmployeesPage;