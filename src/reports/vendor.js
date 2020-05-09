import React,{useContext} from 'react';
import {DataContext} from './context';
import DataValues from './data';
import Form from './filter';

const Vendor = () => {
    const [data,setData] = useContext(DataContext);
    return(
        <div>
            <Form />
            <br></br>
            <table className="table">
                <thead className="thead-dark">
                    <tr>
                    <th scope="col">Vendor ID</th>
                    <th scope="col">Vendor Name</th>
                    <th scope="col">Temperature</th>
                    <th scope="col">Time of Entry</th>
                    </tr>
                </thead>
                {data.map (data => 
                    <DataValues SSO={data.SSO} name={data.name} temp={data.temp} Time={data.Time} key={data.SSO}/>    
                )}
               
            </table>
        </div>
    );
}

export default Vendor;