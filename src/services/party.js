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

  create(party) {
    return http.post("/parties", party);
  }

  update(id, data) {
    return http.put(`/parties/edit/${id}`, data);
  }

  delete(id) {
    return http.delete(`/parties/delete/${id}`);
  }

  deleteAll() {
    return http.delete(`/parties/delete`);
  }

  findByName(name) {
    return http.get(`/parties?name=${name}`);
  }
}

export default new PartyDataService();
