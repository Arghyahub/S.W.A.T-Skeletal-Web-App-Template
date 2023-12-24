import { NavigateFunction } from "react-router-dom";

const BACKEND = import.meta.env.VITE_BACKEND ;

interface loginRespType {
    success: boolean,
    msg: string,
    token?: string,
    err?: string,
    valid?: boolean
}

class USER {
    public static validate(navigate:NavigateFunction) {
        const token = localStorage.getItem('token') ;
    }

    public static async signup(name:string, email:string, passwd: string, setToastState, navigate:NavigateFunction ){
        try {
            if (!(name.length) || !(email.length) || !(passwd.length)){
                setToastState({title: "Oops!", desc: "Ensure All Fields Are Filled", hasFunc: false}) ;
                return;
            }
    
            const resp = await fetch(`${BACKEND}/auth/signup`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({name,email,passwd})
            })
            const res:loginRespType = await resp.json() ;

            if (res.success){
                localStorage.setItem('token',res.token);
                setToastState({title: "Woah!!", desc: "Successfully signed up", hasFunc: false}) ;
                navigate('/home') ;
            }
            else{
                setToastState({title: "Oops!", desc: res.msg, hasFunc: false}) ;
            }
        }
        catch(err) {
            console.log("Error occurred\n",err) ;
            setToastState({title: "Oops!", desc: "Some error occurred", hasFunc: false}) ;
        }
    }
    
    public static async login(email:string, passwd: string, setToastState, navigate:NavigateFunction ){
        try {
            if (!(email.length) || !(passwd.length)){
                setToastState({title: "Oops!", desc: "Ensure All Fields Are Filled", hasFunc: false}) ;
                return;
            }
    
            const resp = await fetch(`${BACKEND}/auth/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({email,passwd})
            })
            const res:loginRespType = await resp.json() ;

            if (res.success){
                localStorage.setItem('token',res.token);
                setToastState({title: "Woah!!", desc: "Successfully logged in", hasFunc: false}) ;
                navigate('/home') ;
            }
            else{
                if (res.valid && !res.valid) localStorage.removeItem('token') ;
                setToastState({title: "Oops!", desc: res.msg, hasFunc: false}) ;
            }
        }
        catch(err) {
            console.log("Error occurred\n",err) ;
            setToastState({title: "Oops!", desc: "Some error occurred", hasFunc: false}) ;
        }
    }

}



export {
    USER,

}