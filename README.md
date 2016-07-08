# angular-visualforce-webpack-es2015-boilerplate

Simple boilerplate for Angular + Salesforce application.

Technology used:
  * Angular 1.5+
    * Using new `components` instead of `directive` and `controller`. DOM manipulation will be made inside component's controller using the `$element` variable and `$postLink` trigger.
  
  * Webpack module bundler
  * Babel
    * Using `babel-loader` for webpack which allows take advantage of es2015 module system
  * Karma
    * Using `karma` with `angular-mock` for unit testing.

Get started with Angular 1.x + Salesforce.

  1. Create an apex class in Salesforce which ouputs JSON object.
  2. Create a static resorce which contains `css`, `img`, `templates` and `vendor.bundle.js` files.
  3. Create a visualforce page.
  4. Reference previously created controller
  5. Create a global `RESOURCE_ROOT` variable (it's one way to reference the Angular templates) with path to our static resource.
    * `var window.RESOURCE_ROOT = {!URLFOR($Resource.SampleStatic, '')}`
  6. Copy html markup from `index.html` to visualforce page.
  7. Copy and paste `app.js` code into our page.
  8. Change angular objects to salesforce objects.
    * `this.heroes = {!heroesJSON}`
  9. Add `RESOURCE_ROOT` to the path to angular templates.
    * `"templateUrl":RESOURCE_ROOT+"/dist/templates/sample.component.html"`

`SampleController.cls` and `SampleAngularApp.page` files contain required changes.
