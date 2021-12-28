import React from 'react';
import {CustomTable} from "./custom-table";
import {hunderedTreads} from "../../constants/market-constants";

const HundredTrades = () => {
    const tableData = hunderedTreads();
    return (
        <div className="col-lg-12 d-flex flex-column">
            <div className="card card-rounded">
                <div className="card-body p-1">
                    <div className="d-sm-flex justify-content-between align-items-start p-3">
                        <h4 className="card-title card-title-dash">Last 100 Treads</h4>
                    </div>
                    <CustomTable headings={['Buyer Name', 'Seller Name' , 'Data Units', 'Cost', 'Progress', 'Activity', 'Type', 'Destination', 'Classification']}>
                        {tableData.map((tran, i) => (
                            <tr className="text-center">
                                <td >
                                    {tran.buyer_name}
                                </td>
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
                                    {tran.activity}
                                </td>
                                <td>
                                    {tran.type}
                                </td>
                                <td>
                                    {tran.destination}
                                </td>
                                <td>
                                    {tran.classification}
                                </td>
                            </tr>
                        ))}
                    </CustomTable>
                </div>
            </div>
        </div>
    )
}
export { HundredTrades };