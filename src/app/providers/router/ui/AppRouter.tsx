import { getUserAuthData } from 'entities/User';
import { Suspense, memo, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from 'shared/config/routeConfig/routeConfig';
import { PageLoader } from 'widgets/PageLoader';

export const AppRouter = memo(() => {
  const isAuth = useSelector(getUserAuthData);

  const routes = useMemo(() => Object.values(routeConfig).filter((route) => {
    if (!isAuth && route.authOnly) {
      return false;
    }
    return true;
  }), [isAuth]);

  return (
    <div className="page-wrapper">
      <Suspense fallback={<PageLoader />}>
        <Routes>
          {routes.map(({ element, path }) => (
            <Route
              path={path}
              element={element}
              key={path}
            />
          ))}
        </Routes>
      </Suspense>
    </div>
  );
});
