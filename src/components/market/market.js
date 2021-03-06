import React from 'react';
import MainTemplate from '../layouts/main-template';
import {
    Stats,
    LineChart,
} from './components';

const Market = () => {

    return (
        <MainTemplate>
            <div className="content-wrapper">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="home-tab">
                                <Stats/>
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
        </MainTemplate>
    )
}
export default Market;