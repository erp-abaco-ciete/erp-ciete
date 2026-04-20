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
  AuthService,
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
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
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

// src/app/pages/login/login.component.ts
function LoginComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.errorMsg);
  }
}
var LoginComponent = class _LoginComponent {
  constructor(auth, router) {
    this.auth = auth;
    this.router = router;
    this.email = "";
    this.password = "";
    this.loading = false;
    this.errorMsg = "";
  }
  onSubmit() {
    this.errorMsg = "";
    this.loading = true;
    this.auth.login(this.email, this.password).subscribe({
      next: () => this.router.navigate(["/dashboard"]),
      error: () => {
        this.errorMsg = "Credenciales incorrectas";
        this.loading = false;
      }
    });
  }
  static {
    this.\u0275fac = function LoginComponent_Factory(t) {
      return new (t || _LoginComponent)(\u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LoginComponent, selectors: [["app-login"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 24, vars: 5, consts: [[1, "login-bg"], [1, "login-card"], [1, "login-logo"], ["width", "40", "height", "40", "viewBox", "0 0 40 40", "fill", "none"], ["width", "40", "height", "40", "rx", "10", "fill", "#2563eb"], ["d", "M10 20 L20 10 L30 20 L20 30 Z", "fill", "white", "opacity", "0.9"], [1, "subtitle"], ["class", "alert alert-error", 4, "ngIf"], [3, "ngSubmit"], [1, "form-group"], ["for", "email"], ["id", "email", "type", "email", "name", "email", "placeholder", "admin@ciete.es", "required", "", "autocomplete", "email", 1, "form-control", 3, "ngModelChange", "ngModel"], ["for", "password"], ["id", "password", "type", "password", "name", "password", "placeholder", "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022", "required", "", "autocomplete", "current-password", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "submit", 1, "btn", "btn-primary", 2, "width", "100%", "justify-content", "center", "padding", "11px", 3, "disabled"], [1, "alert", "alert-error"]], template: function LoginComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(3, "svg", 3);
        \u0275\u0275element(4, "rect", 4)(5, "path", 5);
        \u0275\u0275elementEnd();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(6, "span");
        \u0275\u0275text(7, "ERP Ciete");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(8, "h1");
        \u0275\u0275text(9, "Iniciar sesi\xF3n");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "p", 6);
        \u0275\u0275text(11, "Accede a tu panel de gesti\xF3n");
        \u0275\u0275elementEnd();
        \u0275\u0275template(12, LoginComponent_div_12_Template, 2, 1, "div", 7);
        \u0275\u0275elementStart(13, "form", 8);
        \u0275\u0275listener("ngSubmit", function LoginComponent_Template_form_ngSubmit_13_listener() {
          return ctx.onSubmit();
        });
        \u0275\u0275elementStart(14, "div", 9)(15, "label", 10);
        \u0275\u0275text(16, "Email");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(17, "input", 11);
        \u0275\u0275twoWayListener("ngModelChange", function LoginComponent_Template_input_ngModelChange_17_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.email, $event) || (ctx.email = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(18, "div", 9)(19, "label", 12);
        \u0275\u0275text(20, "Contrase\xF1a");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(21, "input", 13);
        \u0275\u0275twoWayListener("ngModelChange", function LoginComponent_Template_input_ngModelChange_21_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.password, $event) || (ctx.password = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(22, "button", 14);
        \u0275\u0275text(23);
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(12);
        \u0275\u0275property("ngIf", ctx.errorMsg);
        \u0275\u0275advance(5);
        \u0275\u0275twoWayProperty("ngModel", ctx.email);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.password);
        \u0275\u0275advance();
        \u0275\u0275property("disabled", ctx.loading);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", ctx.loading ? "Entrando..." : "Entrar", " ");
      }
    }, dependencies: [CommonModule, NgIf, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, NgModel, NgForm], styles: ["\n\n.login-bg[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  background:\n    linear-gradient(\n      135deg,\n      #1e3a8a 0%,\n      #2563eb 50%,\n      #3b82f6 100%);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 20px;\n}\n.login-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 16px;\n  padding: 40px;\n  width: 100%;\n  max-width: 400px;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);\n}\n.login-logo[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  margin-bottom: 24px;\n}\n.login-logo[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 700;\n  color: #1e293b;\n}\nh1[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 700;\n  color: #1e293b;\n  margin-bottom: 6px;\n}\n.subtitle[_ngcontent-%COMP%] {\n  color: #64748b;\n  margin-bottom: 28px;\n}\n/*# sourceMappingURL=login.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LoginComponent, { className: "LoginComponent", filePath: "src\\app\\pages\\login\\login.component.ts", lineNumber: 46 });
})();
export {
  LoginComponent
};
//# sourceMappingURL=chunk-P4TAU4TP.js.map
