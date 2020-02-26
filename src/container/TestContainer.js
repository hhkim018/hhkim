import {board} from '../reducer/TestReducer'
import { connect } from 'react-redux'
import TestComponent from '../component/TestComponent'
import React from 'react'


const TestContainer =({data,board}) =>{


return(

    <TestComponent data={data} board={board}>

    </TestComponent>


)

}

export default connect(
    
    (state)=>({
       data:state.data
       
    }),{
         board
    }
)(TestContainer);