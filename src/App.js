import { BrowserRouter, Route, Link, Switch, Redirect } from 'react-router-dom';

import { ROUTES } from 'consts';
import { Home } from 'pages/Home';
import { Login } from 'pages/Login';
import { Users } from 'pages/Users';
import { UserDetail } from 'pages/UserDetail';

export const App = () => {
  return (
    <BrowserRouter>
      <header>
        <h1>This is app</h1>
      </header>
      <ul>
        <li>
          <Link to={ROUTES.LOGIN}>Login</Link>
        </li>
        <li>
          <Link to={ROUTES.HOME}>Home</Link>
        </li>
        <li>
          <Link to={ROUTES.USERS}>Users</Link>
        </li>
      </ul>
      <Switch>
        <Route path={ROUTES.LOGIN} component={Login} />
        <Route path={ROUTES.USER_DETAIL} component={UserDetail} />
        <Route path={ROUTES.USERS} component={Users} />
        <Route path={ROUTES.HOME} exact component={Home} />
        <Redirect to={ROUTES.LOGIN} />
      </Switch>
    </BrowserRouter>
  );
};
