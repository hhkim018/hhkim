import axios from 'axios'

let serviceKey="%2B0u4QAib%2FmDwv3XJ%2Bl2ojho%2BwIYZQd0HqHoVb%2Fzj%2FWmI3i8pSF9Tka6APz6q7mZ2tnM5J9VdllYrj9ZlPzOeOw%3D%3D&pageNo=1&numOfRows=10&type=json"
export const getBoard = ()=>{

    const promise=axios.get("http://apis.data.go.kr/1320000/PlanCrossRoadInfoService/getPlanCROPInfo?serviceKey="+serviceKey).then(result=>{
        return result;
    })
    return promise;
}


