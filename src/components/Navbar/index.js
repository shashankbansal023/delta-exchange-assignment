import React from 'react'
import { useSelector , useDispatch } from 'react-redux';
import Button from '../Button';
import {Link} from 'react-router-dom'

const Navbar=()=>{

    const dispatch = useDispatch();
    const {userDetails} = useSelector(state=> state.custom);
    
    function toggleLogin(){
        dispatch({
            type : "toggleLogin"
        })
    }

    return (
        <div>
            {
                userDetails.isLogin && (
                    <div>
                        <div>Welcome {userDetails.username}</div>
                        <Button onClick={toggleLogin}>Log out</Button>
                    </div>       
                )
            }
            {
                !userDetails.isLogin && (
                    <Link to="/login" onClick={toggleLogin}>Log In</Link>
                )

            }
        </div>
    )
}

export default Navbar;