import { FC, useEffect, useState } from 'react';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';

export const BugButton: FC = () => {
  const [error, setError] = useState(false);

  const onThrow = () => setError(true);

  useEffect(() => {
    if (error) {
      throw new Error();
    }
  }, [error]);

  return (
    // eslint-disable-next-line i18next/no-literal-string
    <Button
      onClick={onThrow}
    >
      throw error
    </Button>
  );
};
