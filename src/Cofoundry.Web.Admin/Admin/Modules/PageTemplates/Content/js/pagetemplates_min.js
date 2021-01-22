angular.module("cms.pageTemplates",["ngRoute","cms.shared"]).constant("_",window._).constant("pageTemplates.modulePath","/Admin/Modules/PageTemplates/Js/"),angular.module("cms.pageTemplates").config(["$routeProvider","shared.routingUtilities","pageTemplates.modulePath",function(e,t,a){t.registerCrudRoutes(e,a,"PageTemplate")}]),angular.module("cms.pageTemplates").factory("pageTemplates.pageTemplateService",["$http","shared.serviceBase",function(t,e){var a={},r=e+"page-templates";return a.getAll=function(e){return t.get(r,{params:e})},a.getById=function(e){return t.get(r+"/"+e)},a}]),angular.module("cms.pageTemplates").controller("PageTemplateDetailsController",["$routeParams","$location","shared.LoadState","shared.urlLibrary","pageTemplates.pageTemplateService","pageTemplates.modulePath",function(t,e,a,r,n,l){var o=this;o.urlLibrary=r,o.editMode=!1,o.globalLoadState=new a,o.formLoadState=new a(!0),function(){var e=t.id;return n.getById(e).then(function(e){o.pageTemplate=e,o.command=function(e){return _.pick(e,"pageTemplateId","name","description")}(e),o.editMode=!1})}().then(function(e){o.globalLoadState.off(),e&&_.isFunction(e.off)&&e.off()}.bind(null,o.formLoadState))}]),angular.module("cms.pageTemplates").controller("PageTemplateListController",["_","shared.LoadState","shared.SearchQuery","shared.urlLibrary","pageTemplates.pageTemplateService",function(t,e,a,r,n){var l=this;function o(e){l.isFilterVisible=t.isUndefined(e)?!l.isFilterVisible:e}function i(){o(!1),s()}function s(){return l.gridLoadState.on(),n.getAll(l.query.getParameters()).then(function(e){l.result=e,l.gridLoadState.off()})}l.urlLibrary=r,l.gridLoadState=new e,l.query=new a({onChanged:i}),l.filter=l.query.getFilters(),l.toggleFilter=o,o(!1),s()}]);