<template>
<div>
	<v-navigation-drawer v-model="drawer" app left>
      <v-list dense>
        <v-list-item>
          <v-list-item-action>
            <v-icon>mdi-home</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>
              <router-link :to="'/'">
                <h3>Home</h3>
              </router-link>
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>

      </v-list>     
      
    </v-navigation-drawer>

    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        <v-toolbar-title >My App</v-toolbar-title>
      </div>
        <v-text-field
          label="Search for.."
          single-line
          class="ml-12 mt-2"
        ></v-text-field>
      <v-spacer></v-spacer>
    </v-app-bar>
	</div>
</template>

<script>

export default {
  components: {
  },

  data: () => ({
    drawer: false
  })
};
</script>