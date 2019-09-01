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

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Toolbar -->\n<div class=\"toolbar\" role=\"banner\">\n    <img width=\"60\" alt=\"Angular Logo\" src=\"../assets/icons/icon-512x512.png\"\n    />\n    Minha Agenda\n</div>\n<router-outlet></router-outlet>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/header/Header.components.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/header/Header.components.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"jumb\"></div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/loading/Loading.components.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/loading/Loading.components.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div  *ngIf=\"show\">Loading...</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/criarconta/Account.page.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/criarconta/Account.page.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n\t<div class=\"card o-hidden border-0 shadow-lg my-3\">\n\t\t<div class=\"card-body p-9\">\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-lg-7\">\n\t\t\t\t\t<div class=\"p-6\">\n\t\t\t\t\t\t<div class=\"text-center\">\n\t\t\t\t\t\t\t<h1 class=\"h4 text-gray-900 mb-4\">Criar nova conta!</h1>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<form [formGroup]=\"accountForm\">\n\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t<input type=\"email\" class=\"form-control form-control-user\" formControlName=\"email\"\n\t\t\t\t\t\t\t\t\tid=\"exampleInputEmail\" placeholder=\"E-mail\">\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"form-group row\">\n\t\t\t\t\t\t\t\t<div class=\"col-sm-6 mb-3 mb-sm-0\">\n\t\t\t\t\t\t\t\t\t<input type=\"password\" class=\"form-control form-control-user\"\n\t\t\t\t\t\t\t\t\t\tformControlName=\"password\" id=\"exampleInputPassword\" placeholder=\"Senha\">\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-sm-6\">\n\t\t\t\t\t\t\t\t\t<input type=\"password\" class=\"form-control form-control-user\"\n\t\t\t\t\t\t\t\t\t\tformControlName=\"repeat\" id=\"exampleRepeatPassword\"\n\t\t\t\t\t\t\t\t\t\tplaceholder=\"confirmar Senha\">\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"text-center\">\n\t\t\t\t\t\t\t\t<label class=\"error\">{{errorMessage}}</label>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-primary btn-block\"\n\t\t\t\t\t\t\t\t(click)=\"tryCreateAccount(accountForm.value)\">Cadastar <i class=\"fa fa-check\" aria-hidden=\"true\"></i></button>\n\t\t\t\t\t\t\t<hr>\n\t\t\t\t\t\t</form>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/Login.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/Login.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n\t<div class=\"row justify-content-center\">\n\t\t<div class=\"col-xl-10 col-lg-12 col-md-9\">\n\t\t\t<div class=\"card o-hidden border-0 shadow-lg my-5\">\n\t\t\t\t<div class=\"card-body p-0\">\n\t\t\t\t\t<div class=\"row\">\t\t\t\t\t\t\n\t\t\t\t\t\t<div class=\"col-lg-12\">\n\t\t\t\t\t\t\t<div class=\"p-5\">\n\t\t\t\t\t\t\t\t<div class=\"text-center\">\n\t\t\t\t\t\t\t\t\t<h1 class=\"h4 text-gray-900 mb-4\">Faça seu login</h1>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<form [formGroup]=\"loginForm\">\n\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t<input type=\"email\" class=\"form-control form-control-user col-lg-6\"\n\t\t\t\t\t\t\t\t\t\t\tformControlName=\"email\" id=\"exampleInputEmail\" aria-describedby=\"emailHelp\"\n\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Entre com seu email...\">\n\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t<input type=\"password\" class=\"form-control form-control-user col-lg-6\"\n\t\t\t\t\t\t\t\t\t\t\tid=\"exampleInputPassword\" formControlName=\"password\" placeholder=\"Sua Senha\">\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"text-center\">\n\t\t\t\t\t\t\t\t\t\t<label class=\"error\">{{errorMessage}}</label>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-primary btn-block col-lg-6\"\n\t\t\t\t\t\t\t\t\t\t(click)=\"verificaLogin(loginForm.value)\">Entrar</button>\n\t\t\t\t\t\t\t\t\t<hr>\n\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t<hr>\n\t\t\t\t\t\t\t\t\t<div class=\"text-center\">\n\t\t\t\t\t\t\t\t\t\t<a class=\"small\" [routerLink]=\"['/criarconta']\">Cadastre-se!</a>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</form>\n\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/page404/Page404.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/page404/Page404.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<div class=\"banner\">  \n    <img src=\"../../../assets/icons/default404.gif\">\n</div> \n   \n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/user/User.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/user/User.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\n    <br>\n    <legend>Registrar novo Ramal</legend>\n    <form [formGroup]=\"userForm\" (ngSubmit)=\"onSubmit()\">\n        <div class=\"form-row\">\n            <div class=\"form-group col-md-6\">\n                <label for=\"cpfHelp\">Nome</label>\n                <input type=\"text\" class=\"form-control\" id=\"nameHelp\" aria-describedby=\"nameHelp\" name=\"nome\" placeholder=\"Nome\" formControlName=\"nome\">\n                <small id=\"nomeHelp\" class=\"form-text text-muted\" *ngIf=\"userForm.controls.nome.invalid && userForm.controls.nome.touched\">Cadastrar um nome</small>\n            </div>\n            <div class=\"form-group col-md-6\">\n                <label for=\"cpfHelp\">CPF</label>\n                <input type=\"text\" class=\"form-control\" id=\"cpfHelp\" mask=\"000.000.000-00\" aria-describedby=\"cpfHelp\" name=\"cpf\" placeholder=\"CPF\" formControlName=\"cpf\">\n                <small id=\"cpfHelp\" class=\"form-text text-muted\" *ngIf=\"userForm.controls.cpf.invalid && userForm.controls.cpf.touched\">Cadastrar o cpf</small>\n            </div>\n        </div>\n        <br>\n        <div class=\"form-row\">\n            <div class=\"form-group col-md-6\">\n                <label for=\"emailHelp\">Email</label>\n                <input type=\"email\" class=\"form-control\" id=\"emailHelp\" aria-describedby=\"emailHelp\" name=\"email\" placeholder=\"E-mail\" formControlName=\"email\">\n                <small id=\"emailHelp\" class=\"form-text text-muted\" *ngIf=\"userForm.controls.email.invalid && userForm.controls.email.touched\">Cadastrar um email</small>\n            </div>\n            <div class=\"form-group col-md-3\">\n                <label for=\"phoneHelp\">Ramal</label>\n                <input type=\"tel\" class=\"form-control\"  id=\"ramalHelp\" aria-describedby=\"phoneHelp\" name=\"ramal\" placeholder=\"Ramal\" formControlName=\"ramal\">\n                <small id=\"ramalHelp\" class=\"form-text text-muted\" *ngIf=\"userForm.controls.ramal.invalid && userForm.controls.ramal.touched\">Cadastrar um telefone</small>\n            </div>\n            \n        </div>\n       \n       \n        <legend>Departamento</legend>\n        <div class=\"form-group\">\n            <label for=\"inputAddress\">Departamento</label>\n            <input type=\"text\" class=\"form-control col-md-6\" id=\"inputDepartamento\" aria-describedby=\"inputDepartamento\" name=\"departamento\" placeholder=\"Departamento\" formControlName=\"departamento\">\n            <small id=\"inputDepartamento\" class=\"form-text text-muted\" *ngIf=\"userForm.controls.departamento.invalid && userForm.controls.departamento.touched\">Departamento\n\t\t\t\tobligatory</small>\n        </div>\n\n\n\n        <div class=\"text-center\">\n            <button type=\"button\" class=\"btn btn-danger\" style=\"margin: 0px 15px 0px 0px; letter-spacing: 5px\" (click)=\"onBack()\">\n\t\t\t\t<span><i class=\"fa fa-arrow-left\" aria-hidden=\"true\"></i></span>\n\t\t\t</button>\n            <button type=\"submit\" class=\"btn btn-primary\" style=\"margin: 0px 15px 0px 0px; letter-spacing: 5px\" [disabled]=\"!userForm.valid\">\n\t\t\t\t<span *ngIf=\"userId === null\">Cadastrar <i class=\"fa fa-address-book-o\" aria-hidden=\"true\"></i> </span>\n\t\t\t\t<span *ngIf=\"userId != null\">Atualizar <i class=\"fa fa-refresh\" aria-hidden=\"true\"></i> </span>\n\t\t\t</button>\n            <button *ngIf=\"userId != null\" type=\"button\" class=\"btn btn-danger\" style=\"letter-spacing: 5px\" (click)=\"onRemove()\" [disabled]=\"!userForm.valid\">\n\t\t\t\t<span>Remover <i class=\"fa fa-trash\" aria-hidden=\"true\"></i> </span>\n\t\t\t</button>\n        </div>\n    </form>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/userList/UserList.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/userList/UserList.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"table-responsive-sm\">\n\t\t<br>\n\t\t<table class=\"table table-hover table-bordered\">\n    <thead>\n        <tr>\n            <th colspan=\"5\">\n                <div class=\"form-group\">\n                    <label for=\"inputFilter\">Buscar</label>\n                    <input type=\"text\" class=\"form-control col-md-3\" id=\"filtroHelp\" type=\"text\" name=\"filter\" (keyup)=\"setFilterBy($event)\">\n                    \n                </div>\n                <div class=\"form-group\">\n\n                       \n                    <button type=\"button\" class=\"btn btn-primary espacador\" (click)=\"setOrderBy('asc')\"> <i class=\"fa fa-sort-alpha-asc\" aria-hidden=\"true\"></i></button>\n                    \n                    <button type=\"button\" class=\"btn btn-primary espacador\" (click)=\"setOrderBy('desc')\"><i class=\"fa fa-sort-alpha-desc\" aria-hidden=\"true\"></i></button>\n                </div>\n            </th>\n\t\t</tr>\n\t</thead>\t\n\t<thead>\n        <tr>\n            <th scope=\"col\">Nome</th>\n            <th scope=\"col\">E-mail</th>\n            <th scope=\"col\">Departamento</th>\n            <th scope=\"col\">Ramal</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr class=\"table table-hover\" *ngFor=\"let usuario of items | filter: filterBy | order: orderBy\">\n\n            <td scope=\"row\"><a href=\"#\" [routerLink]=\"['/user', usuario.id ]\">\n                {{usuario.nome}}\n            </a></td>\n            \n            <td scope=\"row\">{{usuario.email}}</td>\n            <td scope=\"row\">{{usuario.departamento}}</td>\n            <td scope=\"row\">{{usuario.ramal}}</td>\n        </tr>\n        \n    </tbody>\n    <tfoot>\n   \n    </tfoot>\n</table>\n<button class=\"btn btn-success\" [routerLink]=\"['/user' ]\">\n    Adicionar <i class=\"fa fa-plus\" aria-hidden=\"true\"></i>\n</button>\n</div>");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _pages_userList_UserList_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/userList/UserList.page */ "./src/app/pages/userList/UserList.page.ts");
/* harmony import */ var _pages_user_User_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/user/User.page */ "./src/app/pages/user/User.page.ts");
/* harmony import */ var _pages_login_Login_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/login/Login.page */ "./src/app/pages/login/Login.page.ts");
/* harmony import */ var _services_Auth_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/Auth.guard */ "./src/app/services/Auth.guard.ts");
/* harmony import */ var _pages_page404_Page404_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/page404/Page404.page */ "./src/app/pages/page404/Page404.page.ts");
/* harmony import */ var _pages_criarconta_Account_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/criarconta/Account.page */ "./src/app/pages/criarconta/Account.page.ts");









const routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: _pages_login_Login_page__WEBPACK_IMPORTED_MODULE_5__["LoginPage"] },
    { path: 'criarconta', component: _pages_criarconta_Account_page__WEBPACK_IMPORTED_MODULE_8__["AccountPage"] },
    { path: 'users', component: _pages_userList_UserList_page__WEBPACK_IMPORTED_MODULE_3__["UserListPage"], canActivate: [_services_Auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]] },
    { path: 'user', component: _pages_user_User_page__WEBPACK_IMPORTED_MODULE_4__["UserPage"], canActivate: [_services_Auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]] },
    { path: 'user/:id', component: _pages_user_User_page__WEBPACK_IMPORTED_MODULE_4__["UserPage"], canActivate: [_services_Auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]] },
    { path: '**', component: _pages_page404_Page404_page__WEBPACK_IMPORTED_MODULE_7__["Page404"] },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n    font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n    font-size: 14px;\n    color: #333;\n    box-sizing: border-box;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n    margin: 8px 0;\n}\n\np {\n    margin: 0;\n}\n\n.spacer {\n    flex: 1;\n}\n\n.toolbar {\n    height: 60px;\n    margin: -8px;\n    display: flex;\n    align-items: center;\n    background-color: #786c83;\n    color: white;\n    font-weight: 600;\n}\n\n.toolbar img {\n    margin: 0 16px;\n}\n\n.toolbar #twitter-logo {\n    height: 40px;\n    margin: 0 16px;\n}\n\n.toolbar #twitter-logo:hover {\n    opacity: 0.8;\n}\n\n.content {\n    display: flex;\n    margin: 32px auto;\n    padding: 0 16px;\n    max-width: 960px;\n    flex-direction: column;\n    align-items: center;\n}\n\nsvg.material-icons {\n    height: 24px;\n    width: auto;\n}\n\nsvg.material-icons:not(:last-child) {\n    margin-right: 8px;\n}\n\n.card svg.material-icons path {\n    fill: #888;\n}\n\n.card-container {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n    margin-top: 16px;\n}\n\n.card {\n    border-radius: 4px;\n    border: 1px solid #eee;\n    background-color: #fafafa;\n    height: 40px;\n    width: 200px;\n    margin: 0 8px 16px;\n    padding: 16px;\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    align-items: center;\n    transition: all 0.2s ease-in-out;\n    line-height: 24px;\n}\n\n.card-container .card:not(:last-child) {\n    margin-right: 0;\n}\n\n.card.card-small {\n    height: 16px;\n    width: 168px;\n}\n\n.card-container .card:not(.highlight-card) {\n    cursor: pointer;\n}\n\n.card-container .card:not(.highlight-card):hover {\n    transform: translateY(-3px);\n    box-shadow: 0 4px 17px rgba(black, 0.35);\n}\n\n.card-container .card:not(.highlight-card):hover .material-icons path {\n    fill: rgb(105, 103, 103);\n}\n\n.card.highlight-card {\n    background-color: #1976d2;\n    color: white;\n    font-weight: 600;\n    border: none;\n    width: auto;\n    min-width: 30%;\n    position: relative;\n}\n\n.card.card.highlight-card span {\n    margin-left: 60px;\n}\n\nsvg#rocket {\n    width: 80px;\n    position: absolute;\n    left: -10px;\n    top: -24px;\n}\n\nsvg#rocket-smoke {\n    height: 100vh;\n    position: absolute;\n    top: 10px;\n    right: 180px;\n    z-index: -10;\n}\n\na,\na:visited,\na:hover {\n    color: #1976d2;\n    text-decoration: none;\n}\n\na:hover {\n    color: #125699;\n}\n\n.terminal {\n    position: relative;\n    width: 80%;\n    max-width: 600px;\n    border-radius: 6px;\n    padding-top: 45px;\n    margin-top: 8px;\n    overflow: hidden;\n    background-color: rgb(15, 15, 16);\n}\n\n.terminal::before {\n    content: \"\\2022 \\2022 \\2022\";\n    position: absolute;\n    top: 0;\n    left: 0;\n    height: 4px;\n    background: rgb(58, 58, 58);\n    color: #c2c3c4;\n    width: 100%;\n    font-size: 2rem;\n    line-height: 0;\n    padding: 14px 0;\n    text-indent: 4px;\n}\n\n.terminal pre {\n    font-family: SFMono-Regular, Consolas, Liberation Mono, Menlo, monospace;\n    color: white;\n    padding: 0 1rem 1rem;\n    margin: 0;\n}\n\n.circle-link {\n    height: 40px;\n    width: 40px;\n    border-radius: 40px;\n    margin: 8px;\n    background-color: white;\n    border: 1px solid #eeeeee;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    cursor: pointer;\n    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n    transition: 1s ease-out;\n}\n\n.circle-link:hover {\n    transform: translateY(-0.25rem);\n    box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);\n}\n\nfooter {\n    margin-top: 8px;\n    display: flex;\n    align-items: center;\n    line-height: 20px;\n}\n\nfooter a {\n    display: flex;\n    align-items: center;\n}\n\n.github-star-badge {\n    color: #24292e;\n    display: flex;\n    align-items: center;\n    font-size: 12px;\n    padding: 3px 10px;\n    border: 1px solid rgba(27, 31, 35, .2);\n    border-radius: 3px;\n    background-image: linear-gradient(-180deg, #fafbfc, #eff3f6 90%);\n    margin-left: 4px;\n    font-weight: 600;\n    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol;\n}\n\n.github-star-badge:hover {\n    background-image: linear-gradient(-180deg, #f0f3f6, #e6ebf1 90%);\n    border-color: rgba(27, 31, 35, .35);\n    background-position: -.5em;\n}\n\n.github-star-badge .material-icons {\n    height: 16px;\n    width: 16px;\n    margin-right: 4px;\n}\n\nsvg#clouds {\n    position: fixed;\n    bottom: -160px;\n    left: -230px;\n    z-index: -10;\n    width: 1920px;\n}\n\n/* Responsive Styles */\n\n@media screen and (max-width: 767px) {\n    .card-container>*:not(.circle-link),\n    .terminal {\n        width: 100%;\n    }\n    .card:not(.highlight-card) {\n        height: 16px;\n        margin: 8px 0;\n    }\n    .card.highlight-card span {\n        margin-left: 72px;\n    }\n    svg#rocket-smoke {\n        right: 120px;\n        transform: rotate(-5deg);\n    }\n}\n\n@media screen and (max-width: 575px) {\n    svg#rocket-smoke {\n        display: none;\n        visibility: hidden;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSwwSkFBMEo7SUFDMUosZUFBZTtJQUNmLFdBQVc7SUFDWCxzQkFBc0I7SUFDdEIsbUNBQW1DO0lBQ25DLGtDQUFrQztBQUN0Qzs7QUFFQTs7Ozs7O0lBTUksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLFNBQVM7QUFDYjs7QUFFQTtJQUNJLE9BQU87QUFDWDs7QUFFQTtJQUNJLFlBQVk7SUFDWixZQUFZO0lBQ1osYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix5QkFBeUI7SUFDekIsWUFBWTtJQUNaLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osY0FBYztBQUNsQjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsc0JBQXNCO0lBQ3RCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsZUFBZTtJQUNmLHVCQUF1QjtJQUN2QixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsc0JBQXNCO0lBQ3RCLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGdDQUFnQztJQUNoQyxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksMkJBQTJCO0lBQzNCLHdDQUF3QztBQUM1Qzs7QUFFQTtJQUNJLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixXQUFXO0lBQ1gsY0FBYztJQUNkLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsU0FBUztJQUNULFlBQVk7SUFDWixZQUFZO0FBQ2hCOztBQUVBOzs7SUFHSSxjQUFjO0lBQ2QscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixpQ0FBaUM7QUFDckM7O0FBRUE7SUFDSSw0QkFBNEI7SUFDNUIsa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixPQUFPO0lBQ1AsV0FBVztJQUNYLDJCQUEyQjtJQUMzQixjQUFjO0lBQ2QsV0FBVztJQUNYLGVBQWU7SUFDZixjQUFjO0lBQ2QsZUFBZTtJQUNmLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLHdFQUF3RTtJQUN4RSxZQUFZO0lBQ1osb0JBQW9CO0lBQ3BCLFNBQVM7QUFDYjs7QUFFQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCx1QkFBdUI7SUFDdkIseUJBQXlCO0lBQ3pCLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZix3RUFBd0U7SUFDeEUsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksK0JBQStCO0lBQy9CLDJDQUEyQztBQUMvQzs7QUFFQTtJQUNJLGVBQWU7SUFDZixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLHNDQUFzQztJQUN0QyxrQkFBa0I7SUFDbEIsZ0VBQWdFO0lBQ2hFLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsMElBQTBJO0FBQzlJOztBQUVBO0lBQ0ksZ0VBQWdFO0lBQ2hFLG1DQUFtQztJQUNuQywwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixjQUFjO0lBQ2QsWUFBWTtJQUNaLFlBQVk7SUFDWixhQUFhO0FBQ2pCOztBQUdBLHNCQUFzQjs7QUFFdEI7SUFDSTs7UUFFSSxXQUFXO0lBQ2Y7SUFDQTtRQUNJLFlBQVk7UUFDWixhQUFhO0lBQ2pCO0lBQ0E7UUFDSSxpQkFBaUI7SUFDckI7SUFDQTtRQUNJLFlBQVk7UUFDWix3QkFBd0I7SUFDNUI7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksYUFBYTtRQUNiLGtCQUFrQjtJQUN0QjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXCJTZWdvZSBVSVwiLCBSb2JvdG8sIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWYsIFwiQXBwbGUgQ29sb3IgRW1vamlcIiwgXCJTZWdvZSBVSSBFbW9qaVwiLCBcIlNlZ29lIFVJIFN5bWJvbFwiO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBjb2xvcjogIzMzMztcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAgIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XG59XG5cbmgxLFxuaDIsXG5oMyxcbmg0LFxuaDUsXG5oNiB7XG4gICAgbWFyZ2luOiA4cHggMDtcbn1cblxucCB7XG4gICAgbWFyZ2luOiAwO1xufVxuXG4uc3BhY2VyIHtcbiAgICBmbGV4OiAxO1xufVxuXG4udG9vbGJhciB7XG4gICAgaGVpZ2h0OiA2MHB4O1xuICAgIG1hcmdpbjogLThweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzc4NmM4MztcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLnRvb2xiYXIgaW1nIHtcbiAgICBtYXJnaW46IDAgMTZweDtcbn1cblxuLnRvb2xiYXIgI3R3aXR0ZXItbG9nbyB7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIG1hcmdpbjogMCAxNnB4O1xufVxuXG4udG9vbGJhciAjdHdpdHRlci1sb2dvOmhvdmVyIHtcbiAgICBvcGFjaXR5OiAwLjg7XG59XG5cbi5jb250ZW50IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIG1hcmdpbjogMzJweCBhdXRvO1xuICAgIHBhZGRpbmc6IDAgMTZweDtcbiAgICBtYXgtd2lkdGg6IDk2MHB4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuc3ZnLm1hdGVyaWFsLWljb25zIHtcbiAgICBoZWlnaHQ6IDI0cHg7XG4gICAgd2lkdGg6IGF1dG87XG59XG5cbnN2Zy5tYXRlcmlhbC1pY29uczpub3QoOmxhc3QtY2hpbGQpIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDhweDtcbn1cblxuLmNhcmQgc3ZnLm1hdGVyaWFsLWljb25zIHBhdGgge1xuICAgIGZpbGw6ICM4ODg7XG59XG5cbi5jYXJkLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgbWFyZ2luLXRvcDogMTZweDtcbn1cblxuLmNhcmQge1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZWVlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmYWZhZmE7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIHdpZHRoOiAyMDBweDtcbiAgICBtYXJnaW46IDAgOHB4IDE2cHg7XG4gICAgcGFkZGluZzogMTZweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcbiAgICBsaW5lLWhlaWdodDogMjRweDtcbn1cblxuLmNhcmQtY29udGFpbmVyIC5jYXJkOm5vdCg6bGFzdC1jaGlsZCkge1xuICAgIG1hcmdpbi1yaWdodDogMDtcbn1cblxuLmNhcmQuY2FyZC1zbWFsbCB7XG4gICAgaGVpZ2h0OiAxNnB4O1xuICAgIHdpZHRoOiAxNjhweDtcbn1cblxuLmNhcmQtY29udGFpbmVyIC5jYXJkOm5vdCguaGlnaGxpZ2h0LWNhcmQpIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5jYXJkLWNvbnRhaW5lciAuY2FyZDpub3QoLmhpZ2hsaWdodC1jYXJkKTpob3ZlciB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zcHgpO1xuICAgIGJveC1zaGFkb3c6IDAgNHB4IDE3cHggcmdiYShibGFjaywgMC4zNSk7XG59XG5cbi5jYXJkLWNvbnRhaW5lciAuY2FyZDpub3QoLmhpZ2hsaWdodC1jYXJkKTpob3ZlciAubWF0ZXJpYWwtaWNvbnMgcGF0aCB7XG4gICAgZmlsbDogcmdiKDEwNSwgMTAzLCAxMDMpO1xufVxuXG4uY2FyZC5oaWdobGlnaHQtY2FyZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzE5NzZkMjtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgd2lkdGg6IGF1dG87XG4gICAgbWluLXdpZHRoOiAzMCU7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uY2FyZC5jYXJkLmhpZ2hsaWdodC1jYXJkIHNwYW4ge1xuICAgIG1hcmdpbi1sZWZ0OiA2MHB4O1xufVxuXG5zdmcjcm9ja2V0IHtcbiAgICB3aWR0aDogODBweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogLTEwcHg7XG4gICAgdG9wOiAtMjRweDtcbn1cblxuc3ZnI3JvY2tldC1zbW9rZSB7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAxMHB4O1xuICAgIHJpZ2h0OiAxODBweDtcbiAgICB6LWluZGV4OiAtMTA7XG59XG5cbmEsXG5hOnZpc2l0ZWQsXG5hOmhvdmVyIHtcbiAgICBjb2xvcjogIzE5NzZkMjtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbmE6aG92ZXIge1xuICAgIGNvbG9yOiAjMTI1Njk5O1xufVxuXG4udGVybWluYWwge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB3aWR0aDogODAlO1xuICAgIG1heC13aWR0aDogNjAwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgIHBhZGRpbmctdG9wOiA0NXB4O1xuICAgIG1hcmdpbi10b3A6IDhweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNSwgMTUsIDE2KTtcbn1cblxuLnRlcm1pbmFsOjpiZWZvcmUge1xuICAgIGNvbnRlbnQ6IFwiXFwyMDIyIFxcMjAyMiBcXDIwMjJcIjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgaGVpZ2h0OiA0cHg7XG4gICAgYmFja2dyb3VuZDogcmdiKDU4LCA1OCwgNTgpO1xuICAgIGNvbG9yOiAjYzJjM2M0O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICBsaW5lLWhlaWdodDogMDtcbiAgICBwYWRkaW5nOiAxNHB4IDA7XG4gICAgdGV4dC1pbmRlbnQ6IDRweDtcbn1cblxuLnRlcm1pbmFsIHByZSB7XG4gICAgZm9udC1mYW1pbHk6IFNGTW9uby1SZWd1bGFyLCBDb25zb2xhcywgTGliZXJhdGlvbiBNb25vLCBNZW5sbywgbW9ub3NwYWNlO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBwYWRkaW5nOiAwIDFyZW0gMXJlbTtcbiAgICBtYXJnaW46IDA7XG59XG5cbi5jaXJjbGUtbGluayB7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIHdpZHRoOiA0MHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDQwcHg7XG4gICAgbWFyZ2luOiA4cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2VlZWVlZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGJveC1zaGFkb3c6IDAgMXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMTIpLCAwIDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjI0KTtcbiAgICB0cmFuc2l0aW9uOiAxcyBlYXNlLW91dDtcbn1cblxuLmNpcmNsZS1saW5rOmhvdmVyIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTAuMjVyZW0pO1xuICAgIGJveC1zaGFkb3c6IDBweCAzcHggMTVweCByZ2JhKDAsIDAsIDAsIDAuMik7XG59XG5cbmZvb3RlciB7XG4gICAgbWFyZ2luLXRvcDogOHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBsaW5lLWhlaWdodDogMjBweDtcbn1cblxuZm9vdGVyIGEge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmdpdGh1Yi1zdGFyLWJhZGdlIHtcbiAgICBjb2xvcjogIzI0MjkyZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIHBhZGRpbmc6IDNweCAxMHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjcsIDMxLCAzNSwgLjIpO1xuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoLTE4MGRlZywgI2ZhZmJmYywgI2VmZjNmNiA5MCUpO1xuICAgIG1hcmdpbi1sZWZ0OiA0cHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBTZWdvZSBVSSwgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZiwgQXBwbGUgQ29sb3IgRW1vamksIFNlZ29lIFVJIEVtb2ppLCBTZWdvZSBVSSBTeW1ib2w7XG59XG5cbi5naXRodWItc3Rhci1iYWRnZTpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KC0xODBkZWcsICNmMGYzZjYsICNlNmViZjEgOTAlKTtcbiAgICBib3JkZXItY29sb3I6IHJnYmEoMjcsIDMxLCAzNSwgLjM1KTtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtLjVlbTtcbn1cblxuLmdpdGh1Yi1zdGFyLWJhZGdlIC5tYXRlcmlhbC1pY29ucyB7XG4gICAgaGVpZ2h0OiAxNnB4O1xuICAgIHdpZHRoOiAxNnB4O1xuICAgIG1hcmdpbi1yaWdodDogNHB4O1xufVxuXG5zdmcjY2xvdWRzIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgYm90dG9tOiAtMTYwcHg7XG4gICAgbGVmdDogLTIzMHB4O1xuICAgIHotaW5kZXg6IC0xMDtcbiAgICB3aWR0aDogMTkyMHB4O1xufVxuXG5cbi8qIFJlc3BvbnNpdmUgU3R5bGVzICovXG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gICAgLmNhcmQtY29udGFpbmVyPio6bm90KC5jaXJjbGUtbGluayksXG4gICAgLnRlcm1pbmFsIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuICAgIC5jYXJkOm5vdCguaGlnaGxpZ2h0LWNhcmQpIHtcbiAgICAgICAgaGVpZ2h0OiAxNnB4O1xuICAgICAgICBtYXJnaW46IDhweCAwO1xuICAgIH1cbiAgICAuY2FyZC5oaWdobGlnaHQtY2FyZCBzcGFuIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDcycHg7XG4gICAgfVxuICAgIHN2ZyNyb2NrZXQtc21va2Uge1xuICAgICAgICByaWdodDogMTIwcHg7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC01ZGVnKTtcbiAgICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU3NXB4KSB7XG4gICAgc3ZnI3JvY2tldC1zbW9rZSB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICB9XG59Il19 */");

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'Trabalho Angular 17Mob';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: options, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "options", function() { return options; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/es2015/index.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/es2015/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pipes/filter.pipe */ "./src/app/pipes/filter.pipe.ts");
/* harmony import */ var _pipes_order_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pipes/order.pipe */ "./src/app/pipes/order.pipe.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_header_Header_components__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/header/Header.components */ "./src/app/components/header/Header.components.ts");
/* harmony import */ var _components_loading_Loading_components__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/loading/Loading.components */ "./src/app/components/loading/Loading.components.ts");
/* harmony import */ var _pages_criarconta_Account_page__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pages/criarconta/Account.page */ "./src/app/pages/criarconta/Account.page.ts");
/* harmony import */ var _pages_page404_Page404_page__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pages/page404/Page404.page */ "./src/app/pages/page404/Page404.page.ts");
/* harmony import */ var _pages_userList_UserList_page__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./pages/userList/UserList.page */ "./src/app/pages/userList/UserList.page.ts");
/* harmony import */ var _pages_user_User_page__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./pages/user/User.page */ "./src/app/pages/user/User.page.ts");
/* harmony import */ var _pages_login_Login_page__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./pages/login/Login.page */ "./src/app/pages/login/Login.page.ts");
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/service-worker */ "./node_modules/@angular/service-worker/fesm2015/service-worker.js");
/* harmony import */ var _services_Auth_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./services/Auth.service */ "./src/app/services/Auth.service.ts");
/* harmony import */ var _services_Auth_guard__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./services/Auth.guard */ "./src/app/services/Auth.guard.ts");
/* harmony import */ var ngx_mask__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ngx-mask */ "./node_modules/ngx-mask/fesm2015/ngx-mask.js");









