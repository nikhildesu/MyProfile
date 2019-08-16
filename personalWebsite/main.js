(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".overlayBackground{\r\n  width: 100%;\r\n  height: 100%;\r\n  background: url('0.jpeg') no-repeat center;\r\n  background-size: 100% 100%;\r\n  background-position: top center;\r\n  position: absolute;\r\n  \r\n} \r\n.loading {\r\n    position: fixed;\r\n    z-index: 999;\r\n    height: 2em;\r\n    width: 2em;\r\n    overflow: show;\r\n    margin: auto;\r\n    top: 0;\r\n    left: 0;\r\n    bottom: 0;\r\n    right: 0;\r\n  } \r\n.loading:before {\r\n    content: '';\r\n    display: block;\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    background-color: rgba(0,0,0,0.3);\r\n  } \r\n.spinner {\r\n    margin: 0px auto 0;\r\n    width: 70px;\r\n    text-align: center;\r\n  } \r\n.spinner > div {\r\n    width: 18px;\r\n    height: 18px;\r\n    background-color: #333;\r\n  \r\n    border-radius: 100%;\r\n    display: inline-block;\r\n    -webkit-animation: sk-bouncedelay 1.4s infinite ease-in-out both;\r\n    animation: sk-bouncedelay 1.4s infinite ease-in-out both;\r\n  } \r\n.spinner .bounce1 {\r\n    -webkit-animation-delay: -0.32s;\r\n    animation-delay: -0.32s;\r\n    background-color: white;\r\n  } \r\n.spinner .bounce2 {\r\n    -webkit-animation-delay: -0.16s;\r\n    animation-delay: -0.16s;\r\n      background-color: white;\r\n  } \r\n.spinner .bounce3 {\r\n    -webkit-animation-delay: -0.16s;\r\n    animation-delay: -0.16s;\r\n      background-color: white;\r\n  } \r\n@-webkit-keyframes sk-bouncedelay {\r\n    0%, 80%, 100% { -webkit-transform: scale(0) }\r\n    40% { -webkit-transform: scale(1.0) }\r\n  } \r\n@keyframes sk-bouncedelay {\r\n    0%, 80%, 100% { \r\n      -webkit-transform: scale(0);\r\n      transform: scale(0);\r\n    } 40% { \r\n      -webkit-transform: scale(1.0);\r\n      transform: scale(1.0);\r\n    }\r\n  }"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"overlayBackground\">\n  <app-header></app-header>\n  <!-- <app-home (selectedTab)=\"changeNewBackground($event)\"></app-home> -->\n  <router-outlet>\n    <span>\n      <div *ngIf=\"LOAD_SPINNER\">\n        <div class=\"loading\">\n          <div class=\"spinner\">\n            <div class=\"bounce1\"></div>\n            <div class=\"bounce2\"></div>\n            <div class=\"bounce3\"></div>\n          </div>\n        </div>\n      </div>\n    </span>\n  </router-outlet>\n</div>\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_spinner_spinner_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/spinner/spinner.service */ "./src/app/services/spinner/spinner.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(spinnerService) {
        this.spinnerService = spinnerService;
        this.title = 'newAppsss';
        this.LOAD_SPINNER = false;
    }
    //Spinner component initiated
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log('app comp loaded');
        this.spinnerService.status.subscribe(function (val) {
            _this.LOAD_SPINNER = val;
        });
    };
    AppComponent.prototype.changeNewBackground = function (tabIndexValue) {
        console.log('event is received');
        console.log('User changed tab to ' + tabIndexValue);
        this.backgroundImageName = "../../../assets/images/" + tabIndexValue + ".jpeg";
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_services_spinner_spinner_service__WEBPACK_IMPORTED_MODULE_1__["SpinnerService"]])
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _material_module_material_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./material-module/material.module */ "./src/app/material-module/material.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _routing_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./routing/routing.module */ "./src/app/routing/routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _application_components_portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./application-components/portfolio/portfolio.component */ "./src/app/application-components/portfolio/portfolio.component.ts");
/* harmony import */ var _application_components_contact_contact_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./application-components/contact/contact.component */ "./src/app/application-components/contact/contact.component.ts");
/* harmony import */ var _application_components_highlights_highlights_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./application-components/highlights/highlights.component */ "./src/app/application-components/highlights/highlights.component.ts");
/* harmony import */ var _application_components_my_story_my_story_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./application-components/my-story/my-story.component */ "./src/app/application-components/my-story/my-story.component.ts");
/* harmony import */ var _common_components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./common-components/page-not-found/page-not-found.component */ "./src/app/common-components/page-not-found/page-not-found.component.ts");
/* harmony import */ var _layout_components_header_header_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./layout-components/header/header.component */ "./src/app/layout-components/header/header.component.ts");
/* harmony import */ var _layout_components_home_home_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./layout-components/home/home.component */ "./src/app/layout-components/home/home.component.ts");
/* harmony import */ var _application_components_intro_intro_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./application-components/intro/intro.component */ "./src/app/application-components/intro/intro.component.ts");
/* harmony import */ var ng_simple_slideshow__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-simple-slideshow */ "./node_modules/ng-simple-slideshow/ng-simple-slideshow.es5.js");
/* harmony import */ var _common_components_hire_dialog_hire_dialog_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./common-components/hire-dialog/hire-dialog.component */ "./src/app/common-components/hire-dialog/hire-dialog.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _application_components_portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_8__["PortfolioComponent"],
                _application_components_contact_contact_component__WEBPACK_IMPORTED_MODULE_9__["ContactComponent"],
                _application_components_highlights_highlights_component__WEBPACK_IMPORTED_MODULE_10__["HighlightsComponent"],
                _application_components_my_story_my_story_component__WEBPACK_IMPORTED_MODULE_11__["MyStoryComponent"],
                _common_components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_12__["PageNotFoundComponent"],
                _layout_components_header_header_component__WEBPACK_IMPORTED_MODULE_13__["HeaderComponent"],
                _layout_components_home_home_component__WEBPACK_IMPORTED_MODULE_14__["HomeComponent"],
                _application_components_intro_intro_component__WEBPACK_IMPORTED_MODULE_15__["IntroComponent"],
                _common_components_hire_dialog_hire_dialog_component__WEBPACK_IMPORTED_MODULE_17__["HireDialogComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _material_module_material_module__WEBPACK_IMPORTED_MODULE_3__["MaterialModule"],
                _routing_routing_module__WEBPACK_IMPORTED_MODULE_6__["RoutingModule"],
                ng_simple_slideshow__WEBPACK_IMPORTED_MODULE_16__["SlideshowModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]],
            entryComponents: [_common_components_hire_dialog_hire_dialog_component__WEBPACK_IMPORTED_MODULE_17__["HireDialogComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/application-components/contact/contact.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/application-components/contact/contact.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".contact-form {\r\n    min-width: 150px;\r\n    max-width: 500px;\r\n    width: 100%;\r\n  }\r\n  \r\n  .input-form-width {\r\n    width: 100%;\r\n  }\r\n  \r\n  .contactCard{\r\n      margin-top: 15%;\r\n      margin-left: 20%;\r\n      margin-bottom: 1%;\r\n      border: 1px solid rgba(88, 125, 180, 0.658); \r\n      border-radius: 10%;   \r\n      text-align: center;\r\n  }\r\n  \r\n  .mat-stroked-button{\r\n      width: 75%;\r\n  }"

/***/ }),

/***/ "./src/app/application-components/contact/contact.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/application-components/contact/contact.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"titleFont\">\n  <span style=\"letter-spacing:0.05em; \">CONNECT WITH ME</span>\n</div>\n<div class=\"leftContent_contact\">\n  <mat-card class=\"contactCard\">\n    <div class=\"myFont\">\n      LinkedIn <img src=\"../../../assets/images/in.png\" width=\"25px\" height=\"25px\">\n      <p><a href=\"https://www.linkedin.com/in/nikhil-desu-55b902ba\" target=\"_blank\">https://www.linkedin.com/in/nikhil-desu-55b902ba/</a></p>\n    </div>\n    <br>\n    <div class=\"myFont\">\n      Git Hub <img src=\"../../../assets/images/github.png\" width=\"25px\" height=\"25px\">\n      <p><a href=\"https://github.com/nikhildesu/\" target=\"_blank\">https://github.com/nikhildesu/</a></p>\n    </div>\n    <br>\n    <div class=\"myFont\">\n      Gmail <img src=\"../../../assets/images/gmail.png\" width=\"25px\" height=\"25px\">\n      <p><a href=\"#\" >nikhildesu.3289@gmail.com</a></p>\n    </div>\n  </mat-card>\n</div>\n<div class=\"rightContent_contact\">\n  <form #contactForm=\"ngForm\" class=\"contact-form\">\n    <div>\n      <mat-form-field class=\"input-form-width\">\n        <input matInput placeholder=\"Your Name\" name=\"name\" [(ngModel)]=\"contactData.name\">\n      </mat-form-field>\n    </div>\n    <div>\n      <mat-form-field class=\"input-form-width\">\n        <input matInput placeholder=\"Mobile Number\" name=\"mobile\" [(ngModel)]=\"contactData.mobile\">\n      </mat-form-field>\n    </div>\n    <div>\n      <mat-form-field class=\"input-form-width\">\n        <input matInput placeholder=\"Email id\" name=\"email\" [(ngModel)]=\"contactData.email\">\n      </mat-form-field>\n    </div>\n    <br>\n    <div>\n      <mat-form-field class=\"input-form-width\">\n        <mat-label>Enter your message</mat-label>\n        <textarea matInput cdkTextareaAutosize #autosize=\"cdkTextareaAutosize\" cdkAutosizeMinRows=\"2\"\n          cdkAutosizeMaxRows=\"5\" name=\"message\" [(ngModel)]=\"contactData.message\"></textarea>\n      </mat-form-field>\n    </div>\n    <br>\n    <div class=\"input-form-width\">\n      <button mat-stroked-button color=\"primary\" (click)=\"sendEmail()\">Submit to Nikhil</button>\n    </div>\n  </form>\n</div>"

/***/ }),

