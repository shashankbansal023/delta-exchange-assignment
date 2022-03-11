export function handleValidation({userDetails={} }){
    
    const {name , company , status , notes} = userDetails || {};
    const errorObject = {};
    
    if(!name){
        errorObject.name = "Name cannot be empty"
    }
    if(!company){
        errorObject.company = "Company cannot be empty"
    }
    if(!status){
        errorObject.status = "Status cannot be empty"
    }
    if(!notes){
        errorObject.notes = "Notes cannot be empty"
    }

    return {
        errors : errorObject,
        isValid : Object.keys(errorObject).length? false : true
    }
}

export function loginFormValidation({loginDetails = {}}){
    
    let errorObject={};
    const {email , password} = loginDetails || {};
    
    let user = localStorage.getItem('user');
    user = JSON.parse(user);

    if(!email.length){
        errorObject.email = "Email is empty";
    }
    else if(user.email!==email){
        errorObject.email = "Email not correct"
    }
    if(!password.length){
        errorObject.password = "Password is empty";
    }
    else if(user.password!==password){
        errorObject.password = "Password not correct";
    }

    return {
        errors : errorObject,
        isValid : Object.keys(errorObject).length? false : true
    }
    
}


export function signupFormValidation({signupDetails = {}}){

    const errorObject = {};
    const {email , password , mobile , username } = signupDetails || {};

    if(!username){
        errorObject.username = "Please enter your username";
    }
    if(username){
        if(!username.match(/^[a-zA-Z ]*$/)){
            errorObject.username = "Please enter alphabet characters only"
        }
    }
    if(!email){
        errorObject.email = "Please enter your email ID";
    }
    if(email){
        let pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        if(!pattern.test(email)){
            errorObject.email ="Enter valid email";
        }
    }
    if(!password){
        errorObject.password = "Please enter your passowrd";
    }
    if(password){
        if(!password.match(/^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/)){
            errorObject.password = "Please enter valid and secure password"
        }
    }

    if(!mobile){
        errorObject.mobile = "Please enter your mobile";
    }
    if(mobile){
        if(!mobile.match(/^[0-9]{10}$/)){
            errorObject.mobile = "Please enter valid mobile number";
        }
    }

    return{
        errors : errorObject,
        isValid : Object.keys(errorObject).length ? false : true
    }
}