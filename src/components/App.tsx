import { Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import { Suspense } from "react";

import { MainPageAsync } from "../pages/MainPage/MainPageAsync";
import { AboutPageAsync } from "../pages/AboutPage/AboutPageAsync";
import useTheme from "../theme/useTheme";
import { classNames } from "../helpers/classNames";

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <button onClick={toggleTheme}>Theme</button>
      <Link to='/'>Main</Link>
      <Link to='/about'>About</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path={'/'} element={<MainPageAsync />}></Route>
          <Route path={'/about'} element={<AboutPageAsync />}></Route>
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;