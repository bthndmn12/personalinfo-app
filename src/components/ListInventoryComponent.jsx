import React, { Component,useEffect, useState, useTable } from 'react';
import InventoryService from '../services/InventoryService';
import { Link } from 'react-router-dom';

const ListInventoryComponent = () => {


    const [inventory, setInventories] = useState([]);

    useEffect(() => {

        InventoryService.getInventory()
            .then(response => {

                console.log('Printing employees data', response.data);
                setInventories(response.data);
            })
            .catch(error => {
                console.log('Something went wrong', error);
            })
    }, []);

    
        return (
            <div>
                <h2 className='text-center'>Inventory</h2>
                <div className='row'>
                    <Link to="/">
                        <button className='btn btn-outline-dark btn-lg btn-block hBack'>&#8249; </button>
                    </Link>
                    <Link to="/add-inventory">
                        <button className='btn btn-outline-dark btn-lg btn-block'>Add Inventory</button>
                    </Link>
                </div>
                <div className='row'>
                    <table className='table table-striped table-bordered'>

                        <thead>
                            <tr>
                                <th>Inventory Type</th>
                                <th>Inventory Entrance Date</th>
                                <th>Inventory Exit Date</th>
                                <th>Inventory Model</th>
                                <th>Inventory Serial Number</th>
                                <th>Inventory Statue</th>
                                <th></th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                inventory.map(inventory => (
                                    <tr key={inventory.inventory_id}>

                                        <td>{inventory.inventory_type}</td>
                                        <td>{inventory.inventory_entrancedate}</td>
                                        <td>{inventory.inventory_date}</td>
                                        <td>{inventory.inventory_model}</td>
                                        <td>{inventory.inventory_serialnumber}</td>
                                        <td>{inventory.inventory_statue}</td>
                                        <td>
                                        <button onClick={() => { InventoryService.deleteInventory(inventory.inventory_id); window.location.reload() }} className="btn btn-danger">Delete</button>
                                        </td>
                                        
                                    </tr>
                                ))

                            }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }


export default ListInventoryComponent;