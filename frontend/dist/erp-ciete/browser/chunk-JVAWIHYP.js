import {
  HttpClient,
  environment,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-HDU5XZPL.js";

// src/app/core/services/estaciones.service.ts
var EstacionesService = class _EstacionesService {
  constructor(http) {
    this.http = http;
    this.apiUrl = `${environment.apiUrl}/estaciones`;
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
    this.\u0275fac = function EstacionesService_Factory(t) {
      return new (t || _EstacionesService)(\u0275\u0275inject(HttpClient));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _EstacionesService, factory: _EstacionesService.\u0275fac, providedIn: "root" });
  }
};

export {
  EstacionesService
};
//# sourceMappingURL=chunk-JVAWIHYP.js.map
