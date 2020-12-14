(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/about/about.component.ts":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class AboutComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
AboutComponent.ɵfac = function AboutComponent_Factory(t) { return new (t || AboutComponent)(); };
AboutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutComponent, selectors: [["app-about"]], decls: 4, vars: 0, consts: [["routerLink", "/products/productsummary"]], template: function AboutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " About: This application provides data for Product inventory system\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "View product summary");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5sZXNzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-about',
                templateUrl: './about.component.html',
                styleUrls: ['./about.component.less']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _user_auth_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user-auth-service.service */ "./src/app/user-auth-service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");








function AppComponent_li_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "View Registration Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_li_11_Template(rf, ctx) { if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_li_11_Template_a_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r36); const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r35.logout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Logout");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_li_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_li_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "SignUp");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class AppComponent {
    constructor(auth, router) {
        this.auth = auth;
        this.router = router;
        this.faUser = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faUser"];
        this.isLoggedIn = auth.activeUserData ? true : false;
    }
    logout() {
        this.auth.logout();
        this.router.navigate(['/']);
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_user_auth_service_service__WEBPACK_IMPORTED_MODULE_2__["UserAuthServiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 15, vars: 5, consts: [[1, "header"], [1, "header-container"], ["ngbDropdown", "", 1, "icon-wrapper"], ["ngbDropdownToggle", "", 3, "icon"], ["ngbDropdownMenu", "", 1, "dropdown-menu", "dropdown-menu-right"], [1, "list-group-item"], ["routerLink", "/"], ["class", "list-group-item", 4, "ngIf"], ["class", "list-group-item logout", 4, "ngIf"], ["routerLink", "/registrationdetails"], [1, "list-group-item", "logout"], ["routerLink", "", 3, "click"], ["routerLink", "/login"], ["routerLink", "/signup"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Product Inventory ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "fa-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, AppComponent_li_10_Template, 3, 0, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, AppComponent_li_11_Template, 3, 0, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, AppComponent_li_12_Template, 3, 0, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, AppComponent_li_13_Template, 3, 0, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "router-outlet");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faUser);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.auth.activeUserData);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.auth.activeUserData);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.auth.activeUserData);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.auth.activeUserData);
    } }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbDropdown"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FaIconComponent"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbDropdownToggle"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbDropdownMenu"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]], styles: [".header[_ngcontent-%COMP%] {\n  background-color: #563d7c;\n  color: #fff;\n  width: 100%;\n}\n.header[_ngcontent-%COMP%]   .header-container[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  margin: 0 50px 0 10px;\n}\n.header[_ngcontent-%COMP%]   .header-container[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  width: 50%;\n}\n.header[_ngcontent-%COMP%]   .icon-wrapper[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  width: 50%;\n  -webkit-box-pack: end;\n          justify-content: flex-end;\n  -webkit-box-align: center;\n          align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRDovd2lwcm9fRkVEL0FuZ3VsYXIvc2V0dXAvbXktYXBwL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5sZXNzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0FDQ0o7QURKQTtFQU1RLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHFCQUFBO0FDQ1I7QURSQTtFQVVZLFVBQUE7QUNDWjtBRFhBO0VBZVEsb0JBQUE7RUFBQSxhQUFBO0VBQ0EsVUFBQTtFQUNBLHFCQUFBO1VBQUEseUJBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0FDRFIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTYzZDdjO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIHdpZHRoOjEwMCU7XG5cbiAgICAuaGVhZGVyLWNvbnRhaW5lciB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIG1hcmdpbjogMCA1MHB4IDAgMTBweDtcblxuICAgICAgICBoMiB7XG4gICAgICAgICAgICB3aWR0aDogNTAlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLmljb24td3JhcHBlciB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIHdpZHRoOiA1MCU7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgfVxuXG59IiwiLmhlYWRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1NjNkN2M7XG4gIGNvbG9yOiAjZmZmO1xuICB3aWR0aDogMTAwJTtcbn1cbi5oZWFkZXIgLmhlYWRlci1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW46IDAgNTBweCAwIDEwcHg7XG59XG4uaGVhZGVyIC5oZWFkZXItY29udGFpbmVyIGgyIHtcbiAgd2lkdGg6IDUwJTtcbn1cbi5oZWFkZXIgLmljb24td3JhcHBlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiA1MCU7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.less']
            }]
    }], function () { return [{ type: _user_auth_service_service__WEBPACK_IMPORTED_MODULE_2__["UserAuthServiceService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");
/* harmony import */ var _routing_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./routing/routing.module */ "./src/app/routing/routing.module.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/signup/signup.component.ts");
/* harmony import */ var _view_registration_details_view_registration_details_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./view-registration-details/view-registration-details.component */ "./src/app/view-registration-details/view-registration-details.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");













class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeModule"],
            _routing_routing_module__WEBPACK_IMPORTED_MODULE_3__["RoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_11__["SharedModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
        _about_about_component__WEBPACK_IMPORTED_MODULE_7__["AboutComponent"],
        _login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"],
        _signup_signup_component__WEBPACK_IMPORTED_MODULE_9__["SignupComponent"],
        _view_registration_details_view_registration_details_component__WEBPACK_IMPORTED_MODULE_10__["ViewRegistrationDetailsComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeModule"],
        _routing_routing_module__WEBPACK_IMPORTED_MODULE_3__["RoutingModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_11__["SharedModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                    _about_about_component__WEBPACK_IMPORTED_MODULE_7__["AboutComponent"],
                    _login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"],
                    _signup_signup_component__WEBPACK_IMPORTED_MODULE_9__["SignupComponent"],
                    _view_registration_details_view_registration_details_component__WEBPACK_IMPORTED_MODULE_10__["ViewRegistrationDetailsComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeModule"],
                    _routing_routing_module__WEBPACK_IMPORTED_MODULE_3__["RoutingModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_11__["SharedModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _user_auth_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user-auth-service.service */ "./src/app/user-auth-service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _shared_handle_validations_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/handle-validations.directive */ "./src/app/shared/handle-validations.directive.ts");









function LoginComponent_p_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Incorrect credentials or email is not registered");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class LoginComponent {
    constructor(auth, router) {
        this.auth = auth;
        this.router = router;
        this.loginFailure = false;
        this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            id: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required)
        });
    }
    ngOnInit() {
    }
    login() {
        if (this.loginForm.status === 'VALID') {
            this.auth.checkIfAlreadyExists(this.loginForm.value.id).subscribe((responseData) => {
                if (this.loginForm.value.password === responseData.password) {
                    this.auth.updateLoginStatus(responseData);
                    this.router.navigate(['/']);
                }
                else {
                    this.loginFailure = true;
                }
            }, (error) => {
                if (error.status === 404) {
                    this.loginFailure = true;
                }
            });
        }
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_user_auth_service_service__WEBPACK_IMPORTED_MODULE_2__["UserAuthServiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 8, vars: 2, consts: [[1, "form-container"], [1, "form-inner-container"], [1, "form-horizontal", 3, "formGroup", "ngSubmit"], ["class", "whiteText", 4, "ngIf"], ["type", "email", "placeholder", "EmailId*", "name", "userId", "required", "", "formControlName", "id", 1, "form-control"], ["type", "password", "placeholder", "Password*", "name", "password", "required", "", "formControlName", "password", 1, "form-control"], ["type", "submit", 1, "btn", "btn-info"], [1, "whiteText"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_2_listener($event) { return ctx.login(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, LoginComponent_p_3_Template, 2, 0, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Log In");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.loginForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loginFailure);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _shared_handle_validations_directive__WEBPACK_IMPORTED_MODULE_5__["HandleValidationsDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5sZXNzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login',
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.less']
            }]
    }], function () { return [{ type: _user_auth_service_service__WEBPACK_IMPORTED_MODULE_2__["UserAuthServiceService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/routing/authenticate.guard.ts":
/*!***********************************************!*\
  !*** ./src/app/routing/authenticate.guard.ts ***!
  \***********************************************/
/*! exports provided: AuthenticateGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticateGuard", function() { return AuthenticateGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _user_auth_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../user-auth-service.service */ "./src/app/user-auth-service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




class AuthenticateGuard {
    constructor(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    canActivate(activatedRoute, routerState) {
        if (this.auth.activeUserData) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
    }
}
AuthenticateGuard.ɵfac = function AuthenticateGuard_Factory(t) { return new (t || AuthenticateGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_user_auth_service_service__WEBPACK_IMPORTED_MODULE_1__["UserAuthServiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
AuthenticateGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthenticateGuard, factory: AuthenticateGuard.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthenticateGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                'providedIn': 'root'
            }]
    }], function () { return [{ type: _user_auth_service_service__WEBPACK_IMPORTED_MODULE_1__["UserAuthServiceService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/routing/deactivate.guard.ts":
/*!*********************************************!*\
  !*** ./src/app/routing/deactivate.guard.ts ***!
  \*********************************************/
/*! exports provided: CanDeactivateGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CanDeactivateGuard", function() { return CanDeactivateGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class CanDeactivateGuard {
    canDeactivate(component) {
        return component.canDeactivate ? component.canDeactivate() : true;
    }
}
CanDeactivateGuard.ɵfac = function CanDeactivateGuard_Factory(t) { return new (t || CanDeactivateGuard)(); };
CanDeactivateGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CanDeactivateGuard, factory: CanDeactivateGuard.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CanDeactivateGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/routing/routing.module.ts":
/*!*******************************************!*\
  !*** ./src/app/routing/routing.module.ts ***!
  \*******************************************/
/*! exports provided: RoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoutingModule", function() { return RoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../signup/signup.component */ "./src/app/signup/signup.component.ts");
/* harmony import */ var _view_registration_details_view_registration_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../view-registration-details/view-registration-details.component */ "./src/app/view-registration-details/view-registration-details.component.ts");
/* harmony import */ var _authenticate_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./authenticate.guard */ "./src/app/routing/authenticate.guard.ts");
/* harmony import */ var _deactivate_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./deactivate.guard */ "./src/app/routing/deactivate.guard.ts");









const routes = [
    {
        'path': 'login',
        'component': _login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"]
    },
    {
        'path': 'signup',
        'component': _signup_signup_component__WEBPACK_IMPORTED_MODULE_3__["SignupComponent"]
    },
    {
        'path': 'registrationdetails',
        'component': _view_registration_details_view_registration_details_component__WEBPACK_IMPORTED_MODULE_4__["ViewRegistrationDetailsComponent"],
        'canActivate': [_authenticate_guard__WEBPACK_IMPORTED_MODULE_5__["AuthenticateGuard"]],
        'canDeactivate': [_deactivate_guard__WEBPACK_IMPORTED_MODULE_6__["CanDeactivateGuard"]]
    },
    {
        'path': 'products',
        'loadChildren': () => __webpack_require__.e(/*! import() | products-products-module */ "static/js/products-products-module").then(__webpack_require__.bind(null, /*! ../products/products.module */ "./src/app/products/products.module.ts")).then(m => m.ProductsModule)
    },
    {
        'path': '',
        'redirectTo': '/products/productsummary',
        'pathMatch': 'full'
    },
    {
        'path': '**',
        'redirectTo': '/products/productsummary'
    }
];
class RoutingModule {
}
RoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: RoutingModule });
RoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function RoutingModule_Factory(t) { return new (t || RoutingModule)(); }, imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
                useHash: true
              })
        ],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](RoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [],
                imports: [
                    _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
                        useHash: true
                      })
                ],
                exports: [
                    _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/shared/handle-validations.directive.ts":
/*!********************************************************!*\
  !*** ./src/app/shared/handle-validations.directive.ts ***!
  \********************************************************/
/*! exports provided: HandleValidationsDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HandleValidationsDirective", function() { return HandleValidationsDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _validation_error_msg_validation_error_msg_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./validation-error-msg/validation-error-msg.component */ "./src/app/shared/validation-error-msg/validation-error-msg.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");




