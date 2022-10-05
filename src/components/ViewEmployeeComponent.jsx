import React, { Component } from 'react';
import EmployeeService from '../services/EmployeeService';
import { BrowserRouter as Router, Route, Routes, useParams } from 'react-router-dom';
import { useState, useEffect } from "react";



function ViewEmployeeComponent() {
    
  const[users,setUsers] = useState([]);
    
  const params = useParams();
  const employee_id = params.id;
 
  useEffect(() => {
    const fetchUser = async () => {
        const res = await EmployeeService.getEmployee(employee_id);
        console.log(res.data);
        setUsers(res.data);
    };

   fetchUser();
    
},[]);
      
      return (<div>
       
      
      
      <div className = "card col-md-6 offset-md-3">
                            <h3 className = "text-center"> View Employee Details</h3>
                            <div className = "card-body">
                                <div className = "row">
                                    <label> Employee First Name:  </label>
                                    <div> { users.employee_name }</div>
                                </div>
                                <div className = "row">
                                    <label> Employee Last Name: </label>
                                    <div> { users.employee_surname }</div>
                                </div>
                                <div className = "row">
                                    <label> Employee  ID: </label>
                                    <div> { users.employee_registrationNumber }</div>
                                </div>
                            </div>
        
                        </div>
      
      </div>)
      
      

  
    }
  


    export default ViewEmployeeComponent;

