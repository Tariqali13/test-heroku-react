import React from 'react';
import Chart from 'react-apexcharts'

const ApexChart = (props) => {
    const {options, series, type, height} = props;
    return (
        <Chart
            options={options}
            series={series}
            type={type}
            width="100%"
            height={height || 250}
        />
    );
};

export default ApexChart;
