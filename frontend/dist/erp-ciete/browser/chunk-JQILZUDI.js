import {
  ContactosService
} from "./chunk-GAK4HJEY.js";
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
  ɵɵtextInterpolate1
} from "./chunk-HDU5XZPL.js";

// src/app/pages/contactos/detail/contactos-detail.component.ts
var _c0 = (a0) => ["/contactos", a0, "edit"];
function ContactosDetailComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3);
    \u0275\u0275text(1, "Cargando...");
    \u0275\u0275elementEnd();
  }
}
function ContactosDetailComponent_div_3_Template(rf, ctx) {
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
    \u0275\u0275text(12, "Datos personales");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 11)(14, "span");
    \u0275\u0275text(15, "Nombre");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "strong");
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 11)(19, "span");
    \u0275\u0275text(20, "Primer Apellido");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "strong");
    \u0275\u0275text(22);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div", 11)(24, "span");
    \u0275\u0275text(25, "Segundo Apellido");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "strong");
    \u0275\u0275text(27);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(28, "div", 9)(29, "h3", 10);
    \u0275\u0275text(30, "Metadatos");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "div", 11)(32, "span");
    \u0275\u0275text(33, "Creado");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "strong");
    \u0275\u0275text(35);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(36, "div", 11)(37, "span");
    \u0275\u0275text(38, "Actualizado");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "strong");
    \u0275\u0275text(40);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Contacto #", ctx_r0.contacto.id_contacto, "");
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(7, _c0, ctx_r0.contacto.id_contacto));
    \u0275\u0275advance(12);
    \u0275\u0275textInterpolate(ctx_r0.contacto.nombre);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.contacto.apellido1 || "\u2014");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.contacto.apellido2 || "\u2014");
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r0.contacto.created_at || "\u2014");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.contacto.updated_at || "\u2014");
  }
}
var ContactosDetailComponent = class _ContactosDetailComponent {
  constructor(route, router, service) {
    this.route = route;
    this.router = router;
    this.service = service;
    this.contacto = null;
    this.loading = true;
  }
  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get("id");
    this.service.getOne(id).subscribe({
      next: (data) => {
        this.contacto = data;
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
  }
  static {
    this.\u0275fac = function ContactosDetailComponent_Factory(t) {
      return new (t || _ContactosDetailComponent)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ContactosService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ContactosDetailComponent, selectors: [["app-contactos-detail"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 4, vars: 2, consts: [[1, "page-container"], ["style", "text-align:center; padding:48px; color:#64748b", 4, "ngIf"], [4, "ngIf"], [2, "text-align", "center", "padding", "48px", "color", "#64748b"], [1, "page-header"], [2, "display", "flex", "gap", "8px"], [1, "btn", "btn-secondary", 3, "routerLink"], ["routerLink", "/contactos", 1, "btn", "btn-outline"], [1, "detail-grid"], [1, "card"], [1, "section-title"], [1, "detail-row"]], template: function ContactosDetailComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "app-navbar");
        \u0275\u0275elementStart(1, "div", 0);
        \u0275\u0275template(2, ContactosDetailComponent_div_2_Template, 2, 0, "div", 1)(3, ContactosDetailComponent_div_3_Template, 41, 9, "div", 2);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.loading);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.loading && ctx.contacto);
      }
    }, dependencies: [CommonModule, NgIf, RouterLink, NavbarComponent], styles: ["\n\n.detail-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 20px;\n}\n@media (max-width: 768px) {\n  .detail-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.section-title[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 600;\n  margin-bottom: 16px;\n  color: #1e293b;\n}\n.detail-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 10px 0;\n  border-bottom: 1px solid #f1f5f9;\n}\n.detail-row[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #64748b;\n}\n/*# sourceMappingURL=contactos-detail.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ContactosDetailComponent, { className: "ContactosDetailComponent", filePath: "src\\app\\pages\\contactos\\detail\\contactos-detail.component.ts", lineNumber: 42 });
})();
export {
  ContactosDetailComponent
};
//# sourceMappingURL=chunk-JQILZUDI.js.map
