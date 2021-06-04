import http from "../helpers/http-common";

/**
 * CRUD methods for manipulating party data.
 */
class PartyDataService {
  getAll() {
    return http.get("/parties");
  }

  get(id) {
    return http.get(`/parties/${id}`);
  }

  create(party, token) {
    return http.post("/parties", party, {headers: {'auth-token': token}});
  }

  update(id, data, token) {
    return http.put(`/parties/edit/${id}`, data, {headers: {'auth-token': token}});
  }

  delete(id, token) {
    return http.delete(`/parties/delete/${id}`, {headers: {'auth-token': token}});
  }

  deleteAll(token) {
    return http.delete(`/parties/delete`, {headers: {'auth-token': token}});
  }

  findByName(name) {
    return http.get(`/parties?name=${name}`);
  }
}

export default new PartyDataService();