/***/ "./src/app/application-components/contact/contact.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/application-components/contact/contact.component.ts ***!
  \*********************************************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_shared_shared_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/shared/shared.service */ "./src/app/services/shared/shared.service.ts");
/* harmony import */ var _models_contactDetails__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/contactDetails */ "./src/app/models/contactDetails.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ContactComponent = /** @class */ (function () {
    function ContactComponent(sharedService) {
        this.sharedService = sharedService;
        this.contactData = new _models_contactDetails__WEBPACK_IMPORTED_MODULE_3__["ContactDetails"]();
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent.prototype.sendEmail = function () {
        console.log('Contact form request : ' + JSON.stringify(this.contactData));
        this.sharedService.post("sendEmail", this.contactData).subscribe(function (data) {
            console.log('email sent successfully');
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('contactForm'),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"])
    ], ContactComponent.prototype, "contactForm", void 0);
    ContactComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(/*! ./contact.component.html */ "./src/app/application-components/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.css */ "./src/app/application-components/contact/contact.component.css")]
        }),
        __metadata("design:paramtypes", [_services_shared_shared_service__WEBPACK_IMPORTED_MODULE_2__["SharedService"]])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/application-components/highlights/highlights.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/application-components/highlights/highlights.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".certImage{\r\n    width: 75%;\r\n    margin-left: 15%;\r\n}\r\n\r\n.carousel-control-prev-icon{\r\n    background-color: rgb(59, 163, 189);\r\n}\r\n\r\n.carousel-control-next-icon{\r\n    background-color: rgb(59, 163, 189);\r\n}\r\n\r\n.carousel-indicators li {\r\n    background-color: rgb(59, 163, 189);\r\n}"

/***/ }),

/***/ "./src/app/application-components/highlights/highlights.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/application-components/highlights/highlights.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"titleFont\">\n  <span style=\"letter-spacing:0.05em; \">MY PROFESSIONAL CAREER HIGHLIGHTS</span>\n</div>\n<br>\n<div id=\"carouselLayout\" class=\"carousel slide\" data-ride=\"carousel\">\n  <ol class=\"carousel-indicators\">\n    <li data-target=\"#carouselLayout\" data-slide-to=\"0\" class=\"active\"></li>\n    <li data-target=\"#carouselLayout\" data-slide-to=\"1\"></li>\n    <li data-target=\"#carouselLayout\" data-slide-to=\"2\"></li>\n    <li data-target=\"#carouselLayout\" data-slide-to=\"3\"></li>\n    <li data-target=\"#carouselLayout\" data-slide-to=\"4\"></li>\n    <li data-target=\"#carouselLayout\" data-slide-to=\"5\"></li>\n  </ol>\n  <div class=\"carousel-inner\">\n    <div class=\"carousel-item active\">\n      <img class=\"d-block certImage\" src=\"../../../assets/images/cert1.JPG\" width=\"500px\" height=\"500px\" alt=\"Angular\">\n    </div>\n    <div class=\"carousel-item\">\n      <img class=\"d-block certImage\" src=\"../../../assets/images/cert2.JPG\" width=\"300px\" height=\"500px\" alt=\"Second slide\">\n    </div>\n    <div class=\"carousel-item\">\n      <img class=\"d-block certImage\" src=\"../../../assets/images/cert3.JPG\" width=\"500px\" height=\"500px\" alt=\"Third slide\">\n    </div>\n    <div class=\"carousel-item\">\n      <img class=\"d-block certImage\" src=\"../../../assets/images/cert4.JPG\" width=\"500px\" height=\"500px\" alt=\"Third slide\">\n    </div>\n    <div class=\"carousel-item\">\n      <img class=\"d-block certImage\" src=\"../../../assets/images/cert5.JPG\" width=\"500px\" height=\"500px\" alt=\"Third slide\">\n    </div>\n    <div class=\"carousel-item\">\n      <img class=\"d-block certImage\" src=\"../../../assets/images/cert6.JPG\" width=\"500px\" height=\"500px\" alt=\"Third slide\">\n    </div>\n  </div>\n  <a class=\"carousel-control-prev\" href=\"#carouselLayout\" role=\"button\" data-slide=\"prev\">\n    <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n    <span class=\"sr-only\">Previous</span>\n  </a>\n  <a class=\"carousel-control-next\" href=\"#carouselLayout\" role=\"button\" data-slide=\"next\">\n    <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n    <span class=\"sr-only\">Next</span>\n  </a>\n</div>"

