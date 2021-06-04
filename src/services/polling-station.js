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

  create(pollingStation, token) {
    return http.post("/polling-stations", pollingStation, {headers: {'auth-token': token}});
  }

  update(id, data, token) {
    return http.put(`/polling-stations/edit/${id}`, data, {headers: {'auth-token': token}});
  }

  delete(id, token) {
    return http.delete(`/polling-stations/delete/${id}`, {headers: {'auth-token': token}});
  }

  deleteAll(token) {
    return http.delete(`/polling-stations/delete`, {headers: {'auth-token': token}});
  }

  findByName(name) {
    return http.get(`/polling-stations?name=${name}`);
  }
}

export default new PollingStationDataService();
