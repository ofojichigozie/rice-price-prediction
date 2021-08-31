import Login from './components/Login'
import Home from './components/Home'

let checkAuthenticatedState = (to, from, next) => {
    let isLoggedIn = localStorage.getItem('loggedInAdmin') !== null ? true : false;

    if(isLoggedIn){
        next();
        return;
    }

    next('/');
}

export default [
    {path: '/', component: Login},
    // {path: '/home', component: Home, beforeEnter: checkAuthenticatedState}
    {path: '/home', component: Home}
];