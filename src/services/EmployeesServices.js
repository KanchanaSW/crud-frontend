import axios from "axios";

const EMPLOYEE_API_BASE_URL = "http://localhost:8080/api/v1/employees";
const EMPLOYEE_API_CREATE_URL = "http://localhost:8080/api/v1/createEmployee";
class EmployeesServices{

    getEmployees(){
        return axios.get(EMPLOYEE_API_BASE_URL);
    }
    createEmployee(employee){
        return axios.post(EMPLOYEE_API_CREATE_URL, employee);
    }
    getEmployeeById(employeeId){
        return axios.get(EMPLOYEE_API_BASE_URL+'/'+employeeId);
    }
    updateEmployee(employee,employeeId){
        return axios.put(EMPLOYEE_API_BASE_URL+'/'+employeeId,employee);
    }
}

export default new EmployeesServices();