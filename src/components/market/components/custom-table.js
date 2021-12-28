import React from 'react';

const CustomTable = (props) => {
    const {headings = [], children} = props;
    return (
        <div className="row flex-grow">
            <div className="col-12 grid-margin stretch-card">
                <div className="card card-rounded">
                    <div className="card-body">
                        <div className="table-responsive  mt-1 ">
                            <table className="table select-table">
                                <thead className="overflow-hidden">
                                <tr>
                                    {headings.map((headng, i) => (
                                        <th key={i} className="text-center">{headng}</th>
                                    ))}
                                </tr>
                                </thead>
                                <tbody>
                                {children}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export {CustomTable};