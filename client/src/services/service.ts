import { NavigateFunction } from "react-router-dom";

class USER {
    public static validate(navigate:NavigateFunction) {
        const token = localStorage.getItem('token') ;
        if (!token) {   // New client
            navigate('/auth')
        }
        
    }
}



export {
    USER,

}