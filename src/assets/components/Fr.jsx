import illu from "/src/img/home-img.png";
import top from "/src/img/top.svg";
import bottom from "/src/img/bottom.svg";
import marvel from "/src/img/marvel.png";
import mobile from "/src/img/mobile.png";
import deliveroo from "/src/img/deliveroo.png";
import vinted from "/src/img/vinted.png";
import www from "/src/img/www.svg";
import githubblack from "/src/img/githubblack.svg";
import gamehub from "/src/img/game-hub.png";

const Fr = () => {
  return (
    <div>
      <div className="container">
        <section className="home">
          <article>
            <h2>Bienvenue.</h2>
            <p>
              Je suis développeuse Full Stack basée en région
              Nouvelle-Aquitaine, France. <br /> J’ai réalisé plusieurs projets
              web & mobile lors de mon bootcamp chez Le Reacteur. <br />
              Principalement en React & React Native.
            </p>
          </article>
          <img alt="illustration" src={illu}></img>
        </section>
      </div>
      <div className="divider-top">
        <img alt="top" src={top}></img>
      </div>
      <section className="work">
        <div className="title container">
          <h3>Mes Projets</h3>
          <section className="gallery">
            <article>
              <div className="picture">
                <div className="gradient"></div>
                <img alt="marvel" src={marvel}></img>
              </div>

              <h4>Site Marvel</h4>
              <p>
                Un projet de création et réalisation d'un site en full stack.
                Les fonctionnalités sont l'affichage depuis une API de l'univers
                Marvel. Possibilités de s'inscrire, se connecter, déconnecter.
                D'enregistrer des favoris via les cookies, de faire une
                recherche avec un affichage en pagination. Utilisation de React,
                Axios, Express.js & Mongo Atlas
              </p>
              <div className="link">
                <a href="https://marvel-test-tech.netlify.app/" target="_blank">
                  <img alt="www" src={www}></img>
                </a>
                <a
                  href="https://github.com/MaelleVo/marvel-frontend"
                  target="_blank"
                >
                  <img alt="www" src={githubblack}></img>
                </a>
              </div>
            </article>

            <article>
              <div className="picture">
                <div className="gradient"></div>
                <img alt="gamehub" src={gamehub}></img>
              </div>

              <h4>App Portail Jeux Vidéos</h4>
              <p>
                Cette application web permet aux utilisateurs de rechercher des
                jeux vidéo selon le genre, la note et la date de sortie. Elle
                vise à offrir une interface intuitive et responsive où les
                utilisateurs peuvent facilement filtrer et explorer.
                L'application est construite avec TypeScript et Chakra UI pour
                un design accessible et réactif. Elle dispose également d'un
                switch mode sombre/clair pour améliorer l'expérience
                utilisateur.
              </p>
              <div className="link">
                <a href="https://game-app-cyan.vercel.app/" target="_blank">
                  <img alt="www" src={www}></img>
                </a>
                <a href="https://github.com/MaelleVo/game-hub" target="_blank">
                  <img alt="www" src={githubblack}></img>
                </a>
              </div>
            </article>

            <article>
              <div className="picture">
                <div className="gradient"></div>
                <img alt="vinted" src={vinted}></img>
              </div>

              <h4>Site Vinted</h4>
              <p>
                Un projet de reproduction du site en full stack. Les
                fonctionnalités sont l'affichage des produits depuis une base de
                données. Possibilités de s'inscrire, se connecter, déconnecter.
                Faire une recherche avec un affichage dynamique. De mettre en
                ventes des produits. Actualisation de la DB. Ajout de stripe
                pour les paiements.
              </p>
              <div className="link">
                <a
                  href="https://vinted-frontend-exo.netlify.app/"
                  target="_blank"
                >
                  <img alt="www" src={www}></img>
                </a>
                <a
                  href="https://github.com/MaelleVo/vinted-frontend"
                  target="_blank"
                >
                  <img alt="www" src={githubblack}></img>
                </a>
              </div>
            </article>
            <article>
              <div className="picture">
                <div className="gradient"></div>
                <img alt="mobile" src={mobile}></img>
              </div>

              <h4>App Mobile</h4>
              <p>
                Un projet de groupe avec clients pour la réalisation d'une app
                mobile en full stack. Les fonctionnalités sont l'inscription,
                déconnexion. D'ajouter des amis. De voter en swipant.
                Utilisation de React Native, Axios, Express.js & Mongo Atlas,
                initiation à Retool.
              </p>
              <div className="link"></div>
            </article>
            <article>
              <div className="picture">
                <div className="gradient"></div>
                <img alt="deliveroo" src={deliveroo}></img>
              </div>

              <h4>Site Deliveroo</h4>
              <p>
                Un projet de reproduction d'une page. Les fonctionnalités sont
                l'affichage depuis une API. Possibilités d'ajouter les éléments
                dans son panier et calcul du prix.
              </p>
              <div className="link">
                <a
                  href="https://warm-griffin-2e1c82.netlify.app/"
                  target="_blank"
                >
                  <img alt="www" src={www}></img>
                </a>
                <a
                  href="https://github.com/MaelleVo/marvel-frontend"
                  target="_blank"
                >
                  <img alt="www" src={githubblack}></img>
                </a>
              </div>
            </article>
          </section>
        </div>
      </section>
      <div className="divider-bottom">
        <img alt="bottom" src={bottom}></img>
      </div>
    </div>
  );
};

export default Fr;
