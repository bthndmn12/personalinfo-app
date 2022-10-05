import axios from "axios";
import httpClient  from "../http-common";

const EMPLOYEE_API_BASE_URL = "http://localhost:8080/api/v1/personalinfo";
const EMPLOYEE_API_BASE_URL_POST = "http://localhost:8080/api/v1/personalinfo/post";
const EMPLOYEE_API_BASE_URL_DELETE = "http://localhost:8080/api/v1/personalinfo/delete";
const EMPLOYEE_API_BASE_URL_UPDATE = "http://localhost:8080/api/v1/personalinfo/put";
 

class EmployeeService {

    getEmployees() {
        return axios.get(EMPLOYEE_API_BASE_URL);
    }

    createEmployee(employee) {
        return axios.post(EMPLOYEE_API_BASE_URL_POST, employee);
    }

    deleteEmployee(employee_id) {
        return axios.delete(EMPLOYEE_API_BASE_URL_DELETE + '/' + employee_id);
    }

    updateEmployee(employee,employee_id){
        return axios.put(EMPLOYEE_API_BASE_URL_UPDATE+'/'+employee_id, employee);
    }

    getEmployee(employee_id){
        return axios.get(EMPLOYEE_API_BASE_URL+'/'+employee_id);
    }
    
}

export default new EmployeeService()

// const getAll = () => {
//     return httpClient.get('/personalinfo');
// }

// const create = data => {
//     return httpClient.post("/personalinfo/post", data);
// }

// const get = id => {
//     return httpClient.get(`/personalinfo/${id}`);
// }

// const update = data => {
//     return httpClient.put('/employees', data);
// }
// export default { getAll, create, get, update };
