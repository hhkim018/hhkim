import { createAction,handleAction } from "redux-action"
import * as api from "../api/Board"

const view ='reducer/view'


//

export const board=createAction(view,api.getBoard());

// () => ({type:view,
//     data:{
//     REGION_CD:'11',
//     A_RING_8_PHASE_VAL:'11',
//     INT_PLAN_NO:'11'
// }})

console.info(">>>>>",api.getBoard())

const inital = {
    data:[{
        indsLclsCd : "",
        indsLclsNm : "",
        indsMclsCd : "",
        indsMclsNm : "",
        indsSclsCd : "",
        indsSclsNm : "",
        stdrDt : "",
}]
}

const testcon = (state=inital,action) =>{ //state는 리듀스의 상태 
    switch(action.type){

        case view:
            console.info(action.data)
            return{
                ...state,
                data:state.data.concat(action.data)
            }
        default: 
       
         return state;
    }



}


export default testcon;


