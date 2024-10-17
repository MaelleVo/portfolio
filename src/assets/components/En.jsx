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

const En = () => {
  return (
    <div>
      <div className="container">
        <section className="home">
          <article>
            <h2>Welcome.</h2>
            <p>
              I am a Full Stack Developer based in New-Aquitaine, France. I have
              completed several web and mobile projects during my bootcamp at Le
              Reacteur, primarily using React and React Native. <br /> Mostly in
              React & React Native.
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
                A project to create and implement a full-stack website. The
                functionalities include displaying data from the Marvel API,
                such as characters and comics. Users can register, log in, and
                log out. Additionally, they can add favorites using cookies,
                search for comics, and more. The project was built with React,
                Axios, Express.js, and MongoDB Atlas.
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

              <h4>Game Hub App</h4>
              <p>
                This web application allows users to search for video games
                based on different criteria such as genre, rating, and release
                date. It aims to provide an intuitive and responsive interface
                where users can easily filter and explore. The app is built
                using TypeScript and Chakra UI for responsive and accessible
                design. It features a dark/light mode switch to enhance the user
                experience.
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

              <h4>Vinted Website</h4>
              <p>
                Reproduction of the Vinted website in full-stack. All products
                are sourced from a database. Users can register, log in, and log
                out. The site allows searching for products and creating new
                listings. Payments are processed using Stripe.
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
                Development of a mobile app for a client. It was a short group
                project using React Native. The app includes functionalities
                such as user registration, login and logout, and swipe to vote.
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
                Small project to replicate a page displaying products, allowing
                users to add them to the cart and calculate the total amount.
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
