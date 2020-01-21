import React from 'react';
import G2 from '@antv/g2';

class SampleChart extends React.Component {
    constructor(props) {
        super(props);
        this.containerRef = React.createRef();
    }
    refreshChart = () => {

        this.chart.source(this.props.data);

        this.chart.interval().position('genre*sold').color('genre');
        this.chart.render();
    };

    componentDidMount() {

        this.chart = new G2.Chart({

            container: this.containerRef.current,
            width: 450,
            height: 300
        });


        this.refreshChart();
    }

    render() {
        return (
            <div ref={this.containerRef} />
        );
    }
}

export default SampleChart;