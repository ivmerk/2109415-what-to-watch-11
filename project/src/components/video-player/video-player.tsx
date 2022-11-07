// import { useState } from 'react';

type VideoPlayerProps = {
  autoPlay: boolean;
  src: string;
}

function VideoPlayer( props: VideoPlayerProps):JSX.Element{
  const {autoPlay = true, src} = props;
  // const [isLoading, setIsLoading] = useState(true);
  // const [isSound, setIsSound] = useState(false);
  // const [isPlaying, setIsPlaying] = useState(autoPlay);
  return(
    <video autoPlay={autoPlay} width="100%">
      <source src={src} type="video/mp4" />
      <source src={src} type="video/webm" />
    Sorry, your browser doesnt support embedded videos.
    </video>
  );
}

export default VideoPlayer;
