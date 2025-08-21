import "./App.css";
import logo from "./assets/logo.png";
import bg from "./assets/bg.jpg";

export default function App() {
  return (
    <div className="page" style={{ backgroundImage: `url(${bg})` }}>
      {/* БЕЗ overlay — оригинальная картинка */}

      <header className="header">
        <div className="header__inner container">
          <img src={logo} alt="SpaceX" className="logo" />
          <nav className="nav">
            <a href="#" className="nav__link">Главная</a>
            <a href="#" className="nav__link">Технология</a>
            <a href="#" className="nav__link">График полетов</a>
            <a href="#" className="nav__link">Гарантии</a>
            <a href="#" className="nav__link">О компании</a>
            <a href="#" className="nav__link">Контакты</a>
          </nav>
        </div>
      </header>

      <main className="hero container">
        <section className="hero__copy">
          <h1 className="hero__title title-gradient">ПУТЕШЕСТВИЕ</h1>
          <p className="hero__subtitle title-gradient">на красную планету</p>

          <button className="cta">Начать путешествие</button>
        </section>

        <aside className="metrics">
          <article className="metric">
            <div className="metric__label">мы</div>
            <div className="metric__value">1</div>
            <div className="metric__desc">на рынке</div>
          </article>
          <article className="metric">
            <div className="metric__label">гарантируем</div>
            <div className="metric__value">50%</div>
            <div className="metric__desc">безопасность</div>
          </article>
          <article className="metric">
            <div className="metric__label">календарик за</div>
            <div className="metric__value">2001<span className="metric__suffix"> г.</span></div>
            <div className="metric__desc">в подарок</div>
          </article>
          <article className="metric">
            <div className="metric__label">путешествие</div>
            <div className="metric__value">597</div>
            <div className="metric__desc">дней</div>
          </article>
        </aside>
      </main>
    </div>
  );
}
