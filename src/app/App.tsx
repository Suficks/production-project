import { Suspense, useEffect } from 'react';

import { getUserInited, userActions } from 'entities/User';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { HStack } from 'shared/ui/Stack';
import { useTheme } from './providers/ThemeProvider';
import { AppRouter } from './providers/router';

export function App() {
  const dispatch = useAppDispatch();
  const { theme } = useTheme();
  const inited = useSelector(getUserInited);

  useEffect(() => {
    dispatch(userActions.initAuthData());
  }, [dispatch]);

  return (
    <div className={classNames('app', {}, [theme])}>
      <Suspense fallback="">
        <Navbar />
        <HStack
          align="start"
          className="content-page"
        >
          <Sidebar />
          {inited && <AppRouter />}
        </HStack>
      </Suspense>
    </div>
  );
}
