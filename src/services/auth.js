import http from "../helpers/http-common";

class AuthService {
  register(user) {
    return http.post("/user/register", user);
  }

  login(user) {
    return http.post("/user/login", user);
  }
}

export default new AuthService();