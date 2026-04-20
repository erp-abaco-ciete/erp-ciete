import {
  ContactosService
} from "./chunk-GAK4HJEY.js";
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

// src/app/pages/contactos/list/contactos-list.component.ts
var _c0 = (a0) => ["/contactos", a0];
var _c1 = (a0) => ["/contactos", a0, "edit"];
function ContactosListComponent_div_7_Template(rf, ctx) {
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
function ContactosListComponent_tr_24_Template(rf, ctx) {
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
    \u0275\u0275elementStart(10, "td", 10)(11, "a", 11);
    \u0275\u0275text(12, "Ver");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "a", 12);
    \u0275\u0275text(14, "Editar");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "button", 13);
    \u0275\u0275listener("click", function ContactosListComponent_tr_24_Template_button_click_15_listener() {
      const c_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.eliminar(c_r3));
    });
    \u0275\u0275text(16, "Eliminar");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const c_r3 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("#", c_r3.id_contacto, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(c_r3.nombre);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(c_r3.apellido1 || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(c_r3.apellido2 || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(6, _c0, c_r3.id_contacto));
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(8, _c1, c_r3.id_contacto));
  }
}
function ContactosListComponent_tr_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 14);
    \u0275\u0275text(2, "No hay contactos registrados");
    \u0275\u0275elementEnd()();
  }
}
function ContactosListComponent_div_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275text(1, "Cargando...");
    \u0275\u0275elementEnd();
  }
}
var ContactosListComponent = class _ContactosListComponent {
  constructor(service) {
    this.service = service;
    this.contactos = [];
    this.loading = true;
    this.successMsg = "";
  }
  ngOnInit() {
    this.service.getAll().subscribe({
      next: (data) => {
        this.contactos = data;
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
  }
  eliminar(contacto) {
    if (confirm(`\xBFEliminar el contacto "${contacto.nombre}"?`)) {
      this.service.delete(contacto.id_contacto).subscribe({
        next: () => {
          this.successMsg = "Contacto eliminado correctamente";
          this.contactos = this.contactos.filter((c) => c.id_contacto !== contacto.id_contacto);
          setTimeout(() => this.successMsg = "", 3e3);
        }
      });
    }
  }
  static {
    this.\u0275fac = function ContactosListComponent_Factory(t) {
      return new (t || _ContactosListComponent)(\u0275\u0275directiveInject(ContactosService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ContactosListComponent, selectors: [["app-contactos-list"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 27, vars: 4, consts: [[1, "page-container"], [1, "page-header"], ["routerLink", "/contactos/new", 1, "btn", "btn-primary"], ["class", "alert alert-success", 4, "ngIf"], [1, "card"], [1, "table-wrapper"], [4, "ngFor", "ngForOf"], [4, "ngIf"], ["style", "text-align:center; padding:32px; color:#64748b", 4, "ngIf"], [1, "alert", "alert-success"], [1, "actions-cell"], [1, "btn", "btn-sm", "btn-outline", 3, "routerLink"], [1, "btn", "btn-sm", "btn-secondary", 3, "routerLink"], [1, "btn", "btn-sm", "btn-danger", 3, "click"], ["colspan", "5", 2, "text-align", "center", "color", "#94a3b8", "padding", "32px"], [2, "text-align", "center", "padding", "32px", "color", "#64748b"]], template: function ContactosListComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "app-navbar");
        \u0275\u0275elementStart(1, "div", 0)(2, "div", 1)(3, "h1");
        \u0275\u0275text(4, "Contactos");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "a", 2);
        \u0275\u0275text(6, "+ Nuevo Contacto");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(7, ContactosListComponent_div_7_Template, 2, 1, "div", 3);
        \u0275\u0275elementStart(8, "div", 4)(9, "div", 5)(10, "table")(11, "thead")(12, "tr")(13, "th");
        \u0275\u0275text(14, "ID");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "th");
        \u0275\u0275text(16, "Nombre");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(17, "th");
        \u0275\u0275text(18, "Primer Apellido");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(19, "th");
        \u0275\u0275text(20, "Segundo Apellido");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(21, "th");
        \u0275\u0275text(22, "Acciones");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(23, "tbody");
        \u0275\u0275template(24, ContactosListComponent_tr_24_Template, 17, 10, "tr", 6)(25, ContactosListComponent_tr_25_Template, 3, 0, "tr", 7);
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(26, ContactosListComponent_div_26_Template, 2, 0, "div", 8);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(7);
        \u0275\u0275property("ngIf", ctx.successMsg);
        \u0275\u0275advance(17);
        \u0275\u0275property("ngForOf", ctx.contactos);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.contactos.length === 0 && !ctx.loading);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.loading);
      }
    }, dependencies: [CommonModule, NgForOf, NgIf, RouterLink, NavbarComponent], styles: ["\n\n.actions-cell[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 6px;\n}\n/*# sourceMappingURL=contactos-list.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ContactosListComponent, { className: "ContactosListComponent", filePath: "src\\app\\pages\\contactos\\list\\contactos-list.component.ts", lineNumber: 57 });
})();
export {
  ContactosListComponent
};
//# sourceMappingURL=chunk-JGS7GNWW.js.map
