import {
  PresupuestosService
} from "./chunk-K7Z5TU3H.js";
import {
  NavbarComponent
} from "./chunk-Q2QW7TPZ.js";
import {
  CommonModule,
  NgForOf,
  NgIf,
  RouterLink,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassMapInterpolate1,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-HDU5XZPL.js";

// src/app/pages/presupuestos/list/presupuestos-list.component.ts
var _c0 = (a0) => ["/presupuestos", a0];
function PresupuestosListComponent_tr_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "strong");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td")(7, "span");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "td");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td")(12, "a", 8);
    \u0275\u0275text(13, "Ver");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const p_r1 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("#", p_r1.id_presupuesto, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r1.fecha_presupuesto || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275classMapInterpolate1("badge badge-", p_r1.estado, "");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(p_r1.estado);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((p_r1.lineas == null ? null : p_r1.lineas.length) || 0);
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(8, _c0, p_r1.id_presupuesto));
  }
}
function PresupuestosListComponent_tr_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 9);
    \u0275\u0275text(2, "No hay presupuestos");
    \u0275\u0275elementEnd()();
  }
}
function PresupuestosListComponent_div_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275text(1, "Cargando...");
    \u0275\u0275elementEnd();
  }
}
var PresupuestosListComponent = class _PresupuestosListComponent {
  constructor(service) {
    this.service = service;
    this.presupuestos = [];
    this.loading = true;
  }
  ngOnInit() {
    this.service.getAll().subscribe({
      next: (data) => {
        this.presupuestos = data;
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
  }
  static {
    this.\u0275fac = function PresupuestosListComponent_Factory(t) {
      return new (t || _PresupuestosListComponent)(\u0275\u0275directiveInject(PresupuestosService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PresupuestosListComponent, selectors: [["app-presupuestos-list"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 26, vars: 3, consts: [[1, "page-container"], [1, "page-header"], ["routerLink", "/presupuestos/new", 1, "btn", "btn-primary"], [1, "card"], [1, "table-wrapper"], [4, "ngFor", "ngForOf"], [4, "ngIf"], ["style", "text-align:center; padding:32px; color:#64748b", 4, "ngIf"], [1, "btn", "btn-sm", "btn-outline", 3, "routerLink"], ["colspan", "5", 2, "text-align", "center", "color", "#94a3b8", "padding", "32px"], [2, "text-align", "center", "padding", "32px", "color", "#64748b"]], template: function PresupuestosListComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "app-navbar");
        \u0275\u0275elementStart(1, "div", 0)(2, "div", 1)(3, "h1");
        \u0275\u0275text(4, "Presupuestos");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "a", 2);
        \u0275\u0275text(6, "+ Nuevo Presupuesto");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "div", 3)(8, "div", 4)(9, "table")(10, "thead")(11, "tr")(12, "th");
        \u0275\u0275text(13, "ID");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "th");
        \u0275\u0275text(15, "Fecha");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "th");
        \u0275\u0275text(17, "Estado");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "th");
        \u0275\u0275text(19, "L\xEDneas");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "th");
        \u0275\u0275text(21, "Acciones");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(22, "tbody");
        \u0275\u0275template(23, PresupuestosListComponent_tr_23_Template, 14, 10, "tr", 5)(24, PresupuestosListComponent_tr_24_Template, 3, 0, "tr", 6);
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(25, PresupuestosListComponent_div_25_Template, 2, 0, "div", 7);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(23);
        \u0275\u0275property("ngForOf", ctx.presupuestos);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.presupuestos.length === 0 && !ctx.loading);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.loading);
      }
    }, dependencies: [CommonModule, NgForOf, NgIf, RouterLink, NavbarComponent], styles: ["\n\n/*# sourceMappingURL=presupuestos-list.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PresupuestosListComponent, { className: "PresupuestosListComponent", filePath: "src\\app\\pages\\presupuestos\\list\\presupuestos-list.component.ts", lineNumber: 54 });
})();
export {
  PresupuestosListComponent
};
//# sourceMappingURL=chunk-L3DZ3Y3Q.js.map
