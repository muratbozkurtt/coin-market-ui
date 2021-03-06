import authService from '@/services/auth'

export default {
    namespaced: true,
    state: {
        token: null
    },
    getters: {
        isAuthenticated: state => !!state.token,
    },
    mutations: {
        SET_TOKEN(state, token) {
            state.token = token
        },
    },
    actions: {
        async signIn({ commit }, credentials) {
           
            let token = await authService.signIn(credentials);
            if (token) {
                localStorage.setItem('JwtToken', token);
                commit('SET_TOKEN', token)
            } else {
                localStorage.removeItem('JwtToken')
                commit('SET_TOKEN', null)
            }
            return token;
        },
    },
}