import React, { useState,useEffect } from 'react';
import { CrudForm } from './CrudForm';
import { CrudTable } from './CrudTable';
import { helpHttp } from '../helpers/helpHttp';
import { Loader } from './Loader';
import { Message } from './Message';

export const CrudApi = () => {

    // Definición de variables de estado
    
    const [db, setDb] = useState(null);
    const [dataToEdit, setDataToEdit] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    
    // Invocación de recursos del api, url y helper fetch
    let url = "http://localhost:5000/saints";
    // let api = helpHttp();

    // Declarción de los métodos useEffect para la manipulación de los datos y variables de estado
    useEffect(()=>{
        setLoading(true);
        helpHttp().get(url).then((res)=>{
            // console.log(res)
            if(!res.err){
                setDb(res);
                setError(null);
            }else{
                setDb(null);
                setError(res);
            }
            setLoading(false);
        })
    },[url]);
    
    // Declarción de los métodos CRUD
    const createData = (data)=>{
        data.id = Date.now();
        let options = {body:data,headers:{"content-type":"application/json"}}
        helpHttp().post(url,options)
        .then(res=>{
            if(!res.err){
                setDb([...db,res]);
            }else{
                setError(res);
            }
        });

    }

    const updateData = (data)=>{
        let endpoint = `${url}/${data.id}`;
        let options = {body:data,headers:{"content-type":"application/json"}};

        helpHttp().put(endpoint,options)
        .then(res=>{
            if(!res.err){
                let newData = db.map(el=> el.id === data.id ? data:el); 
                setDb(newData);
                // setDb([...db,res]);
            }else{
                setError(res);
            }
        });
    }

    const deleteData = (id)=>{
        
        let toDelete = window.confirm(`Are you sure to delete the item with id ${id}`);
        
        if(toDelete){
            let endpoint = `${url}/${id}`;
            let options = {headers:{"content-type":"application/json"}};

            helpHttp().del(endpoint,options)
            .then(res=>{
                if(!res.err){
                    let newData = db.filter(el=>el.id !== id);
                    setDb(newData);
                }else{
                    setError(res);
                }
            });
            
        }else{
            return;
        }
    }

    return (
        <div>
            <h2>CRUD API REST</h2>
            <article className="grid-1-2">
                <CrudForm createData={createData} updateData={updateData} dataToEdit={dataToEdit} setDataToEdit={setDataToEdit}/>
                {loading && <Loader/>}
                {error && <Message msg={`Error ${error.status}:${error.statusText}`} bgColor="#dc3545"/>}
                {db && <CrudTable data={db} setDataToEdit={setDataToEdit} deleteData={deleteData}/>}
            </article>
        </div>
    )
}
