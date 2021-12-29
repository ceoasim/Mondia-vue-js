<template>
  <v-row align="center" class="list px-3 mx-auto">
    <v-col cols="12" md="8">
      <v-text-field v-model="title" label="Search by name"></v-text-field>
    </v-col>

    <v-col cols="12" md="4">
      <v-btn small @click="searchName">
        Search
      </v-btn>
    </v-col>

    <v-col cols="12" sm="12">
      <v-card class="mx-auto" tile>
        <v-card-title>Tasks</v-card-title>

        <v-data-table
          :headers="headers"
          :items="tasks"
          disable-pagination
          :hide-default-footer="true"
        >
        </v-data-table>

      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import DataService from "../services/DataService";
export default {
  name: "tasks-list",
  data() {
    return {
      tasks: [],
      name: "",
      headers: [
        { text: "ID", value: "id", sortable: true },
        { text: "Name", align: "start", sortable: true, value: "name" },
        { text: "Description", value: "description", sortable: true },
        { text: "Start Date", value: "startDate", sortable: true },
        { text: "Task Time", value: "taskTime", sortable: true },
      ],
    };
  },
  methods: {
    retrieveTasks() {
      DataService.getAllTasks()
        .then((response) => {
          this.tasks = response.data.map(this.getDisplayTasks);
          console.log(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
    },

    refreshList() {
      this.retrieveTasks();
    },

    removeAllTutorials() {
      DataService.deleteAll()
        .then((response) => {
          console.log(response.data);
          this.refreshList();
        })
        .catch((e) => {
          console.log(e);
        });
    },

    searchName() {
      console.log("yoyo", this.name);
    },

    editTutorial(id) {
      this.$router.push({ name: "tutorial-details", params: { id: id } });
    },

    deleteTutorial(id) {
      DataService.delete(id)
        .then(() => {
          this.refreshList();
        })
        .catch((e) => {
          console.log(e);
        });
    },

    getDisplayTasks(task) {
      return {
        id: task.id,
        name: task.name,
        description: task.description.length > 30 ? task.description.substr(0, 30) + "..." : task.description,
        startDate: task.startDate,
        taskTime: task.taskTime
      };
    },
  },
  mounted() {
    this.retrieveTasks();
  },
};
</script>

<style>
.list {
  max-width: 750px;
}
</style>
