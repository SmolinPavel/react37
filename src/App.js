import { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Link, Switch, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';

import { ROUTES } from 'consts';
import { Header } from 'components/Header';
import { Home } from 'pages/Home';
import { Login } from 'pages/Login';
import { UserDetail } from 'pages/UserDetail';
import { JwtExample } from 'pages/JwtExample';
import { store } from 'store';

const DynamicUsers = lazy(() =>
  import('pages/Users' /* webpackChunkName: "users-page" */),
);

export const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header value={21} />
        <ul>
          <li>
            <Link to={ROUTES.LOGIN}>Login</Link>
          </li>
          <li>
            <Link to={ROUTES.HOME}>Home</Link>
          </li>
          <li>
            <Link to={ROUTES.JWT}>Jwt</Link>
          </li>
          <li>
            <Link to={ROUTES.USERS}>Users</Link>
          </li>
        </ul>
        <Switch>
          <Route path={ROUTES.LOGIN} component={Login} />
          <Route path={ROUTES.USER_DETAIL} component={UserDetail} />
          <Route path={ROUTES.JWT} component={JwtExample} />

          <Route
            path={ROUTES.USERS}
            render={() => (
              <Suspense fallback={<h1>Loading...</h1>}>
                <DynamicUsers />
              </Suspense>
            )}
          />
          <Route path={ROUTES.HOME} exact component={Home} />
          <Redirect to={ROUTES.LOGIN} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
};
