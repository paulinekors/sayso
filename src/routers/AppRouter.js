import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import App from '../components/App';
import DetailView from '../components/DetailView';
import CreateMessage from '../components/CreateMessage';
import Header from '../components/Header';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={App} exact={true} />
        <Route path="/:id" component={DetailView} />
        <Route path="/new" component={CreateMessage} />
        <Route render={() => <Redirect to={{ pathname: '/' }} />} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
