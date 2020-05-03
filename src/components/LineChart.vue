<template>
  <DxChart :data-source="data">
    <DxArgumentAxis :tick-interval="10" />
    <DxSeries type="line" />
    <DxLegend :visible="true" />
  </DxChart>
</template>

<script>
import DxChart, {
  DxArgumentAxis,
  DxSeries,
  DxLegend
} from 'devextreme-vue/chart';
export default {
  props: {
    data: {
      type: Array,
      required: true
    }
  },
  components: {
    DxChart,
    DxArgumentAxis,
    DxSeries,
    DxLegend
  },
  mounted() {
    this.$store.commit('setLoader', false);
  }
};
</script>
