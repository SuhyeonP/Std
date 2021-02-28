import React from 'react';
import {VictoryArea, VictoryChart, VictoryLine, VictoryStack} from "victory";

const Victory3=()=>{
    return (
        <div>
            <VictoryChart>
                <VictoryLine
                    samples={50}
                    style={{data:
                            {stroke: "red", strokeWidth: 4}
                    }}
                    y={(data) => Math.sin(2 * Math.PI * data.x)}
                />

                <VictoryLine
                    samples={10}
                    style={{data:
                            {stroke: "blue", strokeWidth: 4}
                    }}
                    y={(data) => Math.cos(2 * Math.PI * data.x)}
                />
            </VictoryChart>
            <VictoryChart
                events={[{
                    childName: ["area-1", "area-2"],
                    target: "data",
                    eventHandlers: {
                        onClick: () => {
                            return [{
                                childName: "area-4",
                                mutation: (props) => {
                                    const fill = props.style.fill;
                                    return fill === "tomato" ? null : {style: {fill: "tomato"}};
                                }
                            }];
                        }
                    }
                }]}
            >
                <VictoryStack>
                    <VictoryArea name="area-1"
                                 data={[
                                     {x: "a", y: 2}, {x: "b", y: 3}, {x: "c", y: 5}, {x: "d", y: 4}
                                 ]}
                    />
                    {/*<VictoryArea name="area-2"*/}
                    {/*             data={[*/}
                    {/*                 {x: "a", y: 1}, {x: "b", y: 4}, {x: "c", y: 5}, {x: "d", y: 7}*/}
                    {/*             ]}*/}
                    {/*/>*/}
                    {/*<VictoryArea name="area-3"*/}
                    {/*             data={[*/}
                    {/*                 {x: "a", y: 3}, {x: "b", y: 2}, {x: "c", y: 6}, {x: "d", y: 2}*/}
                    {/*             ]}*/}
                    {/*/>*/}
                    {/*<VictoryArea name="area-4"*/}
                    {/*             data={[*/}
                    {/*                 {x: "a", y: 2}, {x: "b", y: 3}, {x: "c", y: 3}, {x: "d", y: 4}*/}
                    {/*             ]}*/}
                    {/*/>*/}
                </VictoryStack>
            </VictoryChart>
        </div>
    )
}

export default Victory3;
