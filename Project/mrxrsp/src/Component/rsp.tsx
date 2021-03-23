import React, {useEffect, useRef, useState, memo, useCallback, createContext} from 'react';
import Ranking from "./ranking";
import {} from '@makinarocks/ui';
import Layout from "./layout";

const scores = {
    scissor: 1,
    rock: 0,
    paper: -1,
} as const;

const ImgS = {
    rock: './rock.png',
    paper: './paper.png',
    scissor: './scissor.png',
}
type ImgCodes = typeof ImgS[keyof typeof ImgS];

const computerChoice = (imgCodes: ImgCodes) => {
    return (Object.keys(ImgS) as ['rock', 'scissor', 'paper']).find((k) => {
        return ImgS[k] === imgCodes;
    })!
}


const Rsp = () => {
    const [result, setResult] = useState('click button');
    const [imgCode, setImgCode] = useState(ImgS.rock);
    const [myRSP, setMyRSP] = useState(ImgS.rock);
    const interval = useRef<number>();
    const [score, setScore] = useState(0);
    const clicked = useRef<boolean>(false);

    useEffect(() => {
        interval.current = window.setInterval(ImgSrc, 100);
        return () => {
            clearInterval(interval.current)
        }
    }, [imgCode])

    const ImgSrc = useCallback(() => {
        if (imgCode === ImgS.rock) {
            setImgCode(ImgS.scissor);
        } else if (imgCode === ImgS.scissor) {
            setImgCode(ImgS.paper);
        } else if (imgCode === ImgS.paper) {
            setImgCode(ImgS.rock);
        }
    },[imgCode])

    const onClickBtn = useCallback((choice: keyof typeof ImgS) => () => {
        if (!clicked.current) {
            clearInterval(interval.current);
            setMyRSP(Object.values(ImgS)[Object.keys(ImgS).indexOf(choice)])
            clicked.current = true;
            const myScore = scores[choice];
            const cpuScore = scores[computerChoice(imgCode)];
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
                interval.current = window.setInterval(ImgSrc, 100);
                clicked.current = false;
            }, 1000);
        }
    },[imgCode])

    return (
        <Layout>
            <div className="rsp-game">
                <div className="rsp-img">
                    <img className="rsp" src={imgCode}/>
                    <img className="rsp" src={myRSP}/>
                </div>
                <div className="game">
                    <button id="rock" className="btn" onClick={onClickBtn('rock')}>rock</button>
                    <button id="scissor" className="btn" onClick={onClickBtn('scissor')}>scissor</button>
                    <button id="paper" className="btn" onClick={onClickBtn('paper')}>paper</button>
                </div>
                <div className="now">
                    <div className="result">{result}</div>
                    <div className="score">현재 <span>{score}</span>점</div>
                </div>
            </div>
            <div className="rank-zone">
                <Ranking/>
            </div>
        </Layout>
    )

}

export default Rsp;