<template>
  <div class="submit-form mt-3 mx-auto">
    <p class="headline">Add Employee</p>

    <div v-if="!submitted">
      <v-form ref="form" lazy-validation>
        <v-text-field
          v-model="team.name"
          :rules="[(v) => !!v || 'Name is required']"
          label="Name"
          required
        ></v-text-field>

        <v-text-field
          v-model="team.startDate"
          :rules="[(v) => !!v || 'Start Date is required']"
          label="Start Date"
          required
        ></v-text-field>

        <v-text-field
          v-model="team.teamId"
          :rules="[(v) => !!v || 'teamId is required']"
          label="teamId"
          required
        ></v-text-field>

        <v-text-field
          v-model="team.skills"
          :rules="[(v) => !!v || 'Skills are required']"
          label="Skills"
          required
        ></v-text-field>
      </v-form>

      <v-btn color="primary" class="mt-3" @click="saveTutorial">Submit</v-btn>
    </div>

    <div v-else>
      <v-card class="mx-auto">
        <v-card-title> Submitted successfully! </v-card-title>

        <v-card-subtitle>
          Click the button to add new employee.
        </v-card-subtitle>

        <v-card-actions>
          <v-btn color="success" @click="newTeam">Add</v-btn>
        </v-card-actions>
      </v-card>
    </div>
  </div>
</template>

<script>
import DataService from "../services/DataService";

export default {
  name: "add-employee",
  data() {
    return {
      team: {
        id: null,
        name: "",
        startDate: "",
        teamId: "",
        skills: "",
        published: false,
      },
      submitted: false,
    };
  },
  methods: {
    saveTutorial() {
      var data = {
        name: this.team.name,
        startDate: this.team.startDate,
        teamId: this.team.teamId,
        skills: this.team.skills,
      };

      DataService.createEmployee(data)
        .then((response) => {
          this.team.id = response.data.id;
          console.log(response.data);
          this.submitted = true;
        })
        .catch((e) => {
          console.log(e);
        });
    },

    newTeam() {
      this.submitted = false;
      this.team = {};
    },
  },
};
</script>

<style>
.submit-form {
  max-width: 300px;
}
</style>
