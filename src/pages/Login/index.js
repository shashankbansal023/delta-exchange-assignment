import React,{useState} from 'react'
import TextField from '../../components/TextField'
import Button from '../../components/Button'
import { loginFormValidation } from '../../helpers'
import {useNavigate} from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux'
import './index.css'
import {Link} from 'react-router-dom'
import Navbar from '../../components/Navbar'

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
        <>
        <Navbar/>
        <div className="login-container">
            <form onSubmit={handleSubmit}>
                <div class="form-container">
                    <div className='email-box'>   
                        <TextField
                        value={loginUser.email || ""}
                        name="email"
                        onChange={handleChange}
                        placeholder="Enter email"
                        label="Email"
                        errors={loginError && loginError.email}
                    />
                    </div> 
                    <div className='password-box'>
                        <TextField
                        value={loginUser.password || ""}
                        name="password"
                        onChange={handleChange}
                        placeholder="Enter password"
                        label="Password"
                        errors = {loginError && loginError.password}
                        />
                    </div>
                        <Button 
                          style={{
                              width: '10vw',
                              height:'40px',
                              color:'white',
                              backgroundColor:'#0e3263',
                              fontSize: '20px',
                              border: '1px solid black',
                              borderRadius:'5px',
                              padding:'10px',
                              cursor:'pointer'
                          }}  
                        type="submit">Login</Button>

                        <div className="new-user">
                            <span style={{fontSize: '20px'}}>Are you a new user? </span>
                            <Link to="/signup">
                                <Button style={{
                                width: '10vw',
                                color:'white',
                                backgroundColor:'#0e3263',
                                fontSize: '20px',
                                border: '1px solid black',
                                borderRadius:'5px',
                                padding:'10px',
                                cursor:'pointer'
                            }}  >Sign Up</Button>
                            </Link>
                        </div>
                </div>
            </form>
        </div>
        </>
       
    )
}

export default Login