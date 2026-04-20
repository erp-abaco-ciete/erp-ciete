import {
  PedidosService
} from "./chunk-HDWPZCZ6.js";
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
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-HDU5XZPL.js";

// src/app/pages/pedidos/list/pedidos-list.component.ts
var _c0 = (a0) => ["/pedidos", a0];
var _c1 = (a0) => ["/presupuestos", a0];
function PedidosListComponent_tr_21_a_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 9);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(2, _c1, p_r1.id_presupuesto));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" #", p_r1.id_presupuesto, " ");
  }
}
function PedidosListComponent_tr_21_span_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "\u2014");
    \u0275\u0275elementEnd();
  }
}
function PedidosListComponent_tr_21_Template(rf, ctx) {
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
    \u0275\u0275template(10, PedidosListComponent_tr_21_a_10_Template, 2, 4, "a", 7)(11, PedidosListComponent_tr_21_span_11_Template, 2, 0, "span", 5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td")(13, "a", 8);
    \u0275\u0275text(14, "Ver");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const p_r1 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("#", p_r1.id_pedido, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r1.fecha_solicitud_pedido || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275classMapInterpolate1("badge badge-", p_r1.estado, "");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(p_r1.estado);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", p_r1.id_presupuesto);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !p_r1.id_presupuesto);
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(9, _c0, p_r1.id_pedido));
  }
}
function PedidosListComponent_tr_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 10);
    \u0275\u0275text(2, "No hay pedidos");
    \u0275\u0275elementEnd()();
  }
}
function PedidosListComponent_div_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275text(1, "Cargando...");
    \u0275\u0275elementEnd();
  }
}
var PedidosListComponent = class _PedidosListComponent {
  constructor(service) {
    this.service = service;
    this.pedidos = [];
    this.loading = true;
  }
  ngOnInit() {
    this.service.getAll().subscribe({
      next: (data) => {
        this.pedidos = data;
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
  }
  static {
    this.\u0275fac = function PedidosListComponent_Factory(t) {
      return new (t || _PedidosListComponent)(\u0275\u0275directiveInject(PedidosService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PedidosListComponent, selectors: [["app-pedidos-list"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 24, vars: 3, consts: [[1, "page-container"], [1, "page-header"], [1, "card"], [1, "table-wrapper"], [4, "ngFor", "ngForOf"], [4, "ngIf"], ["style", "text-align:center; padding:32px; color:#64748b", 4, "ngIf"], [3, "routerLink", 4, "ngIf"], [1, "btn", "btn-sm", "btn-outline", 3, "routerLink"], [3, "routerLink"], ["colspan", "5", 2, "text-align", "center", "color", "#94a3b8", "padding", "32px"], [2, "text-align", "center", "padding", "32px", "color", "#64748b"]], template: function PedidosListComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "app-navbar");
        \u0275\u0275elementStart(1, "div", 0)(2, "div", 1)(3, "h1");
        \u0275\u0275text(4, "Pedidos");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(5, "div", 2)(6, "div", 3)(7, "table")(8, "thead")(9, "tr")(10, "th");
        \u0275\u0275text(11, "ID");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "th");
        \u0275\u0275text(13, "Fecha solicitud");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "th");
        \u0275\u0275text(15, "Estado");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "th");
        \u0275\u0275text(17, "Presupuesto origen");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "th");
        \u0275\u0275text(19, "Acciones");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(20, "tbody");
        \u0275\u0275template(21, PedidosListComponent_tr_21_Template, 15, 11, "tr", 4)(22, PedidosListComponent_tr_22_Template, 3, 0, "tr", 5);
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(23, PedidosListComponent_div_23_Template, 2, 0, "div", 6);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(21);
        \u0275\u0275property("ngForOf", ctx.pedidos);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.pedidos.length === 0 && !ctx.loading);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.loading);
      }
    }, dependencies: [CommonModule, NgForOf, NgIf, RouterLink, NavbarComponent], styles: ["\n\n/*# sourceMappingURL=pedidos-list.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PedidosListComponent, { className: "PedidosListComponent", filePath: "src\\app\\pages\\pedidos\\list\\pedidos-list.component.ts", lineNumber: 58 });
})();
export {
  PedidosListComponent
};
//# sourceMappingURL=chunk-22DBADX4.js.map
