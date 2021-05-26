import http from "../helpers/http-common";

/**
 * CRUD methods for manipulating district data.
 */
class DistrictDataService {
  getAll() {
    return http.get("/districts");
  }

  get(id) {
    return http.get(`/districts/${id}`);
  }

  create(district) {
    return http.post("/districts", district);
  }

  update(id, data) {
    return http.put(`/districts/edit/${id}`, data);
  }

  delete(id) {
    return http.delete(`/districts/delete/${id}`);
  }

  deleteAll() {
    return http.delete(`/districts/delete`);
  }

  findByName(name) {
    return http.get(`/districts?name=${name}`);
  }
}

export default new DistrictDataService();
