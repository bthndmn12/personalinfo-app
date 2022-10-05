import React, { Component,useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import EntryExitService from '../services/EntryExitService';

const ListEntryExitComponent = () =>  {

    

    const [entryexit, setInventoriesInfo] = useState([]);

    useEffect(() => {

        EntryExitService.getEntryExit()
            .then(response => {

                console.log('Printing employees data', response.data);
                setInventoriesInfo(response.data);
            })
            .catch(error => {
                console.log('Something went wrong', error);
            })
    }, []);

        return (
            <div>
                <Link className="btn btn-dark" to={`/create-entryexit/edit/${entryexit.entryexit_id}`}>Update</Link>
                <h2 className='text-center'>EntryExitData</h2>
                <div className='row'>
                <Link to="/">
                            <button className='btn btn-outline-dark btn-lg btn-block hBack'>&#8249; </button>
                        </Link>

                </div>
                <div className='row'>
                    <table className='table table-striped table-bordered'>

                        <thead>
                            <tr>
                                <th>Inventroy Info</th>
                                <th>Personal Info</th>
                                <th>Inventory Take Date</th>
                                <th>Inventory Back Date</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                               entryexit.map(entryexit =>
                                        <tr key={entryexit.entryexit_id}>
                                            <td>{entryexit.inventoryInformation.inventory_type}</td>
                                            <td>{entryexit.personalInformation.employee_name}</td>
                                            <td>{entryexit.entryexit_takedate}</td>
                                            <td>{entryexit.entryexit_backdate}</td>
                                            <td>
                                            <Link className="btn btn-dark" to={`/create-entryexit/edit/${entryexit.entryexit_id}`}>Update</Link>
                                            <button onClick={() => { EntryExitService.deleteInventory(entryexit.entryexit_id); window.location.reload() }} className="btn btn-danger">Delete</button>
                                            </td>
                                          
                                        </tr>
                                )

                            }
                        </tbody>
                    </table>
                </div>   
            </div>
        );
    }


export default ListEntryExitComponent;