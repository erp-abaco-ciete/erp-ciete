import {
  NavbarComponent
} from "./chunk-Q2QW7TPZ.js";
import {
  AuthService,
  CommonModule,
  RouterLink,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-HDU5XZPL.js";

// src/app/pages/dashboard/dashboard.component.ts
var DashboardComponent = class _DashboardComponent {
  constructor(auth) {
    this.auth = auth;
    this.userName = "";
  }
  ngOnInit() {
    this.auth.getMe().subscribe({
      next: (user) => this.userName = user.name,
      error: () => this.userName = "Usuario"
    });
  }
  static {
    this.\u0275fac = function DashboardComponent_Factory(t) {
      return new (t || _DashboardComponent)(\u0275\u0275directiveInject(AuthService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DashboardComponent, selectors: [["app-dashboard"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 65, vars: 1, consts: [[1, "page-container"], [1, "welcome-banner"], [1, "cards-grid"], ["routerLink", "/presupuestos", 1, "module-card"], [1, "module-icon", 2, "background", "#dbeafe", "color", "#2563eb"], ["width", "28", "height", "28", "fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", "stroke-width", "2"], ["d", "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"], [1, "module-info"], [1, "module-arrow"], ["routerLink", "/pedidos", 1, "module-card"], [1, "module-icon", 2, "background", "#dcfce7", "color", "#16a34a"], ["d", "M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"], ["routerLink", "/empresas", 1, "module-card"], [1, "module-icon", 2, "background", "#fef3c7", "color", "#d97706"], ["d", "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0H5m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"], ["routerLink", "/contactos", 1, "module-card"], [1, "module-icon", 2, "background", "#ede9fe", "color", "#7c3aed"], ["d", "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"], ["routerLink", "/estaciones", 1, "module-card"], [1, "module-icon", 2, "background", "#fee2e2", "color", "#dc2626"], ["d", "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"], ["d", "M15 11a3 3 0 11-6 0 3 3 0 016 0z"]], template: function DashboardComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "app-navbar");
        \u0275\u0275elementStart(1, "div", 0)(2, "div", 1)(3, "div")(4, "h1");
        \u0275\u0275text(5);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "p");
        \u0275\u0275text(7, "Panel de control \u2014 ERP Ciete Ingenieros");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(8, "div", 2)(9, "a", 3)(10, "div", 4);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(11, "svg", 5);
        \u0275\u0275element(12, "path", 6);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(13, "div", 7)(14, "h3");
        \u0275\u0275text(15, "Presupuestos");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "p");
        \u0275\u0275text(17, "Gestiona y crea presupuestos para tus proyectos");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(18, "div", 8);
        \u0275\u0275text(19, "\u2192");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(20, "a", 9)(21, "div", 10);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(22, "svg", 5);
        \u0275\u0275element(23, "path", 11);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(24, "div", 7)(25, "h3");
        \u0275\u0275text(26, "Pedidos");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(27, "p");
        \u0275\u0275text(28, "Consulta y gestiona los pedidos generados");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(29, "div", 8);
        \u0275\u0275text(30, "\u2192");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(31, "a", 12)(32, "div", 13);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(33, "svg", 5);
        \u0275\u0275element(34, "path", 14);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(35, "div", 7)(36, "h3");
        \u0275\u0275text(37, "Empresas");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(38, "p");
        \u0275\u0275text(39, "Gestiona las empresas del sistema");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(40, "div", 8);
        \u0275\u0275text(41, "\u2192");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(42, "a", 15)(43, "div", 16);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(44, "svg", 5);
        \u0275\u0275element(45, "path", 17);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(46, "div", 7)(47, "h3");
        \u0275\u0275text(48, "Contactos");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(49, "p");
        \u0275\u0275text(50, "Administra los contactos y sus relaciones");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(51, "div", 8);
        \u0275\u0275text(52, "\u2192");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(53, "a", 18)(54, "div", 19);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(55, "svg", 5);
        \u0275\u0275element(56, "path", 20)(57, "path", 21);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(58, "div", 7)(59, "h3");
        \u0275\u0275text(60, "Estaciones de Servicio");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(61, "p");
        \u0275\u0275text(62, "Gestiona las estaciones de servicio");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(63, "div", 8);
        \u0275\u0275text(64, "\u2192");
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate1("Bienvenido, ", ctx.userName, "");
      }
    }, dependencies: [CommonModule, RouterLink, NavbarComponent], styles: ["\n\n.welcome-banner[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #1e3a8a,\n      #2563eb);\n  color: white;\n  border-radius: 12px;\n  padding: 32px;\n  margin-bottom: 28px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.welcome-banner[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 26px;\n  margin-bottom: 4px;\n}\n.welcome-banner[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  opacity: 0.85;\n  font-size: 15px;\n}\n.cards-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n  gap: 20px;\n}\n.module-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 12px;\n  padding: 24px;\n  display: flex;\n  align-items: center;\n  gap: 18px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);\n  text-decoration: none;\n  color: #1e293b;\n  border: 1px solid #e2e8f0;\n  transition: all 0.2s;\n}\n.module-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-3px);\n  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);\n  text-decoration: none;\n}\n.module-icon[_ngcontent-%COMP%] {\n  width: 60px;\n  height: 60px;\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.module-info[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.module-info[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 600;\n  margin-bottom: 4px;\n}\n.module-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #64748b;\n  font-size: 13px;\n}\n.module-arrow[_ngcontent-%COMP%] {\n  font-size: 22px;\n  color: #94a3b8;\n  transition: transform 0.2s;\n}\n.module-card[_ngcontent-%COMP%]:hover   .module-arrow[_ngcontent-%COMP%] {\n  transform: translateX(4px);\n}\n/*# sourceMappingURL=dashboard.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DashboardComponent, { className: "DashboardComponent", filePath: "src\\app\\pages\\dashboard\\dashboard.component.ts", lineNumber: 92 });
})();
export {
  DashboardComponent
};
//# sourceMappingURL=chunk-2LRZSRA2.js.map