/***/ }),

/***/ "./src/app/application-components/highlights/highlights.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/application-components/highlights/highlights.component.ts ***!
  \***************************************************************************/
/*! exports provided: HighlightsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HighlightsComponent", function() { return HighlightsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HighlightsComponent = /** @class */ (function () {
    function HighlightsComponent() {
        this.imageUrls = [
            { url: '../../../assets/images/1.jpeg', caption: 'The first slide' },
            { url: '../../../assets/images/1.jpeg', caption: 'The second slide' }
        ];
    }
    HighlightsComponent.prototype.ngOnInit = function () {
    };
    HighlightsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-highlights',
            template: __webpack_require__(/*! ./highlights.component.html */ "./src/app/application-components/highlights/highlights.component.html"),
            styles: [__webpack_require__(/*! ./highlights.component.css */ "./src/app/application-components/highlights/highlights.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HighlightsComponent);
    return HighlightsComponent;
}());



/***/ }),

/***/ "./src/app/application-components/intro/intro.component.css":
/*!******************************************************************!*\
  !*** ./src/app/application-components/intro/intro.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".linerClass{\r\n  border: 3px solid rgba(129, 150, 182, 0.658);\r\n  border-right: 0;   \r\n  border-left: 0;   \r\n  padding: 2%;\r\n}\r\n\r\n.image-card {\r\n    max-width: 60%;\r\n    margin-left: 15%;\r\n    margin-top: 5%;\r\n    margin-bottom: 1%;\r\n    border: 1px solid rgba(88, 125, 180, 0.658); \r\n    border-radius: 10%;   \r\n  }\r\n\r\n.myImage{\r\n    border: 1px solid rgba(88, 125, 180, 0.658); \r\n    border-top-right-radius: 10%;\r\n    border-top-left-radius: 10%;\r\n  }\r\n\r\n.hireBtn{\r\n      min-width: 50%;\r\n      margin-left: 25%;\r\n      font-size: 15px;\r\n  }\r\n\r\n.chipCards{\r\n  width: 160px;\r\n  height: 50px; \r\n  line-height: 50px; \r\n  cursor: pointer; \r\n  font-size: 15px;\r\n  text-align: center;\r\n  border: 1px solid rgba(88, 125, 180, 0.658); \r\n  border-radius: 5px;   \r\n  background: -webkit-radial-gradient(rgb(28, 57, 185), rgb(201, 91, 91));\r\n  -webkit-background-clip: text;\r\n  -webkit-text-fill-color: transparent;\r\n}\r\n\r\n.button-row button,\r\n.button-row a {\r\n  margin-right: 30px;\r\n}\r\n\r\n.polaroid {\r\n  width: 250px;\r\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n  text-align: center;\r\n}\r\n\r\n.container {\r\n  padding: 10px;\r\n}"

/***/ }),

/***/ "./src/app/application-components/intro/intro.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/application-components/intro/intro.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"titleFont\">\n  <span style=\"letter-spacing:0.05em; \">INTRODUCTION</span>\n</div>\n<div class=\"leftContent\">\n  <mat-card class=\"image-card\">\n    <img class=\"myImage\" mat-card-image src=\"../../../assets/images/Nikhil_pic.jpg\" alt=\"Photo of a Shiba Inu\">\n    <button class=\"hireBtn\" mat-stroked-button color=\"primary\" (click)=\"openHireDialog()\">Hire Me</button>\n  </mat-card>\n\n</div>\n\n<div class=\"rightContent\">\n  <p style=\"font-size: 50px;\">Nikhil &nbsp;Desu</p>\n  <br>\n  <div class=\"linerClass\">Web Developer | Creative Designer</div>\n  <br>\n  <div class=\"description\">Love to do things in creative way !</div>\n  <br><br>\n  <div class=\"button-row\">\n    <a href=\"../../../assets/pdfs/Nikhil_Resume.pdf\" target=\"_blank\"> <button class=\"chipCards\" mat-button>View\n        Resume</button></a>\n\n    <a href=\"../../../assets/pdfs/Nikhil_Resume.pdf\" download> <button class=\"chipCards\" mat-button>Download Resume \n      </button></a>\n  </div>\n  <br>\n  <!-- <div class=\"imageRow1\">\n      <img src=\"../../../assets/images/angular.png\" class=\"stackImage\"> \n      <img src=\"../../../assets/images/javascript.png\" class=\"stackImage\">\n      <img src=\"../../../assets/images/typescript.jpg\" class=\"stackImage\">\n      <img src=\"../../../assets/images/HTML5.png\" class=\"stackImage\">\n      <img src=\"../../../assets/images/css.png\" class=\"stackImage\">\n      <img src=\"../../../assets/images/bootstrap.png\" class=\"stackImage\">\n   </div>\n   <br>\n   <div class=\"imageRow2\">\n      <img src=\"../../../assets/images/jquery.png\" class=\"stackImage\">          \n      <img src=\"../../../assets/images/node.jpg\" class=\"stackImage\">\n      <img src=\"../../../assets/images/expressjs.png\" class=\"stackImage\">\n      <img src=\"../../../assets/images/mongo.png\" class=\"stackImage\">\n      <img src=\"../../../assets/images/java.jpg\" class=\"stackImage\">\n      <img src=\"../../../assets/images/oracle.jpg\" class=\"stackImage\">\n   </div> -->\n   \n</div>\n\n \n     \n "

/***/ }),

/***/ "./src/app/application-components/intro/intro.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/application-components/intro/intro.component.ts ***!
  \*****************************************************************/
/*! exports provided: IntroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntroComponent", function() { return IntroComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var src_app_common_components_hire_dialog_hire_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/common-components/hire-dialog/hire-dialog.component */ "./src/app/common-components/hire-dialog/hire-dialog.component.ts");
/* harmony import */ var src_app_services_spinner_spinner_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/spinner/spinner.service */ "./src/app/services/spinner/spinner.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var IntroComponent = /** @class */ (function () {
    function IntroComponent(spinnerService, dialog) {
        this.spinnerService = spinnerService;
        this.dialog = dialog;
    }
    IntroComponent.prototype.ngOnInit = function () {
    };
    IntroComponent.prototype.openHireDialog = function () {
        var _this = this;
        this.dialogRef = this.dialog.open(src_app_common_components_hire_dialog_hire_dialog_component__WEBPACK_IMPORTED_MODULE_2__["HireDialogComponent"], {
            disableClose: false
        });
        this.dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                console.log('Hire Accepted');
            }
            _this.dialogRef = null;
        });
    };
    IntroComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-intro',
            template: __webpack_require__(/*! ./intro.component.html */ "./src/app/application-components/intro/intro.component.html"),
            styles: [__webpack_require__(/*! ./intro.component.css */ "./src/app/application-components/intro/intro.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_spinner_spinner_service__WEBPACK_IMPORTED_MODULE_3__["SpinnerService"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]])
    ], IntroComponent);
    return IntroComponent;
}());



