import {
  PresupuestosService
} from "./chunk-K7Z5TU3H.js";
import {
  NavbarComponent
} from "./chunk-Q2QW7TPZ.js";
import {
  ActivatedRoute,
  CommonModule,
  NgForOf,
  NgIf,
  Router,
  RouterLink,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassMapInterpolate1,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-HDU5XZPL.js";

// src/app/pages/presupuestos/detail/presupuestos-detail.component.ts
function PresupuestosDetailComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3);
    \u0275\u0275text(1, "Cargando...");
    \u0275\u0275elementEnd();
  }
}
function PresupuestosDetailComponent_div_3_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.errorMsg);
  }
}
function PresupuestosDetailComponent_div_3_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.successMsg);
  }
}
function PresupuestosDetailComponent_div_3_button_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 20);
    \u0275\u0275listener("click", function PresupuestosDetailComponent_div_3_button_26_Template_button_click_0_listener() {
      const e_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.cambiarEstado(e_r3.value));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const e_r3 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275styleProp("background", ctx_r0.presupuesto.estado === e_r3.value ? e_r3.color : "")("color", ctx_r0.presupuesto.estado === e_r3.value ? "#fff" : "");
    \u0275\u0275classProp("active", ctx_r0.presupuesto.estado === e_r3.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", e_r3.label, " ");
  }
}
function PresupuestosDetailComponent_div_3_tr_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const l_r4 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(l_r4.id_linea_presupuesto);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(l_r4.id_servicio || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(l_r4.unidades || "\u2014");
  }
}
function PresupuestosDetailComponent_div_3_tr_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 21);
    \u0275\u0275text(2, "Sin l\xEDneas");
    \u0275\u0275elementEnd()();
  }
}
function PresupuestosDetailComponent_div_3_div_43_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 22)(1, "button", 23);
    \u0275\u0275listener("click", function PresupuestosDetailComponent_div_3_div_43_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.convertir());
    });
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r0.converting);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.converting ? "Convirtiendo..." : "\u2713 Convertir a Pedido", " ");
  }
}
function PresupuestosDetailComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "div", 4)(2, "h1");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "a", 5);
    \u0275\u0275text(5, "\u2190 Volver a presupuestos");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(6, PresupuestosDetailComponent_div_3_div_6_Template, 2, 1, "div", 6)(7, PresupuestosDetailComponent_div_3_div_7_Template, 2, 1, "div", 7);
    \u0275\u0275elementStart(8, "div", 8)(9, "div", 9)(10, "h3", 10);
    \u0275\u0275text(11, "Datos generales");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 11)(13, "span");
    \u0275\u0275text(14, "Fecha");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "strong");
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 11)(18, "span");
    \u0275\u0275text(19, "Estado actual");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "span");
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(22, "div", 9)(23, "h3", 10);
    \u0275\u0275text(24, "Cambiar estado");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "div", 12);
    \u0275\u0275template(26, PresupuestosDetailComponent_div_3_button_26_Template, 2, 7, "button", 13);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(27, "div", 14)(28, "h3", 10);
    \u0275\u0275text(29, "L\xEDneas del presupuesto");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "div", 15)(31, "table")(32, "thead")(33, "tr")(34, "th");
    \u0275\u0275text(35, "ID L\xEDnea");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "th");
    \u0275\u0275text(37, "ID Servicio");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "th");
    \u0275\u0275text(39, "Unidades");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(40, "tbody");
    \u0275\u0275template(41, PresupuestosDetailComponent_div_3_tr_41_Template, 7, 3, "tr", 16)(42, PresupuestosDetailComponent_div_3_tr_42_Template, 3, 0, "tr", 2);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275template(43, PresupuestosDetailComponent_div_3_div_43_Template, 3, 2, "div", 17);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Presupuesto #", ctx_r0.presupuesto.id_presupuesto, "");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r0.errorMsg);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.successMsg);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r0.presupuesto.fecha_presupuesto || "\u2014");
    \u0275\u0275advance(4);
    \u0275\u0275classMapInterpolate1("badge badge-", ctx_r0.presupuesto.estado, "");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.presupuesto.estado);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngForOf", ctx_r0.estados);
    \u0275\u0275advance(15);
    \u0275\u0275property("ngForOf", ctx_r0.presupuesto.lineas);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !(ctx_r0.presupuesto.lineas == null ? null : ctx_r0.presupuesto.lineas.length));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.presupuesto.estado === "aprobado");
  }
}
var PresupuestosDetailComponent = class _PresupuestosDetailComponent {
  constructor(route, router, service) {
    this.route = route;
    this.router = router;
    this.service = service;
    this.presupuesto = null;
    this.loading = true;
    this.converting = false;
    this.errorMsg = "";
    this.successMsg = "";
    this.estados = [
      { value: "borrador", label: "Borrador", color: "#475569" },
      { value: "enviado", label: "Enviado", color: "#1d4ed8" },
      { value: "aprobado", label: "Aprobado", color: "#16a34a" },
      { value: "rechazado", label: "Rechazado", color: "#dc2626" }
    ];
  }
  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get("id");
    this.service.getOne(id).subscribe({
      next: (data) => {
        this.presupuesto = data;
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
  }
  cambiarEstado(estado) {
    this.service.cambiarEstado(this.presupuesto.id_presupuesto, estado).subscribe({
      next: (data) => {
        this.presupuesto = data;
        this.successMsg = `Estado actualizado a "${estado}"`;
        setTimeout(() => this.successMsg = "", 3e3);
      },
      error: () => {
        this.errorMsg = "Error al cambiar el estado";
      }
    });
  }
  convertir() {
    this.converting = true;
    this.service.convertir(this.presupuesto.id_presupuesto).subscribe({
      next: (pedido) => this.router.navigate(["/pedidos", pedido.id_pedido]),
      error: (err) => {
        this.errorMsg = err?.error?.detail || "Error al convertir el presupuesto";
        this.converting = false;
      }
    });
  }
  static {
    this.\u0275fac = function PresupuestosDetailComponent_Factory(t) {
      return new (t || _PresupuestosDetailComponent)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(PresupuestosService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PresupuestosDetailComponent, selectors: [["app-presupuestos-detail"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 4, vars: 2, consts: [[1, "page-container"], ["style", "text-align:center; padding:48px; color:#64748b", 4, "ngIf"], [4, "ngIf"], [2, "text-align", "center", "padding", "48px", "color", "#64748b"], [1, "page-header"], ["routerLink", "/presupuestos", 1, "btn", "btn-outline"], ["class", "alert alert-error", 4, "ngIf"], ["class", "alert alert-success", 4, "ngIf"], [1, "detail-grid"], [1, "card"], [1, "section-title"], [1, "detail-row"], [1, "estados-btns"], ["class", "btn btn-estado", 3, "active", "background", "color", "click", 4, "ngFor", "ngForOf"], [1, "card", 2, "margin-top", "20px"], [1, "table-wrapper"], [4, "ngFor", "ngForOf"], ["style", "margin-top:20px", 4, "ngIf"], [1, "alert", "alert-error"], [1, "alert", "alert-success"], [1, "btn", "btn-estado", 3, "click"], ["colspan", "3", 2, "text-align", "center", "color", "#94a3b8", "padding", "24px"], [2, "margin-top", "20px"], [1, "btn", "btn-success", 3, "click", "disabled"]], template: function PresupuestosDetailComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "app-navbar");
        \u0275\u0275elementStart(1, "div", 0);
        \u0275\u0275template(2, PresupuestosDetailComponent_div_2_Template, 2, 0, "div", 1)(3, PresupuestosDetailComponent_div_3_Template, 44, 12, "div", 2);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.loading);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.loading && ctx.presupuesto);
      }
    }, dependencies: [CommonModule, NgForOf, NgIf, RouterLink, NavbarComponent], styles: ["\n\n.detail-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 20px;\n}\n@media (max-width: 768px) {\n  .detail-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.section-title[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 600;\n  margin-bottom: 16px;\n  color: #1e293b;\n}\n.detail-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 10px 0;\n  border-bottom: 1px solid #f1f5f9;\n}\n.detail-row[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #64748b;\n}\n.estados-btns[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 10px;\n}\n.btn-estado[_ngcontent-%COMP%] {\n  background: #f1f5f9;\n  color: #475569;\n  border: 2px solid transparent;\n  transition: all 0.15s;\n}\n.btn-estado.active[_ngcontent-%COMP%] {\n  border-color: currentColor;\n}\n.btn-estado[_ngcontent-%COMP%]:hover {\n  opacity: 0.85;\n}\n/*# sourceMappingURL=presupuestos-detail.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PresupuestosDetailComponent, { className: "PresupuestosDetailComponent", filePath: "src\\app\\pages\\presupuestos\\detail\\presupuestos-detail.component.ts", lineNumber: 79 });
})();
export {
  PresupuestosDetailComponent
};
//# sourceMappingURL=chunk-5DNE6UCV.js.map
