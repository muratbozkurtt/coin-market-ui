
import coinMarketApi from './interceptors/coinMarketApi'

export default {
    async getCoins(coinRequest) {
        return await coinMarketApi.get(`/api/v1/CoinMarket/getCoin?limit=${coinRequest.limit}&convert=${coinRequest.convert}`);
    },
}
