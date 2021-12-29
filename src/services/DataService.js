import http from "../http-common";

class DataService {
  getAllTasks() {
    return http.get("/add/task");
  }
  createTeam(data) {
    return http.post("/add/team", data);
  }

  createEmployee(data) {
    return http.post("/add/employee", data);
  }
}

export default new DataService();