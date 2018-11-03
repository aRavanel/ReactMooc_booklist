import React from 'react'
import VideoListItem from './video_list_item';

const VideoList = (props) => {
    const videoItems = props.videos.map((video) =>{
        return (
            <VideoListItem 
            onVideoSelect = {props.onVideoSelect}
            key ={video.etag} 
            video={video} />
        );
    });

    // retourne une liste de composants videos qu'il affiche
    return(
        <ul className="col-md-4 list-goup">
            {videoItems}
        </ul>
    );
};

export default VideoList;