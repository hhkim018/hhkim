import { createAction,handleAction } from "redux-action"
import { getBoard } from "../api/Board"

const view ='reducer/view'


export const board = createAction(view,getBoard);


const inital = {

}

const testcon = handleAction(
    {
    [view]: (state,action) =>({ 
        

    })
    },
    inital
    )


export default testcon;


