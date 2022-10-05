import React, { Component } from 'react';
import InventoryService from '../services/InventoryService';
import { Link } from 'react-router-dom';


class CreateInventoryComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            inventory_id: '',
            inventory_type: '',
            inventory_entrancedate: '',
            inventory_date: '',
            inventory_model: '',
            inventory_serialnumber: '',
            inventory_statue: ''
        }
        this.changeInventoryTypeHandler = this.changeInventoryTypeHandler.bind(this);
        this.changeInventoryEntranceDate = this.changeInventoryEntranceDate.bind(this);
        this.changeDateHandler = this.changeDateHandler.bind(this);
        this.changeModelHandler = this.changeModelHandler.bind(this);
        this.changeSerialNumberHandler = this.changeSerialNumberHandler.bind(this);
        this.changeStatueHandler = this.changeStatueHandler.bind(this);
        this.saveInventory = this.saveInventory.bind(this);

    }

    saveInventory = (e) => {
        e.preventDefault();

        let inventory = {
            inventory_type: this.state.inventory_type,
            inventory_entrancedate: this.state.inventory_entrancedate,
            inventory_date: this.state.inventory_date,
            inventory_model: this.state.inventory_model,
            inventory_serialnumber: this.state.inventory_serialnumber,
            inventory_statue: this.state.inventory_statue
        };

        console.log('employee => ' + JSON.stringify(inventory));

        InventoryService.createInventory(inventory);
    }

    changeInventoryTypeHandler = (event) => {
        this.setState({ inventory_type: event.target.value });
    }

    changeInventoryEntranceDate = (event) => {
        this.setState({ inventory_entrancedate: event.target.value });
    }

    changeDateHandler = (event) => {
        this.setState({ inventory_date: event.target.value });
    }

    changeModelHandler = (event) => {
        this.setState({ inventory_model: event.target.value });
    }

    changeSerialNumberHandler = (event) => {
        this.setState({ inventory_serialnumber: event.target.value });
    }

    changeStatueHandler = (event) => {
        this.setState({ inventory_statue: event.target.value });
    }


    render() {
        return (
            <div>
                <div className='container'>
                    <div className='row'>
                        <Link to="/">
                            <button className='btn btn-outline-dark btn-lg btn-block hBack'>&#8249; </button>
                        </Link>
                        <div className='card col-md-6 offset-md-3 offset-md-3'>
                            <h3 className='text-center'>Add Inventory</h3>
                            <div className='card-body'>
                                <form>
                                    <div className='form-group'>
                                        <label htmlFor="">inventory_type:</label>
                                        <input placeholder='Name' className='form-control' value={this.state.inventory_type} onChange={this.changeInventoryTypeHandler} />
                                    </div>
                                    <div className='form-group'>
                                        <label htmlFor="">inventory_entrancedate:</label>
                                        <input type="date" placeholder='Surname' className='form-control' value={this.state.inventory_entrancedate} onChange={this.changeInventoryEntranceDate} />
                                    </div>
                                    <div className='form-group'>
                                        <label htmlFor="">inventory_date:</label>
                                        <input type="date" placeholder='Date' className='form-control' value={this.state.inventory_date} onChange={this.changeDateHandler} />
                                    </div>
                                    <div className='form-group'>
                                        <label htmlFor="">inventory_model:</label>
                                        <input placeholder='Martial Statue' className='form-control' value={this.state.inventory_model} onChange={this.changeModelHandler} />
                                    </div>
                                    <div className='form-group'>
                                        <label htmlFor="">inventory_serialnumber:</label>
                                        <input placeholder='TCKN' className='form-control' value={this.state.inventory_serialnumber} onChange={this.changeSerialNumberHandler} />
                                    </div>
                                    <div className='form-group'>
                                        <label htmlFor="">inventory_statue Number:</label>
                                        <input placeholder='Registration Number' className='form-control' value={this.state.inventory_statue} onChange={this.changeStatueHandler} />
                                    </div>
                                  
                                    <button className="btn btn-success" onClick={this.saveInventory}><Link to="/"> Save </Link> </button>
                                    {/* <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button> */}

                                </form>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default CreateInventoryComponent;