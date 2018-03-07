import React from 'react';
import VideoListItem from './Video_list_item';

const VideoList = (props) => {
  // videos props comes from index.js App component
  const videoItems = props.videos.map((video) => {
    return (
      <VideoListItem
        onVideoSelect={props.onVideoSelect}
        key={video.etag}
        video={video}
      />
    );
    // etag is from youtube videos API
  });

  return (
    <ul className="col-md-4 list-group">
      {videoItems}
    </ul>
  );
}

export default VideoList;
