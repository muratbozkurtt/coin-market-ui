import Vue from 'vue'
import VueRouter from 'vue-router'
import BlankLayout from '../layouts/BlankLayout'
import ErrorPage from '@/views/Pages/ErrorPage'
import store from '../store'
import Login from '../views/Login'
import CoinMarket from '../views/CoinMarket'

Vue.use(VueRouter)

const routes = [
    {
        path: '/auth',
        name: 'auth',
        component: BlankLayout,
        children: [
            {
                path: 'login',
                name: 'login',
                component: Login,
                meta: { title: 'Login' },
            },
        ],
    },
    {
        path: '/coinMarket',
        name: 'coinMarket',
        component: BlankLayout,
        meta: { requiresAuth: true },
        children: [
            {
                path: 'coinList',
                name: 'coinList',
                component: CoinMarket,
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
    mode: 'hash',
    base: process.env.BASE_URL,
    routes,
})


router.beforeEach((to, from, next) => {
    const isAuthenticated = store.getters['auth/isAuthenticated']
        && localStorage.getItem('authUser')?.length > 0;

    if (to.matched.some(route => route.meta.requiresAuth)) {
        if (isAuthenticated) {
            next();
            return;
        } else {
            next({ path: '/login' });
        }
    }
    next();
});

export default router;
