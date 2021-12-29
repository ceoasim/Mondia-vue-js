<template>
  <div class="submit-form mt-3 mx-auto">
    <p class="headline">Add Team</p>

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
          v-model="team.endDate"
          :rules="[(v) => !!v || 'End Date is required']"
          label="End Date"
          required
        ></v-text-field>
      </v-form>

      <v-btn color="primary" class="mt-3" @click="saveTeam">Submit</v-btn>
    </div>

    <div v-else>
      <v-card class="mx-auto">
        <v-card-title> Submitted successfully! </v-card-title>

        <v-card-subtitle>
          Click the button to add new Teamteam.
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
  name: "add-team",
  data() {
    return {
      team: {
        id: null,
        name: "",
        startDate: "",
        endDate: "",
        published: false,
      },
      submitted: false,
    };
  },
  methods: {
    saveTeam() {
      var data = {
        name: this.team.name,
        startDate: this.team.startDate,
        endDate: this.team.endDate,
      };

      DataService.createTeam(data)
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
