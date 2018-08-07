import React from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';

class Home extends React.Component {
  render() {
    return (
      <React.Fragment>
        <main>
          <div class="home">
            <div class="home__logo"></div>
            <h1 class="home__title">Crea tu tarjeta de visita</h1>
            <h2 class="home__subtitle">Crea mejores contactos profesionales de forma fácil y cómoda.</h2>
            <ul class="home__links">
              <li>
                <a target="" href="card.html#disena" title="Disena tu tarjeta" class="home__links--icon"> <i class="far fa-object-ungroup "></i></a>
                <span class="home__links--name">Diseña</span>
              </li>
              <li>
                <a target="" href="card.html#rellena" title="Rellena tu tarjeta" class="home__links--icon"><i class="far fa-keyboard"></i></a>
                <span class="home__links--name">Rellena</span>
              </li>
              <li>
                <a target="" href="card.html#comparte" title="Comparte tu tarjeta" class="home__links--icon"><i class="fas fa-share-alt"></i></a>
                <span class="home__links--name">Comparte</span>
              </li>
            </ul>
            <a href="card.html#">
              <Link to={`/CardPage`}><button type="button" name="button" class="home__button">Comenzar</button></Link>
            </a>
          </div>
        </main>
        <Footer />
      </React.Fragment>
    );
  }
}

export default Home;