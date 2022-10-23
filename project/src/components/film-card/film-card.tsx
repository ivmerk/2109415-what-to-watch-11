function FilmCard(): JSX.Element {
  return (
    <article className="small-film-card catalog__films-card">
      <div className="small-film-card__image">
        <img src="img/no-country-for-old-men.jpg" alt="No Country for Old Men" width="280" height="175" />
      </div>
      <h3 className="small-film-card__title">
        <a className="small-film-card__link" href="film-page.html">No Country for Old Men</a>
      </h3>
    </article>
  );
}

export default FilmCard;
