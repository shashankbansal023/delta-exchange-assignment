import React,{useState} from 'react'
import TextField from '../../components/TextField'
import Button from '../../components/Button'
import { loginFormValidation } from '../../helpers'
import {useNavigate} from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux'

const Login=()=>{

    const {userDetails} = useSelector(state=> state.custom)
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const [loginUser , setLoginUser] = useState({});
    const [loginError , setLoginError] = useState(null);

    function handleChange(e){
        setLoginUser({...loginUser , [e.target.name] : e.target.value})
    }

    function handleSubmit(e){
        e.preventDefault();
        const {errors , isValid} = loginFormValidation({loginDetails : loginUser});
        if(!isValid){
            setLoginError(errors);
        }
        else{
            dispatch({
                type:'toggleLogin'
            })
            navigate('/home');
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <TextField
            value={loginUser.email || ""}
            name="email"
            onChange={handleChange}
            placeholder="Enter email"
            label="Email"
            errors={loginError && loginError.email}
            />
             <TextField
            value={loginUser.password || ""}
            name="password"
            onChange={handleChange}
            placeholder="Enter password"
            label="Password"
            errors = {loginError && loginError.password}
            />
            <Button type="submit">Login</Button>
        </form>
    )
}

export default Login