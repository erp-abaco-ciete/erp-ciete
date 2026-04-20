import {
  EstacionesService
} from "./chunk-JVAWIHYP.js";
import {
  NavbarComponent
} from "./chunk-Q2QW7TPZ.js";
import {
  ActivatedRoute,
  CommonModule,
  NgIf,
  Router,
  RouterLink,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
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
  ɵɵtextInterpolate2
} from "./chunk-HDU5XZPL.js";

// src/app/pages/estaciones/detail/estaciones-detail.component.ts
var _c0 = (a0) => ["/estaciones", a0, "edit"];
function EstacionesDetailComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3);
    \u0275\u0275text(1, "Cargando...");
    \u0275\u0275elementEnd();
  }
}
function EstacionesDetailComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "div", 4)(2, "h1");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 5)(5, "a", 6);
    \u0275\u0275text(6, "\u270E Editar");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "a", 7);
    \u0275\u0275text(8, "\u2190 Volver");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "div", 8)(10, "div", 9)(11, "h3", 10);
    \u0275\u0275text(12, "Identificaci\xF3n");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 11)(14, "span");
    \u0275\u0275text(15, "Nombre");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "strong");
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 11)(19, "span");
    \u0275\u0275text(20, "C\xF3digo ES");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "strong");
    \u0275\u0275text(22);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div", 11)(24, "span");
    \u0275\u0275text(25, "Tipo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "strong");
    \u0275\u0275text(27);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "div", 11)(29, "span");
    \u0275\u0275text(30, "NIF");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "strong");
    \u0275\u0275text(32);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(33, "div", 11)(34, "span");
    \u0275\u0275text(35, "Concesi\xF3n");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "strong");
    \u0275\u0275text(37);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(38, "div", 11)(39, "span");
    \u0275\u0275text(40, "ID Empresa");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "strong");
    \u0275\u0275text(42);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(43, "div", 9)(44, "h3", 10);
    \u0275\u0275text(45, "C\xF3digos");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "div", 11)(47, "span");
    \u0275\u0275text(48, "Retailgas");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "strong");
    \u0275\u0275text(50);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(51, "div", 11)(52, "span");
    \u0275\u0275text(53, "Sociedad");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "strong");
    \u0275\u0275text(55);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(56, "div", 11)(57, "span");
    \u0275\u0275text(58, "SOLRED");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(59, "strong");
    \u0275\u0275text(60);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(61, "div", 11)(62, "span");
    \u0275\u0275text(63, "V\xEDnculos");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(64, "strong");
    \u0275\u0275text(65);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(66, "div", 12)(67, "div", 9)(68, "h3", 10);
    \u0275\u0275text(69, "Ubicaci\xF3n");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(70, "div", 11)(71, "span");
    \u0275\u0275text(72, "Direcci\xF3n");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(73, "strong");
    \u0275\u0275text(74);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(75, "div", 11)(76, "span");
    \u0275\u0275text(77, "CP");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(78, "strong");
    \u0275\u0275text(79);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(80, "div", 11)(81, "span");
    \u0275\u0275text(82, "Poblaci\xF3n");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(83, "strong");
    \u0275\u0275text(84);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(85, "div", 11)(86, "span");
    \u0275\u0275text(87, "Provincia");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(88, "strong");
    \u0275\u0275text(89);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(90, "div", 11)(91, "span");
    \u0275\u0275text(92, "CCAA");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(93, "strong");
    \u0275\u0275text(94);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(95, "div", 11)(96, "span");
    \u0275\u0275text(97, "Pa\xEDs");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(98, "strong");
    \u0275\u0275text(99);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(100, "div", 9)(101, "h3", 10);
    \u0275\u0275text(102, "Gesti\xF3n y Contacto");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(103, "div", 11)(104, "span");
    \u0275\u0275text(105, "Delegaci\xF3n");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(106, "strong");
    \u0275\u0275text(107);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(108, "div", 11)(109, "span");
    \u0275\u0275text(110, "Delegado");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(111, "strong");
    \u0275\u0275text(112);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(113, "div", 11)(114, "span");
    \u0275\u0275text(115, "T\xE9cnico Gesti\xF3n");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(116, "strong");
    \u0275\u0275text(117);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(118, "div", 11)(119, "span");
    \u0275\u0275text(120, "Responsable");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(121, "strong");
    \u0275\u0275text(122);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(123, "div", 11)(124, "span");
    \u0275\u0275text(125, "M\xF3vil");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(126, "strong");
    \u0275\u0275text(127);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(128, "div", 11)(129, "span");
    \u0275\u0275text(130, "Oficina");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(131, "strong");
    \u0275\u0275text(132);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(133, "div", 11)(134, "span");
    \u0275\u0275text(135, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(136, "strong");
    \u0275\u0275text(137);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(138, "div", 12)(139, "div", 9)(140, "h3", 10);
    \u0275\u0275text(141, "Fechas");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(142, "div", 11)(143, "span");
    \u0275\u0275text(144, "Alta");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(145, "strong");
    \u0275\u0275text(146);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(147, "div", 11)(148, "span");
    \u0275\u0275text(149, "Baja");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(150, "strong");
    \u0275\u0275text(151);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(152, "div", 11)(153, "span");
    \u0275\u0275text(154, "Mantenimiento");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(155, "strong");
    \u0275\u0275text(156);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(157, "div", 11)(158, "span");
    \u0275\u0275text(159, "Horario");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(160, "strong");
    \u0275\u0275text(161);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(162, "div", 9)(163, "h3", 10);
    \u0275\u0275text(164, "Metadatos");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(165, "div", 11)(166, "span");
    \u0275\u0275text(167, "Creado");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(168, "strong");
    \u0275\u0275text(169);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(170, "div", 11)(171, "span");
    \u0275\u0275text(172, "Actualizado");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(173, "strong");
    \u0275\u0275text(174);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("Estaci\xF3n #", ctx_r0.es.id_es, " \u2014 ", ctx_r0.es.nombre || ctx_r0.es.cod_es, "");
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(32, _c0, ctx_r0.es.id_es));
    \u0275\u0275advance(12);
    \u0275\u0275textInterpolate(ctx_r0.es.nombre || "\u2014");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.es.cod_es || "\u2014");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.es.tipo || "\u2014");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.es.nif || "\u2014");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.es.concesion || "\u2014");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.es.id_empresa || "\u2014");
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r0.es.cod_retailgas || "\u2014");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.es.cod_sociedad || "\u2014");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.es.cod_solred || "\u2014");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.es.vinculo || "\u2014");
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r0.es.direccion || "\u2014");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.es.cod_postal || "\u2014");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.es.poblacion || "\u2014");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.es.provincia || "\u2014");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.es.ccaa || "\u2014");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.es.pais || "\u2014");
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r0.es.delegacion || "\u2014");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.es.delegado || "\u2014");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.es.tecnico_gestion || "\u2014");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.es.responsable_gestor || "\u2014");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.es.tel_movil || "\u2014");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.es.tl_oficina || "\u2014");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.es.sede_email || "\u2014");
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r0.es.f_alta || "\u2014");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.es.f_baja || "\u2014");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.es.tipo_mantenimiento || "\u2014");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.es.horario_apertura || "\u2014");
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r0.es.created_at || "\u2014");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.es.updated_at || "\u2014");
  }
}
var EstacionesDetailComponent = class _EstacionesDetailComponent {
  constructor(route, router, service) {
    this.route = route;
    this.router = router;
    this.service = service;
    this.es = null;
    this.loading = true;
  }
  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get("id");
    this.service.getOne(id).subscribe({
      next: (data) => {
        this.es = data;
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
  }
  static {
    this.\u0275fac = function EstacionesDetailComponent_Factory(t) {
      return new (t || _EstacionesDetailComponent)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(EstacionesService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EstacionesDetailComponent, selectors: [["app-estaciones-detail"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 4, vars: 2, consts: [[1, "page-container"], ["style", "text-align:center; padding:48px; color:#64748b", 4, "ngIf"], [4, "ngIf"], [2, "text-align", "center", "padding", "48px", "color", "#64748b"], [1, "page-header"], [2, "display", "flex", "gap", "8px"], [1, "btn", "btn-secondary", 3, "routerLink"], ["routerLink", "/estaciones", 1, "btn", "btn-outline"], [1, "detail-grid"], [1, "card"], [1, "section-title"], [1, "detail-row"], [1, "detail-grid", 2, "margin-top", "20px"]], template: function EstacionesDetailComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "app-navbar");
        \u0275\u0275elementStart(1, "div", 0);
        \u0275\u0275template(2, EstacionesDetailComponent_div_2_Template, 2, 0, "div", 1)(3, EstacionesDetailComponent_div_3_Template, 175, 34, "div", 2);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.loading);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.loading && ctx.es);
      }
    }, dependencies: [CommonModule, NgIf, RouterLink, NavbarComponent], styles: ["\n\n.detail-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 20px;\n}\n@media (max-width: 768px) {\n  .detail-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.section-title[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 600;\n  margin-bottom: 16px;\n  color: #1e293b;\n}\n.detail-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 10px 0;\n  border-bottom: 1px solid #f1f5f9;\n}\n.detail-row[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #64748b;\n}\n/*# sourceMappingURL=estaciones-detail.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EstacionesDetailComponent, { className: "EstacionesDetailComponent", filePath: "src\\app\\pages\\estaciones\\detail\\estaciones-detail.component.ts", lineNumber: 86 });
})();
export {
  EstacionesDetailComponent
};
//# sourceMappingURL=chunk-RTIBLKYG.js.map
