import { BugButton } from 'app/providers/ErrorBoundary/ui/BugButton';
import { useTranslation } from 'react-i18next';
import { Text, TextSize } from 'shared/ui/Text/Text';

function MainPage() {
  const { t } = useTranslation('main');

  return (
    <>
      <Text size={TextSize.L} title={t('Главная страница')} />
      <BugButton />
    </>
  );
}

export default MainPage;
