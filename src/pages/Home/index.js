import React,{useState} from 'react'
import Button from '../../components/Button'
import Modal from '../../components/Modal'
import Table from '../../components/Table'
import Select from '../../components/Select'
import {useSelector} from 'react-redux'
import Navbar from '../../components/Navbar'
import './index.css'

function Home(){

    const [showModal ,setShowModal] = useState(false);
    const companies = ["Manchester United" , "DC United" ,"LA Galaxy" ,"Select All"];
    const status = ["active" , "closed"];
    const allCheckedBoxes = {
        company : {
            "Manchester United" : false,
            "DC United" : false,
            "LA Galaxy" : false,
            "Select All" : false
        },
        status : {
            "active":false,
            "closed" :  false
        }
    }


    const {userDetails} = useSelector(state=> state.custom); 
    const {rows} = useSelector(state=> state.custom); 
    const [checkedBoxes , setCheckedBoxes] = useState(allCheckedBoxes);

    function toggleModal(){
        setShowModal(!showModal);    
    }

    function handleChecked(e,heading){
        let allCheckBoxes = {...checkedBoxes};
        if(e.target.name === "Select All" ){
            for(let key of Object.keys(checkedBoxes.company)){
                allCheckBoxes.company[key] = allCheckBoxes.company["Select All"] ? false : true;
            }
        }else if(heading=="company" && allCheckBoxes.company["Select All"]){
            for(let key of Object.keys(checkedBoxes.company)){
                allCheckBoxes.company[key] = !allCheckBoxes.company[key];
            }
        }
        
        else {
            allCheckBoxes[heading][e.target.name] = !allCheckBoxes[heading][e.target.name];
        }
        setCheckedBoxes(allCheckBoxes);
    }

    const selectedCompanies = Object.keys(checkedBoxes.company).filter(key=> checkedBoxes.company[key]);
    const selectedStatus = Object.keys(checkedBoxes.status).filter(key=>checkedBoxes.status[key]);
    
    function filteredRows(rows){

        if(!selectedCompanies.length && !selectedStatus.length) return rows;
        return rows.filter(row=>{
            if(selectedCompanies.indexOf(row.company)!==-1 || selectedStatus.indexOf(row.status) !==-1){
                return true;
            }
            return false;
        })
    }
    
    const filteredRowsData = filteredRows(rows);

    return (
        <div className="home-container">
        <Navbar/>
        <div className="heading">{userDetails && userDetails.username}</div>
        <div>
            <div className="heading">
                <div className="title">Team Members</div>
                <Button style={{
                    color : 'white',
                    fontSize: '1.5vw',
                    backgroundColor: '#114585',
                    borderRadius: '50px',
                    cursor:'pointer',
                    border:'1px solid black',
                    padding:'1vw'
                }} onClick={toggleModal}>Add Team Members</Button>    
            </div>  
            <Modal 
                open={showModal} 
                onClose={toggleModal} 
            /> 
            <div className="select-container">
                <Select 
                heading="company"
                choices= {companies}
                onChange={handleChecked}
                checkedProps={checkedBoxes.company}
                />
            
                 <Select
                 heading="status"
                 choices={status}
                 onChange={handleChecked}
                 checkedProps={checkedBoxes.status}
                 />
            </div>

            <Table rowData={filteredRowsData}></Table>
        </div>
        </div>
    )
}

export default Home;