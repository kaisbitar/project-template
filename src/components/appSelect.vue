<template>
  <v-row align="center">
    <v-col cols="6" class="ml-4">
      <v-select
        :items="items"
        :menu-props="{ top: true, offsetY: true }"
        label="Label"
        @input="itemSelected"
      ></v-select>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "appSelect",

  components: {},
  props: ["items"],

  data: () => ({}),
  methods: {
    itemSelected(data) {
      this.$emit("itemSelected", data);
    },
  },
  mounted() {},
};
</script>
