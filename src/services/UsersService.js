import api from "./api";

export default class UsersService {
  async getAll() {
    const { data } = await api.get("/users");

    return { data };
  }
}
