import { BugButton } from 'app/providers/ErrorBoundary/ui/BugButton';
import { useTranslation } from 'react-i18next';

function MainPage() {
  const { t } = useTranslation('main');

  return (
    <>
      <h1>{t('Главная страница')}</h1>
      <BugButton />
    </>
  );
}

export default MainPage;