const errorMsg = {
    'required': 'Please fill this required field',
    'email': 'Please enter email in correct format',
    'pattern': 'Please enter in correct format'
};
class HandleValidationsDirective {
    constructor(control, vcr, resolver) {
        this.control = control;
        this.vcr = vcr;
        this.resolver = resolver;
    }
    ngDoCheck() {
        let control = this.control;
        if (control && control.touched && control.errors) {
            let errorType = Object.keys(control.errors);
            if (errorType[0] !== 'minlength') {
                this.addErrorMsg(errorMsg[errorType[0]]);
            }
            else {
                this.addErrorMsg('Value should have atleast ' + control.errors.minlength.requiredLength + ' characters');
            }
        }
        else if (control && !control.errors && this.compRef) {
            this.compRef.instance.msg = null;
        }
    }
    addErrorMsg(errorMsg) {
        if (!this.compRef) {
            let compFactory = this.resolver.resolveComponentFactory(_validation_error_msg_validation_error_msg_component__WEBPACK_IMPORTED_MODULE_1__["ValidationErrorMsgComponent"]);
            this.compRef = this.vcr.createComponent(compFactory);
        }
        this.compRef.instance.msg = errorMsg;
    }
}
HandleValidationsDirective.ɵfac = function HandleValidationsDirective_Factory(t) { return new (t || HandleValidationsDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"])); };
HandleValidationsDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: HandleValidationsDirective, selectors: [["", "formControlName", ""]] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HandleValidationsDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[formControlName]'
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _handle_validations_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./handle-validations.directive */ "./src/app/shared/handle-validations.directive.ts");
/* harmony import */ var _validation_error_msg_validation_error_msg_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./validation-error-msg/validation-error-msg.component */ "./src/app/shared/validation-error-msg/validation-error-msg.component.ts");






