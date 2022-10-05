import React, { Component } from 'react';
import '../App.css';
import { useEffect, useState, useTable } from 'react';
import { Link } from 'react-router-dom';
import EmployeeService from '../services/EmployeeServiceV2';
import Pagination  from '@mui/material/Pagination';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import EmployeeServiceV2 from '../services/EmployeeServiceV2';


const CreateEmployeeListV2 = () => {
 //   export default function CreateEmployeeListV2(){
    const [employees, setEmployees] = useState([]);
    const [length, setLength] =useState([]);
    const [page, setPage] = useState(1);
    const [pageSize, setPageSize] = useState(4);
    const [count, setCount] = useState(0);

    const pageSizes = [5, 10];


   

    const getRequestParams = ( page, pageSize) => {
        let params = {};
    
        if (page) {
          params["offset"] = page - 1;
        }
    
        if (pageSize) {
          params["pageSize"] = pageSize;
        }
    
        return params;
      };
    
    useEffect(() => {
       EmployeeServiceV2.getAll().then(
        response => {
          setLength(response.data.length);
          console.log(response.data.length);
        }
       )
       
        const params = getRequestParams(page, pageSize);
        console.log( EmployeeService.getAllPage(params));
        EmployeeService.getAllPage(params)
            .then(response => {
                setCount(response.data.response.totalPages);
                console.log('Printing employees data', response.data.response.content);
                setEmployees(response.data.response.content);
                console.log(response.data.response.totalPages);
            })
            .catch(error => {
                console.log('Something went wrong', error);
            })
    }, [page,pageSize]);

    
    const handlePageChange = (event, value) => {
        setPage(value);
      };
      const handlePageSizeChange = (event) => {
        setPageSize(event.target.value);
        setPage(1);
      };
    
    
console.log(employees);
    return (
        
        <div className="container">
            <h3>List of Employees: {length} Person</h3>
            <hr />
            <div>
            <Stack spacing={2}>
                 <Typography>
                <table className="table table-bordered table-striped">
                    <thead className="thead-dark">
                        <tr>
                            <th>#</th>
                            <th height="10px">Reg</th>
                            <th width="100px" height="10px">Name</th>
                            <th>Birthday</th>
                            <th>Martial</th>
                            <th>TCKN</th>
                            <th>Graduation </th>
                            <th>Work Status</th>
                            <th>Department</th>
                            <th>Task</th>
                            <th>Option</th>
                        </tr>
                    </thead>
                    <tbody >
                        {

                            employees.map(employee => (

                                <tr key={employee.employee_id}>
                                    <td>{(employees.findIndex(employees => employees.employee_id === employee.employee_id))}</td>

                                    <td>{employee.employee_registrationNumber}</td>
                                    <td id='name_surname'><a href={`/employees/edit/${employee.employee_id}`}><div class="link">{employee.employee_name}&nbsp;{employee.employee_surname}
                                    </div></a></td>
                                    <td>{employee.employee_dateOfBirth}</td>
                                    <td>{employee.employee_martialStatue}</td>
                                    <td>{employee.employee_tckn}</td>
                                    <td>{employee.employee_graduationstatus}</td>
                                    <td>{employee.employee_workstatus}</td>
                                    <td>{employee.employee_department}</td>
                                    <td>{employee.employee_task}</td>
                                    <td id='button'>
                                        <Link className="btn btn-dark" to={`/employees/edit/${employee.employee_id}`}>Update</Link>
                                        &nbsp;
                                        <button onClick={() => { EmployeeService.remove(employee.employee_id); window.location.reload() }} className="btn btn-danger">Delete</button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
                <select onChange={handlePageSizeChange} value={pageSize}>
            {pageSizes.map((size) => (
              <option key={size} value={size}>
                {size}
              </option>
            ))}
          </select>
          </Typography>
          <Pagination
            color="primary"
            className="my-3"
            count={count}
            page={page}
            siblingCount={1}
            boundaryCount={1}
            variant="outlined"
            onChange={handlePageChange}
          />
          </Stack>
            </div>

       
        </div>
        
    );
}

export default CreateEmployeeListV2;