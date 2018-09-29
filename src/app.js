'use strict';

import React, { Component } from 'react';
class App extends Component {
  
  render() {
    return (
      <div>
        <div className="nav">
          <div className="nav__inner container">
            <div className="nav__section"><i className="nav__logo__icon ion-radio-waves"></i><a className="nav__logo__text" href="https://soundredux.io/#/songs"
              title="">mac</a></div>
            <div className="nav__section nav__section--session"></div>
            <div className="nav__section nav__section--search">
              <div className="nav-search">
                <i className="nav-search__icon ion-search"></i>
                <input type="text" className="nav-search__input"
                  placeholder="SEARCH" />
              </div>
            </div>
            <div className="nav__section nav__section--user">
              <div className="popover nav-user popover--right">
                <span className="popover__trigger" role="button" >
                  <div className="nav-user__trigger"><i className="nav-user__icon ion-person"></i><i className="nav-user__chevron ion-chevron-down"></i></div>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <div className="songs-header ">
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
          </div>
          <div className="container">
            <div className="songs-body">
              <div>
                <div className="row">
                  <div className="row__cell">
                    <div className="songs-body-card ">
                      <div className="songs-body-card__inner">
                        <div className="songs-body-card__artwork" style={{ backgroundImage: 'url(&quot;https://i1.sndcdn.com/artworks-000100709675-aebru6-t300x300.jpg&quot;)' }}>
                          <div className="artwork-play " role="button" ><i className="artwork-play__icon ion-ios-play"></i></div>
                        </div>
                        <div className="songs-body-card__main">
                          <div className="songs-body-card__avatar" style={{ backgroundImage: 'url(&quot;https://i1.sndcdn.com/artworks-000100709675-aebru6-t300x300.jpg&quot;)' }}></div>
                          <div className="songs-body-card__details"><a className="songs-body-card__title" href="https://soundredux.io/#/songs/182219480"
                            title="Tu Har Lamha - Full Song - Arijit Singh - Khamoshiyan 2015">Khamoshiyan 2015</a><a
                              className="songs-body-card__username" href="https://soundredux.io/#/users/128479062" title="Bollywood unplugged">Bollywood
                            unplugged</a></div>
                        </div>
                        <div className="popover heart songs-body-card__heart popover--right">
                          <span className="popover__trigger" role="button">
                            <div className="heart__inner"><i className="heart__icon ion-ios-heart"></i></div>
                          </span>
                        </div>
                      </div>
                      <div className="songs-body-card__mobile-events" role="button"></div>
                    </div>
                  </div>
                  <div className="row__cell">
                    <div className="songs-body-card ">
                      <div className="songs-body-card__inner">
                        <div className="songs-body-card__artwork" style={{ backgroundImage: 'url(&quot;https://i1.sndcdn.com/artworks-000100709675-aebru6-t300x300.jpg&quot;)' }}>
                          <div className="artwork-play " role="button"><i className="artwork-play__icon ion-ios-play"></i></div>
                        </div>
                        <div className="songs-body-card__main">
                          <div className="songs-body-card__avatar" style={{ backgroundImage: 'url(&quot;https://i1.sndcdn.com/artworks-000100709675-aebru6-t300x300.jpg&quot;)' }}></div>
                          <div className="songs-body-card__details"><a className="songs-body-card__title" href="https://soundredux.io/#/songs/161934289"
                            title="Sukoon Mila (Mary Kom) - Arijit Singh 2014 New song">Arijit Singh 2014 New song</a><a
                              className="songs-body-card__username" href="https://soundredux.io/#/users/82907931" title="Latest songs">Latest
                            songs</a></div>
                        </div>
                        <div className="popover heart songs-body-card__heart popover--right">
                          <span className="popover__trigger" role="button">
                            <div className="heart__inner"><i className="heart__icon ion-ios-heart"></i></div>
                          </span>
                        </div>
                      </div>
                      <div className="songs-body-card__mobile-events" role="button"></div>
                    </div>
                  </div>
                  <div className="row__cell">
                    <div className="songs-body-card ">
                      <div className="songs-body-card__inner">
                        <div className="songs-body-card__artwork" style={{ backgroundImage: 'url(&quot;https://i1.sndcdn.com/artworks-000100709675-aebru6-t300x300.jpg&quot;)' }}>
                          <div className="artwork-play " role="button"><i className="artwork-play__icon ion-ios-play"></i></div>
                        </div>
                        <div className="songs-body-card__main">
                          <div className="songs-body-card__avatar" style={{ backgroundImage: 'url(&quot;https://i1.sndcdn.com/artworks-000100709675-aebru6-t300x300.jpg&quot;)' }}></div>
                          <div className="songs-body-card__details"><a className="songs-body-card__title" href="https://soundredux.io/#/songs/135178449"
                            title="Bus rona mat | Aashiqui 3 | Leaked Song">Bus rona mat | Aashiqui 3 | Leaked Song</a><a
                              className="songs-body-card__username" href="https://soundredux.io/#/users/80507487" title="Bollywood Studios">Bollywood
                            Studios</a></div>
                        </div>
                        <div className="popover heart songs-body-card__heart popover--right">
                          <span className="popover__trigger" role="button">
                            <div className="heart__inner"><i className="heart__icon ion-ios-heart"></i></div>
                          </span>
                        </div>
                      </div>
                      <div className="songs-body-card__mobile-events" role="button"></div>
                    </div>
                  </div>
                  <div className="row__cell">
                    <div className="songs-body-card ">
                      <div className="songs-body-card__inner">
                        <div className="songs-body-card__artwork" style={{ backgroundImage: 'url(&quot;https://i1.sndcdn.com/artworks-000100709675-aebru6-t300x300.jpg&quot;)' }}>
                          <div className="artwork-play " role="button"><i className="artwork-play__icon ion-ios-play"></i></div>
                        </div>
                        <div className="songs-body-card__main">
                          <div className="songs-body-card__avatar" style={{ backgroundImage: 'url(&quot;https://i1.sndcdn.com/artworks-000100709675-aebru6-t300x300.jpg&quot;)' }}></div>
                          <div className="songs-body-card__details"><a className="songs-body-card__title" href="https://soundredux.io/#/songs/408913548"
                            title="New Vs Old Bollywood Songs Mashup  Raj Barman  Deepshikha  Bollywood Songs Medley">New
                            Vs Old Bollywood Songs Mashup Raj Barman Deepshikha Bollywood Songs Medley</a><a className="songs-body-card__username"
                              href="https://soundredux.io/#/users/108487307" title="پاولينا ليسنياک">پاولينا ليسنياک</a></div>
                        </div>
                        <div className="popover heart songs-body-card__heart popover--right">
                          <span className="popover__trigger" role="button">
                            <div className="heart__inner"><i className="heart__icon ion-ios-heart"></i></div>
                          </span>
                        </div>
                      </div>
                      <div className="songs-body-card__mobile-events" role="button"></div>
                    </div>
                  </div>
                  <div className="row__cell">
                    <div className="songs-body-card ">
                      <div className="songs-body-card__inner">
                        <div className="songs-body-card__artwork" style={{ backgroundImage: `url(&quot;&quot;)` }}>
                          <div className="artwork-play " role="button"><i className="artwork-play__icon ion-ios-play"></i></div>
                        </div>
                        <div className="songs-body-card__main">
                          <div className="songs-body-card__avatar" style={{ backgroundImage: 'url(&quot;https://i1.sndcdn.com/artworks-000100709675-aebru6-t300x300.jpg&quot;)' }}></div>
                          <div className="songs-body-card__details"><a className="songs-body-card__title" href="https://soundredux.io/#/songs/1038823"
                            title="Dard-E-Tanhai ( Jashnn )">Dard-E-Tanhai</a><a className="songs-body-card__username" href="https://soundredux.io/#/users/420139"
                              title="Bollywood">Bollywood</a></div>
                        </div>
                        <div className="popover heart songs-body-card__heart popover--right">
                          <span className="popover__trigger" role="button">
                            <div className="heart__inner"><i className="heart__icon ion-ios-heart"></i></div>
                          </span>
                        </div>
                      </div>
                      <div className="songs-body-card__mobile-events" role="button"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <audio id="audio" src="https://api.soundcloud.com/tracks/203407143/stream?client_id=a281614d7f34dc30b665dfcaa3ed7505"></audio>
          <div className="player">
            <div className="player__inner container">
              <div className="player__section player__section--song">
                <div className="player__song">
                  <div className="player__song__artwork" style={{ backgroundImage: 'url(&quot;https://i1.sndcdn.com/artworks-000100709675-aebru6-t300x300.jpg&quot;)' }}></div>
                  <div className="player__song__main"><a className="player__song__title" href="https://soundredux.io/#/songs/203407143"
                    title="">Bezubaan Piku 2015 (official)</a><a className="player__song__username" href="https://soundredux.io/#/users/149149659"
                      title="">bollywood latest songs ✔️</a></div>
                </div>
              </div>
              <div className="player__section">
                <div className="player__buttons">
                  <div className="player__button" role="button" ><i className="player__button__icon ion-ios-rewind"></i></div>
                  <div className="player__button" role="button" ><i className="player__button__icon ion-ios-pause"></i></div>
                  <div className="player__button" role="button"><i className="player__button__icon ion-ios-fastforward"></i></div>
                </div>
              </div>
              <div className="player__section player__section--seek">
                <div className="slider " role="button">
                  <div className="slider__bar">
                    <div className="slider__bar__fill" style={{ width: '10.6825%' }}>
                      <div className="slider__handle" role="button" ></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="player__section player__section--time">
                <div className="player__time">
                  00:36
                <div className="player__time__separator">/</div>
                  05:37
              </div>
              </div>
              <div className="player__section player__section--options">
                <div className="player__buttons player__buttons--options">
                  <div className="player__button " role="button" ><i className="player__button__icon ion-loop"></i></div>
                  <div className="player__button " role="button" ><i className="player__button__icon ion-shuffle"></i></div>
                  <div className="player__button " role="button"><i className="player__button__icon ion-android-list"></i></div>
                  <div className="player__button player__button--volume" role="button" ><i className="player__button__icon ion-android-volume-mute"></i><i
                    className="player__button__icon player__button__icon--absolute ion-android-volume-down"></i></div>
                </div>
              </div>
              <div className="player__section player__section--volume">
                <div className="slider " role="button" >
                  <div className="slider__bar">
                    <div className="slider__bar__fill" style={{ width: '22%' }}>
                      <div className="slider__handle" role="button"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
