import React from 'react';
import ApexChart from '../../apex-chart';
import {chartOptions} from '../../constants';
import {CustomTable} from './index';
import { latestTransactions } from '../../constants/market-constants';

const LineChart = () => {
    const tableData = latestTransactions();
    return (
        <div className="row mb-3">
            <div className="col-lg-7 d-flex flex-column">
                <div className="row flex-grow">
                    <div className="col-12 col-lg-4 col-lg-12 grid-margin stretch-card">
                        <div className="card card-rounded">
                            <div className="card-body">
                                <div className="d-sm-flex justify-content-between align-items-start">
                                    <div>
                                        <h4 className="card-title card-title-dash">Market Index</h4>
                                    </div>
                                </div>
                                <ApexChart
                                    height={560}
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
            <div className="col-lg-5 d-flex flex-column">
                <div className="card card-rounded">
                    <div className="card-body p-1">
                        <div className="d-sm-flex justify-content-between align-items-start p-3">
                            <h4 className="card-title card-title-dash">Latest Transaction</h4>
                        </div>
                        <CustomTable headings={['Buyer Name', 'Seller Name' , 'Price']}>
                            {tableData.map((tran, i) => (
                                <tr className="text-center">
                                    <td >
                                        {tran.buyer_name}
                                    </td>
                                    <td>
                                        {tran.seller_name}
                                    </td>
                                    <td>
                                        ${tran.price}
                                    </td>
                                </tr>
                            ))}
                        </CustomTable>
                    </div>
                </div>
            </div>
        </div>
    )
}
export {LineChart};