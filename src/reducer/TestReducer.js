import { createAction,handleAction } from "redux-action"
import { getBoard } from "../api/Board"

const view ='reducer/view'


export const board = createAction(view,getBoard);


const inital = {
region:{
    REGION_CD:'1',
    A_RING_8_PHASE_VAL:'1',
    INT_PLAN_NO:'1'
}

}

const testcon = (state=inital,action) =>{ //state는 리듀스의 상태 
    switch(action.type){

        case view:
            return{
                ...state,
                REGION_CD:'2'
            }


        default: 
         return state;
    }



}


export default testcon;


