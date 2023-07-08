import './App.css'

export default function App() {
  return(
    <>
    <header>
      <div id="logo-site">
        <a href="#">
          <img src="./src/assets/img/logo-site.png" alt="logo-clonify" />
        </a>
      </div>

      <div id="menu">
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Shop</a></li>
          <li><a href="#">Product <img src="./src/assets/icon/arrow.png" alt="" /></a></li>    
          <li><a href="#">Pages</a></li>
        </ul>
      </div>

      <div id="icons-top">
        <button>
          <a href="#">
            <img src="./src/assets/icon/search-icon.png" alt="logo de pesquisa" />
          </a>
        </button>

        <button>
          <a href="#">
            <img src="./src/assets/icon/profile-icon.png" alt="logo de pesquisa" />
          </a>
        </button>

        <button>
          <a href="#">
            <img src="./src/assets/icon/hearth-icon.png" alt="logo de pesquisa" />
          </a>
        </button>

        <button>
          <a href="#">
            <img src="./src/assets/icon/shopandnumber.png" alt="logo de pesquisa" />
          </a>
        </button>
      </div>
    </header>




    <div id="content">
      <div id="content-left">
        <img src="./src/assets/img/content-image.png" alt="logo de uma rapaz portando uma mochila" />
      </div>

      <div id="content-right">
      <span>IKIGAI</span>
      <h1>Leather bags <br></br> worth hugging.</h1>
      <p>Keep your everyday style chic and on-trend with our <br></br> selection 20+ styles to choose from.</p>
      <a href="#">See Collection</a>
      </div>
    </div>




    <section id="section1">
      <div id="logos-section1">
        <img src="./src/assets/logos/nike.png" alt="logo nike" />
        <img src="./src/assets/logos/hush.png" alt="logo hush" />
        <img src="./src/assets/logos/puma.png" alt="logo puma" />
        <img src="./src/assets/logos/shoei.png" alt="logo shoei" />
        <img src="./src/assets/logos/mare.png" alt="logo mare" />
        <img src="./src/assets/logos/supreme.png" alt="logo supreme" />
      </div>
    </section>
    </>
  )
} 
