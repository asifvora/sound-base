'use strict';

import React, { Component } from "react";
import { Link, withRouter } from 'react-router-dom';
import { NavSearch } from '../nav';

class Header extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div >
                <div className="nav">
                    <div className="nav__inner container">
                        <div className="nav__section"><i className="nav__logo__icon ion-radio-waves"></i>
                            <Link to="/" className="nav__logo__text" title="Sound Base">Sound Base</Link>
                        </div>
                        <div className="nav__section nav__section--session"></div>
                        <div className="nav__section nav__section--search">
                            <NavSearch />
                        </div>
                    </div>
                </div>
                {/* <div className="songs-header ">
                    <div className="songs-header__inner">
                        <div className="songs-header__sections container">
                            <div className="songs-header__section songs-header__section--genres">
                                <div className="songs-header__genres ">
                                    <div className="songs-header__genres__active" role="button">genre</div>
                                    <div className="songs-header__genres__main">
                                        <div className="songs-header__genre "><a className="songs-header__genre__text" href="https://soundredux.io/#/songs?g=chill"
                                            title="">chill</a></div>
                                        <div className="songs-header__genre "><a className="songs-header__genre__text" href="https://soundredux.io/#/songs?g=deep"
                                            title="">deep</a></div>
                                        <div className="songs-header__genre "><a className="songs-header__genre__text" href="https://soundredux.io/#/songs?g=dubstep"
                                            title="">dubstep</a></div>
                                        <div className="songs-header__genre "><a className="songs-header__genre__text" href="https://soundredux.io/#/songs?g=house"
                                            title="">house</a></div>
                                        <div className="songs-header__genre "><a className="songs-header__genre__text" href="https://soundredux.io/#/songs?g=progressive"
                                            title="">progressive</a></div>
                                        <div className="songs-header__genre "><a className="songs-header__genre__text" href="https://soundredux.io/#/songs?g=tech"
                                            title="">tech</a></div>
                                        <div className="songs-header__genre "><a className="songs-header__genre__text" href="https://soundredux.io/#/songs?g=trance"
                                            title="">trance</a></div>
                                        <div className="songs-header__genre "><a className="songs-header__genre__text" href="https://soundredux.io/#/songs?g=tropical"
                                            title="">tropical</a></div>
                                    </div>
                                </div>
                            </div>
                            <div className="songs-header__section songs-header__section--time">
                                <div className="songs-header__times">
                                    <div className="songs-header__times__inner"><i className="songs-header__times__icon ion-funnel"></i><a className="songs-header__time "
                                        href="https://soundredux.io/#/songs?t=7&amp;q=bollywood" title="">7 days</a><a className="songs-header__time "
                                            href="https://soundredux.io/#/songs?t=30&amp;q=bollywood" title="">30 days</a><a className="songs-header__time "
                                                href="https://soundredux.io/#/songs?t=90&amp;q=bollywood" title="">90 days</a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
            </div>
        );
    }
}
export default withRouter(Header);