/***/ }),

/***/ "./src/app/application-components/my-story/my-story.component.css":
/*!************************************************************************!*\
  !*** ./src/app/application-components/my-story/my-story.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container{\r\n    padding-top:25px;\r\n}\r\n \r\n.img-fluid{\r\n    border-radius: 50%;\r\n}\r\n \r\n:root {\r\n\t--white: #ffffff;\r\n\t--black: #000000;\r\n\t--blue:#0288d1;\r\n\t--gray:#ebebeb;\r\n\t--box-shadow1:0px 0px 18px 2px rgba(10, 55, 90, 0.15);\r\n}\r\n \r\nbody{\r\n\tfont-family: 'Footlight MT Light';\r\n    font-style: initial;\r\n    color: #637280;\r\n    -moz-user-select: none;\r\n    -webkit-user-select: none;\r\n    -ms-user-select: none;\r\n        user-select: none;\r\n}\r\n \r\n:focus{\r\n    outline: 0px solid transparent !important;\r\n}\r\n \r\n.timeline {\r\n    padding: 50px 0;\r\n    position: relative;\r\n}\r\n \r\n.timeline-nodes {\r\n        padding-bottom: 100px;\r\n        position: relative;\r\n    }\r\n \r\n.timeline-nodes:nth-child(even) {\r\n    -webkit-flex-direction: row-reverse;\r\n            flex-direction: row-reverse;\r\n}\r\n \r\n.timeline h3, .timeline p {\r\n    padding: 5px 15px;\r\n}\r\n \r\n.timeline h3{\r\n    font-weight: lighter;\r\n    background: -webkit-radial-gradient(rgb(108, 134, 168), rgb(135, 170, 175));\r\n    font-weight: 300;    \r\n    font-family: 'Footlight MT Light';\r\n}\r\n \r\n.timeline p, .timeline time {\r\n    color: rgba(8, 8, 8, 0.658); \r\n    font-weight: 400;\r\n\r\n}\r\n \r\n.timeline::before {\r\n    content: \"\";\r\n    display: block;\r\n    position: absolute;\r\n    top: 0;\r\n    left: 50%;\r\n    width: 0;\r\n    border-left: 2px dashed rgba(37, 120, 134, 0.658); \r\n    height: 100%;\r\n    z-index: 1;\r\n    -webkit-transform: translateX(-50%);\r\n            transform: translateX(-50%);\r\n}\r\n \r\n.timeline-content {\r\n    border: 1px solid rgba(37, 120, 134, 0.658);\r\n    position: relative;\r\n    border-radius: 0 0 10px 10px;\r\n    box-shadow: 0px 3px 25px 0px rgba(10, 55, 90, 0.2)\r\n}\r\n \r\n.timeline-nodes:nth-child(odd) h3,\r\n.timeline-nodes:nth-child(odd) p {\r\n    text-align: right;\r\n}\r\n \r\n.timeline-nodes:nth-child(odd) .timeline-date {\r\n    text-align: left;\r\n}\r\n \r\n.timeline-nodes:nth-child(even) .timeline-date {\r\n    text-align: right;\r\n}\r\n \r\n.timeline-nodes:nth-child(odd) .timeline-content::after {\r\n    content: \"\";\r\n    position: absolute;\r\n    top: 5%;\r\n    left: 100%;\r\n    width: 0;\r\n    border-left: 10px solid rgba(37, 120, 134, 0.658); \r\n    border-top: 10px solid transparent;\r\n    border-bottom: 10px solid transparent;\r\n}\r\n \r\n.timeline-nodes:nth-child(even) .timeline-content::after {\r\n    content: \"\";\r\n    position: absolute;\r\n    top: 5%;\r\n    right: 100%;\r\n    width: 0;\r\n    border-right: 10px solid rgba(37, 120, 134, 0.658); \r\n    border-top: 10px solid transparent;\r\n    border-bottom: 10px solid transparent;\r\n}\r\n \r\n.timeline-image {\r\n    position: relative;\r\n    z-index: 100;\r\n}\r\n \r\n.timeline-image::before {\r\n    content: \"\";\r\n    width: 80px;\r\n    height: 80px;\r\n    border: 2px dashed rgba(37, 120, 134, 0.658); \r\n    border-radius: 50%;\r\n    display: block;\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    -webkit-transform: translate(-50%,-50%);\r\n            transform: translate(-50%,-50%);\r\n    background-color: #fff;\r\n    z-index: 1;\r\n    \r\n\r\n}\r\n \r\n.timeline-image img {\r\n    position: relative;\r\n    z-index: 100;\r\n}\r\n \r\n/*small device style*/\r\n \r\n@media (max-width: 767px) {\r\n    .timeline-nodes:nth-child(odd) h3,\r\n    .timeline-nodes:nth-child(odd) p {\r\n    text-align: left\r\n}\r\n.timeline-nodes:nth-child(even) {\r\n    -webkit-flex-direction: row;\r\n            flex-direction: row;\r\n}\r\n    .timeline::before {\r\n    content: \"\";\r\n    display: block;\r\n    position: absolute;\r\n    top: 0;\r\n    left: 4%;\r\n    width: 0;\r\n    border-left: 2px dashed rgba(37, 120, 134, 0.658); \r\n    height: 100%;\r\n    z-index: 1;\r\n    -webkit-transform: translateX(-50%);\r\n            transform: translateX(-50%);\r\n}\r\n.timeline h3 {\r\n    font-size: 1.7rem;\r\n}\r\n.timeline p {\r\n    font-size: 14px;\r\n}\r\n.timeline-image {\r\n    position: absolute;\r\n    left: 0%;\r\n    top: 60px;\r\n    /*transform: translateX(-50%;);*/\r\n}\r\n.timeline-nodes:nth-child(odd) .timeline-content::after {\r\n    content: \"\";\r\n    position: absolute;\r\n    top: 5%;\r\n    left: auto;\r\n    right: 100%;\r\n    width: 0;\r\n    border-left: 0;\r\n    border-right: 10px solid rgba(37, 120, 134, 0.658);\r\n    border-top: 10px solid transparent;\r\n    border-bottom: 10px solid transparent;\r\n}\r\n.timeline-nodes:nth-child(even) .timeline-content::after {\r\n    content: \"\";\r\n    position: absolute;\r\n    top: 5%;\r\n    right: 100%;\r\n    width: 0;\r\n    border-right: 10px solid rgba(37, 120, 134, 0.658); \r\n    border-top: 10px solid transparent;\r\n    border-bottom: 10px solid transparent;\r\n}\r\n.timeline-nodes:nth-child(even) .timeline-date {\r\n    text-align: left;\r\n}\r\n.timeline-image::before {\r\n    width: 65px;\r\n    height: 65px;\r\n}\r\n}\r\n \r\n/*extra small device style */\r\n \r\n@media (max-width: 575px) {\r\n    .timeline::before {\r\n    content: \"\";\r\n    display: block;\r\n    position: absolute;\r\n    top: 0;\r\n    left: 3%;\r\n}\r\n.timeline-image {\r\n    position: absolute;\r\n    left: -5%;\r\n    }\r\n.timeline-image::before {\r\n    width: 60px;\r\n    height: 60px;\r\n}\r\n}\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/application-components/my-story/my-story.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/application-components/my-story/my-story.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"titleFont\">\n  <span style=\"letter-spacing:0.05em; \">MY STORY TIMELINE</span>\n</div>\n<div class=\"container\">\n  <div class=\"timeline\">\n    <div class=\"row no-gutters justify-content-end justify-content-md-around align-items-start  timeline-nodes\">\n      <div class=\"col-10 col-md-5 order-3 order-md-1 timeline-content\">\n        <h3 class=\" text-light\">New Member in Family</h3>\n        <p>Blessed with baby boy. Most happiest moment as a father. </p>\n      </div>\n      <div class=\"col-2 col-sm-1 px-md-3 order-2 timeline-image text-md-center\">\n        <img src=\"../../../assets/images/father.jpg\" class=\"img-fluid\" alt=\"img\">\n      </div>\n      <div class=\"col-10 col-md-5 order-1 order-md-3 py-3 timeline-date\">\n        <time>Sep 19, 2018</time>\n      </div>\n    </div>\n    <div class=\"row no-gutters justify-content-end justify-content-md-around align-items-start  timeline-nodes\">\n      <div class=\"col-10 col-md-5 order-3 order-md-1 timeline-content\">\n        <h3 class=\" text-light\">Joined LTI</h3>\n        <p>Started working in LTI as MEAN Stack developer.</p>\n      </div>\n      <div class=\"col-2 col-sm-1 px-md-3 order-2 timeline-image text-md-center\">\n        <img src=\"../../../assets/images/LTI.JPG\" class=\"img-fluid\" alt=\"img\">\n      </div>\n      <div class=\"col-10 col-md-5 order-1 order-md-3 py-3 timeline-date\">\n        <time>Aug 06, 2018</time>\n      </div>\n    </div>\n    <div class=\"row no-gutters justify-content-end justify-content-md-around align-items-start  timeline-nodes\">\n      <div class=\"col-10 col-md-5 order-3 order-md-1 timeline-content\">\n        <h3 class=\" text-light\">Married</h3>\n        <p>Most Auspicious day of my life.</p>\n      </div>\n      <div class=\"col-2 col-sm-1 px-md-3 order-2 timeline-image text-md-center\">\n        <img src=\"../../../assets/images/married.jpg\" class=\"img-fluid\" alt=\"img\">\n      </div>\n      <div class=\"col-10 col-md-5 order-1 order-md-3 py-3 timeline-date\">\n        <time>Apr 22, 2016</time>\n      </div>\n    </div>\n    <div class=\"row no-gutters justify-content-end justify-content-md-around align-items-start  timeline-nodes\">\n      <div class=\"col-10 col-md-5 order-3 order-md-1 timeline-content\">\n        <h3 class=\" text-light\">Arriving Onsite</h3>\n        <p>Deputed to onsite client location - Chicago, USA</p>\n      </div>\n      <div class=\"col-2 col-sm-1 px-md-3 order-2 timeline-image text-md-center\">\n        <img src=\"../../../assets/images/flight.jpg\" class=\"img-fluid\" alt=\"img\">\n      </div>\n      <div class=\"col-10 col-md-5 order-1 order-md-3 py-3 timeline-date\">\n        <time>Apr 20, 2015</time>\n      </div>\n    </div>\n\n    <div class=\"row no-gutters justify-content-end justify-content-md-around align-items-start  timeline-nodes\">\n      <div class=\"col-10 col-md-5 order-3 order-md-1 timeline-content\">\n        <h3 class=\" text-light\">Joined my 1st Job - TCS</h3>\n        <p>Most happiest and proudest moment. Location - Chennai, India</p>\n      </div>\n      <div class=\"col-2 col-sm-1 px-md-3 order-2 timeline-image text-md-center\">\n        <img src=\"../../../assets/images/job.jpg\" class=\"img-fluid\" alt=\"img\">\n      </div>\n      <div class=\"col-10 col-md-5 order-1 order-md-3 py-3 timeline-date\">\n        <time>Aug 11, 2011</time>\n      </div>\n    </div>\n    <div class=\"row no-gutters justify-content-end justify-content-md-around align-items-start  timeline-nodes\">\n      <div class=\"col-10 col-md-5 order-3 order-md-1 timeline-content\">\n        <h3 class=\" text-light\">Graduation - ECE</h3>\n        <p>Completed my graduation in SASTRA University, Tamilnadu, India</p>\n      </div>\n      <div class=\"col-2 col-sm-1 px-md-3 order-2 timeline-image text-md-center\">\n        <img src=\"../../../assets/images/grad.jpg\" class=\"img-fluid\" alt=\"img\">\n      </div>\n      <div class=\"col-10 col-md-5 order-1 order-md-3 py-3 timeline-date\">\n        <time>May 2007 - May 2011</time>\n      </div>\n    </div>\n    <div class=\"row no-gutters justify-content-end justify-content-md-around align-items-start  timeline-nodes\">\n      <div class=\"col-10 col-md-5 order-3 order-md-1 timeline-content\">\n        <h3 class=\" text-light\">Higher Secondary</h3>\n        <p>Completed my Intermediate (Grade- 12) in Vignan College - Guntur, AP - India</p>\n      </div>\n      <div class=\"col-2 col-sm-1 px-md-3 order-2 timeline-image text-md-center\">\n        <img src=\"../../../assets/images/college.jpg\" class=\"img-fluid\" alt=\"img\">\n      </div>\n      <div class=\"col-10 col-md-5 order-1 order-md-3 py-3 timeline-date\">\n        <time>May 2005 - Mar 2007</time>\n      </div>\n    </div>\n    <div class=\"row no-gutters justify-content-end justify-content-md-around align-items-start  timeline-nodes\">\n      <div class=\"col-10 col-md-5 order-3 order-md-1 timeline-content\">\n        <h3 class=\" text-light\">Schooling (0- 10th)</h3>\n        <p>Completed my schooling in Kennedy High School, Vijayawada, AP - India</p>\n      </div>\n      <div class=\"col-2 col-sm-1 px-md-3 order-2 timeline-image text-md-center\">\n        <img src=\"../../../assets/images/school.jpg\" class=\"img-fluid\" alt=\"img\">\n      </div>\n      <div class=\"col-10 col-md-5 order-1 order-md-3 py-3 timeline-date\">\n        <time>Till 2005</time>\n      </div>\n    </div>\n    <div class=\"row no-gutters justify-content-end justify-content-md-around align-items-start  timeline-nodes\">\n      <div class=\"col-10 col-md-5 order-3 order-md-1 timeline-content\">\n        <h3 class=\" text-light\">I am born</h3>\n        <p>I was born on 3rd Feb 1989 and my lovely life journey started since then. </p>\n      </div>\n      <div class=\"col-2 col-sm-1 px-md-3 order-2 timeline-image text-md-center\">\n        <img src=\"../../../assets/images/born.jpg\" class=\"img-fluid\" alt=\"img\">\n      </div>\n      <div class=\"col-10 col-md-5 order-1 order-md-3 py-3 timeline-date\">\n        <time>Feb 3, 1989</time>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/application-components/my-story/my-story.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/application-components/my-story/my-story.component.ts ***!
  \***********************************************************************/
/*! exports provided: MyStoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyStoryComponent", function() { return MyStoryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MyStoryComponent = /** @class */ (function () {
    function MyStoryComponent() {
    }
    MyStoryComponent.prototype.ngOnInit = function () {
    };
    MyStoryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-my-story',
            template: __webpack_require__(/*! ./my-story.component.html */ "./src/app/application-components/my-story/my-story.component.html"),
            styles: [__webpack_require__(/*! ./my-story.component.css */ "./src/app/application-components/my-story/my-story.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MyStoryComponent);
    return MyStoryComponent;
}());



/***/ }),

/***/ "./src/app/application-components/portfolio/portfolio.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/application-components/portfolio/portfolio.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".button-column button,\r\n.button-column a {\r\n  margin-bottom: 50px;\r\n}\r\n "

/***/ }),

