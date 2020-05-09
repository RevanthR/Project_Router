import React from 'react';

const DataValues = ({name,SSO,temp,Time}) => {
    return(
             <tbody>
                <tr>
                <th scope="row">{SSO}</th>
                <td>{name}</td>
                <td>{temp}</td>
                <td>{Time}</td>
                </tr>
            </tbody>
    );
};

export default DataValues;