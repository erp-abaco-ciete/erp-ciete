import {
  DefaultValueAccessor,
  FormsModule,
  MinValidator,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  NumberValueAccessor,
  ɵNgNoValidate
} from "./chunk-IUCUCDBO.js";
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
  Router,
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
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-HDU5XZPL.js";

// src/app/pages/presupuestos/form/presupuestos-form.component.ts
function PresupuestosFormComponent_div_7_Template(rf, ctx) {
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
function PresupuestosFormComponent_div_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17);
    \u0275\u0275text(1, ' No hay l\xEDneas. Pulsa "+ A\xF1adir l\xEDnea" para comenzar. ');
    \u0275\u0275elementEnd();
  }
}
function PresupuestosFormComponent_div_21_tr_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td")(4, "input", 20);
    \u0275\u0275twoWayListener("ngModelChange", function PresupuestosFormComponent_div_21_tr_12_Template_input_ngModelChange_4_listener($event) {
      const linea_r3 = \u0275\u0275restoreView(_r2).$implicit;
      \u0275\u0275twoWayBindingSet(linea_r3.id_servicio, $event) || (linea_r3.id_servicio = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "td")(6, "input", 21);
    \u0275\u0275twoWayListener("ngModelChange", function PresupuestosFormComponent_div_21_tr_12_Template_input_ngModelChange_6_listener($event) {
      const linea_r3 = \u0275\u0275restoreView(_r2).$implicit;
      \u0275\u0275twoWayBindingSet(linea_r3.unidades, $event) || (linea_r3.unidades = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "td")(8, "button", 22);
    \u0275\u0275listener("click", function PresupuestosFormComponent_div_21_tr_12_Template_button_click_8_listener() {
      const i_r4 = \u0275\u0275restoreView(_r2).index;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.removeLinea(i_r4));
    });
    \u0275\u0275text(9, "\u2715");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const linea_r3 = ctx.$implicit;
    const i_r4 = ctx.index;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(i_r4 + 1);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", linea_r3.id_servicio);
    \u0275\u0275property("name", "servicio_" + i_r4);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", linea_r3.unidades);
    \u0275\u0275property("name", "unidades_" + i_r4);
  }
}
function PresupuestosFormComponent_div_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18)(1, "table")(2, "thead")(3, "tr")(4, "th");
    \u0275\u0275text(5, "#");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "ID Servicio");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "Unidades");
    \u0275\u0275elementEnd();
    \u0275\u0275element(10, "th");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "tbody");
    \u0275\u0275template(12, PresupuestosFormComponent_div_21_tr_12_Template, 10, 5, "tr", 19);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(12);
    \u0275\u0275property("ngForOf", ctx_r0.lineas);
  }
}
var PresupuestosFormComponent = class _PresupuestosFormComponent {
  constructor(service, router) {
    this.service = service;
    this.router = router;
    this.fecha = "";
    this.lineas = [];
    this.loading = false;
    this.errorMsg = "";
  }
  addLinea() {
    this.lineas.push({ id_servicio: null, unidades: null });
  }
  removeLinea(index) {
    this.lineas.splice(index, 1);
  }
  guardar() {
    this.loading = true;
    this.errorMsg = "";
    const payload = {
      fecha_presupuesto: this.fecha || null,
      lineas: this.lineas.map((l) => ({
        id_servicio: l.id_servicio,
        unidades: l.unidades
      }))
    };
    this.service.create(payload).subscribe({
      next: () => this.router.navigate(["/presupuestos"]),
      error: (err) => {
        this.errorMsg = err?.error?.detail || "Error al crear el presupuesto";
        this.loading = false;
      }
    });
  }
  goBack() {
    this.router.navigate(["/presupuestos"]);
  }
  static {
    this.\u0275fac = function PresupuestosFormComponent_Factory(t) {
      return new (t || _PresupuestosFormComponent)(\u0275\u0275directiveInject(PresupuestosService), \u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PresupuestosFormComponent, selectors: [["app-presupuestos-form"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 25, vars: 6, consts: [[1, "page-container"], [1, "page-header"], [1, "btn", "btn-outline", 2, "cursor", "pointer", 3, "click"], ["class", "alert alert-error", 4, "ngIf"], [1, "card"], [3, "ngSubmit"], [1, "form-group"], ["for", "fecha"], ["id", "fecha", "type", "date", "name", "fecha", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "lineas-section"], [1, "lineas-header"], ["type", "button", 1, "btn", "btn-secondary", "btn-sm", 3, "click"], ["class", "empty-lineas", 4, "ngIf"], ["class", "table-wrapper", 4, "ngIf"], [2, "margin-top", "24px", "display", "flex", "gap", "12px"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], [1, "alert", "alert-error"], [1, "empty-lineas"], [1, "table-wrapper"], [4, "ngFor", "ngForOf"], ["type", "number", "placeholder", "ID Servicio", "min", "1", 1, "form-control", 3, "ngModelChange", "ngModel", "name"], ["type", "number", "placeholder", "0", "min", "0", "step", "0.01", 1, "form-control", 3, "ngModelChange", "ngModel", "name"], ["type", "button", 1, "btn", "btn-danger", "btn-sm", 3, "click"]], template: function PresupuestosFormComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "app-navbar");
        \u0275\u0275elementStart(1, "div", 0)(2, "div", 1)(3, "h1");
        \u0275\u0275text(4, "Nuevo Presupuesto");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "a", 2);
        \u0275\u0275listener("click", function PresupuestosFormComponent_Template_a_click_5_listener() {
          return ctx.goBack();
        });
        \u0275\u0275text(6, "\u2190 Volver");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(7, PresupuestosFormComponent_div_7_Template, 2, 1, "div", 3);
        \u0275\u0275elementStart(8, "div", 4)(9, "form", 5);
        \u0275\u0275listener("ngSubmit", function PresupuestosFormComponent_Template_form_ngSubmit_9_listener() {
          return ctx.guardar();
        });
        \u0275\u0275elementStart(10, "div", 6)(11, "label", 7);
        \u0275\u0275text(12, "Fecha del presupuesto");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "input", 8);
        \u0275\u0275twoWayListener("ngModelChange", function PresupuestosFormComponent_Template_input_ngModelChange_13_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.fecha, $event) || (ctx.fecha = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(14, "div", 9)(15, "div", 10)(16, "h3");
        \u0275\u0275text(17, "L\xEDneas del presupuesto");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "button", 11);
        \u0275\u0275listener("click", function PresupuestosFormComponent_Template_button_click_18_listener() {
          return ctx.addLinea();
        });
        \u0275\u0275text(19, "+ A\xF1adir l\xEDnea");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(20, PresupuestosFormComponent_div_20_Template, 2, 0, "div", 12)(21, PresupuestosFormComponent_div_21_Template, 13, 1, "div", 13);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(22, "div", 14)(23, "button", 15);
        \u0275\u0275text(24);
        \u0275\u0275elementEnd()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(7);
        \u0275\u0275property("ngIf", ctx.errorMsg);
        \u0275\u0275advance(6);
        \u0275\u0275twoWayProperty("ngModel", ctx.fecha);
        \u0275\u0275advance(7);
        \u0275\u0275property("ngIf", ctx.lineas.length === 0);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.lineas.length > 0);
        \u0275\u0275advance(2);
        \u0275\u0275property("disabled", ctx.loading);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", ctx.loading ? "Guardando..." : "Guardar Presupuesto", " ");
      }
    }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NumberValueAccessor, NgControlStatus, NgControlStatusGroup, MinValidator, NgModel, NgForm, NavbarComponent], styles: ["\n\n.lineas-section[_ngcontent-%COMP%] {\n  margin-top: 24px;\n}\n.lineas-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 16px;\n}\n.lineas-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 600;\n}\n.empty-lineas[_ngcontent-%COMP%] {\n  padding: 24px;\n  text-align: center;\n  color: #94a3b8;\n  background: #f8fafc;\n  border-radius: 8px;\n  border: 1px dashed #e2e8f0;\n}\ntable[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  margin: 0;\n}\n/*# sourceMappingURL=presupuestos-form.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PresupuestosFormComponent, { className: "PresupuestosFormComponent", filePath: "src\\app\\pages\\presupuestos\\form\\presupuestos-form.component.ts", lineNumber: 85 });
})();
export {
  PresupuestosFormComponent
};
//# sourceMappingURL=chunk-X77DFO5Z.js.map