// import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';















var options;
let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_9__["FilterPipe"],
            _pipes_order_pipe__WEBPACK_IMPORTED_MODULE_10__["OrderPipe"],
            _app_component__WEBPACK_IMPORTED_MODULE_12__["AppComponent"],
            _components_header_Header_components__WEBPACK_IMPORTED_MODULE_13__["HeaderComponent"],
            _pages_criarconta_Account_page__WEBPACK_IMPORTED_MODULE_15__["AccountPage"],
            _pages_page404_Page404_page__WEBPACK_IMPORTED_MODULE_16__["Page404"],
            _pages_userList_UserList_page__WEBPACK_IMPORTED_MODULE_17__["UserListPage"],
            _pages_login_Login_page__WEBPACK_IMPORTED_MODULE_19__["LoginPage"],
            _pages_user_User_page__WEBPACK_IMPORTED_MODULE_18__["UserPage"],
            _components_loading_Loading_components__WEBPACK_IMPORTED_MODULE_14__["LoadingComponent"],
        ],
        imports: [
            ngx_mask__WEBPACK_IMPORTED_MODULE_23__["NgxMaskModule"].forRoot(options),
            _angular_fire__WEBPACK_IMPORTED_MODULE_4__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].firebase),
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__["AngularFirestoreModule"],
            _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__["AngularFireAuthModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_11__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
            _angular_service_worker__WEBPACK_IMPORTED_MODULE_20__["ServiceWorkerModule"].register('ngsw-worker.js', { enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].production })
        ],
        providers: [_services_Auth_service__WEBPACK_IMPORTED_MODULE_21__["AuthService"], _services_Auth_guard__WEBPACK_IMPORTED_MODULE_22__["AuthGuard"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_12__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/components/header/Header.components.css":
/*!*********************************************************!*\
  !*** ./src/app/components/header/Header.components.css ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".jumb {\n    padding: 0px 0px 10px 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvSGVhZGVyLmNvbXBvbmVudHMuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kseUJBQXlCO0FBQzdCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvSGVhZGVyLmNvbXBvbmVudHMuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmp1bWIge1xuICAgIHBhZGRpbmc6IDBweCAwcHggMTBweCAwcHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/components/header/Header.components.ts":
/*!********************************************************!*\
  !*** ./src/app/components/header/Header.components.ts ***!
  \********************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HeaderComponent = class HeaderComponent {
};
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'header-component',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./Header.components.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/header/Header.components.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./Header.components.css */ "./src/app/components/header/Header.components.css")).default]
    })
], HeaderComponent);



