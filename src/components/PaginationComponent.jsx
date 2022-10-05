import axios from 'axios';
import React from 'react';
import { useEffect,useState } from 'react';
import EmployeeService from '../services/EmployeeService';
import { USER_PER_PAGE } from "../utils/constants";
import Pagination from '../components/Pagination';
import Users from '../components/users';

function PaginationComponent(){

const[users,setUsers] = useState([]);
const [loading,setLoading] = useState(false);
const [page, setPage] = useState(1);
const [totalPages, setTotalPages] = useState(0);
//console.log(users)




    useEffect(() => {
        const fetchUser = async () => {
            setLoading(true);
            const res = await EmployeeService.getEmployees();
            console.log(res.data);
            setLoading(false);
            setUsers(res.data);
            setTotalPages(Math.ceil(res.data.length / USER_PER_PAGE));
        };

       fetchUser();
        
    },[]);
    const handleClick = num => {
        setPage(num);
      }

    return (
        <div>
            <h1>Pagination demo</h1>
            {loading ? <p>Loading...</p> : <>
           <h1>Data</h1>
           <Users users={users} page={page} />

           <Pagination totalPages={totalPages} handleClick={handleClick} />


            </> }

        </div>

    );
}
 
export default PaginationComponent;