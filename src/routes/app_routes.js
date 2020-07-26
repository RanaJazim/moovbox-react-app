import React from 'react';
import {
    Switch,
    Route,
} from "react-router-dom";
import LoginScreen from "../screens/login_screen";
import RegisterScreen from "../screens/register_screen";
import HomeScreen from "../screens/home_screen";
import MovieScreen from '../screens/movie_screen';

const AppRoutes = () => (
    <Switch>
        <Route path="/login">
            <LoginScreen />
        </Route>
        <Route path="/register">
            <RegisterScreen />
        </Route>
        <Route path="/movies">
            <MovieScreen />
        </Route>
        <Route path="/">
            <HomeScreen />
        </Route>
    </Switch>
);

export default AppRoutes;