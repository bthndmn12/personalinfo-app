import React, { Component } from 'react';
import { useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import { useEffect } from "react/cjs/react.development";
import employeeService from "../services/EmployeeServiceV2";
import CreateEmployeeComponent from "./CreateEmployeeComponent";

const CreateEmployeeComponentV2 = () => {
    const [employee_name, setName] = useState('');
    const [employee_surname, setSurname] = useState('');
    const [employee_registrationNumber, setRegistrationNumber] = useState('');
    const [employee_dateOfBirth, setDateOfBirth] = useState('');
    const [employee_graduationstatus, setGraduationStatus] = useState('');
    const [employee_martialStatue, setMartialStatue] = useState('');
    const [employee_tckn, setTCKN] = useState('');
    const [employee_workstatus, setworkstatus] = useState('');
    const [employee_department, setdepartment] = useState('');
    const [employee_task, setTask] = useState('');
    //const history = useHistory();
    // const params = useParams();
    //  const id = params.id;
    const { employee_id } = useParams();

    const saveEmployee = (e) => {
        e.preventDefault();

        const employee = {
            employee_id, employee_name, employee_surname, employee_registrationNumber
            , employee_tckn, employee_graduationstatus, employee_workstatus, employee_department, employee_task,
            employee_dateOfBirth, employee_martialStatue
        };
        // ,employee_tckn,employee_graduationstatus,employee_workstatus,employee_department,employee_task,
        // employee_dateOfBirth, employee_martialStatue

        if (employee_id) {
            //update
            employeeService.update(employee)
                .then(response => {
                    console.log('Employee data updated successfully', response.data);
                    //history.push('/');
                    Link.to('')
                })
                .catch(error => {
                    console.log('Something went wrong', error);
                })
        } else {
            //create
            employeeService.create(employee)
                .then(response => {
                    console.log("employee added successfully", response.data);
                    // history.push("/");
                })
                .catch(error => {
                    console.log('something went wroing', error);
                })
        }
    }

    useEffect(() => {
        if (employee_id) {
            employeeService.get(employee_id)
                .then(employee => {
                    setName(employee.data.employee_name);
                    setSurname(employee.data.employee_surname);
                    setRegistrationNumber(employee.data.employee_registrationNumber);
                    setDateOfBirth(employee.data.employee_dateOfBirth);
                    setGraduationStatus(employee.data.employee_graduationstatus);
                    setMartialStatue(employee.data.employee_martialStatue);
                    setTCKN(employee.data.employee_tckn);
                    setworkstatus(employee.data.employee_workstatus);
                    setdepartment(employee.data.employee_department);
                    setTask(employee.data.employee_task);

                })
                .catch(error => {
                    console.log('Something went wrong', error);
                })
        }
    }, [])
    return (
        <div className='card col-md-6 offset-md-3 offset-md-3'>
            <div className="container">
                <div className='card-body'>
                    <h3>Add Employee</h3>
                    <hr />
                    <form>
                        <div className="form-group row">
                            <label htmlFor="" class="col-sm-6 col-form-label">Name:</label>
                            <input
                                type="text"
                                className="form-control col-4"
                                id="name"
                                value={employee_name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder="Enter name"
                            />

                        </div>
                        <div className="form-group row">
                            <label class="col-sm-6 col-form-label" htmlFor="">Surname:</label>
                            <input
                                type="text"
                                className="form-control col-4"
                                id="employee_surname"
                                value={employee_surname}
                                onChange={(e) => setSurname(e.target.value)}
                                placeholder="Enter surname"
                            />

                        </div>
                        <div className="form-group row">
                            <label class="col-sm-6 col-form-label" htmlFor="">Registration Number:</label>
                            <input
                                type="text"
                                className="form-control col-4"
                                id="employee_registrationNumber"
                                value={employee_registrationNumber}
                                onChange={(e) => setRegistrationNumber(e.target.value)}
                                placeholder="Enter registration number"
                            />
                        </div>
                        <div className="form-group row">
                            <label class="col-sm-6 col-form-label" htmlFor="">Date:</label>
                            <input
                                type="date"
                                className="form-control col-4"
                                id="employee_dateOfBirth"
                                value={employee_dateOfBirth}
                                onChange={(e) => setDateOfBirth(e.target.value)}
                                placeholder="Enter Date Of Birth"
                            />

                        </div>
                        <div class="col-sm-6 col-form-label" className="form-group row">
                            {/* <input
                        type="text"
                        className="form-control col-4"
                        id="employee_graduationstatus"
                        value={employee_graduationstatus}
                        onChange={(e) => setGraduationStatus(e.target.value)}
                        placeholder="Enter Graduation Status"
                    /> */}
                            <label class="col-sm-6 col-form-label" htmlFor="">Graduation Status:</label>

                            <select id="employee_graduationstatus"

                                value={employee_graduationstatus} onChange={(e) => setGraduationStatus(e.target.value)}>
                                <option value="" disabled selected>Select your option</option>
                                <option value="IN_UNIVERSITY">IN_UNIVERSITY</option>
                                <option value="GRADUATED">GRADUATED</option>
                            </select>

                        </div>
                        <div class="col-sm-6 col-form-label" className="form-group row">
                            {/* <input 
                        type="text" 
                        className="form-control col-4"
                        id="employee_martialStatue"
                        value={employee_martialStatue}
                        onChange={(e) => setMartialStatue(e.target.value)}
                        placeholder="Enter Martial Statue"
                        
                    /> */}
                            <label class="col-sm-6 col-form-label" htmlFor="">Martial Statue:</label>
                            <select id="employee_martialStatue"
                                value={employee_martialStatue} onChange={(e) => setMartialStatue(e.target.value)}>
                                <option value="" disabled selected>Select your option</option>
                                <option value="SINGLE">SINGLE</option>
                                <option value="MARRIED">MARRIED</option>
                            </select>
                        </div>
                        <fieldset disabled>
                        <div className="form-group row">
                            
                                <label class="col-sm-6 col-form-label" htmlFor="">TCKN:</label>
                                <input
                                    type="text"
                                    className="form-control col-4"
                                    id="employee_tckn"
                                    value={employee_tckn}
                                    onChange={(e) => setTCKN(e.target.value)}
                                    placeholder="Enter TCKN"
                                />
                          
                        </div>
                        </fieldset>
                        <div className="form-group row">
                            {/* <input
                        type="text"
                        className="form-control col-4"
                        id="employee_workstatus"
                        value={employee_workstatus}
                        onChange={(e) => setworkstatus(e.target.value)}
                        placeholder="Enter Status"
                    /> */}
                            <label class="col-sm-6 col-form-label" htmlFor="">Work Statue:</label>
                            <select id="employee_workstatus"
                                value={employee_workstatus} onChange={(e) => setworkstatus(e.target.value)}>
                                <option value="" disabled selected>Select your option</option>
                                <option value="WORKING">Working</option>
                                <option value="ON_HOLIDAY">On Holiday</option>
                            </select>
                        </div>
                        <div className="form-group row">
                            {/* <input
                        type="text"
                        className="form-control col-4"
                        id="employee_department"
                        value={employee_department}
                        onChange={(e) => setdepartment(e.target.value)}
                        placeholder="Enter Department"
                    /> */}
                            <label class="col-sm-6 col-form-label" htmlFor="">Department:</label>
                            <select id="employee_department"
                                value={employee_department} onChange={(e) => setdepartment(e.target.value)}>
                                <option value="" disabled selected>Select your option</option>
                                <option value="HR">HR</option>
                                <option value="TRAINING">TRAINING</option>
                                <option value="FINANCE">FINANCE</option>
                                <option value="SALES">SALES</option>
                                <option value="DEVELOPMENT">DEVELOPMENT</option>
                            </select>

                        </div>
                        <div className="form-group">
                            {/* <input
                        type="text"
                        className="form-control col-4"
                        id="employee_task"
                        value={employee_task}
                        onChange={(e) => setTask(e.target.value)}
                        placeholder="Enter Task"
                    /> */}
                            <label class="col-sm-6 col-form-label" htmlFor="">Task:</label>
                            <select id="employee_task"
                                value={employee_task} onChange={(e) => setTask(e.target.value)}>
                                <option value="" disabled selected>Select your option</option>
                                <option value="WEB_DEVELOPER">WEB_DEVELOPER</option>
                                <option value="JAVA_DEVELOPER">JAVA_DEVELOPER</option>
                                <option value="DATA_ANALYST">DATA_ANALYST</option>
                            </select>
                        </div>
                        <div class="vertical-center">
                            <button id='left_button' onClick={(e) => saveEmployee(e)} className="btn btn-primary">Save</button>
                            <Link id='right_button' to="/employees" className="btn btn-primary" >Back to List</Link>
                        </div>
                    </form>
                    <hr />
                </div>
            </div>
        </div>

    )
}

export default CreateEmployeeComponentV2;