/***/ }),

/***/ "./src/app/components/loading/Loading.components.css":
/*!***********************************************************!*\
  !*** ./src/app/components/loading/Loading.components.css ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbG9hZGluZy9Mb2FkaW5nLmNvbXBvbmVudHMuY3NzIn0= */");

/***/ }),

/***/ "./src/app/components/loading/Loading.components.ts":
/*!**********************************************************!*\
  !*** ./src/app/components/loading/Loading.components.ts ***!
  \**********************************************************/
/*! exports provided: LoadingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingComponent", function() { return LoadingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let LoadingComponent = class LoadingComponent {
    constructor() {
        this.show = false;
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], LoadingComponent.prototype, "show", void 0);
LoadingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'loading-component',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./Loading.components.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/loading/Loading.components.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./Loading.components.css */ "./src/app/components/loading/Loading.components.css")).default]
    })
], LoadingComponent);



/***/ }),

/***/ "./src/app/pages/criarconta/Account.page.css":
/*!***************************************************!*\
  !*** ./src/app/pages/criarconta/Account.page.css ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".header {\n    text-align: center;\n    font-size: 30px;\n    margin-bottom: 40px;\n}\n\n.row {\n    margin-top: 10px;\n}\n\n.error {\n\tcolor: red;\n\tfont-size: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY3JpYXJjb250YS9BY2NvdW50LnBhZ2UuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7Q0FDQyxVQUFVO0NBQ1YsZUFBZTtBQUNoQiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NyaWFyY29udGEvQWNjb3VudC5wYWdlLmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXIge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDMwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogNDBweDtcbn1cblxuLnJvdyB7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuLmVycm9yIHtcblx0Y29sb3I6IHJlZDtcblx0Zm9udC1zaXplOiAxMnB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/criarconta/Account.page.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/criarconta/Account.page.ts ***!
  \**************************************************/