/***/ "./src/app/application-components/portfolio/portfolio.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/application-components/portfolio/portfolio.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"titleFont\">\n  <span style=\"letter-spacing:0.05em; \">MY PORTFOLIO and RESUME</span>\n</div>\n<div class=\"flexText generalFont\">\n  <span>Here is my visual representation of my knowledge and experience</span>\n</div>\n<div class=\"leftContent_portfolio\">\n  <div class=\"flexText myFont\">\n    <h3>Professional</h3>\n  </div>\n  <div class=\"progress\">\n    <div class=\"progress-bar bg-success\" role=\"progressbar\" style=\"width: 100%\" aria-valuenow=\"100\" aria-valuemin=\"0\"\n      aria-valuemax=\"100\">100%</div>\n  </div>\n  <label class=\"flexText myFont\">Team Lead | Team Player</label>\n  <br>\n  <div class=\"progress\">\n    <div class=\"progress-bar bg-success\" role=\"progressbar\" style=\"width: 90%\" aria-valuenow=\"90\" aria-valuemin=\"0\"\n      aria-valuemax=\"100\">90%</div>\n  </div>\n  <label class=\"flexText myFont\">Front end - UI Developer</label>\n  <br>\n  <div class=\"progress\">\n    <div class=\"progress-bar bg-success\" role=\"progressbar\" style=\"width: 90%\" aria-valuenow=\"90\" aria-valuemin=\"0\"\n      aria-valuemax=\"100\">90%</div>\n  </div>\n  <label class=\"flexText myFont\">Angular | Node | Javascript</label>\n  <br>\n  <div class=\"progress\">\n    <div class=\"progress-bar bg-success\" role=\"progressbar\" style=\"width: 90%\" aria-valuenow=\"90\" aria-valuemin=\"0\"\n      aria-valuemax=\"100\">90%</div>\n  </div>\n  <label class=\"flexText myFont\">HTML | CSS | Bootstrap</label>\n  <br>\n  <div class=\"progress\">\n    <div class=\"progress-bar bg-info\" role=\"progressbar\" style=\"width: 80%\" aria-valuenow=\"80\" aria-valuemin=\"0\"\n      aria-valuemax=\"100\">80%</div>\n  </div>\n  <label class=\"flexText myFont\">Java | Spring boot | Microservices</label>\n  <br>\n  <div class=\"progress\">\n    <div class=\"progress-bar bg-info\" role=\"progressbar\" style=\"width: 80%\" aria-valuenow=\"80\" aria-valuemin=\"0\"\n      aria-valuemax=\"100\">80%</div>\n  </div>\n  <label class=\"flexText myFont\">Production Support Executive</label>\n  <br>\n  <div class=\"progress\">\n    <div class=\"progress-bar bg-info\" role=\"progressbar\" style=\"width: 85%\" aria-valuenow=\"85\" aria-valuemin=\"0\"\n      aria-valuemax=\"100\">85%</div>\n  </div>\n  <label class=\"flexText myFont\">Oracle | PLSQL Developer</label>\n  <br>\n</div>\n\n<div class=\"middleContent_portfolio\">\n  <div class=\"button-column\">\n    <a href=\"../../../assets/pdfs/Nikhil_Resume.pdf\" target=\"_blank\"> <button class=\"chipCards_portfolio\"\n        mat-stroked-button color=\"primary\">View Resume</button></a>\n    <a href=\"../../../assets/pdfs/Nikhil_Resume.pdf\" download><button class=\"chipCards_portfolio\" mat-stroked-button\n        color=\"primary\">Download Resume</button></a>\n  </div>\n</div>\n\n<div class=\"rightContent_portfolio\">\n  <div class=\"flexText myFont\">\n    <h3>Personal</h3>\n  </div>\n  <div class=\"progress\">\n    <div class=\"progress-bar bg-success\" role=\"progressbar\" style=\"width: 100%\" aria-valuenow=\"100\" aria-valuemin=\"0\"\n      aria-valuemax=\"100\">100%</div>\n  </div>\n  <label class=\"flexText myFont\">Love with Family</label>\n  <br>\n  <div class=\"progress\">\n    <div class=\"progress-bar bg-success\" role=\"progressbar\" style=\"width: 100%\" aria-valuenow=\"100\" aria-valuemin=\"0\"\n      aria-valuemax=\"100\">100%</div>\n  </div>\n  <label class=\"flexText myFont\">As a son | As a father</label>\n  <br>\n  <div class=\"progress\">\n    <div class=\"progress-bar bg-success\" role=\"progressbar\" style=\"width: 100%\" aria-valuenow=\"100\" aria-valuemin=\"0\"\n      aria-valuemax=\"100\">100%</div>\n  </div>\n  <label class=\"flexText myFont\">Sports - Cricket</label>\n  <br>\n  <div class=\"progress\">\n    <div class=\"progress-bar bg-warning\" role=\"progressbar\" style=\"width: 70%\" aria-valuenow=\"70\" aria-valuemin=\"0\"\n      aria-valuemax=\"100\">70%</div>\n  </div>\n  <label class=\"flexText myFont\">Sports - Badminton</label>\n  <br>\n  <div class=\"progress\">\n    <div class=\"progress-bar bg-info\" role=\"progressbar\" style=\"width: 90%\" aria-valuenow=\"90\" aria-valuemin=\"0\"\n      aria-valuemax=\"100\">90%</div>\n  </div>\n  <label class=\"flexText myFont\">Games - NFS, Tekken3</label>\n  <br>\n</div>"

