import React, { useState } from 'react';
import { IntlProvider } from 'react-intl';
import Layout from './views/Layout';
import messages from './messages';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import './styles/App.scss';
import {RouteWithSubRoutes} from './routes'
import {routes} from './routes'

function App() {
  const [locale, setLocale] = useState('en');

  return (
    <Router>
    <IntlProvider locale={locale} messages={messages[locale]}>
      <Layout setLocale={setLocale}/>
      <div id="modal_root"></div>
    </IntlProvider>

    
    <Switch>
          {routes.map((route, i) => (
            <RouteWithSubRoutes key={i} {...route} />
          ))}
    </Switch>
    </Router>

  );
}

export default App;