/*! exports provided: AccountPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountPage", function() { return AccountPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_Auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/Auth.service */ "./src/app/services/Auth.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");





let AccountPage = class AccountPage {
    constructor(authService, router, fb) {
        this.authService = authService;
        this.router = router;
        this.fb = fb;
        this.errorMessage = '';
        this.createForm();
    }
    createForm() {
        this.accountForm = this.fb.group({
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            repeat: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
        });
    }
    tryCreateAccount(value) {
        if (value.password == value.repeat) {
            this.authService.doRegister(value)
                .then(res => {
                this.router.navigate(['/users']);
            }, err => {
                console.log(err);
                this.errorMessage = err;
            });
        }
        else {
            this.errorMessage = 'Senhas não conferem!';
        }
    }
};
AccountPage.ctorParameters = () => [
    { type: _services_Auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] }
];
AccountPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./Account.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/criarconta/Account.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./Account.page.css */ "./src/app/pages/criarconta/Account.page.css")).default]
    })
], AccountPage);



/***/ }),

/***/ "./src/app/pages/login/Login.page.css":
/*!********************************************!*\
  !*** ./src/app/pages/login/Login.page.css ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".header {\n    text-align: center;\n    font-size: 30px;\n    margin-bottom: 40px;\n}\n\n.row {\n    margin-top: 10px;\n}\n\n.error {\n\tcolor: red;\n\tfont-size: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbG9naW4vTG9naW4ucGFnZS5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtDQUNDLFVBQVU7Q0FDVixlQUFlO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbG9naW4vTG9naW4ucGFnZS5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAzMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XG59XG5cbi5yb3cge1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbi5lcnJvciB7XG5cdGNvbG9yOiByZWQ7XG5cdGZvbnQtc2l6ZTogMTJweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/login/Login.page.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/login/Login.page.ts ***!
  \*******************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_Auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/Auth.service */ "./src/app/services/Auth.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");





