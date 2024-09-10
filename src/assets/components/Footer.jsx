import github from "/src/img/github.png";

const Footer = () => {
  return (
    <div className="footer container">
      <div className="copyright">
        <p>© 2024 Maëlle Volz</p>
      </div>
      <div className="media">
        <a href="https://github.com/MaelleVo" target="_blank">
          <img alt="github" src={github}></img>
        </a>
      </div>
    </div>
  );
};

export default Footer;
