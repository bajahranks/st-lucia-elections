import http from "../helpers/http-common";

/**
 * CRUD methods for manipulating result data.
 */
class ResultDataService {
  getAll() {
    return http.get("/results");
  }

  get(id) {
    return http.get(`/results/${id}`);
  }

  create(result) {
    return http.post("/results", result);
  }

  update(id, data) {
    return http.put(`/results/edit/${id}`, data);
  }

  delete(id) {
    return http.delete(`/results/delete/${id}`);
  }

  deleteAll() {
    return http.delete(`/results/delete`);
  }

  findByYear(year) {
    return http.get(`/results?year=${year}`);
  }
}

export default new ResultDataService();
