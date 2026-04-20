import {
  EstacionesService
} from "./chunk-JVAWIHYP.js";
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
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-HDU5XZPL.js";

// src/app/pages/estaciones/list/estaciones-list.component.ts
var _c0 = (a0) => ["/estaciones", a0];
var _c1 = (a0) => ["/estaciones", a0, "edit"];
function EstacionesListComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.successMsg);
  }
}
function EstacionesListComponent_tr_28_span_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 15);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const es_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(es_r3.tipo);
  }
}
function EstacionesListComponent_tr_28_span_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "\u2014");
    \u0275\u0275elementEnd();
  }
}
function EstacionesListComponent_tr_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "strong");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td");
    \u0275\u0275template(13, EstacionesListComponent_tr_28_span_13_Template, 2, 1, "span", 10)(14, EstacionesListComponent_tr_28_span_14_Template, 2, 0, "span", 7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "td", 11)(16, "a", 12);
    \u0275\u0275text(17, "Ver");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "a", 13);
    \u0275\u0275text(19, "Editar");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "button", 14);
    \u0275\u0275listener("click", function EstacionesListComponent_tr_28_Template_button_click_20_listener() {
      const es_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.eliminar(es_r3));
    });
    \u0275\u0275text(21, "Eliminar");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const es_r3 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("#", es_r3.id_es, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(es_r3.cod_es || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(es_r3.nombre || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(es_r3.poblacion || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(es_r3.provincia || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", es_r3.tipo);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !es_r3.tipo);
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(9, _c0, es_r3.id_es));
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(11, _c1, es_r3.id_es));
  }
}
function EstacionesListComponent_tr_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 16);
    \u0275\u0275text(2, "No hay estaciones registradas");
    \u0275\u0275elementEnd()();
  }
}
function EstacionesListComponent_div_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17);
    \u0275\u0275text(1, "Cargando...");
    \u0275\u0275elementEnd();
  }
}
var EstacionesListComponent = class _EstacionesListComponent {
  constructor(service) {
    this.service = service;
    this.estaciones = [];
    this.loading = true;
    this.successMsg = "";
  }
  ngOnInit() {
    this.service.getAll().subscribe({
      next: (data) => {
        this.estaciones = data;
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
  }
  eliminar(estacion) {
    if (confirm(`\xBFEliminar la estaci\xF3n "${estacion.nombre || estacion.cod_es}"?`)) {
      this.service.delete(estacion.id_es).subscribe({
        next: () => {
          this.successMsg = "Estaci\xF3n eliminada correctamente";
          this.estaciones = this.estaciones.filter((e) => e.id_es !== estacion.id_es);
          setTimeout(() => this.successMsg = "", 3e3);
        }
      });
    }
  }
  static {
    this.\u0275fac = function EstacionesListComponent_Factory(t) {
      return new (t || _EstacionesListComponent)(\u0275\u0275directiveInject(EstacionesService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EstacionesListComponent, selectors: [["app-estaciones-list"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 31, vars: 4, consts: [[1, "page-container"], [1, "page-header"], ["routerLink", "/estaciones/new", 1, "btn", "btn-primary"], ["class", "alert alert-success", 4, "ngIf"], [1, "card"], [1, "table-wrapper"], [4, "ngFor", "ngForOf"], [4, "ngIf"], ["style", "text-align:center; padding:32px; color:#64748b", 4, "ngIf"], [1, "alert", "alert-success"], ["class", "badge badge-tipo", 4, "ngIf"], [1, "actions-cell"], [1, "btn", "btn-sm", "btn-outline", 3, "routerLink"], [1, "btn", "btn-sm", "btn-secondary", 3, "routerLink"], [1, "btn", "btn-sm", "btn-danger", 3, "click"], [1, "badge", "badge-tipo"], ["colspan", "7", 2, "text-align", "center", "color", "#94a3b8", "padding", "32px"], [2, "text-align", "center", "padding", "32px", "color", "#64748b"]], template: function EstacionesListComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "app-navbar");
        \u0275\u0275elementStart(1, "div", 0)(2, "div", 1)(3, "h1");
        \u0275\u0275text(4, "Estaciones de Servicio");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "a", 2);
        \u0275\u0275text(6, "+ Nueva Estaci\xF3n");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(7, EstacionesListComponent_div_7_Template, 2, 1, "div", 3);
        \u0275\u0275elementStart(8, "div", 4)(9, "div", 5)(10, "table")(11, "thead")(12, "tr")(13, "th");
        \u0275\u0275text(14, "ID");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "th");
        \u0275\u0275text(16, "C\xF3digo ES");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(17, "th");
        \u0275\u0275text(18, "Nombre");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(19, "th");
        \u0275\u0275text(20, "Poblaci\xF3n");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(21, "th");
        \u0275\u0275text(22, "Provincia");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(23, "th");
        \u0275\u0275text(24, "Tipo");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(25, "th");
        \u0275\u0275text(26, "Acciones");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(27, "tbody");
        \u0275\u0275template(28, EstacionesListComponent_tr_28_Template, 22, 13, "tr", 6)(29, EstacionesListComponent_tr_29_Template, 3, 0, "tr", 7);
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(30, EstacionesListComponent_div_30_Template, 2, 0, "div", 8);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(7);
        \u0275\u0275property("ngIf", ctx.successMsg);
        \u0275\u0275advance(21);
        \u0275\u0275property("ngForOf", ctx.estaciones);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.estaciones.length === 0 && !ctx.loading);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.loading);
      }
    }, dependencies: [CommonModule, NgForOf, NgIf, RouterLink, NavbarComponent], styles: ["\n\n.actions-cell[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 6px;\n}\n.badge-tipo[_ngcontent-%COMP%] {\n  background: #e0e7ff;\n  color: #3730a3;\n}\n/*# sourceMappingURL=estaciones-list.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EstacionesListComponent, { className: "EstacionesListComponent", filePath: "src\\app\\pages\\estaciones\\list\\estaciones-list.component.ts", lineNumber: 64 });
})();
export {
  EstacionesListComponent
};
//# sourceMappingURL=chunk-PQ36IWMT.js.map
