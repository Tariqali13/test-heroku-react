import React from 'react';

const Header = () => {
    return (
        <div className="horizontal-menu">
            <nav className="navbar top-navbar col-lg-12 col-12 p-0">
                <div className="container">
                    <div
                        className="text-center navbar-brand-wrapper d-flex align-items-center justify-content-start me-lg-3">
                        <div>
                            <a className="navbar-brand brand-logo" href="#">
                                {/*<img src="/images/logo-light.svg" alt="logo"/>*/}
                            </a>
                            <a className="navbar-brand brand-logo-mini" href="#">
                                {/*<img src="/images/logo-mini.svg" alt="logo"/>*/}
                            </a>
                        </div>
                    </div>
                    <div className="navbar-menu-wrapper d-flex align-items-center justify-content-end">
                        <ul className="navbar-nav navbar-nav-right">
                            <li className="nav-item dropdown  d-none d-lg-flex user-dropdown">
                                <a className="nav-link" id="UserDropdown" href="#" data-bs-toggle="dropdown"
                                   aria-expanded="false">
                                    {/*<img className="img-xs rounded-circle" src="../../images/faces/face8.jpg"*/}
                                    {/*     alt="Profile image"/>*/}
                                </a>
                                <div className="dropdown-menu dropdown-menu-right navbar-dropdown"
                                     aria-labelledby="UserDropdown">
                                    <div className="dropdown-header text-center">
                                        {/*<img className="img-md rounded-circle" src="../../images/faces/face8.jpg"*/}
                                        {/*     alt="Profile image"/>*/}
                                        <p className="mb-1 mt-3 font-weight-semibold">Allen Moreno</p>
                                        <p className="fw-light text-muted mb-0">allenmoreno@gmail.com</p>
                                    </div>
                                    <a className="dropdown-item"><i
                                        className="dropdown-item-icon mdi mdi-account-outline text-primary me-2">
                                    </i> My
                                        Profile <span
                                            className="badge badge-pill badge-danger">1</span></a>
                                    <a className="dropdown-item"><i
                                        className="dropdown-item-icon mdi mdi-message-text-outline text-primary me-2">
                                    </i> Messages</a>
                                    <a className="dropdown-item"><i
                                        className="dropdown-item-icon mdi mdi-calendar-check-outline text-primary me-2">
                                    </i> Activity</a>
                                    <a className="dropdown-item">
                                        <i className="dropdown-item-icon mdi mdi-help-circle-outline text-primary me-2">
                                        </i> FAQ</a>
                                    <a className="dropdown-item"><i
                                        className="dropdown-item-icon mdi mdi-power text-primary me-2">
                                    </i>Sign Out</a>
                                </div>
                            </li>
                        </ul>
                        <button className="navbar-toggler navbar-toggler-right d-lg-none align-self-center"
                                type="button"
                                data-toggle="horizontal-menu-toggle">
                            <span className="ti-menu">
                            </span>
                        </button>
                    </div>
                </div>
            </nav>
            <nav className="bottom-navbar">
                <div className="container">
                    <ul className="nav page-navigation">
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                <i className="icon-grid menu-icon">
                                </i>
                                <span className="menu-title">Market</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                <i className="icon-cog menu-icon">
                                </i>
                                <span className="menu-title">Trading</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                <i className="icon-cog menu-icon">
                                </i>
                                <span className="menu-title">XData</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                <i className="icon-cog menu-icon">\
                                </i>
                                <span className="menu-title">Products</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                <i className="icon-cog menu-icon">
                                </i>
                                <span className="menu-title">MetaData</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}
export {Header}