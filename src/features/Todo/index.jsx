import queryString from 'query-string';
import React, { useState } from 'react';
import { Link, Route, Switch, useHistory, useLocation, useRouteMatch } from 'react-router-dom';
import { DetailPage } from './pages/DetailPage';
import { ListPage } from './pages/ListPage';

export const Todo = () => {
	const match = useRouteMatch();
	const location = useLocation();
	const history = useHistory();
	// const [state, setState] = useState(() => queryString.parse(location.search));
	const [state] = useState(() => new URLSearchParams(location.search));

	console.log(state.get('page'), '<----');

	const handleSyncStateUrl = (page) => () => {
		const queryParams = { page }
		history.push({
			pathname: match.path,
			search: queryString.stringify(queryParams)
		})
	}
	return (
		<div>
			<p>
				<Link to={`${match.path}/123`}>ToDo - Detail Page</Link>
			</p>
			<button onClick={handleSyncStateUrl(Math.random())}> click change state url</button>
			<Switch>
				<Route path={match.path} component={ListPage} exact />
				<Route path={`${match.path}/:id`} component={DetailPage} />
			</Switch>
		</div>
	)
}
