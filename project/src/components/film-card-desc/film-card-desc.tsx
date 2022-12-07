import { useState } from 'react';
import { FilmInfoTab } from '../../const';

import { Comment, MovieCard } from '../../types/moviescards';
import Details from './details/details';
import Overview from './overview/overview';
import Reviews from './reviews/reviews';

type FilmCardDescProps = {
  selectedFilm: MovieCard;
  comments: Comment[];
}


function FilmCardDesc({selectedFilm, comments}: FilmCardDescProps): JSX.Element{

  const[activeTab, selectActiveTab] = useState(FilmInfoTab[0]);

  return(
    <div className="film-card__desc">
      <nav className="film-nav film-card__nav">
        <ul
          className="film-nav__list"
        >
          {FilmInfoTab.map((item) => (
            <li
              className={activeTab === item ? 'film-nav__item film-nav__item--active' : 'film-nav__item '}
              key={item}
            >
              <div
                key={item}
                className="film-nav__link"
                onClick={() => selectActiveTab(item)}
              >
                {item}
              </div>
            </li>))}
        </ul>
      </nav>

      {(activeTab === 'Overview') ? <Overview selectedFilm={selectedFilm}/> : ''}
      {(activeTab === 'Details') ? <Details selectedFilm={selectedFilm}/> : ''}
      {(activeTab === 'Reviews') ? <Reviews comments = {comments}/> : ''}

    </div>
  );
}
export default FilmCardDesc;

