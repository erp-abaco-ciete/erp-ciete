import {
  HttpClient,
  environment,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-HDU5XZPL.js";

// src/app/core/services/pedidos.service.ts
var PedidosService = class _PedidosService {
  constructor(http) {
    this.http = http;
    this.apiUrl = `${environment.apiUrl}/pedidos`;
  }
  getAll() {
    return this.http.get(this.apiUrl);
  }
  getOne(id) {
    return this.http.get(`${this.apiUrl}/${id}`);
  }
  static {
    this.\u0275fac = function PedidosService_Factory(t) {
      return new (t || _PedidosService)(\u0275\u0275inject(HttpClient));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _PedidosService, factory: _PedidosService.\u0275fac, providedIn: "root" });
  }
};

export {
  PedidosService
};
//# sourceMappingURL=chunk-HDWPZCZ6.js.map
