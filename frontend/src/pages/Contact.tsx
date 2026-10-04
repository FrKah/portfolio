import { useTranslation } from "react-i18next";

function Contact() {
  const { t } = useTranslation();
  return (
    <div className="min-h-[calc(100vh-180px)] flex flex-row items-center justify-center">
      <div className="p-8 max-w-xl mx-auto text-center space-y-6">
        <h1 className="text-3xl font-bold">{t('contact.title')}</h1>

        <div className="space-y-2">
          <p className="text-lg">{t('contact.emailTitle')}</p>
          <div className="space-y-1">
            <a
              href="mailto:Frederic.Kah@eurecom.fr"
              className="text-primary hover:underline"
            >
              {t('contact.studentEmail')}
            </a>
            <br />
            <a
              href="mailto:frederic.kah.ing@gmail.com"
              className="text-primary hover:underline"
            >
              {t('contact.proEmail')}
            </a>
          </div>
        </div>

        <div className="space-y-2">
          <p className="text-lg">{t('contact.linkedinTitle')}</p>
          <a
            href="https://www.linkedin.com/in/frederic-kah-7213a1354"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-primary hover:underline"
          >
            {t('contact.linkedinBtn')}
          </a>
        </div>

        <div className="space-y-2">
          <p className="text-lg">{t('contact.githubTitle')}</p>
          <a
            href="https://github.com/FrKah"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-primary hover:underline"
          >
            {t('contact.githubBtn')}
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
