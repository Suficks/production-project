import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from 'shared/config/routeConfig/routeConfig';
import { PageLoader } from 'widgets/PageLoader';

export function AppRouter() {
  return (
    <div className="page-wrapper">
      <Suspense fallback={<PageLoader />}>
        <Routes>
          {Object.values(routeConfig).map(({ element, path }) => (
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
}
