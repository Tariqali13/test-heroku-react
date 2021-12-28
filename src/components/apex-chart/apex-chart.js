import React from 'react';
import Chart from 'react-apexcharts';

const ApexChart = (props) => {
    const {options, series, type, height} = props;
    return (
        <React.Fragment>
            <Chart
                options={options}
                series={series}
                type={type}
                width="100%"
                height={height || 250}
            />
        </React.Fragment>
    );
};

export default ApexChart;
