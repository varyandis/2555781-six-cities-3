function NotFoundScreen() {
  return (
    <main className="page__main page__main--favorites page__main--favorites-empty">
      <div className="page__favorites-container container">
        <section className="favorites favorites--empty">
          <h1 className="visually-hidden">Favorites (empty)</h1>
          <div className="favorites__status-wrapper">
            <b className="favorites__status">404 Not Found</b>
            {/* { самом простом случае, это может быть страница с текстом «404 Not Found» и ссылкой для перехода на главную страницу приложения. На эту страницу пользователь будет перенаправлен в случае обращения к несуществующей странице (например, через адресную строку).} */}
            {/* <p className="favorites__status-description">
          Save properties to narrow down search or plan your future trips.
            </p> */}
            <a href="/">Вернуться на главную</a>
          </div>
        </section>
      </div>
    </main>
  );
}

export default NotFoundScreen;
