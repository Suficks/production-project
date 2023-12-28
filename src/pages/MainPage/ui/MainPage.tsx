import { useTranslation } from 'react-i18next';

function MainPage() {
  const { t } = useTranslation('main');

  return (
    <h1>{t('Главная страница')}</h1>
  );
}

export default MainPage;
