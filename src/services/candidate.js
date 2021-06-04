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

  create(candidate, token) {
    return http.post("/candidates", candidate, {headers: {'auth-token': token}});
  }

  update(id, data, token) {
    return http.put(`/candidates/edit/${id}`, data, {headers: {'auth-token': token}});
  }

  delete(id, token) {
    return http.delete(`/candidates/delete/${id}`, {headers: {'auth-token': token}});
  }

  deleteAll(token) {
    return http.delete(`/candidates/delete`, {headers: {'auth-token': token}});
  }

  findByName(name) {
    return http.get(`/candidates?name=${name}`);
  }
}

export default new CandidateDataService();
