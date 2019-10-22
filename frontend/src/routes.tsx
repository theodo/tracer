import React, { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router';
import Loader from './components/Loader/Loader.component';

const Home = lazy(() => import('./pages/Home'));
const Login = lazy(() => import('./pages/Login'));
const Reporting = lazy(() => import('./pages/Reporting'));

export const PATHS = {
  HOME: '/',
  LOGIN: '/login',
  REPORTING: '/:projectId/reporting',
};

const routes = () => (
  <Suspense fallback={<Loader />}>
    <Switch>
      <Route exact path={PATHS.HOME} component={Home} />
      <Route path={PATHS.LOGIN} component={Login} />
      <Route path={PATHS.REPORTING} component={Reporting} />
    </Switch>
  </Suspense>
);

export default routes;
