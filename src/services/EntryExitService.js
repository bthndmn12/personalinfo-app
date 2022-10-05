import axios from "axios";

const EMPLOYEE_API_BASE_URL = "http://localhost:8080/api/v1/entryexit";
const EMPLOYEE_API_BASE_URL_DELETE = "http://localhost:8080/api/v1/entryexit/delete";
class EntryExitService{
    
    getEntryExit() {
        return axios.get(EMPLOYEE_API_BASE_URL);

    }

    deleteInventory(entryexit_id) {
        return axios.delete(EMPLOYEE_API_BASE_URL_DELETE + '/' + entryexit_id);
    }

    updateEntryExit(data){
        return axios.put(EMPLOYEE_API_BASE_URL+'/put',data);
    }

    getEntryExitFromId(entryexit_id){
        return axios.get(EMPLOYEE_API_BASE_URL+'/'+entryexit_id);
    }

    createEntryExit(inventory_id,employee_id,data){
        return axios.post(EMPLOYEE_API_BASE_URL+'/post'+'/'+inventory_id+'/'+employee_id,data);
    }
}

export default new EntryExitService()