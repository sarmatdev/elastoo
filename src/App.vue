<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <h1>DevExtreme Chart</h1>
    </v-app-bar>
    <v-content>
      <v-row align="center" justify="center">
        <v-col cols="10">
          <Modal />
        </v-col>
      </v-row>
      <v-row align="center" justify="center">
        <v-col cols="10" v-for="(chart, index) in charts" :key="index">
          <v-card class="elevation-10">
            <v-card-text>
              <PieChart :data="chart.data" v-if="chart.type === 'Pie'" />
              <LineChart :data="chart.data" v-else-if="chart.type === 'Line'" />
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-content>
    <Loader :loading="loading" />
  </v-app>
</template>

<script>
import LineChart from './components/LineChart';
import PieChart from './components/PieChart';
import Modal from './components/Modal';
import Loader from './components/Loader';
export default {
  name: 'App',
  components: {
    PieChart,
    LineChart,
    Modal,
    Loader
  },
  computed: {
    charts() {
      return this.$store.getters.charts;
    },
    loading() {
      return this.$store.getters.loading;
    }
  },
  beforeDestroy() {
    this.$store.commit('deleteCharts');
  }
};
</script>