let LoginPage = class LoginPage {
    constructor(authService, router, fb) {
        this.authService = authService;
        this.router = router;
        this.fb = fb;
        this.errorMessage = '';
        this.createForm();
    }
    createForm() {
        this.loginForm = this.fb.group({
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
        });
    }
    verificaLogin(value) {
        this.authService.doLogin(value)
            .then(res => {
            this.router.navigate(['/users']);
        }, err => {
            console.log(err);
            this.errorMessage = err;
        });
    }
};
LoginPage.ctorParameters = () => [
    { type: _services_Auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] }
];
LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./Login.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/Login.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./Login.page.css */ "./src/app/pages/login/Login.page.css")).default]
    })
], LoginPage);



/***/ }),

/***/ "./src/app/pages/page404/Page404.page.css":
/*!************************************************!*\
  !*** ./src/app/pages/page404/Page404.page.css ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".banner {\n\n    margin: 40px;\n    align-items: center;\ndisplay: flex;\nflex-direction: row;\nflex-wrap: wrap;\njustify-content: center;\n  \n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcGFnZTQwNC9QYWdlNDA0LnBhZ2UuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztJQUVJLFlBQVk7SUFDWixtQkFBbUI7QUFDdkIsYUFBYTtBQUNiLG1CQUFtQjtBQUNuQixlQUFlO0FBQ2YsdUJBQXVCOztBQUV2QiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3BhZ2U0MDQvUGFnZTQwNC5wYWdlLmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iYW5uZXIge1xuXG4gICAgbWFyZ2luOiA0MHB4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5kaXNwbGF5OiBmbGV4O1xuZmxleC1kaXJlY3Rpb246IHJvdztcbmZsZXgtd3JhcDogd3JhcDtcbmp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBcbn1cblxuIl19 */");

