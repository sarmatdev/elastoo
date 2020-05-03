<template>
  <DxPieChart id="pie" :data-source="data" palette="Bright">
    <DxSeries :argument-field="data.arg" :value-field="data.val">
      <DxLabel :visible="true">
        <DxConnector :visible="true" :width="1" />
      </DxLabel>
    </DxSeries>
    <DxSize :width="500" />
  </DxPieChart>
</template>

<script>
import DxPieChart, {
  DxSize,
  DxSeries,
  DxLabel,
  DxConnector
} from 'devextreme-vue/pie-chart';

export default {
  props: {
    data: {
      type: Array,
      required: true
    }
  },
  components: {
    DxPieChart,
    DxSize,
    DxSeries,
    DxLabel,
    DxConnector
  },
  mounted() {
    this.$store.commit('setLoader', false);
  }
};
</script>

<style>
#pie {
  height: 440px;
}

#pie * {
  margin: 0 auto;
}
</style>
