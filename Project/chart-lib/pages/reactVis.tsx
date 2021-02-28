import React from 'react';
import {XYPlot,HorizontalGridLines, LineSeries, XAxis, YAxis} from 'react-vis'
import {data}from '../src/data'
import { ReactVisCss } from '../style';

const ReactVis=()=>{
    return (
        <ReactVisCss>
            <XYPlot
                width={600}
                height={600}>
                <HorizontalGridLines />
                <LineSeries
                    data={data}/>
                <XAxis/>
                <YAxis />
            </XYPlot>
        </ReactVisCss>
    )
}
export default ReactVis;
