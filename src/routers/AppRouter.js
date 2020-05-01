import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import App from '../components/App';

const AppRouter = () => (
  <BrowserRouter>
      <Switch>
        <Route path="/" component={App} exact={true} />
        <Route render={() => <Redirect to={{pathname: "/"}} />} />
        {/* Other ways of writing this are: */}
        {/* <Redirect from="*" to="/" /> */}
        {/* <Route path="*" component={App} /> */}
        {/* <Redirect to="/" /> */}
      </Switch>
  </BrowserRouter>
);

export default AppRouter;
