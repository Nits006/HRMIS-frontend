import React, {Component} from 'react';

export default class Content extends Component {
    render(){

        return (
            <div className="content-wrapper">
                <section className="content-header">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="box">
                                <div className="box-header with-border">
                                    <h2 className="box-title ">Overview</h2>
                                </div>
                                <div className="box-body">
                                    <div className="row">
                                        <div className="col-md-8">
                                            <p className="text-center">
                                                <strong>Employee Details</strong>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="row">
                                    <div className="col-md-8">
                                    <div className="col-md-6">
                                    <label>Emp Name</label>
                                    <input type="text" className="form-control"/>
                                    </div>
                                    <div className="col-md-6">
                                    <label>Emp ID</label>
                                    <input type="text" className="form-control"/>
                                    </div>
                                    </div>
                                    </div>
                                    <div className="row">
                                    <div className="col-md-8">
                                    <div className="col-md-6">
                                    <label>Emp Code</label>
                                    <input type="text" className="form-control"/>
                                    </div>
                                    <div className="col-md-6">
                                    <label>Department</label>
                                    <input type="text" className="form-control"/>
                                    </div>
                                    </div>
                                    </div>
                                    <div className="row">
                                    <div className="col-md-8">
                                    <div className="col-md-6">
                                    <label>DOB</label>
                                    <input type="text" className="form-control"/>
                                    </div>
                                    <div className="col-md-6">
                                    <label>Address</label>
                                    <input type="text" className="form-control"/>
                                    </div>
                                    </div>
                                    </div>
                                    <div className="row">
                                    <div className="col-md-8">
                                    <div className="col-md-6">
                                    <label>Marital status</label>
                                    <input type="text" className="form-control"/>
                                    </div>
                                    <div className="col-md-6">
                                    <label>PAN No</label>
                                    <input type="text" className="form-control"/>
                                    </div>
                                    </div>
                                    </div>
                                    <div className="row">
                                    <div className="col-md-8">
                                    <div className="col-md-6">
                                    <label>Adhaar No</label>
                                    <input type="text" className="form-control"/>
                                    </div>
                                    <div className="col-md-6">
                                    <label>Emp ID</label>
                                    <input type="text" className="form-control"/>
                                    </div>
                                    </div>
                                    </div>
                                    <div className="row">
                                    <div className="col-md-8">
                                    <div className="col-md-6">
                                    <label>Voter ID</label>
                                    <input type="text" className="form-control"/>
                                    </div>
                                    <div className="col-md-6">
                                    <label>Driving license</label>
                                    <input type="text" className="form-control"/>
                                    </div>
                                    </div>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}