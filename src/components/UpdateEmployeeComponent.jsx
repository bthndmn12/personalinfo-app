import React, { Component,useState, useEffect } from 'react';
import EmployeeService from '../services/EmployeeService';
import { Link,useSearchParams,useParams } from 'react-router-dom';

// class UpdateEmployeeComponent extends Component {

//     const params = useParams();
//     constructor(props) {
//         super(props)
        
//         const id = params.id;
//        // const params = new URLSearchParams(window.location.pathname);
//        // const [searchParams] = useSearchParams();
//         this.state = {

            
            
//             employee_id: id,
//             employee_name: '',
//             employee_surname: '',
//             employee_dateOfBirth: '',
//             employee_martialStatue: '',
//             employee_tckn: '',
//             employee_registrationNumber: '',
//             employee_graduationstatus: '',
//             employee_workstatus: '',
//             employee_department: '',
//             employee_task: ''
//         }

//         this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
//         this.changeSecondNameHandler = this.changeSecondNameHandler.bind(this);
//         this.changeDateHandler = this.changeDateHandler.bind(this);
//         this.changeMartialStatusHandler = this.changeMartialStatusHandler.bind(this);
//         this.changeTCKNHandler = this.changeTCKNHandler.bind(this);
//         this.changeRegistrationNumberHandler = this.changeRegistrationNumberHandler.bind(this);
//         this.changeGraduationStatusHandler = this.changeGraduationStatusHandler.bind(this);
//         this.changeWorkStatusHandler = this.changeWorkStatusHandler.bind(this);
//         this.changeDepartmentHandler = this.changeDepartmentHandler.bind(this);
//         this.changeTaskStatusHandler = this.changeTaskStatusHandler.bind(this);
//     }

//     componentDidMount(){
//         EmployeeService.getEmployees(this.state.employee_id).then(
//             (res) => {
//                 let employee = res.data;
//                 this.setState({
//                     employee_name: employee.employee_name,
//                     employee_surname:employee.employee_surname,
//                     employee_dateOfBirth:employee.employee_dateOfBirth,
//                     employee_department:employee.employee_department,
//                     employee_graduationstatus:employee.employee_graduationstatus,
//                     employee_martialStatue:employee.employee_martialStatue,
//                     employee_registrationNumber:employee.employee_registrationNumber,
//                     employee_task:employee.employee_task,
//                     employee_tckn:employee.employee_tckn,
//                     employee_workstatus:employee.employee_workstatus
//                 });
//             });
//     }

//     updateEmployee = (e) => {
//         e.preventDefault();
//         let employee = {employee_name: this.state.employee_name, employee_surname: this.state.employee_surname, employee_dateOfBirth: this.state.employee_dateOfBirth,
//             employee_department: this.state.employee_department, employee_graduationstatus: this.state.employee_graduationstatus,employee_martialStatue: this.state.employee_martialStatue,
//             employee_registrationNumber: this.state.employee_registrationNumber,employee_task: this.state.employee_task,
//             employee_tckn: this.state.employee_tckn,employee_workstatus: this.state.employee_workstatus};
//         console.log('employee => ' + JSON.stringify(employee));
//         console.log('id => ' + JSON.stringify(this.state.employee_id));

//         EmployeeService.updateEmployee(employee,this.state.employee_id);
//     }
//     changeFirstNameHandler = (event) => {
//         this.setState({ employee_name: event.target.value });
//     }

//     changeSecondNameHandler = (event) => {
//         this.setState({ employee_surname: event.target.value });
//     }

//     changeDateHandler = (event) => {
//         this.setState({ employee_dateOfBirth: event.target.value });
//     }

//     changeMartialStatusHandler = (event) => {
//         this.setState({ employee_martialStatue: event.target.value });
//     }

//     changeTCKNHandler = (event) => {
//         this.setState({ employee_tckn: event.target.value });
//     }

//     changeRegistrationNumberHandler = (event) => {
//         this.setState({ employee_registrationNumber: event.target.value });
//     }

//     changeGraduationStatusHandler = (event) => {
//         this.setState({ employee_graduationstatus: event.target.value });
//     }

//     changeWorkStatusHandler = (event) => {
//         this.setState({ employee_workstatus: event.target.value });
//     }
//     changeDepartmentHandler = (event) => {
//         this.setState({ employee_department: event.target.value });
//     }
//     changeTaskStatusHandler = (event) => {
//         this.setState({ employee_task: event.target.value });
//     }

