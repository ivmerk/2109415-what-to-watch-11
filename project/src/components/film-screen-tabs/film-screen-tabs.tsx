// import { useState } from 'react';
// import { FilmInfoTab } from '../../const';

function FilmScreenTabs(): JSX.Element{

  // const[activeTab, selectActiveTab] = useState(FilmInfoTab.Overview);

  // function mouseClickHandle() {

  // }

  return(
    <ul className="film-nav__list">
      <li className="film-nav__item film-nav__item--active">
        {/* <a href="#" className="film-nav__link">Overview</a> */}
      </li>
      <li className="film-nav__item">
        {/* <a href="#" className="film-nav__link">Details</a> */}
      </li>
      <li className="film-nav__item">
        {/* <a href="#" className="film-nav__link">Reviews</a> */}
      </li>
    </ul>
  );
}
export default FilmScreenTabs;

