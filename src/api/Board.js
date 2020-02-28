import axios from 'axios'

export const getBoard = ()=>{
    
    const promise= axios.get("http://apis.data.go.kr/1320000/PlanCrossRoadInfoService/getPlanCROPInfo?serviceKey="+serviceKey)
    .then(result=>result.data)
  
  
    
    return promise; //data만 반환 
}


