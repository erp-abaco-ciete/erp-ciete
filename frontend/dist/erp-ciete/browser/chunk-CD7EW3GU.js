import {
  ContactosService
} from "./chunk-GAK4HJEY.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  RequiredValidator,
  ɵNgNoValidate
} from "./chunk-IUCUCDBO.js";
import {
  NavbarComponent
} from "./chunk-Q2QW7TPZ.js";
import {
  ActivatedRoute,
  CommonModule,
  NgIf,
  Router,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-HDU5XZPL.js";

// src/app/pages/contactos/form/contactos-form.component.ts
function ContactosFormComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.errorMsg);
  }
}
var ContactosFormComponent = class _ContactosFormComponent {
  constructor(service, router, route) {
    this.service = service;
    this.router = router;
    this.route = route;
    this.isEdit = false;
    this.editId = null;
    this.loading = false;
    this.errorMsg = "";
    this.form = { nombre: "", apellido1: "", apellido2: "" };
  }
  ngOnInit() {
    const id = this.route.snapshot.paramMap.get("id");
    if (id) {
      this.isEdit = true;
      this.editId = +id;
      this.service.getOne(this.editId).subscribe({
        next: (data) => {
          this.form = {
            nombre: data.nombre || "",
            apellido1: data.apellido1 || "",
            apellido2: data.apellido2 || ""
          };
        },
        error: () => this.errorMsg = "Error al cargar el contacto"
      });
    }
  }
  guardar() {
    if (!this.form.nombre?.trim()) {
      this.errorMsg = "El nombre es obligatorio";
      return;
    }
    this.loading = true;
    this.errorMsg = "";
    const obs = this.isEdit ? this.service.update(this.editId, this.form) : this.service.create(this.form);
    obs.subscribe({
      next: () => this.router.navigate(["/contactos"]),
      error: (err) => {
        this.errorMsg = err?.error?.detail || "Error al guardar el contacto";
        this.loading = false;
      }
    });
  }
  goBack() {
    this.router.navigate(["/contactos"]);
  }
  static {
    this.\u0275fac = function ContactosFormComponent_Factory(t) {
      return new (t || _ContactosFormComponent)(\u0275\u0275directiveInject(ContactosService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ActivatedRoute));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ContactosFormComponent, selectors: [["app-contactos-form"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 26, vars: 7, consts: [[1, "page-container"], [1, "page-header"], [1, "btn", "btn-outline", 2, "cursor", "pointer", 3, "click"], ["class", "alert alert-error", 4, "ngIf"], [1, "card"], [3, "ngSubmit"], [1, "form-grid"], [1, "form-group"], ["for", "nombre"], ["id", "nombre", "type", "text", "name", "nombre", "required", "", 1, "form-control", 3, "ngModelChange", "ngModel"], ["for", "apellido1"], ["id", "apellido1", "type", "text", "name", "apellido1", 1, "form-control", 3, "ngModelChange", "ngModel"], ["for", "apellido2"], ["id", "apellido2", "type", "text", "name", "apellido2", 1, "form-control", 3, "ngModelChange", "ngModel"], [2, "margin-top", "24px", "display", "flex", "gap", "12px"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], [1, "alert", "alert-error"]], template: function ContactosFormComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "app-navbar");
        \u0275\u0275elementStart(1, "div", 0)(2, "div", 1)(3, "h1");
        \u0275\u0275text(4);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "a", 2);
        \u0275\u0275listener("click", function ContactosFormComponent_Template_a_click_5_listener() {
          return ctx.goBack();
        });
        \u0275\u0275text(6, "\u2190 Volver");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(7, ContactosFormComponent_div_7_Template, 2, 1, "div", 3);
        \u0275\u0275elementStart(8, "div", 4)(9, "form", 5);
        \u0275\u0275listener("ngSubmit", function ContactosFormComponent_Template_form_ngSubmit_9_listener() {
          return ctx.guardar();
        });
        \u0275\u0275elementStart(10, "div", 6)(11, "div", 7)(12, "label", 8);
        \u0275\u0275text(13, "Nombre *");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "input", 9);
        \u0275\u0275twoWayListener("ngModelChange", function ContactosFormComponent_Template_input_ngModelChange_14_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.form.nombre, $event) || (ctx.form.nombre = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(15, "div", 7)(16, "label", 10);
        \u0275\u0275text(17, "Primer Apellido");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "input", 11);
        \u0275\u0275twoWayListener("ngModelChange", function ContactosFormComponent_Template_input_ngModelChange_18_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.form.apellido1, $event) || (ctx.form.apellido1 = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(19, "div", 7)(20, "label", 12);
        \u0275\u0275text(21, "Segundo Apellido");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(22, "input", 13);
        \u0275\u0275twoWayListener("ngModelChange", function ContactosFormComponent_Template_input_ngModelChange_22_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.form.apellido2, $event) || (ctx.form.apellido2 = $event);
          return $event;
        });
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(23, "div", 14)(24, "button", 15);
        \u0275\u0275text(25);
        \u0275\u0275elementEnd()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(ctx.isEdit ? "Editar Contacto" : "Nuevo Contacto");
        \u0275\u0275advance(3);
        \u0275\u0275property("ngIf", ctx.errorMsg);
        \u0275\u0275advance(7);
        \u0275\u0275twoWayProperty("ngModel", ctx.form.nombre);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.form.apellido1);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.form.apellido2);
        \u0275\u0275advance(2);
        \u0275\u0275property("disabled", ctx.loading);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", ctx.loading ? "Guardando..." : ctx.isEdit ? "Actualizar" : "Guardar Contacto", " ");
      }
    }, dependencies: [CommonModule, NgIf, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, NgModel, NgForm, NavbarComponent], styles: ["\n\n.form-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 16px;\n}\n@media (max-width: 768px) {\n  .form-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=contactos-form.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ContactosFormComponent, { className: "ContactosFormComponent", filePath: "src\\app\\pages\\contactos\\form\\contactos-form.component.ts", lineNumber: 50 });
})();
export {
  ContactosFormComponent
};
//# sourceMappingURL=chunk-CD7EW3GU.js.map
