import React from 'react'
import { Component } from 'react';

      

class Kakaomap extends Component{

//script load -> kakao load

    componentDidMount() {
        const script = document.createElement('script');
        script.async = true;
        document.head.appendChild(script);

        script.onload = () => {
            const {kakao} =window;  //kakao 사용하기 위해서 
            kakao.maps.load(() => {
                let mapContainer = document.getElementById('map');
                let mapOption = {
                    center: new kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
                    level: 3 // 지도의 확대 레벨
                };
                const map = new kakao.maps.Map(mapContainer, mapOption);
            });
        };
    }

    render(){
return(
<div id="map" className="Kakaomap" style={{width:1000, height:1000}}>

</div>
)


    }




}


export default Kakaomap;