import axios from "axios";
import ActionTypes from "./types";



export const apiCallStart = () => ({
  type: ActionTypes.API_CALL_START
});

export const apiCallSuccess = (users)=>({
  type: ActionTypes.API_CALL_SUCCESS,
  payload: users
});

export const apiCallFail = (err)=>({
  type: ActionTypes.API_CALL_FAIL,
  payload:err
});


export const fetchData= () => {
 return async (dispatch) => {
   dispatch(apiCallStart());
   try{
    const data= await axios.get('https://jsonplaceholder.typicode.com/users');
      dispatch(apiCallSuccess(data.data));
   }
   catch(err) {
     dispatch(apiCallFail(err))
   }
   
 }
}
