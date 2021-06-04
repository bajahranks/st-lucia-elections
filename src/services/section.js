import http from "../helpers/http-common";

/**
 * CRUD methods for manipulating section data.
 */
class SectionDataService {
  getAll() {
    return http.get("/sections");
  }

  get(id) {
    return http.get(`/sections/${id}`);
  }

  create(section, token) {
    return http.post("/sections", section, {headers: {'auth-token': token}});
  }

  update(id, data, token) {
    return http.put(`/sections/edit/${id}`, data, {headers: {'auth-token': token}});
  }

  delete(id, token) {
    return http.delete(`/sections/delete/${id}`, {headers: {'auth-token': token}});
  }

  deleteAll(token) {
    return http.delete(`/sections/delete`, {headers: {'auth-token': token}});
  }

  findByName(name) {
    return http.get(`/sections?name=${name}`);
  }
}

export default new SectionDataService();
