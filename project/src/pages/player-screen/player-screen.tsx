import { SyntheticEvent, useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { useState} from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useAppSelector } from '../../hooks';
import { getFilms } from '../../store/film-data/selectors';
import NotFoundPage from '../not-found-page/not-found-page';
import LoadingScreen from '../loading-screen/loading-screen';
import { AppRoute } from '../../const';

function PlayerScreen():JSX.Element{
  const params = useParams();
  const filmId = params.id;
  const films = useAppSelector(getFilms);
  const navigate = useNavigate();
  const [isPlaying, setIsPlaying] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [timeProgress, setTimeProgress] = useState(0);
  const muted = false;

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
  },[isPlaying]);

  const handleProgress = (e: SyntheticEvent<HTMLVideoElement>) => {
    if (isNaN(e.currentTarget.duration))
    {return;}
    setProgress((e.currentTarget.currentTime / e.currentTarget.duration) * 100);
    setTimeProgress(e.currentTarget.currentTime);
  };
  const onPlayClickHandle = () => {
    setIsPlaying(!isPlaying);
  };
  const onFullScreenClickHandle = () => {
    const el = document.getElementById('full-screenVideo');
    if (!el)
    {return;}
    if (el.requestFullscreen) {
      el.requestFullscreen();
    }
  };

  const onExitClickHandle = () => {
    navigate(AppRoute.Main);
  };

  if(!filmId) { return <NotFoundPage/>;}

  const film = films[Number(filmId) - 1];
  const {videoLink, name, posterImage} = film;

  if(isLoading) {
    <LoadingScreen/>;
  }
  return(
    <div className="player">
      <Helmet>
        <title>Player</title>
      </Helmet>
      <video
        autoPlay = {isPlaying}
        onProgress={handleProgress}
        className="player__video"
        muted={muted}
        id="full-screenVideo"
        poster={posterImage}
        ref={videoRef}
      >
        <source src={videoLink} type="video/mp4"/>
        Sorry, your browser doesnt support embedded videos.
      </video>

      <button
        type="button"
        className="player__exit"
        onClick={onExitClickHandle}
      >Exit
      </button>

      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress" value={progress} max="100"></progress>
            <div className="player__toggler" style={{left: `${progress}%`}}>Toggler</div>
          </div>
          <div
            className="player__time-value"
          >{(Math.floor(timeProgress / 60)) ? `${Math.floor(timeProgress / 60)} :` : '00:'}
            {`${Math.floor(timeProgress % 60)}`}
          </div>
        </div>

        <div className="player__controls-row">
          <button
            type="button"
            className="player__play"
            onClick={onPlayClickHandle}
          >
            <svg
              viewBox={(isPlaying) ? '0 0 14 21' : '0 0 19 19'}
              width={(isPlaying) ? '14' : '10'}
              height={(isPlaying) ? '21' : '19'}
            >
              <use
                xlinkHref={(isPlaying) ? '#pause' : '#play-s'}
              >
              </use>
            </svg>
            <span>{(isPlaying) ? 'Pause' : 'Play'}</span>
            <span>Pause</span>

          </button>
          <div className="player__name">{name}</div>

          <button
            type="button"
            className="player__full-screen"
            onClick={onFullScreenClickHandle}
          >
            <svg viewBox="0 0 27 27" width="27" height="27">
              <use xlinkHref="#full-screen"></use>
            </svg>
            <span>Full screen</span>
          </button>
        </div>
      </div>
    </div>
  );
}
export default PlayerScreen;
