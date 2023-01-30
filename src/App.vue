<template>
  <v-app>
  <v-container>
    <appSelect :items="availableVariations" @itemSelected="getVariationInfo"></appSelect>
    <list v-for="(item, index) in otherData" :key="index">
      <div v-if="index !== 'top_level_region'">{{ index }}:  {{ item }}</div>
    </list>
    <h4>top_level_region</h4>
    <appTable :items="tableData" :headers="headers" :loading="loading"></appTable>
  </v-container>
  </v-app>
</template>

<script>
import appSelect from "./components/appSelect.vue";
import appTable from "./components/appTable.vue";

export default {
  name: "App",

  components: {
    appSelect,
    appTable
  },

  data: () => ({
    drawer: false,
    data: [],
    availableVariations: [],
    selectedVariation: null,
    tableData: [],
    otherData: [],
    headers: [
      {
        text: 'coord_system',
        value: 'coord_system',
        width: 70
      },
      {
        text: 'length',
        value: 'length',
        width: 70
      },
      {
        text: 'name',
        value: 'name',
        width: 70
      },
    ],
    loading: false
  }),
  methods: {
    async fetchData() {
      let api = "https://rest.ensembl.org/info/species";
      await this.axios
        .get(api, { params: { "Content-Type": "application/json" } })
        .then((response) => {
          this.filterData(response.data);
        });
    },
    filterData(data) {
      let availableVariations = [];
      for (let i = 0; i < data.species.length; i++) {
        if (data.species[i].groups.includes("variation")) {
          availableVariations.push(data.species[i]);
        }
      }
      this.availableVariations = availableVariations.map((value) => {
        return value.name;
      });
    },
    async getVariationInfo(selectedVariation) {
      this.loading = true;
      let api = "https://rest.ensembl.org/info/assembly/" + selectedVariation;
      await this.axios
      .get(api, { params: { "Content-Type": "application/json"} })
      .then((response) => {
        this.extractVariationData(response.data)
      });
    },
    extractVariationData(data) {
      this.tableData = data.top_level_region;
      this.otherData = data;
      this.loading = false;
    }
  },
  mounted() {
    this.fetchData();
  },
};
</script>
