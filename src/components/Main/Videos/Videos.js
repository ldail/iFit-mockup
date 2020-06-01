//Dependencies
import React, { useState } from 'react';

//Styling
import './Videos.css';

//Assets
import { VIDEOS } from '../../../assets/info';
import timeIcon from '../../../assets/icons/time-icon.png';
import viewsIcon from '../../../assets/icons/views-icon.png';
import viewPlaylistIcon from '../../../assets/icons/playlist-icon.png';

const Videos = () => {

  /*
  Effect: When hovering over a video thumbnail, scale the video thumbnail up. 
  When leaving the hover, return it to normal
  */
 const [videoHovered, setVideoHovered] = useState(null);

 const toggleScaleOnHover = (i) => {
   if (videoHovered === i) {
     setVideoHovered(null)
   }
   else {
     setVideoHovered(i)
   }
 }

  return (
    <div className="videos">
      <ul>
        {VIDEOS.map((video,i) => {
          return (
            <li 
              className="video-item"
              key={i}
              onMouseEnter={() => toggleScaleOnHover(i)}
              onMouseLeave={() => toggleScaleOnHover(i)}
            >
              <a href={video.url} target="_blank" rel="noopener noreferrer" className="thumbnail-container"><img src={video.thumbnail} alt={video.title} className={`thumbnail ${videoHovered === i ? 'scaleUpAnimation' : 'scaleDownAnimation'}`} /></a>
              <div className="video-details">
                <div className="video-created-info">
                  <h5><a href={video.url} target="_blank" rel="noopener noreferrer">{video.title}</a></h5>
                  <img src={video.userAvatar} alt="User avatar" className="user-avatar" />
                </div>
              {video.isSeries
                ? <a href={video.url} className="playlist-info">
                    <span className="playlist-count">{video.playlistCount}</span>
                    <span className="playlist-count-type">WORKOUTS</span>
                    <img src={viewPlaylistIcon} alt="view playlist" className="view-playlist" />
                  </a>
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
  );
};

export default Videos;