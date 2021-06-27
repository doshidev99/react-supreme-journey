import { NavLink, Link, Route, Switch } from 'react-router-dom';
import { Todo } from './features/Todo';

function App() {
  return (
    <div className="App">
      <p>
        <NavLink to="/todo" activeClassName="active">ToDo - NavLink</NavLink>
      </p>
      <Link to="/todo">ToDo - Link</Link>

      <Switch>
        <Route path="/" component={Todo} />
        <Route path="/todo" component={Todo} />
      </Switch>
    </div>
  );
}

export default App;