/***/ }),

/***/ "./src/app/pages/page404/Page404.page.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/page404/Page404.page.ts ***!
  \***********************************************/
/*! exports provided: Page404 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Page404", function() { return Page404; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let Page404 = class Page404 {
    constructor() { }
    ngOnInit() { }
};
Page404 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./Page404.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/page404/Page404.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./Page404.page.css */ "./src/app/pages/page404/Page404.page.css")).default]
    })
], Page404);



/***/ }),

/***/ "./src/app/pages/user/User.page.css":
/*!******************************************!*\
  !*** ./src/app/pages/user/User.page.css ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".text-muted {\n    color: red !important;\n    font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdXNlci9Vc2VyLnBhZ2UuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kscUJBQXFCO0lBQ3JCLGlCQUFpQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3VzZXIvVXNlci5wYWdlLmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50ZXh0LW11dGVkIHtcbiAgICBjb2xvcjogcmVkICFpbXBvcnRhbnQ7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/user/User.page.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/user/User.page.ts ***!
  \*****************************************/
/*! exports provided: UserPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserPage", function() { return UserPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _services_Users_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/Users.service */ "./src/app/services/Users.service.ts");





let UserPage = class UserPage {
    constructor(route, router, usersService) {
        this.route = route;
        this.router = router;
        this.usersService = usersService;
        this.loading = false;
        this.userId = '';
        this.docId = '';
        this.userForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            nome: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            cpf: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email]),
            ramal: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
            departamento: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
        });
    }
    ngOnInit() {
        this.userId = this.route.snapshot.paramMap.get('id');
        if (this.userId) {
            this.getUser(this.userId);
        }
    }
    getUser(id) {
        this.loading = true;
        this.usersService.getById(id)
            .subscribe((data) => {
            const { doc } = data[0].payload;
            const result = doc.data();
            this.docId = doc.id;
            Object.keys(result)
                .filter(item => item !== 'id')
                .forEach((item) => {
                this.userForm.controls[item].setValue(result[item]);
                this.loading = false;
            });
        });
    }
    onBack() {
        this.router.navigate(['users']);
    }
    onRemove() {
        this.loading = true;
        if (this.docId) {
            this.usersService.delete(this.docId)
                .then((data) => {
                this.router.navigate(['users']);
                this.loading = false;
            }).catch((err) => {
                console.log(err);
                this.loading = false;
            });
        }
    }
    onSubmit() {
        this.loading = true;
        if (this.userId) {
            this.usersService.update(this.docId, this.userForm.value)
                .then((data) => {
                this.router.navigate(['users']);
                this.loading = false;
            }).catch((err) => {
                console.log(err);
                this.loading = false;
            });
        }
        else {
            this.usersService.create(this.userForm.value)
                .then((data) => {
                this.router.navigate(['users']);
                this.loading = false;
            }).catch((err) => {
                console.log(err);
                this.loading = false;
            });
        }
    }
};
UserPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _services_Users_service__WEBPACK_IMPORTED_MODULE_4__["UsersService"] }
];
UserPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./User.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/user/User.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./User.page.css */ "./src/app/pages/user/User.page.css")).default]
    })
], UserPage);



/***/ }),

/***/ "./src/app/pages/userList/UserList.page.css":
/*!**************************************************!*\
  !*** ./src/app/pages/userList/UserList.page.css ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("    before {\n        content: '';\n        display: block;\n        background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR…lx6THSjn76eyyBIOPHyDakhBAQAkJACAgBISAEhIAQYCLwC8JxpAmsEGt6AAAAAElFTkSuQmCC) 0 0/22px no-repeat;\n        width: 22px;\n        height: 22px;\n        float: left;\n        margin-left: -22px\n    }\n\n    .espacador {\n      \n        margin: 10px;\n       \n    }\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdXNlckxpc3QvVXNlckxpc3QucGFnZS5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IklBQUk7UUFDSSxXQUFXO1FBQ1gsY0FBYztRQUNkLDBMQUEwTDtRQUMxTCxXQUFXO1FBQ1gsWUFBWTtRQUNaLFdBQVc7UUFDWDtJQUNKOztJQUVBOztRQUVJLFlBQVk7O0lBRWhCIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdXNlckxpc3QvVXNlckxpc3QucGFnZS5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIgICAgYmVmb3JlIHtcbiAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFFQUFBQUJBQ0FZQUFBQ3FhWEhlQUFBQUFYTlNS4oCmbHg2VEhTam43NmV5eUJJT1BIeURha2hCQVFBa0pBQ0FnQklTQUVoSUFRWUNMd0M4SnhwQW1zRUd0NkFBQUFBRWxGVGtTdVFtQ0MpIDAgMC8yMnB4IG5vLXJlcGVhdDtcbiAgICAgICAgd2lkdGg6IDIycHg7XG4gICAgICAgIGhlaWdodDogMjJweDtcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAtMjJweFxuICAgIH1cblxuICAgIC5lc3BhY2Fkb3Ige1xuICAgICAgXG4gICAgICAgIG1hcmdpbjogMTBweDtcbiAgICAgICBcbiAgICB9XG5cbiJdfQ== */");

