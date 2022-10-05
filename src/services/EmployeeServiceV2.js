import httpCommon from "../http-common";
import httpClient from "../http-common.js";

const getAll = () => {
    return httpClient.get('/personalinfo');
}

const create = (data) => {
    return httpClient.post("/personalinfo/post", data);
}

const get = (id) => {
    return httpClient.get(`/personalinfo/${id}`);
}

const remove = (id) =>{
    return httpClient.delete(`/personalinfo/delete/${id}`);
}

const update = (data) => {
    return httpClient.put('/employees/put', data);
}

const getAllPage = params => {
    return httpClient.get('/pagination',{params});
}
export default { getAll, create, get, update,remove,getAllPage };