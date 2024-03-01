import { BugButton } from 'app/providers/ErrorBoundary/ui/BugButton';
import { useTranslation } from 'react-i18next';
import { Text, TextSize } from 'shared/ui/Text/Text';
import { Page } from 'widgets/Page/Page';

function MainPage() {
  const { t } = useTranslation('main');

  return (
    <Page>
      <Text size={TextSize.L} title={t('Главная страница')} />
      <BugButton />
    </Page>
  );
}

export default MainPage;
