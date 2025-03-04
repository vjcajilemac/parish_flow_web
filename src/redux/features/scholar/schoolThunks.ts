import { setLoading, setClasses } from "./schoolSlice";
import { AppDispatch, RootState } from "../../store";
//import { SchoolClass } from "@/interfaces/SchoolInterfaces";
import { parishApi } from "@/api/parishApi";

export const getClasses = () => {
  return async (dispatch: AppDispatch, getState: () => RootState) => {
    //start loading
    dispatch(setLoading(true));
    //user['username'] = 'emilys';
    const resp = await parishApi.get("school/classes/");
    /*const response = await fetch(`https://dummyjson.com/auth/login`,{
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            "X-Tenant": "parish1"
          }, 
    });
    const data = await response.json();*/

    dispatch(setClasses(resp.data));
    //realizar prticion http
  };
};
