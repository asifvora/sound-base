import React, { Component } from 'react';

export default class GoogleAd extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
    }

    render() {
        return (
            <div style={this.props.wrapperDivStyle} >
                <ins className="adsbygoogle"
                    style={{ 'display': 'block' }}
                    data-ad-client={this.props.client}
                    data-ad-slot={this.props.slot}
                    data-ad-format={this.props.format}>
                </ins>
            </div>
        );
    }
}
