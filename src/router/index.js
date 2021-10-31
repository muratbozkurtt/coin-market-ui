import Vue from 'vue'
import VueRouter from 'vue-router'
import BlankLayout from '../layouts/BlankLayout'
import ErrorPage from '@/views/ErrorPage'
import store from '../store'
import SignIn from '../views/auth/SignIn'
import CoinList from '../views/coinMarket/CoinList'

Vue.use(VueRouter)

const routes = [
    {
        path: '/auth',
        name: 'auth',
        component: BlankLayout,
        children: [
            {
                path: 'signIn',
                name: 'SignIn',
                component: SignIn,
                meta: { guest: true, title: 'Sign In' },
            },
        ],
    },
    {
        path: '/',
        name: 'Dashboard',
        component: BlankLayout,
        meta: { requiresAuth: true },
        children: [
            {
                path: '/',
                name: 'CoinList',
                component: CoinList,
                meta: { requiresAuth: true, title: 'Coin List' },
            },
        ],
    },
    {
        path: '/:pathMatch(.*)*',
        component: ErrorPage,
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
})


router.beforeEach((to, from, next) => {
    const isAuthenticated = store.getters['auth/isAuthenticated'] && localStorage.getItem('TokenParibu')?.length > 0;
    if (to.matched.some((record) => record.meta.requiresAuth)) {
        if (isAuthenticated) {
            next();
            return;
        }
        next("/auth/signIn");
    } else {
        next();
    }
});

router.beforeEach((to, from, next) => {
    const isAuthenticated = store.getters['auth/isAuthenticated'] && localStorage.getItem('TokenParibu')?.length > 0;
    if (to.matched.some((record) => record.meta.guest)) {
        if (isAuthenticated) {
            next("/");
            return;
        }
        next();
    } else {
        next();
    }
});




export default router;
