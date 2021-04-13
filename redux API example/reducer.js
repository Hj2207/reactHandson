import ActionTypes from "./types";

const INIT_STATE = {
loading:false,
users:[],
error:null
};

const userReducer = (state=INIT_STATE, action) => {

switch(action.type) {
  case ActionTypes.API_CALL_START : 
  return {...state, loading:true, error:null}
  
  case ActionTypes.API_CALL_SUCCESS:
  return {...state, loading:false, users:action.payload, error: null}
  
  case ActionTypes.API_CALL_FAIL:
  return {...state, loading:false,error:action.payload}
  
  default: return state
}



}
export default userReducer;
