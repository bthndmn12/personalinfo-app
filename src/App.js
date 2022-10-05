import React from 'react';
import './App.css';
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import ListEmployeeComponent from './components/ListEmployeeComponent';

import CreateEmployeeComponent from './components/CreateEmployeeComponent.jsx';
import ListInventoryComponent from './components/ListInventoryComponent';
import CreateInventoryComponent from './components/CreateInventoryComponent';
import ListEntryExitComponent from './components/ListEntryExitComponent';
import UpdateEmployeeComponent from './components/UpdateEmployeeComponent';
import ViewEmployeeComponent from './components/ViewEmployeeComponent';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import PaginationComponent from './components/PaginationComponent';
import CreateEmployeeListV2 from './components/CreateEmployeeListV2';
import CreateEmployeeComponentV2 from './components/CreateEmployeeComponentV2';
import CreateEntryExitComponent from './components/CreateEntryExitComponent';

function App() {
  return (
    <div>
      <Router>
        <div className="container">
          <HeaderComponent />
          <div className="container">
            <Routes>
              <Route path="/" exact element={<CreateEmployeeListV2 />} />
              <Route path='/personalinfo' element={<ListEmployeeComponent />} />
              <Route path='/add-employee' element={<CreateEmployeeComponentV2 />} />
              <Route path='/list-inventory' element={<ListInventoryComponent />} />
              <Route path='/add-inventory' element={<CreateInventoryComponent />} />
              <Route path='/list-entryexit' element={<ListEntryExitComponent />} />
              <Route path='/update/:id' element={<UpdateEmployeeComponent />} />
              <Route path='/view/:id' element={<ViewEmployeeComponent />} />
              <Route path='/page' element={<PaginationComponent />} />
              <Route path="/employees" exact element={<CreateEmployeeListV2 />} />
              <Route path='/employees/edit/:employee_id' exact element={<CreateEmployeeComponentV2 />} />
              <Route path='/create-entryexit/edit/:entryexit_id' exact element={<CreateEntryExitComponent />} />

            </Routes>
          </div>
          {/* <FooterComponent /> */}
        </div>
      </Router>
    </div>

  );
}

export default App;
