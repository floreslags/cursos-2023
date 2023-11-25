import React from 'react';
import { CrudTableRow } from './CrudTableRow';

export const CrudTable = ({data,setDataToEdit,deleteData}) => {
  return (
    <div>
        <h3>Data Table</h3>
        <table>
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Constelación</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                {data.length > 0?
                data.map(el=><CrudTableRow el={el} key={el.id} setDataToEdit={setDataToEdit} deleteData={deleteData}/>)
                :(
                    <tr>
                        <td colSpan="3">Sin Datos</td>
                    </tr>
                )
                }
            </tbody>
        </table>
    </div>
  )
}
