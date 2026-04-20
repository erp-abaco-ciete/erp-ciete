import {
  HttpClient,
  environment,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-HDU5XZPL.js";

// src/app/core/services/contactos.service.ts
var ContactosService = class _ContactosService {
  constructor(http) {
    this.http = http;
    this.apiUrl = `${environment.apiUrl}/contactos`;
  }
  getAll() {
    return this.http.get(this.apiUrl);
  }
  getOne(id) {
    return this.http.get(`${this.apiUrl}/${id}`);
  }
  create(data) {
    return this.http.post(this.apiUrl, data);
  }
  update(id, data) {
    return this.http.put(`${this.apiUrl}/${id}`, data);
  }
  delete(id) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
  static {
    this.\u0275fac = function ContactosService_Factory(t) {
      return new (t || _ContactosService)(\u0275\u0275inject(HttpClient));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ContactosService, factory: _ContactosService.\u0275fac, providedIn: "root" });
  }
};

export {
  ContactosService
};
//# sourceMappingURL=chunk-GAK4HJEY.js.map
