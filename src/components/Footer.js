import "../blocks/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__info">
        <p className="footer__userName">Developed by Dararat Bishop</p>
        <p className="footer__year">{new Date().getFullYear()}</p>
      </div>
    </footer>
  );
};
export default Footer;
