import {
  PedidosService
} from "./chunk-HDWPZCZ6.js";
import {
  NavbarComponent
} from "./chunk-Q2QW7TPZ.js";
import {
  ActivatedRoute,
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

// src/app/pages/pedidos/detail/pedidos-detail.component.ts
var _c0 = (a0) => ["/presupuestos", a0];
function PedidosDetailComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3);
    \u0275\u0275text(1, "Cargando...");
    \u0275\u0275elementEnd();
  }
}
function PedidosDetailComponent_div_3_div_30_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "span");
    \u0275\u0275text(2, "Estado presupuesto");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275classMapInterpolate1("badge badge-", ctx_r0.pedido.presupuesto.estado, "");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.pedido.presupuesto.estado);
  }
}
function PedidosDetailComponent_div_3_div_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "h3", 8);
    \u0275\u0275text(2, "Presupuesto de origen");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 9)(4, "span");
    \u0275\u0275text(5, "Presupuesto");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "a", 14);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(8, PedidosDetailComponent_div_3_div_30_div_8_Template, 5, 4, "div", 15);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(3, _c0, ctx_r0.pedido.id_presupuesto));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" Ver Presupuesto #", ctx_r0.pedido.id_presupuesto, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.pedido.presupuesto);
  }
}
function PedidosDetailComponent_div_3_tr_45_Template(rf, ctx) {
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
    const l_r2 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(l_r2.id_linea_pedido);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(l_r2.id_servicio || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(l_r2.unidades || "\u2014");
  }
}
function PedidosDetailComponent_div_3_tr_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 16);
    \u0275\u0275text(2, "Sin l\xEDneas");
    \u0275\u0275elementEnd()();
  }
}
function PedidosDetailComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "div", 4)(2, "h1");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "a", 5);
    \u0275\u0275text(5, "\u2190 Volver a pedidos");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 6)(7, "div", 7)(8, "h3", 8);
    \u0275\u0275text(9, "Datos del pedido");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 9)(11, "span");
    \u0275\u0275text(12, "Estado");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "span");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 9)(16, "span");
    \u0275\u0275text(17, "Fecha solicitud");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "strong");
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 9)(21, "span");
    \u0275\u0275text(22, "Fecha autofactura");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "strong");
    \u0275\u0275text(24);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "div", 9)(26, "span");
    \u0275\u0275text(27, "Fecha recepci\xF3n");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "strong");
    \u0275\u0275text(29);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(30, PedidosDetailComponent_div_3_div_30_Template, 9, 5, "div", 10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "div", 11)(32, "h3", 8);
    \u0275\u0275text(33, "L\xEDneas del pedido");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "div", 12)(35, "table")(36, "thead")(37, "tr")(38, "th");
    \u0275\u0275text(39, "ID L\xEDnea");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "th");
    \u0275\u0275text(41, "ID Servicio");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "th");
    \u0275\u0275text(43, "Unidades");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(44, "tbody");
    \u0275\u0275template(45, PedidosDetailComponent_div_3_tr_45_Template, 7, 3, "tr", 13)(46, PedidosDetailComponent_div_3_tr_46_Template, 3, 0, "tr", 2);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Pedido #", ctx_r0.pedido.id_pedido, "");
    \u0275\u0275advance(10);
    \u0275\u0275classMapInterpolate1("badge badge-", ctx_r0.pedido.estado, "");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.pedido.estado);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.pedido.fecha_solicitud_pedido || "\u2014");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.pedido.fecha_solicitud_autofactura || "\u2014");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.pedido.fecha_recepcion_pedido || "\u2014");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.pedido.id_presupuesto);
    \u0275\u0275advance(15);
    \u0275\u0275property("ngForOf", ctx_r0.pedido.lineas);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !(ctx_r0.pedido.lineas == null ? null : ctx_r0.pedido.lineas.length));
  }
}
var PedidosDetailComponent = class _PedidosDetailComponent {
  constructor(route, service) {
    this.route = route;
    this.service = service;
    this.pedido = null;
    this.loading = true;
  }
  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get("id");
    this.service.getOne(id).subscribe({
      next: (data) => {
        this.pedido = data;
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
  }
  static {
    this.\u0275fac = function PedidosDetailComponent_Factory(t) {
      return new (t || _PedidosDetailComponent)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(PedidosService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PedidosDetailComponent, selectors: [["app-pedidos-detail"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 4, vars: 2, consts: [[1, "page-container"], ["style", "text-align:center; padding:48px; color:#64748b", 4, "ngIf"], [4, "ngIf"], [2, "text-align", "center", "padding", "48px", "color", "#64748b"], [1, "page-header"], ["routerLink", "/pedidos", 1, "btn", "btn-outline"], [1, "detail-grid"], [1, "card"], [1, "section-title"], [1, "detail-row"], ["class", "card", 4, "ngIf"], [1, "card", 2, "margin-top", "20px"], [1, "table-wrapper"], [4, "ngFor", "ngForOf"], [1, "btn", "btn-sm", "btn-outline", 3, "routerLink"], ["class", "detail-row", 4, "ngIf"], ["colspan", "3", 2, "text-align", "center", "color", "#94a3b8", "padding", "24px"]], template: function PedidosDetailComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "app-navbar");
        \u0275\u0275elementStart(1, "div", 0);
        \u0275\u0275template(2, PedidosDetailComponent_div_2_Template, 2, 0, "div", 1)(3, PedidosDetailComponent_div_3_Template, 47, 11, "div", 2);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.loading);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.loading && ctx.pedido);
      }
    }, dependencies: [CommonModule, NgForOf, NgIf, RouterLink, NavbarComponent], styles: ["\n\n.detail-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 20px;\n}\n@media (max-width: 768px) {\n  .detail-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.section-title[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 600;\n  margin-bottom: 16px;\n  color: #1e293b;\n}\n.detail-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 10px 0;\n  border-bottom: 1px solid #f1f5f9;\n}\n.detail-row[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #64748b;\n}\n/*# sourceMappingURL=pedidos-detail.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PedidosDetailComponent, { className: "PedidosDetailComponent", filePath: "src\\app\\pages\\pedidos\\detail\\pedidos-detail.component.ts", lineNumber: 72 });
})();
export {
  PedidosDetailComponent
};
//# sourceMappingURL=chunk-UKTWJ63D.js.map
