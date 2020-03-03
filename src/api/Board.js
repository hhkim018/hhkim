import axios from 'axios'

let serviceKey="%2B0u4QAib%2FmDwv3XJ%2Bl2ojho%2BwIYZQd0HqHoVb%2Fzj%2FWmI3i8pSF9Tka6APz6q7mZ2tnM5J9VdllYrj9ZlPzOeOw%3D%3D&indsLclsCd=Q&indsMclsCd=Q01&type=json"
export function getBoard(){
    
    const promise= axios.get("http://apis.data.go.kr/B553077/api/open/sdsc/smallUpjongList?serviceKey="+serviceKey)
    .then(result=>{
        return {result}
    })
  
  
    
    return promise; //data만 반환 
}


