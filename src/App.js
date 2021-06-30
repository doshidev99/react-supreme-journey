import { useEffect } from 'react';

import { Redirect, NavLink, Link, Route, Switch } from 'react-router-dom';
import { NotFound } from './components/NotFound';
import { Home } from './features/Home';
import { Todo } from './features/Todo';

import productApi from './api/productApi'
import Header from 'components/Header';
function App() {

  useEffect(() => {
    const fetchProducts = async () => {
      const params = {
        _limit: 10
      }
      const productList = await productApi.getAll(params);
    }

    fetchProducts();
  }, [])
  return (
    <div className="App">
      {/* <p>
        <NavLink to="/todo" activeClassName="active">ToDo - NavLink</NavLink>
      </p>
      <Link to="/todo">ToDo - Link</Link> */}
      <Header />
      <Switch>

        {/* <Redirect from="/home" to="/" /> */}
        <Redirect from="/home" to="/" exact />

        <Route path="/" component={Home} exact />
        <Route path="/todo" component={Todo} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
