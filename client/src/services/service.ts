import { NavigateFunction } from "react-router-dom";

const BACKEND = import.meta.env.VITE_BACKEND ;

class USER {
    public static validate(navigate:NavigateFunction) {
        const token = localStorage.getItem('token') ;
        if (!token) {   // New client
            navigate('/auth')
        }
        
    }

    public static async signup(name:string, email:string, passwd: string, setToastState ){
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
        const res = await resp.json() ;
        console.log(res) ;
    }

}



export {
    USER,

}