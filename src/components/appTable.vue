<template>
  <div>
  <h4>{{ title }}</h4>
    <v-data-table
    :headers="headers"
    :items="items"
    :items-per-page="10"
    :loading="loading"
    class="elevation-1"
  ></v-data-table>
  </div>
</template>

<script>
export default {
  name: "appTable",

  components: {},
  props: ["items", "headers", "title", "loading"],

  data: () => ({}),
  methods: {
  },
  mounted() {},
};
</script>
