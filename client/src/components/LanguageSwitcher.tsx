import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { i18n, t } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  const languages = [
    { code: 'en', name: t('languageSwitcher.en') },
    { code: 'de', name: t('languageSwitcher.de') },
    { code: 'fr', name: t('languageSwitcher.fr') },
    { code: 'it', name: t('languageSwitcher.it') },
    { code: 'es', name: t('languageSwitcher.es') },
    { code: 'pt-BR', name: t('languageSwitcher.pt-BR') }
  ];

  const currentLanguage = i18n.resolvedLanguage || 'en';

  return (
    <div className="language-switcher flex flex-row gap-3 text-sm">
      {languages.map((lang) => (
        <button
          key={lang.code}
          onClick={() => changeLanguage(lang.code)}
          className={`px-2 py-1 transition-colors ${
            currentLanguage === lang.code 
              ? 'font-bold border-b-2 border-black' 
              : 'text-gray-600 hover:text-black'
          }`}
        >
          {lang.name}
        </button>
      ))}
    </div>
  );
};

export default LanguageSwitcher;