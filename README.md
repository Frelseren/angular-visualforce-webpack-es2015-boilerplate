# angular-visualforce-webpack-es2015-boilerplate

Simple boilerplate for Angular + Salesforce application.

Technology used:
<ul>
  <li>Angular 1.5+<br>Using new `components` instead of `directive` and `controller`. DOM manipulation will be made inside component's controller using the `$element` variable and `$postLink` trigger.
  </li>
  <li>Webpack module bundler</li>
  <li>Babel<br>Using `babel-loader` for webpack which allows take advantage of es2015 module system</li>
  <li>Karma<br>Using `karma` with `angular-mock` for unit testing.</li>
</ul>

Get started with Angular 1.x + Salesforce.

<ol>
  <li>Create an apex class in Salesforce which ouputs JSON object.</li>
  <li>Create a static resorce which contains `css`, `img`, `templates` and `vendor.bundle.js` files.</li>
  <li>Create a visualforce page.</li>
  <li>Reference previously created controller</li>
  <li>Create a global `RESOURCE_ROOT` variable (it's one way to reference the Angular templates) with path to our static resource.<br><code>var window.RESOURCE_ROOT = {!URLFOR($Resource.SampleStatic, '')}</code></li>
  <li>Copy html markup from `index.html` to visualforce page</li>
  <li>Copy and paste `app.js` code into our page</li>
  <li>Change angular objects to salesforce objects.<br><code>this.heroes = {!heroesJSON}</code></li>
  <li>Add `RESOURCE_ROOT' to the path to angular templates.<br>
  <code>"templateUrl":RESOURCE_ROOT+"/dist/templates/sample.component.html"</code></li>
</ol>

`SampleController.cls` and `SampleAngularApp.page` files contain required changes.
