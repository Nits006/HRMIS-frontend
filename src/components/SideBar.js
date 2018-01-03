import React, {Component} from 'react';
export default class SideBar extends Component {
    render(){
        return (
            <aside className="main-sidebar">
                <section className="sidebar">
                    <div className="user-panel">
                        <div className="pull-left image">
                            <img src="../../../img/default-avatar.png" className="img-circle" alt="User Image" />
                        </div>
                        <div className="pull-left info">
                            <h4 className="profile-style">Alexander Pierce</h4>
                            <h5 className="profile-style">alex@javarndcorp.com</h5>
                            <h5 className="profile-style">Sr. Software developer</h5>
                            <h5 className="profile-style">Emp Id: 003212</h5>
                        </div>
             </div>
                   
                    <ul className="sidebar-menu" data-widget="tree">
                        <li className="sidebar-top-head"></li>
                        <li className="treeview">
                            <a href="#">
                                <i className="fa fa-files-o"></i>
                                <span>Overview</span>
                                <span className="pull-right-container">
                                </span>
                            </a>
                            <ul className="treeview-menu">
                                <li><a href="#dfsd"><i className="fa fa-circle-o"></i> Top Navigation</a></li>
                            </ul>
                        </li>
                        <li>
                        <a href="#">
                            <i className="fa fa-th"></i> <span>Greivance</span>
                            <span className="pull-right-container">
                            
                            </span>
                        </a>
                        </li>
                        
                    </ul>
                </section>
            </aside> 
        )
    }
}
