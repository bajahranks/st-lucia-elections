import http from "../helpers/http-common";

/**
 * CRUD methods for manipulating polling station data.
 */
class PollingStationDataService {
  getAll() {
    return http.get("/polling-stations");
  }

  get(id) {
    return http.get(`/polling-stations/${id}`);
  }

  create(pollingStation) {
    return http.post("/polling-stations", pollingStation);
  }

  update(id, data) {
    return http.put(`/polling-stations/edit/${id}`, data);
  }

  delete(id) {
    return http.delete(`/polling-stations/delete/${id}`);
  }

  deleteAll() {
    return http.delete(`/polling-stations/delete`);
  }

  findByName(name) {
    return http.get(`/polling-stations?name=${name}`);
  }
}

export default new PollingStationDataService();
