<template>
  <div class="mt-10">
    <b-button @click="getCoins()" variant="success">Refresh</b-button>
    <b-table class="mt-10" striped hover :items="coinResultMap"></b-table>
  </div>
</template>

<script>
import coinMarketServices from "@/services/coinMarket";

export default {
  name: "CoinList",
  data() {
    return {
      coinRequest: {
        limit: 10,
        convert: "USD",
      },
      coinResultMap: [],
    };
  },
  mounted() {
     this.getCoins();
  },
  methods: {
    async getCoins() {
      const coinResult = await coinMarketServices.getCoins(this.coinRequest);
      this.coinResultMap = coinResult.data.map((item) => {
        return {
          name: item.name,
          symbol: item.symbol,
          pairs: item.num_market_pairs,
        };
      });
    },
  },
};
</script>
<style scoped>
.mt-10 {
  margin-top: 10px;
}
</style>
