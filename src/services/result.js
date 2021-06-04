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

  create(result, token) {
    return http.post("/results", result, {headers: {'auth-token': token}});
  }

  update(id, data, token) {
    return http.put(`/results/edit/${id}`, data, {headers: {'auth-token': token}});
  }

  delete(id, token) {
    return http.delete(`/results/delete/${id}`, {headers: {'auth-token': token}});
  }

  deleteAll(token) {
    return http.delete(`/results/delete`, {headers: {'auth-token': token}});
  }

  findByYear(year) {
    return http.get(`/results?year=${year}`);
  }
}

export default new ResultDataService();
