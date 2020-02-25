import {board} from '../reducer/TestReducer'
import { connect } from 'react-redux'
import TestComponent from '../component/TestComponent'
import React from 'react'


const TestContainer =(region) =>{


return(

    <TestComponent region={region}>

    </TestComponent>


)

}

export default connect(

    (state)=>{


    }
)