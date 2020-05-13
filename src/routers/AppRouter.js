import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import App from '../components/App';
import DetailView from '../components/DetailView';
import Header from '../components/Header';
import NewMessage from '../components/NewMessage';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={App} exact={true} />
        <Route path="/new" component={NewMessage} />
        <Route path="/:id" component={DetailView} exact={true} />
        <Route render={() => <Redirect to={{ pathname: '/' }} />} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
