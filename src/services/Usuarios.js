import http from "../http-common";

class UserServices {
    getAll() {
        return http.get("/usuarios");
    }

    create(data) {
        return http.post("/usuarios", data);
    }

    update(id, data) {
        return http.put(`/usuarios/${id}`, data);
    }

    delete(id) {
        return http.delete(`/usuarios/${id}`);
    }

    login(data) {
        return http.post(`/login?Correo=${data.email}&Contrasenia=${data.password}`);
    }
}

export default new UserServices();