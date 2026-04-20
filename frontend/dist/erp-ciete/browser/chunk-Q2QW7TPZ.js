import {
  AuthService,
  RouterLink,
  RouterLinkActive,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵtext
} from "./chunk-HDU5XZPL.js";

// src/app/shared/navbar/navbar.component.ts
var NavbarComponent = class _NavbarComponent {
  constructor(auth) {
    this.auth = auth;
  }
  logout() {
    this.auth.logout();
  }
  static {
    this.\u0275fac = function NavbarComponent_Factory(t) {
      return new (t || _NavbarComponent)(\u0275\u0275directiveInject(AuthService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NavbarComponent, selectors: [["app-navbar"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 22, vars: 0, consts: [[1, "navbar"], [1, "navbar-brand"], ["width", "28", "height", "28", "viewBox", "0 0 40 40", "fill", "none"], ["width", "40", "height", "40", "rx", "8", "fill", "#2563eb"], ["d", "M10 20 L20 10 L30 20 L20 30 Z", "fill", "white", "opacity", "0.9"], [1, "navbar-links"], ["routerLink", "/dashboard", "routerLinkActive", "active"], ["routerLink", "/presupuestos", "routerLinkActive", "active"], ["routerLink", "/pedidos", "routerLinkActive", "active"], ["routerLink", "/empresas", "routerLinkActive", "active"], ["routerLink", "/contactos", "routerLinkActive", "active"], ["routerLink", "/estaciones", "routerLinkActive", "active"], [1, "btn-logout", 3, "click"]], template: function NavbarComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "nav", 0)(1, "div", 1);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(2, "svg", 2);
        \u0275\u0275element(3, "rect", 3)(4, "path", 4);
        \u0275\u0275elementEnd();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(5, "span");
        \u0275\u0275text(6, "ERP Ciete");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "div", 5)(8, "a", 6);
        \u0275\u0275text(9, "Dashboard");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "a", 7);
        \u0275\u0275text(11, "Presupuestos");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "a", 8);
        \u0275\u0275text(13, "Pedidos");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "a", 9);
        \u0275\u0275text(15, "Empresas");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "a", 10);
        \u0275\u0275text(17, "Contactos");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "a", 11);
        \u0275\u0275text(19, "Estaciones");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(20, "button", 12);
        \u0275\u0275listener("click", function NavbarComponent_Template_button_click_20_listener() {
          return ctx.logout();
        });
        \u0275\u0275text(21, "Cerrar sesi\xF3n");
        \u0275\u0275elementEnd()();
      }
    }, dependencies: [RouterLink, RouterLinkActive], styles: ["\n\n.navbar[_ngcontent-%COMP%] {\n  background: #fff;\n  border-bottom: 1px solid #e2e8f0;\n  display: flex;\n  align-items: center;\n  padding: 0 24px;\n  height: 60px;\n  gap: 24px;\n  position: sticky;\n  top: 0;\n  z-index: 100;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.07);\n}\n.navbar-brand[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  font-weight: 700;\n  font-size: 17px;\n  color: #1e293b;\n  text-decoration: none;\n}\n.navbar-links[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 4px;\n  flex: 1;\n}\n.navbar-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  padding: 6px 14px;\n  border-radius: 6px;\n  color: #475569;\n  font-weight: 500;\n  font-size: 14px;\n  text-decoration: none;\n  transition: all 0.15s;\n}\n.navbar-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, .navbar-links[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%] {\n  background: #eff6ff;\n  color: #2563eb;\n}\n.btn-logout[_ngcontent-%COMP%] {\n  background: none;\n  border: 1px solid #e2e8f0;\n  border-radius: 6px;\n  padding: 6px 14px;\n  font-size: 14px;\n  font-family: inherit;\n  color: #64748b;\n  cursor: pointer;\n  transition: all 0.15s;\n}\n.btn-logout[_ngcontent-%COMP%]:hover {\n  background: #fee2e2;\n  border-color: #fecaca;\n  color: #dc2626;\n}\n/*# sourceMappingURL=navbar.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NavbarComponent, { className: "NavbarComponent", filePath: "src\\app\\shared\\navbar\\navbar.component.ts", lineNumber: 33 });
})();

export {
  NavbarComponent
};
//# sourceMappingURL=chunk-Q2QW7TPZ.js.map