/***/ }),

/***/ "./src/app/pages/userList/UserList.page.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/userList/UserList.page.ts ***!
  \*************************************************/
/*! exports provided: UserListPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserListPage", function() { return UserListPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_Users_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/Users.service */ "./src/app/services/Users.service.ts");



let UserListPage = class UserListPage {
    constructor(usersService) {
        this.usersService = usersService;
        this.items = [];
        this.filterBy = '';
        this.orderBy = '';
    }
    ngOnInit() {
        this.list();
    }
    list() {
        this.items = [];
        this.usersService.getList()
            .subscribe((data) => {
            Object.keys(data)
                .forEach((index) => {
                this.items.push(data[index].payload.doc.data());
            });
        });
    }
    setFilterBy(event) {
        this.filterBy = event.target.value;
    }
    setOrderBy(value) {
        this.orderBy = value;
    }
};
UserListPage.ctorParameters = () => [
    { type: _services_Users_service__WEBPACK_IMPORTED_MODULE_2__["UsersService"] }
];
UserListPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./UserList.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/userList/UserList.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./UserList.page.css */ "./src/app/pages/userList/UserList.page.css")).default]
    })
], UserListPage);



/***/ }),

/***/ "./src/app/pipes/filter.pipe.ts":
/*!**************************************!*\
  !*** ./src/app/pipes/filter.pipe.ts ***!
  \**************************************/
/*! exports provided: FilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterPipe", function() { return FilterPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FilterPipe = class FilterPipe {
    transform(items, filterBy) {
        if (filterBy) {
            var values = items.filter(function (data) {
                return data.nome.toUpperCase().includes(filterBy.toUpperCase());
            });
            return values;
        }
        return items;
    }
};
FilterPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'filter',
    })
], FilterPipe);



/***/ }),

/***/ "./src/app/pipes/order.pipe.ts":
/*!*************************************!*\
  !*** ./src/app/pipes/order.pipe.ts ***!
  \*************************************/
/*! exports provided: OrderPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderPipe", function() { return OrderPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);



let OrderPipe = class OrderPipe {
    transform(items, orderBy) {
        if (orderBy) {
            var result = lodash__WEBPACK_IMPORTED_MODULE_2__["orderBy"](items, ['nome'], [orderBy]);
            return result;
        }
        return items;
    }
};
OrderPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'order',
    })
], OrderPipe);



/***/ }),

/***/ "./src/app/services/Auth.guard.ts":
/*!****************************************!*\
  !*** ./src/app/services/Auth.guard.ts ***!
  \****************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_Auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/Auth.service */ "./src/app/services/Auth.service.ts");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_4__);





let AuthGuard = class AuthGuard {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    canActivate(next, state) {
        if (firebase_app__WEBPACK_IMPORTED_MODULE_4__["auth"]().currentUser) {
            console.log("User logado...");
            return (true);
        }
        else {
            return (false);
        }
    }
};
AuthGuard.ctorParameters = () => [
    { type: _services_Auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
], AuthGuard);



/***/ }),

/***/ "./src/app/services/Auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/Auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/es2015/index.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_3__);




let AuthService = class AuthService {
    constructor(afAuth) {
        this.afAuth = afAuth;
    }
    doGoogleLogin() {
        return new Promise((resolve, reject) => {
            let provider = new firebase_app__WEBPACK_IMPORTED_MODULE_3__["auth"].GoogleAuthProvider();
            provider.addScope('profile');
            provider.addScope('email');
            this.afAuth.auth
                .signInWithPopup(provider)
                .then(res => {
                resolve(res);
            }, err => {
                console.log(err);
                reject(err);
            });
        });
    }
    doRegister(value) {
        return new Promise((resolve, reject) => {
            firebase_app__WEBPACK_IMPORTED_MODULE_3__["auth"]().createUserWithEmailAndPassword(value.email, value.password)
                .then(value => {
                resolve(value);
            })
                .catch(err => {
                reject(err);
            });
        });
    }
    doLogin(value) {
        return new Promise((resolve, reject) => {
            this.afAuth.auth.signInWithEmailAndPassword(value.email, value.password)
                .then(value => {
                resolve(value);
            })
                .catch(err => {
                reject(err);
            });
        });
    }
    doLogout() {
        return new Promise((resolve, reject) => {
            if (firebase_app__WEBPACK_IMPORTED_MODULE_3__["auth"]().currentUser) {
                this.afAuth.auth.signOut();
                resolve();
            }
            else {
                reject();
            }
        });
    }
};
AuthService.ctorParameters = () => [
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"] }
];
AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], AuthService);



/***/ }),

/***/ "./src/app/services/Users.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/Users.service.ts ***!
  \*******************************************/
/*! exports provided: UsersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersService", function() { return UsersService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/index.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_4__);





let UsersService = class UsersService {
    constructor(http, db) {
        this.http = http;
        this.db = db;
    }
    getById(id) {
        return this.db.collection('users', ref => ref.where('id', '==', id)).snapshotChanges();
    }
    getList() {
        return this.db.collection('users').snapshotChanges();
    }
    delete(docId) {
        return this.db.collection("users").doc(docId).delete();
    }
    create(data) {
        return this.db.collection('users').add(Object.assign({ id: uuid__WEBPACK_IMPORTED_MODULE_4___default()() }, data));
    }
    update(docId, data) {
        return this.db.collection('users').doc(docId).update(Object.assign({}, data));
    }
};
UsersService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"] }
];
UsersService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
], UsersService);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyC8dptCk7PAHGaBqa4lyajWWqVdcMl68To",
        authDomain: "angular-aa844.firebaseapp.com",
        databaseURL: "https://angular-aa844.firebaseio.com",
        projectId: "angular-aa844",
        storageBucket: "angular-aa844.appspot.com",
        messagingSenderId: "233025134233",
        appId: "1:233025134233:web:fa6f1d67983967c3"
    }
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/emersonrodrigues/Documents/Angulas/work17mob2/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map