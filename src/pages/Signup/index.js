import React,{useState} from 'react'
import TextField from '../../components/TextField'
import Button from '../../components/Button'
import { signupFormValidation } from '../../helpers'
import {useNavigate} from 'react-router-dom'
import { useDispatch } from 'react-redux'
import './index.css'
import {Link} from 'react-router-dom'
import Navbar from '../../components/Navbar'

const Signup=()=>{

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [signupDetails , setSignupDetails] = useState({});
    const [signupErrors , setSignupErrors] = useState(null);

    function handleChange(e){
        setSignupDetails({...signupDetails ,[e.target.name] : e.target.value});
        setSignupErrors({...signupErrors , [e.target.name] : ''});
    }

    function handleSubmit(e){
        e.preventDefault();
        const {errors , isValid} = signupFormValidation({signupDetails : signupDetails});
        if(!isValid){
            setSignupErrors(errors);
        }
        else{
            localStorage.setItem('user' , {...JSON.stringify(signupDetails) , isLogin:true});
            dispatch({
                type: "addUser",
                payload : {...signupDetails, isLogin : true}
            })
            navigate('/home');
        }
    }

    return (
        
        <>
            <Navbar/>
        
        <div className="signup-form-container">
        <form id="signup-form" onSubmit={handleSubmit}>
            <div className="form-container">
                <div className="username-box">
                    <TextField
                    name="username"
                    value={signupDetails.username || ''}
                    label="Username"
                    placeholder="Enter your username"
                    onChange={handleChange}
                    errors = {signupErrors && signupErrors.username}
                    />
                </div>
                <div className="email-box">
                    <TextField 
                    name="email"
                    placeholder="Enter your email"
                    value={signupDetails.email || ''}
                    label="Email"
                    onChange={handleChange}
                    errors = {signupErrors && signupErrors.email}
                    />
                </div>
                <div className='password-box'>
                    <TextField 
                    name="password"
                    placeholder="Enter your password"
                    value={signupDetails.password || ''}
                    label="Password"
                    onChange={handleChange}
                    errors = {signupErrors && signupErrors.password}
                    />
                </div>
                <div className="mobile-box">
                    <TextField 
                    name="mobile"
                    placeholder="Enter your mobile"
                    value={signupDetails.mobile || ''}
                    label="Mobile"
                    onChange={handleChange}
                    errors = {signupErrors && signupErrors.mobile}
                    />
                </div>
                <Button style={{color:"white" ,
                fontSize:'20px',
                padding:'15px',
                backgroundColor:'#0e3263',
                border:'1px solid black',
                width:'10vw',
                borderRadius:'10px',
                cursor:'pointer'
                }}type="submit">Sign Up</Button>

                <div className="already-have-an-account">
                    <span style={{fontSize: '20px'}}>If you have an account? </span>
                    <Link to="/login">
                        <Button style={{
                        width: '10vw',
                        color:'white',
                        backgroundColor:'#0e3263',
                        fontSize: '15px',
                        border: '1px solid black',
                        borderRadius:'5px',
                        padding:'10px',
                        cursor:'pointer'
                    }}  >Login</Button>
                    </Link>
                 </div>
            </div>
        </form>
        </div>
        </>
    )
}
export default Signup

