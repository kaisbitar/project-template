<template>
  <v-app>
    <siteMenu/>
    <v-content>
      <v-row align="center">
    <v-col cols="12">
      <v-select
        :items="availableVariations"
        :menu-props="{ top: true, offsetY: true }"
        label="Label"
      ></v-select>
    </v-col>
  </v-row>
    </v-content>
  </v-app>
</template>

<script>
import siteMenu from "./components/siteMenu.vue";

export default {
  name: "App",

  components: {
    siteMenu
  },

  data: () => ({
    drawer: false,
    data: [],
    availableVariations: []
  }),
  methods: {
    async fetchData() {
      let api = 'https://rest.ensembl.org/info/species'
      this.axios.get(api, 
        { params: { "Content-Type": "application/json" } }
        ).then((response) => {
          this.filterData(response.data);
      })
    },
    filterData(data) {
      let availableVariations = [];
      for (let i = 0; i < data.species.length; i++) {
        if(data.species[i].groups.includes('variation')) {
          availableVariations.push(data.species[i]);
        }
      }
      this.availableVariations = availableVariations.map(value => {
        return [value.display_name, value.name]
      });
    }

  },
  mounted() {
     this.fetchData();
  }
};
</script>
