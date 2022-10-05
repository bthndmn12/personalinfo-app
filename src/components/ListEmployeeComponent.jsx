import React, { Component } from 'react';
import EmployeeService from '../services/EmployeeService';
// import LinkButton from '../components/LinkButton'
import { Link } from 'react-router-dom';
import { Button, ButtonGroup, Table } from 'reactstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


class ListEmployeeComponent extends Component {

    constructor(props) {

      super(props)
       console.log(this);

        this.state = {
            employees: []
        }
    
        this.deleteEmployee = this.deleteEmployee.bind(this);
       // this.viewEmployee = this.viewEmployee.bind(this);
        
    }

    deleteEmployee(employee_id) {
        EmployeeService.deleteEmployee(employee_id);
    }
    
    editEmployee(employee_id){
        // const { history } = this.props;
        // history.push(`/add-employee/${id}`)

  //this.context.history.push(`/update/${employee_id}`);
    // <Link to='/update/${employee_id}'> </Link>
    /*const { history } = this.props;
    history.push('/update/${employee_id}')
    */
    // const navigate = useNavigate();
    // navigate('/update/${employee_id}');
   
}

 

    componentDidMount() {
        EmployeeService.getEmployees().then((res) => {
            this.setState({ employees: res.data })
        });
    }



    render() {

       function viewEmployee(id){
            // const { history } = this.props;
            // history.push('/view-employee/${id}');
            console.log(this);
           this.window.history.push(`/view-employee/${id}`); 
           
        }

        return (
            <div>
                <div className='row'>
           

                </div>
    
                <div className='row'>
                    <table className='table table-striped table-bordered'>

                        <thead>
                            <tr>
                                <th>Employee Registration Number</th>
                                <th>Employee First Name</th>
                                <th>Employee Surname</th>
                                <th>Employee Date of Birth</th>
                                <th>Employee Martial Statue</th>
                                <th>Employee TCKN</th>
                                <th>Employee Graduation Status</th>
                                <th>Employee Work Status</th>
                                <th>Employee Department</th>
                                <th>Employee Task</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                this.state.employees.map(
                                    employee =>
                                        <tr key={employee.employee_id}>
                                            <td>{employee.employee_registrationNumber}</td>
                                            <td>{employee.employee_name}</td>
                                            <td>{employee.employee_surname}</td>
                                            <td>{employee.employee_dateOfBirth}</td>
                                            <td>{employee.employee_martialStatue}</td>
                                            <td>{employee.employee_tckn}</td>
                                            <td>{employee.employee_graduationstatus}</td>
                                            <td>{employee.employee_workstatus}</td>
                                            <td>{employee.employee_department}</td>
                                            <td>{employee.employee_task}</td>
                                            <td>
                                          
                                                <button className="btn btn-info">  <Link to='/update/${employee_id}'> Update</Link> </button>
                                                <button onClick={() => { this.deleteEmployee(employee.employee_id); window.location.reload() }} className="btn btn-danger">Delete</button>
                                                {/* <button style={{marginLeft: "10px"}} onClick={ () => this.viewEmployee(employee.employee_id)}className="btn btn-info">View </button> */}
                                                <Button size="sm" color="primary" tag={Link} to={"/view/" + employee.employee_id}>Edit</Button>
                                                <Button size="sm" color="primary" tag={Link} to={"/update/" + employee.employee_id}>Edit</Button>
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
}



export default ListEmployeeComponent;