import React from 'react';
import {CustomTable} from "./custom-table";
import {topBuyers, topSellers} from "../../constants/market-constants";

const TopCharts = () => {
    const topBuyersData = topBuyers();
    const topSellerData = topSellers();
    return (
        <div className="row">
            <div className="col-lg-6 d-flex flex-column">
                <div className="card card-rounded">
                    <div className="card-body p-1">
                        <div
                            className="d-sm-flex justify-content-between align-items-start p-3">
                            <h4 className="card-title card-title-dash">Top Sellers</h4>
                        </div>
                        <CustomTable
                            headings={['Buyer Name', 'Data Units', 'Cost', 'Progress', 'Type']}>
                            {topBuyersData.map((tran, i) => (
                                <tr className="text-center">
                                    <td>
                                        {tran.buyer_name}
                                    </td>
                                    <td>
                                        {tran.data_units}
                                    </td>
                                    <td>
                                        ${tran.price}
                                    </td>
                                    <td>
                                        {tran.status ? 'UP' : 'Down'}
                                    </td>
                                    <td>
                                        {tran.type}
                                    </td>
                                </tr>
                            ))}
                        </CustomTable>
                    </div>
                </div>
            </div>
            <div className="col-lg-6 d-flex flex-column">
                <div className="card card-rounded">
                    <div className="card-body p-1">
                        <div
                            className="d-sm-flex justify-content-between align-items-start p-3">
                            <h4 className="card-title card-title-dash">Top Buyers</h4>
                        </div>
                        <CustomTable
                            headings={['Seller Name', 'Data Units', 'Cost', 'Progress', 'Type']}>
                            {topSellerData.map((tran, i) => (
                                <tr className="text-center">
                                    <td>
                                        {tran.seller_name}
                                    </td>
                                    <td>
                                        {tran.data_units}
                                    </td>
                                    <td>
                                        ${tran.price}
                                    </td>
                                    <td>
                                        {tran.status ? 'UP' : 'Down'}
                                    </td>
                                    <td>
                                        {tran.type}
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
export { TopCharts };