import React from 'react';

const ShortTables = () => {
    return (
        <div className="row flex-grow">
            <div className="col-md-6 col-lg-6 grid-margin stretch-card">
                <div className="card card-rounded">
                    <div className="card-body card-rounded">
                        <h4 className="card-title  card-title-dash">Recent Events</h4>
                        <div className="list align-items-center border-bottom py-2">
                            <div className="wrapper w-100">
                                <p className="mb-2 font-weight-medium">
                                    Change in Directors
                                </p>
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="d-flex align-items-center">
                                        <i className="mdi mdi-calendar text-muted me-1"></i>
                                        <p className="mb-0 text-small text-muted">Mar 14, 2019</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="list align-items-center border-bottom py-2">
                            <div className="wrapper w-100">
                                <p className="mb-2 font-weight-medium">
                                    Other Events
                                </p>
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="d-flex align-items-center">
                                        <i className="mdi mdi-calendar text-muted me-1"></i>
                                        <p className="mb-0 text-small text-muted">Mar 14, 2019</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="list align-items-center border-bottom py-2">
                            <div className="wrapper w-100">
                                <p className="mb-2 font-weight-medium">
                                    Quarterly Report
                                </p>
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="d-flex align-items-center">
                                        <i className="mdi mdi-calendar text-muted me-1"></i>
                                        <p className="mb-0 text-small text-muted">Mar 14, 2019</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="list align-items-center py-2">
                            <div className="wrapper w-100">
                                <p className="mb-2 font-weight-medium">
                                    Change in Directors
                                </p>
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="d-flex align-items-center">
                                        <i className="mdi mdi-calendar text-muted me-1"></i>
                                        <p className="mb-0 text-small text-muted">Mar 14, 2019</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="list align-items-center pt-3">
                            <div className="wrapper w-100">
                                <p className="mb-0">
                                    <a href="#" className="fw-bold text-primary">Show all <i
                                        className="mdi mdi-arrow-right ms-2"></i></a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-6 col-lg-6 grid-margin stretch-card">
                <div className="card card-rounded">
                    <div className="card-body">
                        <div className="d-flex align-items-center justify-content-between mb-3">
                            <h4 className="card-title card-title-dash">Activities</h4>
                            <p className="mb-0">20 finished, 5 remaining</p>
                        </div>
                        <ul className="bullet-line-list">
                            <li>
                                <div className="d-flex justify-content-between">
                                    <div><span className="text-light-green">Ben Tossell</span> assign you a task
                                    </div>
                                    <p>Just now</p>
                                </div>
                            </li>
                            <li>
                                <div className="d-flex justify-content-between">
                                    <div><span className="text-light-green">Oliver Noah</span> assign you a task
                                    </div>
                                    <p>1h</p>
                                </div>
                            </li>
                            <li>
                                <div className="d-flex justify-content-between">
                                    <div><span className="text-light-green">Jack William</span> assign you a
                                        task
                                    </div>
                                    <p>1h</p>
                                </div>
                            </li>
                            <li>
                                <div className="d-flex justify-content-between">
                                    <div><span className="text-light-green">Leo Lucas</span> assign you a task
                                    </div>
                                    <p>1h</p>
                                </div>
                            </li>
                            <li>
                                <div className="d-flex justify-content-between">
                                    <div><span className="text-light-green">Thomas Henry</span> assign you a
                                        task
                                    </div>
                                    <p>1h</p>
                                </div>
                            </li>
                            <li>
                                <div className="d-flex justify-content-between">
                                    <div><span className="text-light-green">Ben Tossell</span> assign you a task
                                    </div>
                                    <p>1h</p>
                                </div>
                            </li>
                            <li>
                                <div className="d-flex justify-content-between">
                                    <div><span className="text-light-green">Ben Tossell</span> assign you a task
                                    </div>
                                    <p>1h</p>
                                </div>
                            </li>
                        </ul>
                        <div className="list align-items-center pt-3">
                            <div className="wrapper w-100">
                                <p className="mb-0">
                                    <a href="#" className="fw-bold text-primary">Show all <i
                                        className="mdi mdi-arrow-right ms-2"></i></a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export { ShortTables };