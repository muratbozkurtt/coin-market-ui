
import coinMarketApi from './interceptors/coinMarketApi'

export default {
    async login(userData) {
        return await coinMarketApi.post('api/v1/User/authenticate', userData);
    },
}
