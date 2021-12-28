import React from 'react';
import ApexChart from "../../apex-chart";
import {chartOptions} from "../../constants";

const TopSmallChart = (props) => {
    const { heading } = props;
    return (
        <div className="col-lg-4 d-flex flex-column">
            <div className="row flex-grow">
                <div className="col-12 col-lg-4 col-lg-12 grid-margin stretch-card">
                    <div className="card card-rounded">
                        <div className="card-body">
                            <div className="d-sm-flex justify-content-between align-items-start">
                                <div>
                                    <h4 className="card-title card-title-dash">{heading}</h4>
                                </div>
                            </div>
                            <ApexChart
                                options={chartOptions}
                                series={[{
                                    name: "Desktops",
                                    data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
                                }, {
                                    name: "Desktops",
                                    data: [1, 4, 335, 21, 42, 82, 29, 31, 248]
                                }]}
                                type="line"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export { TopSmallChart };