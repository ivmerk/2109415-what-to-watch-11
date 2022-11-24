import { Helmet } from 'react-helmet-async';
import AddReview from '../../components/add-review/add-review';
import Logo from '../../components/logo/logo';
import { MovieCard } from '../../types/moviescards';

type AddReviewScreenProps = {
  filmTop: MovieCard;
}

function AddReviewScreen( props:AddReviewScreenProps):JSX.Element{

  const{filmTop} = props;


  return(
    <section className="film-card film-card--full">
      <Helmet>
        <title>Add review...</title>
      </Helmet>
      <div className="film-card__header">
        <div className="film-card__bg">
          <img src="img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel" />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header">
          <Logo/>

          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <a href="film-page.html" className="breadcrumbs__link">{filmTop.name}</a>
              </li>
              <li className="breadcrumbs__item">
                {/* <a className="breadcrumbs__link">Add review</a> */}
              </li>
            </ul>
          </nav>

          <ul className="user-block">
            <li className="user-block__item">
              <div className="user-block__avatar">
                <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
              </div>
            </li>
            <li className="user-block__item">
              {/* <a className="user-block__link">Sign out</a> */}
            </li>
          </ul>
        </header>

        <div className="film-card__poster film-card__poster--small">
          <img src="img/the-grand-budapest-hotel-poster.jpg" alt={filmTop.name} width="218" height="327" />
        </div>
      </div>

      {/* <AddReview filmTop={filmTop} /> */}
      <AddReview />

    </section>
  );
}

export default AddReviewScreen;
