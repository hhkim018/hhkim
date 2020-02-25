import React from 'react'

const TestComponent=(region)=>{


return(
    <div>
    {region.map(result=>(
<span>result.REGION_CD</span>
    ))}
    </div>
    
    )

}

export default TestComponent;