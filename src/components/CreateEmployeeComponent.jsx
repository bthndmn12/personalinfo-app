import React, { Component } from 'react';
import EmployeeService from '../services/EmployeeService';
import { Link } from 'react-router-dom';


class CreateEmployeeComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            employee_name: '',
            employee_surname: '',
            employee_dateOfBirth: '',
            employee_martialStatue: '',
            employee_tckn: '',
            employee_registrationNumber: '',
            employee_graduationstatus: '',
            employee_workstatus: '',
            employee_department: '',
            employee_task: ''
        }
        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changeSecondNameHandler = this.changeSecondNameHandler.bind(this);
        this.changeDateHandler = this.changeDateHandler.bind(this);
        this.changeMartialStatusHandler = this.changeMartialStatusHandler.bind(this);
        this.changeTCKNHandler = this.changeTCKNHandler.bind(this);
        this.changeRegistrationNumberHandler = this.changeRegistrationNumberHandler.bind(this);
        this.changeGraduationStatusHandler = this.changeGraduationStatusHandler.bind(this);
        this.changeWorkStatusHandler = this.changeWorkStatusHandler.bind(this);
        this.changeDepartmentHandler = this.changeDepartmentHandler.bind(this);
        this.changeTaskStatusHandler = this.changeTaskStatusHandler.bind(this);


        this.saveEmployee = this.saveEmployee.bind(this);

    }

    saveEmployee = (e) => {
        e.preventDefault();

        let employee = {
            employee_name: this.state.employee_name,
            employee_surname: this.state.employee_surname,
            employee_dateOfBirth: this.state.employee_dateOfBirth,
            employee_graduationstatus: this.state.employee_graduationstatus,
            employee_martialStatue: this.state.employee_martialStatue,
            employee_tckn: this.state.employee_tckn,
            employee_workstatus: this.state.employee_workstatus,
            employee_registrationNumber: this.state.employee_registrationNumber,
            employee_department: this.state.employee_department,
            employee_task: this.state.employee_task
        };

        console.log('employee => ' + JSON.stringify(employee));

        EmployeeService.createEmployee(employee);
    }

    changeFirstNameHandler = (event) => {
        this.setState({ employee_name: event.target.value });
    }

    changeSecondNameHandler = (event) => {
        this.setState({ employee_surname: event.target.value });
    }

    changeDateHandler = (event) => {
        this.setState({ employee_dateOfBirth: event.target.value });
    }

    changeMartialStatusHandler = (event) => {
        this.setState({ employee_martialStatue: event.target.value });
    }

    changeTCKNHandler = (event) => {
        this.setState({ employee_tckn: event.target.value });
    }

    changeRegistrationNumberHandler = (event) => {
        this.setState({ employee_registrationNumber: event.target.value });
    }

    changeGraduationStatusHandler = (event) => {
        this.setState({ employee_graduationstatus: event.target.value });
    }

    changeWorkStatusHandler = (event) => {
        this.setState({ employee_workstatus: event.target.value });
    }
    changeDepartmentHandler = (event) => {
        this.setState({ employee_department: event.target.value });
    }
    changeTaskStatusHandler = (event) => {
        this.setState({ employee_task: event.target.value });
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
                            <h3 className='text-center'>Add Employee</h3>
                            <div className='card-body'>
                                <form>
                                    <div className='form-group'>
                                        <label htmlFor="">Name:</label>
                                        <input placeholder='Name' className='form-control' value={this.state.employee_name} onChange={this.changeFirstNameHandler} />
                                    </div>
                                    <div className='form-group'>
                                        <label htmlFor="">Surname:</label>
                                        <input placeholder='Surname' className='form-control' value={this.state.employee_surname} onChange={this.changeSecondNameHandler} />
                                    </div>
                                    <div className='form-group'>
                                        <label htmlFor="">Date:</label>
                                        <input type="date" placeholder='Date' className='form-control' value={this.state.employee_dateOfBirth} onChange={this.changeDateHandler} />
                                    </div>
                                    <div className='form-group'>
                                        <label htmlFor="">Martial Statue:</label>
                                        <select value={this.state.value} onChange={this.changeMartialStatusHandler}>
                                            <option value="SINGLE">SINGLE</option>
                                            <option value="MARRIED">MARRIED</option>
                                        </select>
                                    </div>
                                    <div className='form-group'>
                                        <label htmlFor="">TCKN:</label>
                                        <input placeholder='TCKN' className='form-control' value={this.state.employee_tckn} onChange={this.changeTCKNHandler} />
                                    </div>
                                    <div className='form-group'>
                                        <label htmlFor="">Registration Number:</label>
                                        <input placeholder='Registration Number' className='form-control' value={this.state.employee_registrationNumber} onChange={this.changeRegistrationNumberHandler} />
                                    </div>
                                    <div className='form-group'>
                                        <label htmlFor="">Graduation Status:</label>
                                        <select value={this.state.value} onChange={this.changeGraduationStatusHandler}>
                                            <option value="IN_UNIVERSITY">IN_UNIVERSITY</option>
                                            <option value="GRADUATED">GRADUATED</option>
                                        </select>

                                    </div>
                                    <div className='form-group'>
                                        <label htmlFor="">Work Statue:</label>
                                        <select value={this.state.value} onChange={this.changeWorkStatusHandler}>
                                            <option value="WORKING">WORKING</option>
                                            <option value="ON_HOLIDAY">ON_HOLIDAY</option>
                                        </select>
                                    </div>
                                    <div className='form-group'>
                                        <label htmlFor="">Department:</label>
                                        <select value={this.state.value} onChange={this.changeDepartmentHandler}>
                                            <option value="HR">HR</option>
                                            <option value="TRAINING">TRAINING</option>
                                            <option value="FINANCE">FINANCE</option>
                                            <option value="SALES">SALES</option>
                                            <option value="DEVELOPMENT">DEVELOPMENT</option>
                                        </select>

                                    </div>
                                    <div className='form-group'>
                                        <label htmlFor="">Task:</label>
                                        <select value={this.state.value} onChange={this.changeTaskStatusHandler}>
                                            <option value="WEB_DEVELOPER">WEB_DEVELOPER</option>
                                            <option value="JAVA_DEVELOPER">JAVA_DEVELOPER</option>
                                            <option value="DATA_ANALYST">DATA_ANALYST</option>
                                        </select>

                                    </div>
                                
                                    <button className="btn btn-success" onClick={this.saveEmployee}><Link to="/"> Save </Link> </button>
                                    {/* <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button> */}

                                </form>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default CreateEmployeeComponent;