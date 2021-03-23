import React, {useState} from 'react';

interface myData {
    name: string,
    score: number,
    game: number,
    rate: number,
}

const Ranking = () => {
    const [myScore, setMyScore] = useState('');

    return (
        <table className="rank-zone">
            <thead>
            <tr>
                <th scope="cols">rank</th>
                <th scope="cols">name</th>
                <th scope="cols">score</th>
                <th scope="cols">rate</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <th scope="row">1</th>
                <td>name</td>
                <td>score</td>
                <td>rate</td>
            </tr>
            <tr className="even">
                <th scope="row">2</th>
                <td>name</td>
                <td>score</td>
                <td>rate</td>
            </tr>
            <tr>
                <th scope="row">3</th>
                <td>name</td>
                <td>score</td>
                <td>rate</td>
            </tr>
            </tbody>
        </table>
    )
}

export default React.memo(Ranking);