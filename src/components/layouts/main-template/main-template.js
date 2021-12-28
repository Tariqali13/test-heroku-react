import React from 'react';
import {Header, Footer} from './components';

const MainTemplate = (props) => {
    return (
        <div className="container-scroller">
            <Header/>
            <div className="container-fluid page-body-wrapper">
                <div className="main-panel">
                    {props.children}
                    <Footer/>
                </div>
            </div>
        </div>
    )
}
export default MainTemplate;