import React, { lazy, Suspense } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';

const AllCurrencies = lazy(() => import('./allCurrencies'));
const Currency = lazy(() => import('./currency'));

export const routes = {
  index: '/',
  currency: '/currency/:symbol',
};

const ROUTES = [
  {
    path: routes.index,
    exact: true,
    component: AllCurrencies,
  },
  {
    path: routes.currency,
    exact: true,
    component: Currency,
  },
  {
    path: '*',
    redirect: routes.index,
  },
];

const Routes = () => (
  <Switch>
    {ROUTES.map(route => (
      <Route
        key={route.path}
        path={route.path}
        exact={route.exact}
        component={data =>
          route.redirect ? (
            <Redirect to={{ pathname: route.redirect }} />
          ) : (
            <Suspense fallback={null}>
              <route.component {...data} />
            </Suspense>
          )
        }
      />
    ))}
  </Switch>
);

export default Routes;
