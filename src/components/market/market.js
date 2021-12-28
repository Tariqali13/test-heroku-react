import React from 'react';
import MainTemplate from '../layouts/main-template';
import {
    // Stats,
    LineChart,
    // TopSmallChart,
    // HundredTrades,
    // TopCharts
} from './components';

const Market = () => {

    return (
        <MainTemplate>


            <div className="content-wrapper">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="home-tab">
                                <div className="tab-content tab-content-basic">
                                    <div className="tab-pane fade show active" id="overview" role="tabpanel"
                                         aria-labelledby="overview">
                                        {/*<Stats/>*/}
                                        <LineChart/>
                                        {/*<div className="row">*/}
                                        {/*    <TopSmallChart heading="Top Buyers"/>*/}
                                        {/*    <TopSmallChart heading="Top Sellers"/>*/}
                                        {/*    <TopSmallChart heading="Top Movers"/>*/}
                                        {/*</div>*/}
                                        {/*<div className="row mb-3">*/}
                                        {/*    <HundredTrades/>*/}
                                        {/*</div>*/}
                                        {/*<TopCharts />*/}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </MainTemplate>
    )
}
export default Market;