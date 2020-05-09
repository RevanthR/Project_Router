import React,{useState,createContext} from 'react';
export const DataContext =createContext();

export const DataProvider = props => {
    const [data,setData] = useState([
        {
            name: 'Revanth',
            SSO: 240038081,
            temp: 97.5,
            Time : '12:00'
        },
        {
            name: 'Sandeep',
            SSO: 240038031,
            temp: 98.5,
            Time : '12:00'
        },
        {
            name: 'Harika',
            SSO: 240038075,
            temp: 107.5,
            Time : '12:00'
        },
        {
            name: 'Rajas',
            SSO: 240038078,
            temp: 94.5,
            Time : '11:00'
        },
        {
            name: 'Vanitha',
            SSO: 240038080,
            temp: 98.5,
            Time : '22:00'
        }
])
return (
    <DataContext.Provider value ={[data,setData]}>
        {props.children}
    </DataContext.Provider>
);

};