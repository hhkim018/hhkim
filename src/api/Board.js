import axios from 'axios'

export const getBoard = ()=>{

    axios.get("http://localhost:8081/test/all").then(result=>{

        return result;
    })
}


