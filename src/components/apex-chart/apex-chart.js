import React, { useEffect, useState } from 'react';

let Chart;

const ApexChart = (props) => {
    const { options, series, type, height } = props;
    const [showChart, setShowCart] = useState(false);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            // eslint-disable-next-line global-require
            Chart = require('react-apexcharts');
            Chart = Chart.default;
            setShowCart(true);
        }
    }, []);
    return (
        <React.Fragment>
            {showChart && (
                <Chart
                    options={options}
                    series={series}
                    type={type}
                    width="100%"
                    height={height || 250}
                />
            )}
        </React.Fragment>
    );
};

export default ApexChart;
