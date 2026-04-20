import {
  HttpClient,
  environment,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-HDU5XZPL.js";

// src/app/core/services/presupuestos.service.ts
var PresupuestosService = class _PresupuestosService {
  constructor(http) {
    this.http = http;
    this.apiUrl = `${environment.apiUrl}/presupuestos`;
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
  cambiarEstado(id, estado) {
    return this.http.patch(`${this.apiUrl}/${id}/estado`, { estado });
  }
  convertir(id) {
    return this.http.post(`${this.apiUrl}/${id}/convertir`, {});
  }
  static {
    this.\u0275fac = function PresupuestosService_Factory(t) {
      return new (t || _PresupuestosService)(\u0275\u0275inject(HttpClient));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _PresupuestosService, factory: _PresupuestosService.\u0275fac, providedIn: "root" });
  }
};

export {
  PresupuestosService
};
//# sourceMappingURL=chunk-K7Z5TU3H.js.map