//     render() {
//         return (
//             <div>
//             <div className='container'>
//                 <div className='row'>
//                     <Link to="/">
//                         <button className='btn btn-outline-dark btn-lg btn-block hBack'>&#8249; </button>
//                     </Link>
//                     <div className='card col-md-6 offset-md-3 offset-md-3'>
//                         <h3 className='text-center'>Add Employee</h3>
//                         <div className='card-body'>
//                             <form>
//                                 <div className='form-group'>
//                                     <label htmlFor="">Name:</label>
//                                     <input placeholder='Name' className='form-control' value={this.state.employee_name} onChange={this.changeFirstNameHandler} />
//                                 </div>
//                                 <div className='form-group'>
//                                     <label htmlFor="">Surname:</label>
//                                     <input placeholder='Surname' className='form-control' value={this.state.employee_surname} onChange={this.changeSecondNameHandler} />
//                                 </div>
//                                 <div className='form-group'>
//                                     <label htmlFor="">Date:</label>
//                                     <input type="date" placeholder='Date' className='form-control' value={this.state.employee_dateOfBirth} onChange={this.changeDateHandler} />
//                                 </div>
//                                 <div className='form-group'>
//                                     <label htmlFor="">Martial Statue:</label>
//                                     <select value={this.state.value} onChange={this.changeMartialStatusHandler}>
//                                         <option value="SINGLE">SINGLE</option>
//                                         <option value="MARRIED">MARRIED</option>
//                                     </select>
//                                 </div>
//                                 <div className='form-group'>
//                                     <label htmlFor="">TCKN:</label>
//                                     <input placeholder='TCKN' className='form-control' value={this.state.employee_tckn} onChange={this.changeTCKNHandler} />
//                                 </div>
//                                 <div className='form-group'>
//                                     <label htmlFor="">Registration Number:</label>
//                                     <input placeholder='Registration Number' className='form-control' value={this.state.employee_registrationNumber} onChange={this.changeRegistrationNumberHandler} />
//                                 </div>
//                                 <div className='form-group'>
//                                     <label htmlFor="">Graduation Status:</label>
//                                     <select value={this.state.value} onChange={this.changeGraduationStatusHandler}>
//                                         <option value="IN_UNIVERSITY">IN_UNIVERSITY</option>
//                                         <option value="GRADUATED">GRADUATED</option>
//                                     </select>

//                                 </div>
//                                 <div className='form-group'>
//                                     <label htmlFor="">Work Statue:</label>
//                                     <select value={this.state.value} onChange={this.changeWorkStatusHandler}>
//                                         <option value="WORKING">WORKING</option>
//                                         <option value="ON_HOLIDAY">ON_HOLIDAY</option>
//                                     </select>
//                                 </div>
//                                 <div className='form-group'>
//                                     <label htmlFor="">Department:</label>
//                                     <select value={this.state.value} onChange={this.changeDepartmentHandler}>
//                                         <option value="HR">HR</option>
//                                         <option value="TRAINING">TRAINING</option>
//                                         <option value="FINANCE">FINANCE</option>
//                                         <option value="SALES">SALES</option>
//                                         <option value="DEVELOPMENT">DEVELOPMENT</option>
//                                     </select>

//                                 </div>
//                                 <div className='form-group'>
//                                     <label htmlFor="">Task:</label>
//                                     <select value={this.state.value} onChange={this.changeTaskStatusHandler}>
//                                         <option value="WEB_DEVELOPER">WEB_DEVELOPER</option>
//                                         <option value="JAVA_DEVELOPER">JAVA_DEVELOPER</option>
//                                         <option value="DATA_ANALYST">DATA_ANALYST</option>
//                                     </select>

//                                 </div>
                            
//                                 <button className="btn btn-success" onClick={this.updateEmployee}><Link to="/"> Save </Link> </button>
//                                 {/* <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button> */}

//                             </form>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//         </div>
//         );
//     }
// }
const UpdateEmployeeComponent = () => {
    const[name, setName] = useState('');
    const {id} = useParams();
    console.log(id);
    const saveEmployee = (e) => {
        e.preventDefault();
        
        const employee = {name};
        if (id) {
            //update
            EmployeeService.updateEmployee(employee,id)
                .then(response => {
                    console.log('Employee data updated successfully', response.data);
                })
                .catch(error => {
                    console.log('Something went wrong', error);
                }) 
        } 
    }

    useEffect(() => {
        if (id) {
            EmployeeService.getEmployee(id)
                .then(employee => {
                    setName(employee.data.employee_name);
                    console.log(employee.data.employee_name);
                })
                .catch(error => {
                    console.log('Something went wrong', error);
                })
        }
    }, [])
    return(
        <div className="container">
            <h3>Add Employee</h3>
            <hr/>
            <form>
                <div className="form-group">
                    <input 
                        type="text" 
                        className="form-control col-4"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Enter name"
                    />

                </div>
                
                <div >
                    <button onClick={(e) => saveEmployee(e)} className="btn btn-primary">Save</button>
                </div>
            </form>
            <hr/>
            <Link to="/">Back to List</Link>
        </div>
    )
}


export default UpdateEmployeeComponent;