class SharedModule {
}
SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SharedModule_Factory(t) { return new (t || SharedModule)(); }, imports: [[
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"]
        ],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SharedModule, { declarations: [_handle_validations_directive__WEBPACK_IMPORTED_MODULE_3__["HandleValidationsDirective"],
        _validation_error_msg_validation_error_msg_component__WEBPACK_IMPORTED_MODULE_4__["ValidationErrorMsgComponent"]], imports: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"]], exports: [_handle_validations_directive__WEBPACK_IMPORTED_MODULE_3__["HandleValidationsDirective"],
        _validation_error_msg_validation_error_msg_component__WEBPACK_IMPORTED_MODULE_4__["ValidationErrorMsgComponent"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _handle_validations_directive__WEBPACK_IMPORTED_MODULE_3__["HandleValidationsDirective"],
                    _validation_error_msg_validation_error_msg_component__WEBPACK_IMPORTED_MODULE_4__["ValidationErrorMsgComponent"]
                ],
                imports: [
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"]
                ],
                exports: [
                    _handle_validations_directive__WEBPACK_IMPORTED_MODULE_3__["HandleValidationsDirective"],
                    _validation_error_msg_validation_error_msg_component__WEBPACK_IMPORTED_MODULE_4__["ValidationErrorMsgComponent"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/shared/validation-error-msg/validation-error-msg.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/shared/validation-error-msg/validation-error-msg.component.ts ***!
  \*******************************************************************************/
/*! exports provided: ValidationErrorMsgComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidationErrorMsgComponent", function() { return ValidationErrorMsgComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class ValidationErrorMsgComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
ValidationErrorMsgComponent.ɵfac = function ValidationErrorMsgComponent_Factory(t) { return new (t || ValidationErrorMsgComponent)(); };
ValidationErrorMsgComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ValidationErrorMsgComponent, selectors: [["app-validation-error-msg"]], decls: 2, vars: 1, consts: [[1, "whiteText"]], template: function ValidationErrorMsgComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.msg);
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC92YWxpZGF0aW9uLWVycm9yLW1zZy92YWxpZGF0aW9uLWVycm9yLW1zZy5jb21wb25lbnQubGVzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ValidationErrorMsgComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-validation-error-msg',
                templateUrl: './validation-error-msg.component.html',
                styleUrls: ['./validation-error-msg.component.less']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/signup/signup.component.ts":
/*!********************************************!*\
  !*** ./src/app/signup/signup.component.ts ***!
  \********************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _user_auth_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user-auth-service.service */ "./src/app/user-auth-service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _shared_handle_validations_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/handle-validations.directive */ "./src/app/shared/handle-validations.directive.ts");









function SignupComponent_p_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Email Id already exists");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class SignupComponent {
    constructor(auth, router) {
        this.auth = auth;
        this.router = router;
        this.signUpFailure = false;
        this.signUpForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            "id": new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]),
            "password": new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(8)]),
            "firstName": new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            "lastName": new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            "location": new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            "contactNo": new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(10)])
        });
    }
    ngOnInit() {
    }
    signUp() {
        if (this.signUpForm.status === 'VALID') {
            this.auth.checkIfAlreadyExists(this.signUpForm.value.id).subscribe((resData) => {
                this.signUpFailure = true;
            }, (error) => {
                if (error.status === 404) {
                    this.auth.createUser(this.signUpForm.value).subscribe((resData) => {
                        this.auth.updateLoginStatus(resData);
                        this.router.navigate(['/']);
                    });
                }
                else {
                    this.signUpFailure = true;
                }
            });
        }
    }
}
SignupComponent.ɵfac = function SignupComponent_Factory(t) { return new (t || SignupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_user_auth_service_service__WEBPACK_IMPORTED_MODULE_2__["UserAuthServiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
SignupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SignupComponent, selectors: [["app-signup"]], decls: 12, vars: 2, consts: [[1, "form-container"], [1, "form-inner-container"], [1, "form-horizontal", 3, "formGroup", "ngSubmit"], ["class", "whiteText", 4, "ngIf"], ["type", "email", "placeholder", "EmailId*", "name", "userId", "required", "", "formControlName", "id", 1, "form-control"], ["type", "password", "placeholder", "Password*", "name", "password", "required", "", "formControlName", "password", 1, "form-control"], ["type", "text", "placeholder", "FirstName*", "name", "firstName", "required", "", "formControlName", "firstName", 1, "form-control"], ["type", "text", "placeholder", "LastName*", "name", "lastName", "required", "", "formControlName", "lastName", 1, "form-control"], ["type", "text", "placeholder", "Location*", "name", "location", "required", "", "formControlName", "location", 1, "form-control"], ["type", "tel", "placeholder", "Mobile Number*", "name", "contactNo", "required", "", "formControlName", "contactNo", 1, "form-control"], ["type", "submit", 1, "btn", "btn-info"], [1, "whiteText"]], template: function SignupComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function SignupComponent_Template_form_ngSubmit_2_listener($event) { return ctx.signUp(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SignupComponent_p_3_Template, 2, 0, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Sign up");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.signUpForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.signUpFailure);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _shared_handle_validations_directive__WEBPACK_IMPORTED_MODULE_5__["HandleValidationsDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NpZ251cC9zaWdudXAuY29tcG9uZW50Lmxlc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SignupComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-signup',
                templateUrl: './signup.component.html',
                styleUrls: ['./signup.component.less']
            }]
    }], function () { return [{ type: _user_auth_service_service__WEBPACK_IMPORTED_MODULE_2__["UserAuthServiceService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/user-auth-service.service.ts":
/*!**********************************************!*\
  !*** ./src/app/user-auth-service.service.ts ***!
  \**********************************************/
/*! exports provided: UserAuthServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserAuthServiceService", function() { return UserAuthServiceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");




class UserAuthServiceService {
    constructor(http) {
        this.http = http;
        this.userDetails = [
            {
                "id": "aaa@aaa.aa",
                "password": "aaaaaaaa",
                "firstName": "aaa",
                "lastName": "lastname",
                "location": "delhi",
                "contactNo": "1111222222"
            }
        ];
        this.activeUserData = null;
    }
    createUser(userDetail) {
        this.userDetails.push(userDetail);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(userDetail);
    }
    checkIfAlreadyExists(id) {
        var userAccount = [];
        userAccount = this.userDetails.map(val => {
            if (val.id === id) {
                return val;
            }
        });
        if (userAccount[0]) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(userAccount[0]);
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])({});
    }
    updateUser(userdetail) {
        this.userDetails = this.userDetails.map((val, index) => {
            if (val.id === userdetail.id) {
                this.userDetails[index] = userdetail;
            }
            return val;
        });
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(userdetail);
    }
    updateLoginStatus(userData) {
        this.activeUserData = userData;
    }
    logout() {
        this.activeUserData = null;
    }
}
UserAuthServiceService.ɵfac = function UserAuthServiceService_Factory(t) { return new (t || UserAuthServiceService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
UserAuthServiceService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UserAuthServiceService, factory: UserAuthServiceService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserAuthServiceService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/view-registration-details/view-registration-details.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/view-registration-details/view-registration-details.component.ts ***!
  \**********************************************************************************/
/*! exports provided: ViewRegistrationDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewRegistrationDetailsComponent", function() { return ViewRegistrationDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _user_auth_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user-auth-service.service */ "./src/app/user-auth-service.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _shared_handle_validations_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/handle-validations.directive */ "./src/app/shared/handle-validations.directive.ts");








function ViewRegistrationDetailsComponent_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Details updated ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ViewRegistrationDetailsComponent_button_10_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ViewRegistrationDetailsComponent_button_10_Template_button_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.edit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ViewRegistrationDetailsComponent_button_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Update");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class ViewRegistrationDetailsComponent {
    constructor(auth) {
        this.auth = auth;
        this.isEdit = false;
        this.isUpdated = false;
        this.updateResgitrationDetailsForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            "id": new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](auth.activeUserData.id, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]),
            "password": new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](auth.activeUserData.password, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(8)]),
            "firstName": new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](auth.activeUserData.firstName, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            "lastName": new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](auth.activeUserData.lastName, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            "location": new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](auth.activeUserData.location, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            "contactNo": new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](auth.activeUserData.contactNo, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(10)])
        });
    }
    ngOnInit() {
    }
    edit() {
        this.isEdit = true;
        this.isUpdated = false;
    }
    submit() {
        if (this.updateResgitrationDetailsForm.status === 'VALID') {
            this.auth.updateUser(this.updateResgitrationDetailsForm.value).subscribe((resData) => {
                this.auth.updateLoginStatus(resData);
                this.update();
            });
        }
    }
    update() {
        this.isUpdated = true;
        this.isEdit = false;
    }
    canDeactivate() {
        if (this.isEdit && !this.isUpdated) {
            return window.confirm('If you proceed, changes will not be saved.Continue ? ');
        }
        else {
            return true;
        }
    }
}
ViewRegistrationDetailsComponent.ɵfac = function ViewRegistrationDetailsComponent_Factory(t) { return new (t || ViewRegistrationDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_user_auth_service_service__WEBPACK_IMPORTED_MODULE_2__["UserAuthServiceService"])); };
ViewRegistrationDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ViewRegistrationDetailsComponent, selectors: [["app-view-registration-details"]], decls: 12, vars: 9, consts: [[1, "form-container"], [1, "form-inner-container"], [1, "form-horizontal", 3, "formGroup", "ngSubmit"], ["class", "whiteText", 4, "ngIf"], ["type", "email", "placeholder", "EmailId*", "name", "userId", "required", "", "readonly", "", "formControlName", "id", 1, "form-control"], ["type", "password", "placeholder", "Password*", "name", "password", "required", "", "formControlName", "password", 1, "form-control"], ["type", "text", "placeholder", "FirstName*", "name", "firstName", "required", "", "formControlName", "firstName", 1, "form-control"], ["type", "text", "placeholder", "LastName*", "name", "lastName", "required", "", "formControlName", "lastName", 1, "form-control"], ["type", "text", "placeholder", "Location*", "name", "location", "required", "", "formControlName", "location", 1, "form-control"], ["type", "tel", "placeholder", "Mobile Number*", "name", "contactNo", "required", "", "formControlName", "contactNo", 1, "form-control"], ["type", "button", "class", "btn btn-info", 3, "click", 4, "ngIf"], ["type", "submit", "class", "btn btn-info", 4, "ngIf"], [1, "whiteText"], ["type", "button", 1, "btn", "btn-info", 3, "click"], ["type", "submit", 1, "btn", "btn-info"]], template: function ViewRegistrationDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ViewRegistrationDetailsComponent_Template_form_ngSubmit_2_listener($event) { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ViewRegistrationDetailsComponent_span_3_Template, 2, 0, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ViewRegistrationDetailsComponent_button_10_Template, 2, 0, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ViewRegistrationDetailsComponent_button_11_Template, 2, 0, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.updateResgitrationDetailsForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isUpdated);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("readonly", ctx.isEdit ? null : true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("readonly", ctx.isEdit ? null : true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("readonly", ctx.isEdit ? null : true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("readonly", ctx.isEdit ? null : true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("readonly", ctx.isEdit ? null : true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isEdit);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isEdit);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _shared_handle_validations_directive__WEBPACK_IMPORTED_MODULE_4__["HandleValidationsDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXctcmVnaXN0cmF0aW9uLWRldGFpbHMvdmlldy1yZWdpc3RyYXRpb24tZGV0YWlscy5jb21wb25lbnQubGVzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ViewRegistrationDetailsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-view-registration-details',
                templateUrl: './view-registration-details.component.html',
                styleUrls: ['./view-registration-details.component.less']
            }]
    }], function () { return [{ type: _user_auth_service_service__WEBPACK_IMPORTED_MODULE_2__["UserAuthServiceService"] }]; }, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\wipro_FED\Angular\setup\my-app\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map