import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './shared/config/i18n/i18n';

import 'app/styles/index.scss';
import { App } from 'app/App';
import { ThemeProvider } from 'app/providers/ThemeProvider';

render(
  <BrowserRouter>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </BrowserRouter>,
  document.getElementById('root'),
);
