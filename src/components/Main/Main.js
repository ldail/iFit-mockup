import React from 'react';
import './Main.css';
import { REVIEWS, VIDEOS } from '../../assets/info';
import {ReactComponent as ArrowLeft} from '../../assets/icons/chevron-circle-left-solid.svg';
import {ReactComponent as ArrowRight} from '../../assets/icons/chevron-circle-right-solid.svg';
import timeIcon from '../../assets/icons/time-icon.png';
import viewsIcon from '../../assets/icons/views-icon.png';
import viewPlaylistIcon from '../../assets/icons/playlist-icon.png';

const Main = ({topHeaderRef, subHeaderRef}) => {
  
  /*
  Determine the height of the hero image. For mobile, we need to take the window's height,
  subtract the headers, and also leave space at the bottom so it is obvious there is more to scroll to.
  */
  const heroHeight = window.innerHeight - topHeaderRef?.current?.height -subHeaderRef?.current?.height - 50 || 500;
  return (
    <main className="main">
      <div className="hero-image" style={{height: `${heroHeight}px`}}>
        <h2>
          <span>The best personal training,</span>
          <span>right in your own home</span>
        </h2>
        <button className="join blue-button">Join iFit Coach</button>
      </div>
      <div className="reviews">
        <ul>
          {REVIEWS.map((review,i) => {
            return (
              <li key={i} className="review-item">
                <h4><review.CompanyLogo /></h4>
                <p>{review.reviewInfo}</p>
                <ArrowLeft className="review-arrow left" />
                <ArrowRight className="review-arrow right" />
              </li>
            );
          })}
        </ul>
      </div>
      <div className="videos">
        <ul>
          {VIDEOS.map((video,i) => {
            return (
              <li className="video-item" key={i}>
                <a href={video.url} target="_blank" rel="noopener noreferrer"><img src={video.thumbnail} alt={video.title} className="thumbnail" /></a>
                <div className="video-details">
                  <div className="video-created-info">
                    <h5><a href={video.url} target="_blank" rel="noopener noreferrer">{video.title}</a></h5>
                    <img src={video.userAvatar} alt="User avatar" className="user-avatar" />
                  </div>
                {video.isSeries
                  ? <div className="playlist-info">
                      <span className="playlist-count">{video.playlistCount}</span>
                      <span className="playlist-count-type">WORKOUTS</span>
                      <a href={video.url}><img src={viewPlaylistIcon} alt="view playlist" className="view-playlist" /></a>
                    </div>
                  : <>
                      <ul className="video-stats">
                        <li>
                          <img src={timeIcon} alt="video length" className="video-stat-icon" />
                          <span>{video.length}</span>
                        </li>
                        <li>
                          <img src={viewsIcon} alt="video views" className="video-stat-icon" />
                          <span>{video.views}</span>
                        </li>
                      </ul>
                      <a href={video.url} className="video-details-link">VIEW DETAILS</a>
                    </>
                }
                </div>
              </li>
            )
          })}
        </ul>
      </div>
      <div className="equipment">
        <h3>Interested in our exciting iFit-enabled equipment?</h3>
        <ul>
          <li className="equipment-item">
            <img src="#" alt="exercise equipment" />
            <span className="equipment-title">Treadmills</span>
          </li>
        </ul>
      </div>
    </main>
  );
};

export default Main;