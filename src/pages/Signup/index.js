import React,{useState} from 'react'
import TextField from '../../components/TextField'
import Button from '../../components/Button'
import { signupFormValidation } from '../../helpers'
import {useNavigate} from 'react-router-dom'
import { useDispatch } from 'react-redux'

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
            localStorage.setItem('user' , JSON.stringify(signupDetails));
            dispatch({
                type: "addUser",
                payload : {...signupDetails, isLogin : true}
            })
            navigate('/home');
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <TextField
            name="username"
            value={signupDetails.username || ''}
            label="Username"
            placeholder="Enter your username"
            onChange={handleChange}
            errors = {signupErrors && signupErrors.username}
            />
            <TextField 
            name="email"
            placeholder="Enter your email"
            value={signupDetails.email || ''}
            label="Email"
            onChange={handleChange}
            errors = {signupErrors && signupErrors.email}
            />
             <TextField 
            name="password"
            placeholder="Enter your password"
            value={signupDetails.password || ''}
            label="Password"
            onChange={handleChange}
            errors = {signupErrors && signupErrors.password}
            />
            <TextField 
            name="mobile"
            placeholder="Enter your password"
            value={signupDetails.mobile || ''}
            label="Mobile"
            onChange={handleChange}
            errors = {signupErrors && signupErrors.mobile}
            />
            <Button type="submit">Sign Up</Button>
        </form>
    )
}
export default Signup