const Footer = () => {
  const footerYear = new Date().getFullYear();
  return (
    <footer className="footer p-10 bg-text-primary-content footer-center">
      <div>
        <p>Copyright {footerYear} All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
