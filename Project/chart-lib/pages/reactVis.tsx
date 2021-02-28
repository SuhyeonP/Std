import React from 'react';
import {XYPlot,HorizontalGridLines, LineSeries, XAxis, YAxis} from 'react-vis'
import {data}from '../src/data'

const ReactVis=()=>{
    return (
        <XYPlot
            width={300}
            height={300}>
            <HorizontalGridLines />
            <LineSeries
                data={data}/>
            <XAxis />
            <YAxis />
        </XYPlot>
    )
}
export default ReactVis;
