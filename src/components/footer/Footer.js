'use strict';

import React, { Component } from "react";
import { Player } from "../player";
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom';

class Footer extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Player />
        );
    }
}

const mapStateToProps = state => {
    return state;
};
export default withRouter(connect(mapStateToProps)(Footer));