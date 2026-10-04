import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="text-sm mt-12 bg-base-200 px-6 py-4">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2">
        <p>{t("footer.copyright", { year: new Date().getFullYear() })}</p>
        <div className="flex gap-4">
          <Link to="/" className="hover:text-primary">
            {t("footer.home")}
          </Link>
          <Link to="/projects" className="hover:text-primary">
            {t("footer.projects")}
          </Link>
          <Link to="/contact" className="hover:text-primary">
            {t("footer.contact")}
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
