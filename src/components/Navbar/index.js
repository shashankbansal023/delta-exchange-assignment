import React from 'react'
import { useSelector , useDispatch } from 'react-redux';
import Button from '../Button';
import {Link} from 'react-router-dom'
import './index.css'

const Navbar=()=>{

    const dispatch = useDispatch();
    const {userDetails} = useSelector(state=> state.custom);
    
    // function toggleLogin(){
    //     dispatch({
    //         type : "toggleLogin"
    //     })
    // }

    return (
        <div className="navbar-container">
            <div className='navbar-heading'>Delta</div>
            {
            
                    <div className="navbar">
                        <Link to="/signup">
                        <Button style={{
                             fontSize: '1.5vw',
                             backgroundColor: 'rgb(250, 246, 246)',
                             color: 'black',
                             cursor:'pointer',
                             border : '1px solid black',
                             padding: '0.5vw',
                             borderRadius: '5px'
                        }} 
                        >
                            Sign Up
                        </Button>
                        </Link>
                            <Link style={{textDecoration:'none' , color:'black'}} to="/login">
                            <Button style={{
                             fontSize: '1.5vw',
                             backgroundColor: 'rgb(250, 246, 246)',
                             color: 'black',
                             cursor:'pointer',
                             border : '1px solid black',
                             padding: '0.5vw',
                             borderRadius: '5px'
                        }} > Log In</Button>   
                        </Link>
                    </div>       
                
            }
        </div>
    )
}

export default Navbar;