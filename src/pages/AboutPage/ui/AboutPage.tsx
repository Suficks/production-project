import { useTranslation } from 'react-i18next';
import { TextSize, Text } from 'shared/ui/Text/Text';

function AboutPage() {
  const { t } = useTranslation('about');

  return (
    <Text size={TextSize.L} title={t('О нас')} />
  );
}

export default AboutPage;
