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
                <div className="container" onClick={onClose}>  
                        <form onSubmit={(e)=>handleSubmit(e)}>
                           <div onClick={(e) => e.stopPropagation()}>
                           <div>Add Team Members</div>
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
                            <Button onClick={onClose}>Cancel</Button>
                            <Button type="submit">Save</Button>
                           </div>
                        </form>
            </div>
              )
          }
      </>
        
  )
}

export default Modal
