## 시각화 라이브러리 비교
[npm trend](https://www.npmtrends.com/paper-vs-echarts-vs-@visx/visx-vs-@nivo/core-vs-react-vis-vs-victory-chart-vs-recharts-vs-chart.js) <br/>

* [Nivo](https://nivo.rocks/) 
    * 장점 : hook 방식의 그래프 제공, 홈페이지에서 바로 코드 수정후 긁어올수잇는 장점이 있음. 
    * 단점 : 두가지 종류의 차트 제공이 안 됨 
    <br/><img src="https://media.vlpt.us/images/eunjin/post/0454de88-ce70-4c9e-ba5e-a7712c548058/Screen%20Shot%202021-01-26%20at%207.33.50%20AM.png" style="width:500px"/>
     <br/> 아래 사진과 같이 두가지를 사용못해서 한가지 차트를 구현 할 때 좋다.
      * [참고사이트](https://velog.io/@eunjin/React-Nivo-%EC%B0%A8%ED%8A%B8-%EB%9D%BC%EC%9D%B4%EB%B8%8C%EB%9F%AC%EB%A6%AC-%EC%9E%A5%EC%A0%90-%EB%8B%A8%EC%A0%90)
* [React-vis](https://github.com/uber/react-vis)
    * 크기에 비해 다양한 차트 제공
    
* [Victory](https://formidable.com/open-source/victory/guides/animations)
    * 유연성, 깔끔한 공식문서, echarts 와 비교했을때 쓸대없는 차트가 더 적음 , event 같은경우 조금더 쉽게 공식문서에 설명되어있음
    * 단점: 공식문서의 class 사용정도?
    * [테마적용](https://formidable.com/open-source/victory/guides/themes) 간단함.
    
* [Chart.js](https://github.com/reactchartjs/react-chartjs-2)
    * 다양한 차트 종류, 비교적 쉬워보임...
    * echarts 보다 사용량도 높음 but 느린 렌더링

* [@Visx](https://airbnb.io/visx/zoom-i)
    * React에 친화적임 , 다양한 기능 지원 
    * 단점: 공식문서 빈약 그자체,,,
    