/***/ }),

/***/ "./src/app/application-components/portfolio/portfolio.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/application-components/portfolio/portfolio.component.ts ***!
  \*************************************************************************/
/*! exports provided: PortfolioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortfolioComponent", function() { return PortfolioComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PortfolioComponent = /** @class */ (function () {
    function PortfolioComponent() {
    }
    PortfolioComponent.prototype.ngOnInit = function () {
    };
    PortfolioComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-portfolio',
            template: __webpack_require__(/*! ./portfolio.component.html */ "./src/app/application-components/portfolio/portfolio.component.html"),
            styles: [__webpack_require__(/*! ./portfolio.component.css */ "./src/app/application-components/portfolio/portfolio.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PortfolioComponent);
    return PortfolioComponent;
}());



/***/ }),

/***/ "./src/app/common-components/hire-dialog/hire-dialog.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/common-components/hire-dialog/hire-dialog.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* .mat-dialog-content{\r\n    font : 16px  'Calibri';\r\n    color: red;  \r\n    align-content: center;\r\n    align-items: center;\r\n    margin-top: 5%;\r\n    max-width: 100%;\r\n} */\r\n\r\n \r\n.contact-form { \r\n    width: 100%;\r\n  }\r\n\r\n \r\n.input-form-width {\r\n    width: 30%;\r\n    margin-right: 3%;\r\n    float: left;\r\n  }\r\n\r\n \r\n.mat-stroked-button{\r\n    width: 40%;\r\n}"

