'use strict';

import React, { Component } from "react";
import { Link, withRouter } from 'react-router-dom';
import { connect } from "react-redux";
import { NavSearch } from '../nav';

class Header extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="nav">
                <div className="nav__inner container">
                    <div className="nav__section"><i className="nav__logo__icon ion-radio-waves"></i>
                        <Link to="/" className="nav__logo__text" title="Sound Base">Sound Base</Link>
                    </div>
                    <div className="nav__section nav__section--search">
                        <NavSearch {...this.props} />
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return state;
};
const HeaderMenu = connect(mapStateToProps)(Header);
export default withRouter(HeaderMenu);
