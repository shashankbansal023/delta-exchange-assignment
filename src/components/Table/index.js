import React from 'react'
import {useSelector , useDispatch} from 'react-redux'
import Checkbox from '../Checkbox'
import Button from '../Button'

const Table=({rowData})=>{

    const columns = ["name" , "company" , "status" ,"notes"];
    const  headers = ["Name" , "Company" ,"Status" , "Notes"];
    // const {rows} = useSelector(state=> state.custom);
    const dispatch = useDispatch();

    function deleteItem(index){
        dispatch({
            type:"deleteItem",
            payload:index
        })
    }

    return (
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
                                <Button onClick={()=>deleteItem(index)}>Delete</Button>
                            </tr>
                            </>
                        )
                    })
                }
            </tbody>
            
        </table>
    )
}

export default Table;