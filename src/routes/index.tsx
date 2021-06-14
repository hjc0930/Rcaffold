import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import routerConfig from './config';
import { IRoute } from "./interface";

const getRouter = (routes?: IRoute[]): JSX.Element[] | undefined => {
  return routes?.map((route, key) => {
    if (route?.routes && route?.routes?.length !== 0) {
      return (
        <Route key={key} path={route.path} render={(props) => (
          <route.component {...props}>
            <Switch>
              {getRouter(route?.routes)}
            </Switch>
          </route.component>
        )}
        />
      )
    }

    if (route?.redirect) {
      return <Redirect key={key} to={route?.redirect} />
    }

    return <Route exact key={key} path={route.path} render={(props) => <route.component {...props} />} />
  })
}

export default () => {
  return (
    <BrowserRouter>
      <Switch>
        {getRouter(routerConfig)}
      </Switch>
    </BrowserRouter>
  );
};
