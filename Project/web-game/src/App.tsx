import React, {useEffect, useRef, useState} from 'react';
import logo from './logo.svg';
import './App.css';
const rspCoords = {
  바위: '6px',
  가위: '-131px',
  보: '-282px'
} as const;

const scores = {
  가위: 1,
  바위: 0,
  보: -1,
} as const;

type ImgCoords = typeof rspCoords[keyof typeof rspCoords];
const computerChoice = (imgCoords: ImgCoords) => {
  return (Object.keys(rspCoords) as ['바위', '가위', '보']).find((k) => {
    return rspCoords[k] === imgCoords;
  })!
}
function App() {
  const [result, setResult] = useState('');
  const [imgCoord, setImgCoord] = useState<ImgCoords>(rspCoords.바위);
  const [score, setScore] = useState(0);
  const interval = useRef<number>();
  const clicked = useRef<boolean>(false);

  useEffect(() => { // componentDidMount, componentDidUpdate 역할(1대1 대응은 아님)
    console.log('다시 실행');
    interval.current = window.setInterval(changeHand, 100);
    return () => { // componentWillUnmount 역할
      console.log('종료');
      clearInterval(interval.current);
    }
  }, [imgCoord]);

  const changeHand = () => {
    if (imgCoord === rspCoords.바위) {
      setImgCoord(rspCoords.가위);
    } else if (imgCoord === rspCoords.가위) {
      setImgCoord(rspCoords.보);
    } else if (imgCoord === rspCoords.보) {
      setImgCoord(rspCoords.바위);
    }
  };

  const onClickBtn = (choice: keyof typeof rspCoords) => () => {
    if (!clicked.current) {
      clearInterval(interval.current);
      clicked.current = true;
      const myScore = scores[choice];
      const cpuScore = scores[computerChoice(imgCoord)];
      const diff = myScore - cpuScore;
      if (diff === 0) {
        setResult('비겼습니다!');
      } else if ([-1, 2].includes(diff)) {
        setResult('이겼습니다!');
        setScore((prevScore) => prevScore + 1);
      } else {
        setResult('졌습니다!');
        setScore((prevScore) => prevScore - 1);
      }
      setTimeout(() => {
        interval.current = window.setInterval(changeHand, 100);
        clicked.current = false;
      }, 1000);
    }
  }

  return (
    <div className="App">
      <div id="computer" className="rsp" style={{ background: `url(https://sites.google.com/site/hafsrsp/_/rsrc/1468855017636/config/customLogo.gif?revision=2) ${imgCoord} 0` }} />
      <div>
        <button id="rock" className="btn" onClick={onClickBtn('바위')}>바위</button>
        <button id="scissor" className="btn" onClick={onClickBtn('가위')}>가위</button>
        <button id="paper" className="btn" onClick={onClickBtn('보')}>보</button>
      </div>
      <div>{result}</div>
      <div>현재 {score}점</div>
    </div>
  );
}

export default App;
