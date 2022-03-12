import React, { useState } from "react";
import TextField from "../TextField";
import Button from "../Button";
import { handleValidation } from "../../helpers";
import { useDispatch } from "react-redux";
import './index.css'

const Modal = ({ open="", onClose = () => {} }) => {
  
  const [rowDetail, setRowDetail] = useState({});
  const [userErrors, setUserErrors] = useState(null);

  const dispatch = useDispatch();
  
  function handleChange(e) {

    setRowDetail({ ...rowDetail, [e.target.name]: e.target.value });

    if(userErrors){
        setUserErrors({...userErrors,[e.target.name]:""})
    }
  }

  function handleSubmit(e) {
    
    e.preventDefault();
    const { isValid, errors } = handleValidation({ userDetails: rowDetail });

    if (!isValid) {
      setUserErrors(errors);
    }
    else{
        dispatch({
            type: "addItem",
            payload : rowDetail
        })
        setRowDetail({});
        setUserErrors(null);
        
        onClose();   
    }
  }

  return (
      <>
          {
              open && (
                <div className="modal-container" onClick={onClose}>  
                        <form onSubmit={(e)=>handleSubmit(e)}>
                           <div className="modal-box" onClick={(e) => e.stopPropagation()}>
                           <div className="modal-heading">Add Team Members</div>
                            <TextField
                            placeholder="Enter the name"
                            onChange={handleChange}
                            name="name"
                            label="Name"
                            value={rowDetail.name || ""}
                            errors={userErrors && userErrors.name}
                            />
                            <br />
                            <TextField
                            placeholder= "Enter company"
                            onChange={handleChange}
                            name="company"
                            label="Company"
                            value={rowDetail.company || ""}
                            errors={userErrors && userErrors.company}
                            />
                            <br />
                            <TextField
                            placeholder="Enter status"
                            onChange={handleChange}
                            name="status"
                            label="Status"
                            value={rowDetail.status || "" }
                            errors = {userErrors && userErrors.status}
                            />
                            <br />
                            <TextField
                            placeholder="Enter notes"
                            onChange={handleChange}
                            name="notes"
                            label="Notes"
                            value={rowDetail.notes || "" }
                            errors={userErrors && userErrors.notes}
                            />
                            <Button
                            style={{
                              color: 'black',
                              width :'40%',
                              fontSize:'1.5vw',
                              padding: '10px',
                              backgroundColor:'white',
                              border:'1px solid black',
                              borderRadius:'30px',
                              textAlign:'center',
                              cursor:'pointer'
                            }} onClick={onClose}>Cancel</Button>
                            <Button 
                            style={{
                              color: 'black',
                              width :'40%',
                              fontSize:'1.5vw',
                              padding: '10px',
                              backgroundColor:'white',
                              border:'1px solid black',
                              borderRadius:'30px',
                              textAlign:'center',
                              cursor:'pointer'
                            }}type="submit">Save</Button>
                           </div>
                        </form>
            </div>
              )
          }
      </>
        
  )
}

export default Modal
