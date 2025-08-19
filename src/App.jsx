import logo from './assets/logo.png'

export default function App() {
  return (
    <div className="app">
      <header className="header">
        <div className="logo-wrapper">
          <img src={logo} alt="SpaceX" className="logo" />
        </div>
        <nav className="nav">
          <a href="#">Главная</a>
          <a href="#">Технология</a>
          <a href="#">График полетов</a>
          <a href="#">Гарантии</a>
          <a href="#">О компании</a>
          <a href="#">Контакты</a>
        </nav>
      </header>
      <main className="hero">
        <div className="hero-content">
          <h1>
            Путешествие
            <span>на красную планету</span>
          </h1>
          <div className="cta">
            <div className="line-with-rocket">
              <span className="rocket" />
              <span className="line" />
            </div>
            <button className="start-btn">начать путешествие</button>
          </div>
        </div>
        <div className="stats">
          <div className="stat">
            <span className="stat-label">мы</span>
            <span className="stat-value">1</span>
            <span className="stat-desc">на рынке</span>
          </div>
          <div className="stat">
            <span className="stat-label">гарантируем</span>
            <span className="stat-value">50%</span>
            <span className="stat-desc">безопасность</span>
          </div>
          <div className="stat">
            <span className="stat-label">календарных из</span>
            <span className="stat-value">2001</span>
            <span className="stat-desc">в году</span>
          </div>
          <div className="stat">
            <span className="stat-label">путешествие</span>
            <span className="stat-value">597</span>
            <span className="stat-desc">дней</span>
          </div>
        </div>
      </main>
    </div>
  )
}

