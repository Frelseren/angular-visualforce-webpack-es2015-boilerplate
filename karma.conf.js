module.exports = function(config) {
  config.set({

    basePath: ".",

    files: [
      "dist/vendor.bundle.js",
      "node_modules/angular-mocks/angular-mocks.js",
      "dist/app.bundle.js",
      "test/*.spec.js",
    ],

    autoWatch: true,

    frameworks: ["jasmine"],

    browsers: ["Chrome"],

    plugins: [
      "karma-chrome-launcher",
      "karma-jasmine"
    ],

  });
}
