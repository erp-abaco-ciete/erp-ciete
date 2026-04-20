import {
  EstacionesService
} from "./chunk-JVAWIHYP.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  NumberValueAccessor,
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
  __spreadValues,
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

// src/app/pages/estaciones/form/estaciones-form.component.ts
function EstacionesFormComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 64);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.errorMsg);
  }
}
var EstacionesFormComponent = class _EstacionesFormComponent {
  constructor(service, router, route) {
    this.service = service;
    this.router = router;
    this.route = route;
    this.isEdit = false;
    this.editId = null;
    this.loading = false;
    this.errorMsg = "";
    this.form = {
      nombre: "",
      cod_es: "",
      tipo: "",
      nif: "",
      concesion: "",
      id_empresa: null,
      cod_retailgas: "",
      cod_sociedad: "",
      cod_solred: "",
      direccion: "",
      cod_postal: "",
      poblacion: "",
      provincia: "",
      ccaa: "",
      pais: "Espa\xF1a",
      delegacion: "",
      delegado: "",
      tecnico_gestion: "",
      responsable_gestor: "",
      tipo_mantenimiento: "",
      horario_apertura: "",
      tel_movil: "",
      tl_oficina: "",
      sede_email: "",
      f_alta: null,
      f_baja: null
    };
  }
  ngOnInit() {
    const id = this.route.snapshot.paramMap.get("id");
    if (id) {
      this.isEdit = true;
      this.editId = +id;
      this.service.getOne(this.editId).subscribe({
        next: (data) => {
          this.form = __spreadValues(__spreadValues({}, this.form), data);
        },
        error: () => this.errorMsg = "Error al cargar la estaci\xF3n"
      });
    }
  }
  guardar() {
    this.loading = true;
    this.errorMsg = "";
    const obs = this.isEdit ? this.service.update(this.editId, this.form) : this.service.create(this.form);
    obs.subscribe({
      next: () => this.router.navigate(["/estaciones"]),
      error: (err) => {
        this.errorMsg = err?.error?.detail || "Error al guardar la estaci\xF3n";
        this.loading = false;
      }
    });
  }
  goBack() {
    this.router.navigate(["/estaciones"]);
  }
  static {
    this.\u0275fac = function EstacionesFormComponent_Factory(t) {
      return new (t || _EstacionesFormComponent)(\u0275\u0275directiveInject(EstacionesService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ActivatedRoute));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EstacionesFormComponent, selectors: [["app-estaciones-form"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 135, vars: 30, consts: [[1, "page-container"], [1, "page-header"], [1, "btn", "btn-outline", 2, "cursor", "pointer", 3, "click"], ["class", "alert alert-error", 4, "ngIf"], [1, "card"], [3, "ngSubmit"], [1, "section-title"], [1, "form-grid"], [1, "form-group"], ["for", "nombre"], ["id", "nombre", "type", "text", "name", "nombre", 1, "form-control", 3, "ngModelChange", "ngModel"], ["for", "cod_es"], ["id", "cod_es", "type", "text", "name", "cod_es", 1, "form-control", 3, "ngModelChange", "ngModel"], ["for", "tipo"], ["id", "tipo", "type", "text", "name", "tipo", 1, "form-control", 3, "ngModelChange", "ngModel"], ["for", "nif"], ["id", "nif", "type", "text", "name", "nif", 1, "form-control", 3, "ngModelChange", "ngModel"], ["for", "concesion"], ["id", "concesion", "type", "text", "name", "concesion", 1, "form-control", 3, "ngModelChange", "ngModel"], ["for", "id_empresa"], ["id", "id_empresa", "type", "number", "name", "id_empresa", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "section-title", 2, "margin-top", "24px"], ["for", "cod_retailgas"], ["id", "cod_retailgas", "type", "text", "name", "cod_retailgas", 1, "form-control", 3, "ngModelChange", "ngModel"], ["for", "cod_sociedad"], ["id", "cod_sociedad", "type", "text", "name", "cod_sociedad", 1, "form-control", 3, "ngModelChange", "ngModel"], ["for", "cod_solred"], ["id", "cod_solred", "type", "text", "name", "cod_solred", 1, "form-control", 3, "ngModelChange", "ngModel"], ["for", "direccion"], ["id", "direccion", "type", "text", "name", "direccion", 1, "form-control", 3, "ngModelChange", "ngModel"], ["for", "cod_postal"], ["id", "cod_postal", "type", "text", "name", "cod_postal", 1, "form-control", 3, "ngModelChange", "ngModel"], ["for", "poblacion"], ["id", "poblacion", "type", "text", "name", "poblacion", 1, "form-control", 3, "ngModelChange", "ngModel"], ["for", "provincia"], ["id", "provincia", "type", "text", "name", "provincia", 1, "form-control", 3, "ngModelChange", "ngModel"], ["for", "ccaa"], ["id", "ccaa", "type", "text", "name", "ccaa", 1, "form-control", 3, "ngModelChange", "ngModel"], ["for", "pais"], ["id", "pais", "type", "text", "name", "pais", 1, "form-control", 3, "ngModelChange", "ngModel"], ["for", "delegacion"], ["id", "delegacion", "type", "text", "name", "delegacion", 1, "form-control", 3, "ngModelChange", "ngModel"], ["for", "delegado"], ["id", "delegado", "type", "text", "name", "delegado", 1, "form-control", 3, "ngModelChange", "ngModel"], ["for", "tecnico_gestion"], ["id", "tecnico_gestion", "type", "text", "name", "tecnico_gestion", 1, "form-control", 3, "ngModelChange", "ngModel"], ["for", "responsable_gestor"], ["id", "responsable_gestor", "type", "text", "name", "responsable_gestor", 1, "form-control", 3, "ngModelChange", "ngModel"], ["for", "tipo_mantenimiento"], ["id", "tipo_mantenimiento", "type", "text", "name", "tipo_mantenimiento", 1, "form-control", 3, "ngModelChange", "ngModel"], ["for", "horario_apertura"], ["id", "horario_apertura", "type", "text", "name", "horario_apertura", 1, "form-control", 3, "ngModelChange", "ngModel"], ["for", "tel_movil"], ["id", "tel_movil", "type", "text", "name", "tel_movil", 1, "form-control", 3, "ngModelChange", "ngModel"], ["for", "tl_oficina"], ["id", "tl_oficina", "type", "text", "name", "tl_oficina", 1, "form-control", 3, "ngModelChange", "ngModel"], ["for", "sede_email"], ["id", "sede_email", "type", "email", "name", "sede_email", 1, "form-control", 3, "ngModelChange", "ngModel"], ["for", "f_alta"], ["id", "f_alta", "type", "date", "name", "f_alta", 1, "form-control", 3, "ngModelChange", "ngModel"], ["for", "f_baja"], ["id", "f_baja", "type", "date", "name", "f_baja", 1, "form-control", 3, "ngModelChange", "ngModel"], [2, "margin-top", "24px", "display", "flex", "gap", "12px"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], [1, "alert", "alert-error"]], template: function EstacionesFormComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "app-navbar");
        \u0275\u0275elementStart(1, "div", 0)(2, "div", 1)(3, "h1");
        \u0275\u0275text(4);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "a", 2);
        \u0275\u0275listener("click", function EstacionesFormComponent_Template_a_click_5_listener() {
          return ctx.goBack();
        });
        \u0275\u0275text(6, "\u2190 Volver");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(7, EstacionesFormComponent_div_7_Template, 2, 1, "div", 3);
        \u0275\u0275elementStart(8, "div", 4)(9, "form", 5);
        \u0275\u0275listener("ngSubmit", function EstacionesFormComponent_Template_form_ngSubmit_9_listener() {
          return ctx.guardar();
        });
        \u0275\u0275elementStart(10, "h3", 6);
        \u0275\u0275text(11, "Identificaci\xF3n");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "div", 7)(13, "div", 8)(14, "label", 9);
        \u0275\u0275text(15, "Nombre");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "input", 10);
        \u0275\u0275twoWayListener("ngModelChange", function EstacionesFormComponent_Template_input_ngModelChange_16_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.form.nombre, $event) || (ctx.form.nombre = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(17, "div", 8)(18, "label", 11);
        \u0275\u0275text(19, "C\xF3digo ES");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "input", 12);
        \u0275\u0275twoWayListener("ngModelChange", function EstacionesFormComponent_Template_input_ngModelChange_20_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.form.cod_es, $event) || (ctx.form.cod_es = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(21, "div", 8)(22, "label", 13);
        \u0275\u0275text(23, "Tipo");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(24, "input", 14);
        \u0275\u0275twoWayListener("ngModelChange", function EstacionesFormComponent_Template_input_ngModelChange_24_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.form.tipo, $event) || (ctx.form.tipo = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(25, "div", 8)(26, "label", 15);
        \u0275\u0275text(27, "NIF");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(28, "input", 16);
        \u0275\u0275twoWayListener("ngModelChange", function EstacionesFormComponent_Template_input_ngModelChange_28_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.form.nif, $event) || (ctx.form.nif = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(29, "div", 8)(30, "label", 17);
        \u0275\u0275text(31, "Concesi\xF3n");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(32, "input", 18);
        \u0275\u0275twoWayListener("ngModelChange", function EstacionesFormComponent_Template_input_ngModelChange_32_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.form.concesion, $event) || (ctx.form.concesion = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(33, "div", 8)(34, "label", 19);
        \u0275\u0275text(35, "ID Empresa");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(36, "input", 20);
        \u0275\u0275twoWayListener("ngModelChange", function EstacionesFormComponent_Template_input_ngModelChange_36_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.form.id_empresa, $event) || (ctx.form.id_empresa = $event);
          return $event;
        });
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(37, "h3", 21);
        \u0275\u0275text(38, "C\xF3digos");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(39, "div", 7)(40, "div", 8)(41, "label", 22);
        \u0275\u0275text(42, "C\xF3digo Retailgas");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(43, "input", 23);
        \u0275\u0275twoWayListener("ngModelChange", function EstacionesFormComponent_Template_input_ngModelChange_43_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.form.cod_retailgas, $event) || (ctx.form.cod_retailgas = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(44, "div", 8)(45, "label", 24);
        \u0275\u0275text(46, "C\xF3digo Sociedad");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(47, "input", 25);
        \u0275\u0275twoWayListener("ngModelChange", function EstacionesFormComponent_Template_input_ngModelChange_47_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.form.cod_sociedad, $event) || (ctx.form.cod_sociedad = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(48, "div", 8)(49, "label", 26);
        \u0275\u0275text(50, "C\xF3digo SOLRED");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(51, "input", 27);
        \u0275\u0275twoWayListener("ngModelChange", function EstacionesFormComponent_Template_input_ngModelChange_51_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.form.cod_solred, $event) || (ctx.form.cod_solred = $event);
          return $event;
        });
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(52, "h3", 21);
        \u0275\u0275text(53, "Ubicaci\xF3n");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(54, "div", 7)(55, "div", 8)(56, "label", 28);
        \u0275\u0275text(57, "Direcci\xF3n");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(58, "input", 29);
        \u0275\u0275twoWayListener("ngModelChange", function EstacionesFormComponent_Template_input_ngModelChange_58_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.form.direccion, $event) || (ctx.form.direccion = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(59, "div", 8)(60, "label", 30);
        \u0275\u0275text(61, "C\xF3digo Postal");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(62, "input", 31);
        \u0275\u0275twoWayListener("ngModelChange", function EstacionesFormComponent_Template_input_ngModelChange_62_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.form.cod_postal, $event) || (ctx.form.cod_postal = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(63, "div", 8)(64, "label", 32);
        \u0275\u0275text(65, "Poblaci\xF3n");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(66, "input", 33);
        \u0275\u0275twoWayListener("ngModelChange", function EstacionesFormComponent_Template_input_ngModelChange_66_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.form.poblacion, $event) || (ctx.form.poblacion = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(67, "div", 8)(68, "label", 34);
        \u0275\u0275text(69, "Provincia");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(70, "input", 35);
        \u0275\u0275twoWayListener("ngModelChange", function EstacionesFormComponent_Template_input_ngModelChange_70_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.form.provincia, $event) || (ctx.form.provincia = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(71, "div", 8)(72, "label", 36);
        \u0275\u0275text(73, "CCAA");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(74, "input", 37);
        \u0275\u0275twoWayListener("ngModelChange", function EstacionesFormComponent_Template_input_ngModelChange_74_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.form.ccaa, $event) || (ctx.form.ccaa = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(75, "div", 8)(76, "label", 38);
        \u0275\u0275text(77, "Pa\xEDs");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(78, "input", 39);
        \u0275\u0275twoWayListener("ngModelChange", function EstacionesFormComponent_Template_input_ngModelChange_78_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.form.pais, $event) || (ctx.form.pais = $event);
          return $event;
        });
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(79, "h3", 21);
        \u0275\u0275text(80, "Gesti\xF3n");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(81, "div", 7)(82, "div", 8)(83, "label", 40);
        \u0275\u0275text(84, "Delegaci\xF3n");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(85, "input", 41);
        \u0275\u0275twoWayListener("ngModelChange", function EstacionesFormComponent_Template_input_ngModelChange_85_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.form.delegacion, $event) || (ctx.form.delegacion = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(86, "div", 8)(87, "label", 42);
        \u0275\u0275text(88, "Delegado");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(89, "input", 43);
        \u0275\u0275twoWayListener("ngModelChange", function EstacionesFormComponent_Template_input_ngModelChange_89_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.form.delegado, $event) || (ctx.form.delegado = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(90, "div", 8)(91, "label", 44);
        \u0275\u0275text(92, "T\xE9cnico Gesti\xF3n");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(93, "input", 45);
        \u0275\u0275twoWayListener("ngModelChange", function EstacionesFormComponent_Template_input_ngModelChange_93_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.form.tecnico_gestion, $event) || (ctx.form.tecnico_gestion = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(94, "div", 8)(95, "label", 46);
        \u0275\u0275text(96, "Responsable Gestor");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(97, "input", 47);
        \u0275\u0275twoWayListener("ngModelChange", function EstacionesFormComponent_Template_input_ngModelChange_97_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.form.responsable_gestor, $event) || (ctx.form.responsable_gestor = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(98, "div", 8)(99, "label", 48);
        \u0275\u0275text(100, "Tipo Mantenimiento");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(101, "input", 49);
        \u0275\u0275twoWayListener("ngModelChange", function EstacionesFormComponent_Template_input_ngModelChange_101_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.form.tipo_mantenimiento, $event) || (ctx.form.tipo_mantenimiento = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(102, "div", 8)(103, "label", 50);
        \u0275\u0275text(104, "Horario Apertura");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(105, "input", 51);
        \u0275\u0275twoWayListener("ngModelChange", function EstacionesFormComponent_Template_input_ngModelChange_105_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.form.horario_apertura, $event) || (ctx.form.horario_apertura = $event);
          return $event;
        });
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(106, "h3", 21);
        \u0275\u0275text(107, "Contacto de la estaci\xF3n");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(108, "div", 7)(109, "div", 8)(110, "label", 52);
        \u0275\u0275text(111, "Tel\xE9fono M\xF3vil");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(112, "input", 53);
        \u0275\u0275twoWayListener("ngModelChange", function EstacionesFormComponent_Template_input_ngModelChange_112_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.form.tel_movil, $event) || (ctx.form.tel_movil = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(113, "div", 8)(114, "label", 54);
        \u0275\u0275text(115, "Tel\xE9fono Oficina");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(116, "input", 55);
        \u0275\u0275twoWayListener("ngModelChange", function EstacionesFormComponent_Template_input_ngModelChange_116_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.form.tl_oficina, $event) || (ctx.form.tl_oficina = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(117, "div", 8)(118, "label", 56);
        \u0275\u0275text(119, "Email Sede");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(120, "input", 57);
        \u0275\u0275twoWayListener("ngModelChange", function EstacionesFormComponent_Template_input_ngModelChange_120_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.form.sede_email, $event) || (ctx.form.sede_email = $event);
          return $event;
        });
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(121, "h3", 21);
        \u0275\u0275text(122, "Fechas");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(123, "div", 7)(124, "div", 8)(125, "label", 58);
        \u0275\u0275text(126, "Fecha Alta");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(127, "input", 59);
        \u0275\u0275twoWayListener("ngModelChange", function EstacionesFormComponent_Template_input_ngModelChange_127_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.form.f_alta, $event) || (ctx.form.f_alta = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(128, "div", 8)(129, "label", 60);
        \u0275\u0275text(130, "Fecha Baja");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(131, "input", 61);
        \u0275\u0275twoWayListener("ngModelChange", function EstacionesFormComponent_Template_input_ngModelChange_131_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.form.f_baja, $event) || (ctx.form.f_baja = $event);
          return $event;
        });
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(132, "div", 62)(133, "button", 63);
        \u0275\u0275text(134);
        \u0275\u0275elementEnd()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(ctx.isEdit ? "Editar Estaci\xF3n" : "Nueva Estaci\xF3n");
        \u0275\u0275advance(3);
        \u0275\u0275property("ngIf", ctx.errorMsg);
        \u0275\u0275advance(9);
        \u0275\u0275twoWayProperty("ngModel", ctx.form.nombre);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.form.cod_es);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.form.tipo);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.form.nif);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.form.concesion);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.form.id_empresa);
        \u0275\u0275advance(7);
        \u0275\u0275twoWayProperty("ngModel", ctx.form.cod_retailgas);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.form.cod_sociedad);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.form.cod_solred);
        \u0275\u0275advance(7);
        \u0275\u0275twoWayProperty("ngModel", ctx.form.direccion);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.form.cod_postal);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.form.poblacion);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.form.provincia);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.form.ccaa);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.form.pais);
        \u0275\u0275advance(7);
        \u0275\u0275twoWayProperty("ngModel", ctx.form.delegacion);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.form.delegado);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.form.tecnico_gestion);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.form.responsable_gestor);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.form.tipo_mantenimiento);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.form.horario_apertura);
        \u0275\u0275advance(7);
        \u0275\u0275twoWayProperty("ngModel", ctx.form.tel_movil);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.form.tl_oficina);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.form.sede_email);
        \u0275\u0275advance(7);
        \u0275\u0275twoWayProperty("ngModel", ctx.form.f_alta);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.form.f_baja);
        \u0275\u0275advance(2);
        \u0275\u0275property("disabled", ctx.loading);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", ctx.loading ? "Guardando..." : ctx.isEdit ? "Actualizar" : "Guardar Estaci\xF3n", " ");
      }
    }, dependencies: [CommonModule, NgIf, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NumberValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, NgForm, NavbarComponent], styles: ["\n\n.form-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  gap: 16px;\n}\n@media (max-width: 992px) {\n  .form-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr 1fr;\n  }\n}\n@media (max-width: 576px) {\n  .form-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.section-title[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 600;\n  margin-bottom: 16px;\n  color: #1e293b;\n  padding-bottom: 8px;\n  border-bottom: 2px solid #e2e8f0;\n}\n/*# sourceMappingURL=estaciones-form.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EstacionesFormComponent, { className: "EstacionesFormComponent", filePath: "src\\app\\pages\\estaciones\\form\\estaciones-form.component.ts", lineNumber: 163 });
})();
export {
  EstacionesFormComponent
};
//# sourceMappingURL=chunk-LIJ2FJWO.js.map