/***/ }),

/***/ "./src/app/common-components/hire-dialog/hire-dialog.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/common-components/hire-dialog/hire-dialog.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div></div>\n\n<div mat-dialog-content class=\"flexText myFont\" style=\"font-size: 23px;\">\n\n  I'm glad to hear that you would like to hire me. Please send your details to discuss further. </div>\n<div>\n  <br>\n  <form  #contactForm=\"ngForm\" class=\"contact-form\">\n    <div>\n      <mat-form-field class=\"input-form-width\">\n        <input matInput placeholder=\"Your Name\" name=\"name\" [(ngModel)]=\"contactData.name\">\n      </mat-form-field>\n    </div>\n    <div>\n      <mat-form-field class=\"input-form-width\">\n        <input matInput placeholder=\"Mobile Number\" name=\"mobile\" [(ngModel)]=\"contactData.mobile\">\n      </mat-form-field>\n    </div>\n    <div>\n      <mat-form-field class=\"input-form-width\" >\n        <input matInput placeholder=\"Email id\" name=\"email\" [(ngModel)]=\"contactData.email\">\n      </mat-form-field>\n    </div>\n\n    <div>\n      <mat-form-field style=\"width: 100%;\">\n        <mat-label>Enter your message</mat-label>\n        <textarea matInput cdkTextareaAutosize #autosize=\"cdkTextareaAutosize\" cdkAutosizeMinRows=\"2\"\n          cdkAutosizeMaxRows=\"5\" value=\" Dear Nikhil,\n\n                             We looked at your profile and interested in discussing further to hire you.\n      \n      Thank you. \" name=\"message\" [(ngModel)]=\"contactData.message\"></textarea>\n      </mat-form-field>\n    </div>\n  </form>\n\n  <div style=\"margin-left: 15%; margin-top: 3%;\">\n    <button mat-stroked-button (click)=\"dialogRef.close(false)\">Cancel</button>\n    <button mat-stroked-button color=\"primary\" style=\"margin-left: 10%;color:green; border-color: green;\"\n      (click)=\"dialogRef.close(true); sendEmail()\">\n      Submit to Nikhil <img src=\"../../../assets/images/tick.png\" width=\"25px\" height=\"25px\"> </button>\n  </div>\n</div>\n<br>"

/***/ }),

/***/ "./src/app/common-components/hire-dialog/hire-dialog.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/common-components/hire-dialog/hire-dialog.component.ts ***!
  \************************************************************************/
/*! exports provided: HireDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HireDialogComponent", function() { return HireDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _models_contactDetails__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/contactDetails */ "./src/app/models/contactDetails.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_shared_shared_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/shared/shared.service */ "./src/app/services/shared/shared.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HireDialogComponent = /** @class */ (function () {
    function HireDialogComponent(dialogRef, sharedService) {
        this.dialogRef = dialogRef;
        this.sharedService = sharedService;
        this.contactData = new _models_contactDetails__WEBPACK_IMPORTED_MODULE_2__["ContactDetails"]();
    }
    HireDialogComponent.prototype.ngOnInit = function () {
    };
    HireDialogComponent.prototype.sendEmail = function () {
        console.log('Contact form request : ' + JSON.stringify(this.contactData));
        this.sharedService.post("sendEmail", this.contactData).subscribe(function (data) {
            console.log('email sent successfully');
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('contactForm'),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"])
    ], HireDialogComponent.prototype, "contactForm", void 0);
    HireDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-hire-dialog',
            template: __webpack_require__(/*! ./hire-dialog.component.html */ "./src/app/common-components/hire-dialog/hire-dialog.component.html"),
            styles: [__webpack_require__(/*! ./hire-dialog.component.css */ "./src/app/common-components/hire-dialog/hire-dialog.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], _services_shared_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"]])
    ], HireDialogComponent);
    return HireDialogComponent;
}());



/***/ }),

/***/ "./src/app/common-components/page-not-found/page-not-found.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/common-components/page-not-found/page-not-found.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".PageCss{ \r\n    text-align: center;\r\n    font-weight: 900;\r\n    font-style: initial;\r\n    font-family: 'Footlight MT Light';\r\n    font-size: 25px; \r\n    color: rgb(24, 97, 131);    \r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/common-components/page-not-found/page-not-found.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/common-components/page-not-found/page-not-found.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"PageCss\">\n  <h3>Oops, The page you are looking for is not found.</h3><br>\n  <h3>Are you looking for Nikhil's Profile ?\n    <a href=\"./home\" style=\"align-items: center\"><button mat-stroked-button>Launch Nikhil's Profile</button></a>\n\n  </h3>\n</div>"

/***/ }),

/***/ "./src/app/common-components/page-not-found/page-not-found.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/common-components/page-not-found/page-not-found.component.ts ***!
  \******************************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    PageNotFoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-page-not-found',
            template: __webpack_require__(/*! ./page-not-found.component.html */ "./src/app/common-components/page-not-found/page-not-found.component.html"),
            styles: [__webpack_require__(/*! ./page-not-found.component.css */ "./src/app/common-components/page-not-found/page-not-found.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "./src/app/layout-components/header/header.component.css":
/*!***************************************************************!*\
  !*** ./src/app/layout-components/header/header.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/layout-components/header/header.component.html":
/*!****************************************************************!*\
  !*** ./src/app/layout-components/header/header.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"height: 5%;\"></div>"

/***/ }),

