import { useEffect, useRef} from 'react';
import { useState} from 'react';
import { MovieCard } from '../../types/moviescards';

type VideoPlayerProps = {
  autoPlay: boolean;
  muted: boolean;
  film: MovieCard;
}


function VideoPlayer( props: VideoPlayerProps):JSX.Element{
  const {autoPlay, muted, film} = props;
  const {posterImage, videoLink} = film;

  const [isLoading, setIsLoading] = useState(true);
  const isPlaying = autoPlay;

  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    let isVideoPlayerMounted = true;

    if (videoRef.current === null){
      return;
    }

    videoRef.current.addEventListener('loadeddata', () => {
      if (isVideoPlayerMounted){
        setIsLoading(false);
      }
    });

    if (isPlaying){
      videoRef.current.play();
      return;
    }

    videoRef.current.pause();

    return () => {
      isVideoPlayerMounted = false;
    };
  },[isLoading]);

  return(
    <video autoPlay={autoPlay}
      poster={posterImage}
      muted={muted}
      width="100%"
      ref={videoRef}
    >
      <source src={videoLink} type="video/mp4"/>
      <source src={videoLink} type="video/webm"/>
        Sorry, your browser doesnt support embedded videos.
    </video>
  );
}

export default VideoPlayer;
