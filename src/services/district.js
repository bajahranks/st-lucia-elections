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

  create(district, token) {
    return http.post("/districts", district, {headers: {'auth-token': token}});
  }

  update(id, data, token) {
    return http.put(`/districts/edit/${id}`, data, {headers: {'auth-token': token}});
  }

  delete(id, token) {
    return http.delete(`/districts/delete/${id}`, {headers: {'auth-token': token}});
  }

  deleteAll( token) {
    return http.delete(`/districts/delete`, {headers: {'auth-token': token}});
  }

  findByName(name) {
    return http.get(`/districts?name=${name}`);
  }
}

export default new DistrictDataService();
