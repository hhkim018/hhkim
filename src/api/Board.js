import axios from 'axios'

export function getBoard(){
    
    const promise= axios.get("http://apis.data.go.kr/B553077/api/open/sdsc/smallUpjongList?serviceKey="+serviceKey)
    .then(result=>{
        return {result}
    })
  
  
    
    return promise; //data만 반환 
}


