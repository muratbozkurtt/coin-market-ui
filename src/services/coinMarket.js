
import coinMarketApi from './interceptors/coinMarketApi'

export default {
    async getCoins(coinRequest) {
        return await coinMarketApi.get(`/api/v1/CoinMarket/getCoins?limit=${coinRequest.limit}&convert=${coinRequest.convert}`);
    },
}
