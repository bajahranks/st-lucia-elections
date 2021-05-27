import http from "../helpers/http-common";

/**
 * CRUD methods for manipulating section data.
 */
class SectionDataService {
  getAll(token) {
    return http.get("/sections", {headers: {'auth-token': token}});
  }

  get(id) {
    return http.get(`/sections/${id}`);
  }

  create(section) {
    return http.post("/sections", section);
  }

  update(id, data) {
    return http.put(`/sections/edit/${id}`, data);
  }

  delete(id) {
    return http.delete(`/sections/delete/${id}`);
  }

  deleteAll() {
    return http.delete(`/sections/delete`);
  }

  findByName(name) {
    return http.get(`/sections?name=${name}`);
  }
}

export default new SectionDataService();
