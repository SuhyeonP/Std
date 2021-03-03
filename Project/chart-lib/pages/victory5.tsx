import React from 'react';
import {VictoryArea, VictoryBrushContainer, VictoryLine} from "victory";
import {data} from '../src/data'

const Victory5=()=>{
    return (
        <div>
            <VictoryLine
                containerComponent={
                    <VictoryBrushContainer
                        brushDomain={{x: [1, 7], y: [-3, 3]}}
                        brushDimension="y"
                        brushStyle={{fill: "teal", opacity: 0.2}}
                    />
                }
                style={{
                    data: {stroke: "teal"}
                }}
                data={[
                    {x: 1, y: -3},
                    {x: 2, y: 5},
                    {x: 3, y: -3},
                    {x: 4, y: 0},
                    {x: 5, y: -5},
                    {x: 6, y: 2},
                    {x: 7, y: 0}
                ]}
            />
            <div style={{ margin: 50 }}>
                <h3>Click Me</h3>
                <svg style={{ height: 0 }}>
                    <defs>
                        <linearGradient id="myGradient">
                            <stop offset="0%" stopColor="rgba(106, 119, 215,0.3)"/>
                            <stop offset="100%" stopColor="rgba(106, 119, 215,1)"/>
                        </linearGradient>
                    </defs>
                </svg>
                <VictoryArea
                    style={{
                        data: { fill: "url(#myGradient)" }
                    }}
                    events={[{
                        target: "data",
                        eventHandlers: {
                            onClick: () => {
                                return [
                                    {
                                        eventKey: "all",
                                        mutation: (props) => {
                                            const fill = props.style && props.style.fill;
                                            return  fill === 'blue' ? {style: {fill: {data:"url(#myGradient)"}}} : { style: { fill: "blue" } };
                                        }
                                    }
                                ];
                            }
                        }
                    }]}
                    data={data}
                />
            </div>
        </div>
    )
}

export default Victory5;
