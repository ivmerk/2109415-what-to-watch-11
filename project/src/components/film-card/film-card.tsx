import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import { MovieCard } from '../../types/moviescards';
type FilmCardProps = {
  film:MovieCard;
  id:number;
}

function FilmCard(props: FilmCardProps): JSX.Element {
  const{id} = props;
  const{film} = props;
  const {filmInfo} = film;
  const{picture, title} = filmInfo;
  const [isActiveCard, setActiveCard] = useState(false);
  const mouseOverHandler = () => {
    setActiveCard(true);
  };
  const urlOfFilm:string = AppRoute.Film.slice(0,-2) + id.toString();
  return (
    <article className="small-film-card catalog__films-card">
      <Link to={urlOfFilm} >
        <div
          className="small-film-card__image"
          onMouseOver={mouseOverHandler}
        >
          <img
            src={picture}
            alt={title}
            key={id}
            id={`film-${id}`}
            width="280"
            height="175"
          />
        </div>
      </Link>
      <h3 className="small-film-card__title">
        <a className="small-film-card__link" href="film-page.html">{title}{isActiveCard.toString()}</a>
      </h3>
    </article>
  );
}

export default FilmCard;

