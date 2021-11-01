import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'
import SignIn from '../views/auth/SignIn'
import CoinList from '../views/coinMarket/CoinList'

Vue.use(VueRouter)

const routes = [
    {
        path: '/signIn',
        name: 'SignIn',
        component: SignIn,
        meta: { title: 'Sign In' },
    },
    {
        path: '/',
        name: 'CoinList',
        component: CoinList,
        meta: { requiresAuth: true, title: 'Coin List' },
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
})

router.beforeEach((to, from, next) => {
    const isAuthenticated = store.getters['auth/isAuthenticated'] && localStorage.getItem('JwtToken')?.length > 0;
    const requiresAuth = to.matched.some(route => route.meta.requiresAuth)
    if (isAuthenticated && to.name === 'SignIn') {
        next('/')
    }
    if (requiresAuth && !isAuthenticated) {
        next('/signIn')
    } else {
        next()
    }
});

export default router;
