import React from 'react';
import Employee from './employee';
import Vendor from './vendor';
import {DataProvider} from './context';
import './App.css';

function App() {
  
  return (
    <DataProvider>
      <div className="App">
        <nav>
          <div className="nav nav-tabs" id="nav-tab" role="tablist">
              <a className="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">Employees</a>
              <a className="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false">Vendors</a>
          </div>
        </nav>
          <div className="tab-content" id="nav-tabContent">
            <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab"><Employee/></div>
            <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab"><Vendor /></div>
          </div>

      </div>  
    </DataProvider>
  );
}

export default App;
