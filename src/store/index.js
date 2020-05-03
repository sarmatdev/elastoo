import Vue from 'vue';
import Vuex from 'vuex';
import xbi from '../api/xbi';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    charts: [],
    loading: false
  },
  mutations: {
    setLoader(state, loading) {
      state.loading = loading;
    },
    createChart(state, chart) {
      state.charts.push(chart);
    },
    deleteCharts(state) {
      state.charts = [];
    }
  },
  actions: {
    async getData({ commit }, chartSettings) {
      commit('setLoader', true);
      const { data } = await xbi.get(
        `api/datasource/${chartSettings.data}/data`
      );
      // Changing data object keys to valid keys
      const preparedData = data.map(item => {
        return {
          arg: item.Группа || item.Дата,
          val: item.Доля || item.Процент
        };
      });
      const chart = {
        type: chartSettings.type,
        data: preparedData
      };
      commit('createChart', chart);
    }
  },
  getters: {
    charts: s => s.charts,
    loading: s => s.loading
  }
});
