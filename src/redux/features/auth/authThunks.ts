import { login, setLoading } from "./authSlice";
import { AppDispatch, RootState } from '../../store';
import { User } from "@/interfaces/AuthInterfaces";

export const signIn = (user: User) => {
  return async(dispatch:AppDispatch, getState: () => RootState)  =>{
    //start loading
    dispatch(setLoading(true))
    //user['username'] = 'emilys';
    const response = await fetch(`https://dummyjson.com/auth/login`,{
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            "X-Tenant": "parish1"
          },

        body:JSON.stringify(user)
    });

    const data = await response.json();

    console.log(data)
    
    dispatch(login(user))
    //realizar prticion http
  }
}

