import http from "../helpers/http-common";

/**
 * CRUD methods for manipulating polling station data.
 */
class CandidateDataService {
  getAll() {
    return http.get("/candidates");
  }

  get(id) {
    return http.get(`/candidates/${id}`);
  }

  create(candidate) {
    return http.post("/candidates", candidate);
  }

  update(id, data) {
    return http.put(`/candidates/edit/${id}`, data);
  }

  delete(id) {
    return http.delete(`/candidates/delete/${id}`);
  }

  deleteAll() {
    return http.delete(`/candidates/delete`);
  }

  findByName(name) {
    return http.get(`/candidates?name=${name}`);
  }
}

export default new CandidateDataService();
