import React, { Component } from 'react';
import { useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import { useEffect } from "react/cjs/react.development";
import EntryExitService from '../services/EntryExitService';

const CreateEntryExitComponent = () => {
    const [entryexit_takedate, setTakeDate] = useState('');
    const [entryexit_backdate, setBackDate] = useState('');
    const [employee_id, setEmployee] = useState('');
    const [inventory_id, setInventory] = useState('');

    const { entryexit_id } = useParams();


    const saveEmployee = (e) => {
        e.preventDefault();

        const entryexit = {
            employee_id, entryexit_takedate, entryexit_backdate, inventory_id
        
        };
        // ,employee_tckn,employee_graduationstatus,employee_workstatus,employee_department,employee_task,
        // employee_dateOfBirth, employee_martialStatue

        const data = [entryexit_id,entryexit_takedate,entryexit_backdate];
        if (entryexit_id) {
            //update
            EntryExitService.updateEntryExit(data)
                .then(response => {

                    console.log('Employee data updated successfully', response.data);
                    //history.push('/');
                    Link.to('')
                })
                .catch(error => {
                    console.log(entryexit);
                    console.log('Something went wrong', error);
                })
        } 
        else {
            //create
            const params = [entryexit_backdate,entryexit_takedate];
            EntryExitService.createEntryExit(inventory_id,employee_id,params)
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
        if (entryexit_id) {
            EntryExitService.getEntryExitFromId(entryexit_id)
                .then(entryexit => {
                    setTakeDate(entryexit.data.entryexit_takedate);
                    setBackDate(entryexit.data.entryexit_backdate);
                    setEmployee(entryexit.data.personalInformation);
                    setInventory(entryexit.data.inventoryInformation);
                    console.log(entryexit.data);
                                        })
                .catch(error => {
                    console.log('Something went wrong', error);
                })
        }
    }, [])

        return (
            
            <div>
                 
                 <h3>Entry Exit Info</h3>
            <hr />
            <form>
                <div className="form-group">
                <label htmlFor="">TakeDate:</label>
                    <input
                        type="date"
                        className="form-control col-4"
                        id="entryexit_takedate"
                        value={entryexit_takedate}
                        onChange={(e) => setTakeDate(e.target.value)}
                        placeholder="Enter name"
                    />

                </div>
                <div className="form-group">
                <label htmlFor="">BackDate:</label>
                    <input
                        type="date"
                        className="form-control col-4"
                        id="entryexit_backdate"
                        value={entryexit_backdate}
                        onChange={(e) => setBackDate(e.target.value)}
                        placeholder="Enter surname"
                    />

                </div>
                <div className="form-group">
                <label htmlFor="">Inventory:</label>
                    <input
                        type="text"
                        className="form-control col-4"
                        id="inventory_id"
                        value={inventory_id}
                        onChange={(e) => setInventory(e.target.value)}
                        placeholder="Enter registration number"
                    />
                </div>
                <div className="form-group">
                     <label htmlFor="">Employee:</label>
                    <input
                        type="text"
                        className="form-control col-4"
                        id="employee_id"
                        value={employee_id}
                        onChange={(e) => setEmployee(e.target.value)}
                        placeholder="Enter Date Of Birth"
                    />

                </div>
                <button id='left_button' onClick={(e) => saveEmployee(e)} className="btn btn-primary">Save</button>
                </form>
            </div>
            
        );
    
}

export default CreateEntryExitComponent;