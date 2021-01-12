import UserActionTypes from './user-types';
 
const Initial_State={
    currentUser:null,
    error:null,
};


const userReducer=(state=Initial_State,action)=>{
    switch (action.type){
        case UserActionTypes.SIGN_IN_SUCCESS:
            return{
                ...state,
                currentUser:action.payload,
                error:null,
            }
        
        // eslint-disable-next-line no-duplicate-case
        case UserActionTypes.SIGN_OUT_SUCCESS:
            return {
                ...state,
                currentUser:null,
                error:null        
            }    

        


        case UserActionTypes.SIGN_IN_FAILURE:
        case UserActionTypes.SIGN_OUT_FAILURE:
        case UserActionTypes.SIGN_UP_FAILURE:
            return{
                ...state,
                error:action.payload
            }

        default:
            return state

    }


};

export default userReducer;