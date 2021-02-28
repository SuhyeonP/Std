import React from 'react';
import { VictoryBar, VictoryChart, VictoryAxis } from "victory";
import {data} from '../src/data'

const Victory=()=>{
    return (
        <div>
            <a href="https://formidable.com/open-source/victory/docs">공식문서</a>
            <br/>
            <VictoryBar data={data} x="x" y="y"/>
            <br/>
            <VictoryChart>
                <VictoryBar data={data} x="x" y="y"/>
            </VictoryChart>
            <br/>
            <VictoryChart
                // domainPadding will add space to each side of VictoryBar to
                // prevent it from overlapping the axis
                domainPadding={20}
            >
                <VictoryAxis
                    // tickValues specifies both the number of ticks and where
                    // they are placed on the axis
                    tickValues={[1, 2, 3, 4]}
                    tickFormat={["x 1", "x 2", "x 3", "x 4"]}
                />
                <VictoryAxis
                    dependentAxis
                    // tickFormat specifies how ticks should be displayed
                    tickFormat={(x) => (`$${x / 1000}k`)}
                />
                <VictoryBar
                    data={data}
                    x="x"
                    y="y"
                />
            </VictoryChart>
        </div>
    )
}

export default Victory;
