import http from "../helpers/http-common";

class LookupService {
  getAll() {
    return http.get("/lookups/district_party");
  }
}

export default new LookupService();