import { NavigateFunction } from "react-router-dom";

const BACKEND = import.meta.env.VITE_BACKEND ;

interface loginRespType {
    success: boolean,
    msg: string,
    token?: string,
    err?: string
}

class USER {
    public static validate(navigate:NavigateFunction) {
        const token = localStorage.getItem('token') ;
        if (!token) {   // New client
            navigate('/auth')
        }
        
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

            console.log(res) ;

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
            setToastState({title: "Oops!", desc: "Some error occurred"}) ;
        }
    }

}



export {
    USER,

}