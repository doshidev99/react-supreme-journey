import { Button, makeStyles } from '@material-ui/core';
import React from 'react'
import './style.scss'
import styles from './styles.module.css'

const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
  },
});


const Album = props => {
	const classes = useStyles();

	return (
		<div className="album album--active">
			<h3>Write CSS</h3>
			<Button className={classes.root}>Hook</Button>;
			<div className={styles.purple}>
				css module
			</div>
			<div className="album__title">
				<h3>
					this is Album
				</h3>
				<div className="album__sub album__sub--active">
					this is sub-title
				</div>
			</div>
			<div className="album__description">
				description
			</div>
		</div>
	)
}

Album.propTypes = {

}

export default Album
