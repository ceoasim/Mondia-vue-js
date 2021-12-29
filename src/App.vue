<template>
  <v-app>
    <v-app-bar app dark>
      <div class="d-flex align-center mr-2">
        Mondia
      </div>

      <v-btn to="/task" text>
        All Tasks
      </v-btn>
      <v-btn to="/addTeam" text>
        Add team
      </v-btn>

      <v-btn to="/addEmployee" text>
        Add Employee
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "app",
};
</script>
