<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="600">
      <template v-slot:activator="{ on }">
        <v-btn color="primary" dark v-on="on">Create Chart</v-btn>
      </template>
      <v-card>
        <v-card-title class="headline">Create Chart</v-card-title>
        <v-card-text>
          <v-content>
            <v-row align="center" justify="center">
              <v-col cols="10">
                <h1 class="headline">Choose chart type</h1>
                <v-select
                  :items="chartType"
                  label="Chart type"
                  outlined
                  v-model="chartSettings.type"
                ></v-select>
              </v-col>
            </v-row>
            <v-row align="center" justify="center">
              <v-col cols="10">
                <h1 class="headline">Choose data sourse</h1>
                <v-select
                  :items="dataSourse"
                  label="Data sourse"
                  outlined
                  v-model="chartSettings.data"
                ></v-select>
              </v-col>
            </v-row>
          </v-content>
        </v-card-text>
        <v-card-actions>
          <v-content>
            <v-row align="center" justify="center">
              <v-col cols="5">
                <v-btn color="red darken-1" block dark @click="dialog = false"
                  >Cancel</v-btn
                >
              </v-col>
              <v-col cols="5">
                <v-btn color="green light-1" dark block @click="createChart"
                  >Create</v-btn
                >
              </v-col>
            </v-row>
          </v-content>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
      chartType: ['Line', 'Pie'],
      dataSourse: ['5ea85157da01cf25d4586101', '5ea8513dda01cf25d45860ff'],
      chartSettings: {
        type: '',
        data: ''
      }
    };
  },
  methods: {
    createChart() {
      if (this.chartSettings.type !== '' && this.chartSettings.data !== '') {
        this.$store.dispatch('getData', this.chartSettings);
      }
      this.dialog = false;
    }
  }
};
</script>
