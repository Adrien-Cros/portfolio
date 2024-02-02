import './Header.scss'

function Header() {
  return (
    <header>
      <nav>
        <div className="header-part">
          <a href="#introduction">Introduction</a>
        </div>
        <div className="header-part">
          <a href="#presentation">Présentation</a>
        </div>
        <div className="header-part">
          <a href="#projets">Projets</a>
        </div>
        <div className="header-part">
          <a href="#contact">Contact</a>
        </div>
      </nav>
    </header>
  )
}

export default Header
