import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Link, NavLink } from 'react-router-dom';
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@material-ui/core';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { unwrapResult } from '@reduxjs/toolkit'

import { register } from 'features/Auth/AuthSlice';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	menuButton: {
		marginRight: theme.spacing(2),
	},
	title: {
		flexGrow: 1,
	},
	link: {
		textDecoration: 'none',
		color: 'white'

	}
}));

export default function Header() {
	const classes = useStyles();
	const dispatch = useDispatch();

	const [isOpen, setIsOpen] = useState(false)

	const handleClose = () => { setIsOpen((cS) => !cS) }
	const handleClickOpen = () => {
		setIsOpen((cS) => !cS)
	}

	const handleLogin = () => {
		dispatch(register()).then(unwrapResult).then(value => console.log(value))
	}
	return (
		<div className={classes.root}>
			<AppBar position="static">
				<Toolbar>
					<IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
						<MenuIcon />
					</IconButton>
					<Typography variant="h6" className={classes.title}>
						<Link to="/" className={classes.link}>
							Supreme react
						</Link>
					</Typography>
					<NavLink to="/todo" className={classes.link}>
						<Button color="inherit">Todo</Button>
					</NavLink>
					<Button color="inherit" onClick={handleClickOpen}>Login</Button>
				</Toolbar>
			</AppBar>

			<Dialog
				open={isOpen}
				onClose={handleClose}
				disableEscapeKeyDown
				disableBackdropClick
				aria-labelledby="alert-dialog-title"
				aria-describedby="alert-dialog-description"
			>
				<DialogTitle id="alert-dialog-title">{"Use Google's location service?"}</DialogTitle>
				<DialogContent>
					<DialogContentText id="alert-dialog-description">
						Let Google help apps determine location. This means sending anonymous location data to
						Google, even when no apps are running.
					</DialogContentText>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleClose} color="primary">
						Disagree
					</Button>
					<Button onClick={handleLogin} color="primary" autoFocus>
						Agree
					</Button>
				</DialogActions>
			</Dialog>
		</div>
	);
}
