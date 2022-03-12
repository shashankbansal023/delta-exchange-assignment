import React from 'react'
import {useSelector , useDispatch} from 'react-redux'
import Checkbox from '../Checkbox'
import Button from '../Button'
import './index.css'

const Table=({rowData})=>{

    const columns = ["name" , "company" , "status" ,"notes"];
    const  headers = ["Name" , "Company" ,"Status" , "Notes"];
    const dispatch = useDispatch();

    function deleteItem(index){
        dispatch({
            type:"deleteItem",
            payload:index
        })
    }

    return (
        <div className='table-container'>
        <table>
            <thead>
                <tr>
                    <Checkbox/>
                    {
                        headers.map((header,index)=>{
                            return <th key={index}>{header}</th>
                        })
                    }
                </tr>
            </thead>
            <tbody>
                {
                    rowData.map((row,index)=>{
                        return (
                            <>
                            <tr key={index}>
                            <Checkbox/>
                                {
                                   
                                    columns.map((col,index)=>{
                                        return <td key={index}>{row[col]}</td>
                                    })
                                }
                                <Button style={{
                                    padding: '15px 40px',
                                    color: 'white',
                                    backgroundColor:'black',
                                    border:'none',
                                    fontSize:'15px',
                                    cursor:'pointer',
                                    borderRadius:'5px'
                                }} onClick={()=>deleteItem(index)}>Delete</Button>
                            </tr>
                            </>
                        )
                    })
                }
            </tbody>
            
        </table>
        </div>
    )
}

export default Table;