import axios from "axios";

const EMPLOYEE_API_BASE_URL = "http://localhost:8080/api/v1/inventoryinfo";
const EMPLOYEE_API_BASE_URL_POST = "http://localhost:8080/api/v1/inventoryinfo/post";
const EMPLOYEE_API_BASE_URL_DELETE = "http://localhost:8080/api/v1/inventoryinfo/delete";



class InventoryService{

    getInventory(){
        return axios.get(EMPLOYEE_API_BASE_URL);
    }

    createInventory(inventory){
        return axios.post(EMPLOYEE_API_BASE_URL_POST,inventory);
    }

    deleteInventory(inventory_id){
        return axios.delete(EMPLOYEE_API_BASE_URL_DELETE+'/'+inventory_id)
    }

}

export default new InventoryService()