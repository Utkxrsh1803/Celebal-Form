import React from 'react';
import Card from '../UI/Card';
import classes from './Home.module.css';


const Home = (props) => {
    return (
        <Card className={classes.home}>
            <h1>Welcome to Celebal technologies</h1>
            <p>Your username is {props.userInfo.username}, and you can be reached at {props.userInfo.email}, you was born on {props.userInfo.birthdate}.</p>
            <button onClick={props.onLogout} className={classes.button}>Logout</button>
        </Card>
    );
};

export default Home;