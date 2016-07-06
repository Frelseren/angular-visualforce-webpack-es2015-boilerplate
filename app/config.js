export default function config($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix("!");
  $routeProvider
    .when("/", {
      "template": "<sample-component></sample-component>",
    })
    .otherwise("/");
}
