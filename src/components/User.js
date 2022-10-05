import React from 'react'

const User = ({ user }) => {
  return (
     <div className='row'>
{/* <table className='table table-striped table-bordered'>

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
                    <tr key={user.employee_id}>
                        <td>{user.employee_registrationNumber}</td>
                        <td>{user.employee_name}</td>
                        <td>{user.employee_surname}</td>
                        <td>{user.employee_dateOfBirth}</td>
                        <td>{user.employee_martialStatue}</td>
                        <td>{user.employee_tckn}</td>
                        <td>{user.employee_graduationstatus}</td>
                        <td>{user.employee_workstatus}</td>
                        <td>{user.employee_department}</td>
                        <td>{user.employee_task}</td>
                        <td>
                        </td>
                    </tr>
            
         
        }
    </tbody>
</table> */}
<div>
      <hr />
      <p>{`Full Name: ${user.employee_name} ${user.employee_surname}`}</p>
      <p>{`RN: ${user.employee_registrationNumber}`}</p>
    </div>
</div>
  )
}

export default User

