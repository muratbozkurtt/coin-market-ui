import authService from '@/services/auth'

export default {
    namespaced: true,
    state: {
        user: null,
        token: null
    },
    getters: {
        isAuthenticated: state => !!state.token,
        user: state => state.user
    },
    mutations: {
        SET_TOKEN(state, token) {
            state.token = token
        },
        SET_USER(state, user) {
            state.user = user
        }
    },
    actions: {
        async login({ commit }, credentials) {
            let authData = await authService.login(credentials);
            if (authData.isSuccess) {
                localStorage.setItem('authUser', authData.token);
                commit('SET_USER', authData.user)
                commit('SET_TOKEN', authData.token)
            } else {
                localStorage.removeItem('authUser')
                commit('SET_USER', null)
                commit('SET_TOKEN', null)
            }
            return authData
        },
    },
}