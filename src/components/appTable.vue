<template>
  <div>
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
  props: ["items", "headers", "loading"],

  data: () => ({}),
  methods: {
  },
  mounted() {},
};
</script>
