"use client"

import React, {useEffect, useRef} from "react";
import videojs from "video.js";
import Player from "video.js/dist/types/player";
// import "videojs-contrib-hls";
import './video.css'
import "video.js/dist/video-js.css";

interface IProps {
  options: any;
  onReady?: (p: Player) => void
}

/**
 * 
 * https://docs.videojs.com/module-videojs-videojs
 * 
 */
export const VideoPlayer = ( props: IProps ) => {
  
  const videoRef = useRef<HTMLVideoElement>(null);
  const playerRef = useRef<Player>();

  const { options, onReady } = props;

  useEffect(() => {
    // make sure player is only initialized once
    if (!playerRef.current && options && videoRef.current) {

      const player = playerRef.current = videojs(videoRef.current, options, () => {
        console.log("player is ready");
        onReady && onReady(player);
      });
    } else {
      // you can update player here [update player through props]
      // const player = playerRef.current;
      // player.autoplay(options.autoplay);
      // player.src(options.sources);
    }
  }, [options, videoRef]);

  // Dispose the player when the functional component unmounts
  useEffect(() => {
    
    return () => {
      const player = playerRef.current;
      if (player) {
        player.dispose();
        playerRef.current = undefined;
      }
    };
  }, []);

  return <video ref={videoRef} className="video-js vjs-youtube"/>;
}

export default VideoPlayer;