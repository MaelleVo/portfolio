import illu from "/src/img/home-img.png";
import top from "/src/img/top.svg";
import bottom from "/src/img/bottom.svg";
import marvel from "/src/img/marvel.png";
import mobile from "/src/img/mobile.png";
import deliveroo from "/src/img/deliveroo.png";
import vinted from "/src/img/vinted.png";
import www from "/src/img/www.svg";
import githubblack from "/src/img/githubblack.svg";

const En = () => {
  return (
    <div>
      <div className="container">
        <section className="home">
          <article>
            <h2>Welcome.</h2>
            <p>
              I am a Full Stack developer based in New-Aquitaine, France. <br />{" "}
              I have completed several projects web & mobile during my bootcamp
              at Le Reacteur. <br /> Mostly in React & React Native.
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
          <h3>My Projects</h3>
          <section className="gallery">
            <article>
              <div className="picture">
                <div className="gradient"></div>
                <img alt="marvel" src={marvel}></img>
              </div>

              <h4>Website Marvel</h4>
              <p>
                A project to create and implement a full stack website. The
                functionalities are, the display from an API of the universe of
                Marvel, caracters, comics. You can register, login and log out.
                Also add favorites with cookies, search for a comics. The
                project is made with React, Axios, Express.js & Mongo Atlas.
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
                <img alt="vinted" src={vinted}></img>
              </div>

              <h4>Website Vinted</h4>
              <p>
                Reproduction of the website vinted in full stack. All the
                products are from a database. Register, log in or out
                functionalities. Search into products also create new listings.
                Payment done with Stripe.
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
                Realisation of a mobile app for a client. It was a short group
                project using react native. Functionalities to register, log in
                and out, swip to vote.
              </p>
              <div className="link"></div>
            </article>
            <article>
              <div className="picture">
                <div className="gradient"></div>
                <img alt="deliveroo" src={deliveroo}></img>
              </div>

              <h4>Website Deliveroo</h4>
              <p>
                Little project to reproduct one page for display the products,
                adding them to our cart and calculate the total amount.
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

export default En;
