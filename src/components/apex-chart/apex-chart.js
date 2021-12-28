import React from 'react';
import Chart from 'react-apexcharts'
import {chartOptions} from "../constants";

const ApexChart = (props) => {
    const {options = chartOptions, series = [], type = "line", height = 250} = props;
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
