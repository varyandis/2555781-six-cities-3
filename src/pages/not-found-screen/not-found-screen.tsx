import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

function NotFoundScreen() {
  return (
    <main className="page__main page__main--favorites page__main--favorites-empty">
      <Helmet><title>6 cities: 404 Not Found</title></Helmet>
      <div className="page__favorites-container container">
        <section className="favorites favorites--empty">
          <h1 className="visually-hidden">Favorites (empty)</h1>
          <div className="favorites__status-wrapper">
            <b className="favorites__status">404 Not Found</b>
            {/* { самом простом случае, это может быть страница с текстом «404 Not Found» и ссылкой для перехода на главную страницу приложения. На эту страницу пользователь будет перенаправлен в случае обращения к несуществующей странице (например, через адресную строку).} */}
            {/* <p className="favorites__status-description">
          Save properties to narrow down search or plan your future trips.
            </p> */}
            <Link to="/">Вернуться на главную</Link>
          </div>
        </section>
      </div>
    </main>
  );
}

export default NotFoundScreen;
