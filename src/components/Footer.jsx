import "../styles/Footer.scss";

const Footer = () => {
  return (
    <footer>
      <div>
        <h1>TechyStar</h1>
        <p>@all right reserverd</p>
      </div>
      <div>
        <h5>Follow Us</h5>
        <div>
          <a
            href="https://www.linkedin.com/in/abhishek-rawat-867b44208/"
            target={"_blank"}
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/Abhishekrawat10"
            target={"_blank"}
            rel="noreferrer"
          >
            Github
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