/***/ "./src/app/layout-components/header/header.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/layout-components/header/header.component.ts ***!
  \**************************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/layout-components/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/layout-components/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/layout-components/home/home.component.css":
/*!***********************************************************!*\
  !*** ./src/app/layout-components/home/home.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".top-menu{\r\n    display: -webkit-flex;\r\n    display: flex;  \r\n    -webkit-justify-content: center;  \r\n            justify-content: center;  \r\n    -webkit-flex-flow: row wrap;  \r\n            flex-flow: row wrap;\r\n    -webkit-align-content: flex-end;\r\n            align-content: flex-end;\r\n}\r\n\r\n.tab-icon {\r\n    margin-right: 8px;\r\n  }\r\n\r\n@media (max-width:599px){\r\n    .mat-tab-group{\r\n        white-space: nowrap;\r\n        overflow: auto;\r\n        -webkit-align-content: center;\r\n                align-content: center;\r\n    }\r\n  }"

/***/ }),

/***/ "./src/app/layout-components/home/home.component.html":
/*!************************************************************!*\
  !*** ./src/app/layout-components/home/home.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"top-menu\">\n  <mat-tab-group (selectedTabChange)=\"changeBackground($event)\">\n    <mat-tab>\n      <ng-template mat-tab-label>\n        <mat-icon class=\"tab-icon\">person_pin</mat-icon>\n        Intro\n      </ng-template>\n      <app-intro></app-intro>\n    </mat-tab>\n\n    <mat-tab>\n      <ng-template mat-tab-label>\n        <mat-icon class=\"tab-icon\">explore</mat-icon>\n        Discover me\n      </ng-template>\n      <app-my-story></app-my-story>\n    </mat-tab>\n\n    <mat-tab>\n      <ng-template mat-tab-label>\n        <mat-icon class=\"tab-icon\">ballot</mat-icon>\n        My Portfolio\n      </ng-template>\n      <app-portfolio></app-portfolio>\n    </mat-tab>\n\n    <mat-tab>\n      <ng-template mat-tab-label>\n        <mat-icon class=\"tab-icon\">highlight</mat-icon>\n        Career Highlights\n      </ng-template>\n      <app-highlights></app-highlights>\n    </mat-tab>\n\n    <mat-tab>\n      <ng-template mat-tab-label>\n        <mat-icon class=\"tab-icon\">contact_mail</mat-icon>\n        Contact\n      </ng-template>\n      <app-contact></app-contact>\n    </mat-tab>\n  </mat-tab-group>\n</div>"

/***/ }),

/***/ "./src/app/layout-components/home/home.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/layout-components/home/home.component.ts ***!
  \**********************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_spinner_spinner_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/spinner/spinner.service */ "./src/app/services/spinner/spinner.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = /** @class */ (function () {
    function HomeComponent(spinnerService) {
        this.spinnerService = spinnerService;
        this.selectedTab = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    HomeComponent.prototype.ngOnInit = function () {
        // this.spinnerService.display(true);
        setTimeout(function () {
            // this.spinnerService.display(false);
        }, 3000);
    };
    HomeComponent.prototype.changeBackground = function (event) {
        console.log('event is ' + event.index);
        this.tabIndex = event.index;
        this.selectedTab.emit(this.tabIndex);
        console.log('event is emitted');
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], HomeComponent.prototype, "selectedTab", void 0);
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/layout-components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/layout-components/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_spinner_spinner_service__WEBPACK_IMPORTED_MODULE_1__["SpinnerService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/material-module/material.module.ts":
/*!****************************************************!*\
  !*** ./src/app/material-module/material.module.ts ***!
  \****************************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            exports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatBadgeModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatBottomSheetModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButtonToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatStepperModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDividerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatRippleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTreeModule"],
            ]
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "./src/app/models/contactDetails.ts":
/*!******************************************!*\
  !*** ./src/app/models/contactDetails.ts ***!
  \******************************************/
/*! exports provided: ContactDetails */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactDetails", function() { return ContactDetails; });
var ContactDetails = /** @class */ (function () {
    function ContactDetails() {
    }
    return ContactDetails;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _layout_components_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../layout-components/home/home.component */ "./src/app/layout-components/home/home.component.ts");
/* harmony import */ var _common_components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common-components/page-not-found/page-not-found.component */ "./src/app/common-components/page-not-found/page-not-found.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var RoutingModule = /** @class */ (function () {
    function RoutingModule() {
    }
    RoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot([
                    { path: 'home', component: _layout_components_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"],
                        children: [] },
                    { path: '', redirectTo: 'home', pathMatch: 'full' },
                    // {path: 'home' , redirectTo: 'home' , pathMatch:'full'},
                    { path: '**', component: _common_components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_4__["PageNotFoundComponent"] }
                ])
            ],
            declarations: [],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], RoutingModule);
    return RoutingModule;
}());



/***/ }),

/***/ "./src/app/services/shared/shared.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/shared/shared.service.ts ***!
  \***************************************************/
/*! exports provided: SharedService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedService", function() { return SharedService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment.prod */ "./src/environments/environment.prod.ts");
/* harmony import */ var rxjs_Rx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/Rx */ "./node_modules/rxjs-compat/_esm5/Rx.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SharedService = /** @class */ (function () {
    function SharedService(httpClient) {
        this.httpClient = httpClient;
        this.getConfigs();
    }
    SharedService.prototype.getConfigs = function () {
        this.apiUrl = _environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].prd.apiEndpoint;
    };
    SharedService.prototype.get = function (serviceUrl) {
        console.log('GET REQUEST ');
        return this.httpClient.get(this.apiUrl)
            .catch(this.handleError);
    };
    SharedService.prototype.post = function (serviceUrl, resource) {
        console.log('POST REQUEST - JSON' + JSON.stringify(resource) + '  for URL ' + this.apiUrl + serviceUrl);
        return this.httpClient.post(this.apiUrl + serviceUrl, resource)
            .catch(this.handleError);
    };
    SharedService.prototype.handleError = function (error) {
        console.log('Error occured');
        return rxjs_Rx__WEBPACK_IMPORTED_MODULE_3__["Observable"].throw(error);
    };
    SharedService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], SharedService);
    return SharedService;
}());



/***/ }),

/***/ "./src/app/services/spinner/spinner.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/services/spinner/spinner.service.ts ***!
  \*****************************************************/
/*! exports provided: SpinnerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpinnerService", function() { return SpinnerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SpinnerService = /** @class */ (function () {
    function SpinnerService() {
        this.status = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false);
    }
    SpinnerService.prototype.display = function (value) {
        this.status.next(value);
    };
    SpinnerService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], SpinnerService);
    return SpinnerService;
}());



/***/ }),

/***/ "./src/environments/environment.prod.ts":
/*!**********************************************!*\
  !*** ./src/environments/environment.prod.ts ***!
  \**********************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
var environment = {
    production: true,
    prd: {
        apiEndpoint: 'https://email-generator-nodejs.herokuapp.com/'
    }
};


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
var environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\projects\workspaces\personalWebsite\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map