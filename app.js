import config from "./app/config";

import getSampleData from "./app/services/sample-data.service";

import sampleComponent from "./app/components/sample.component";
import sampleSubComponent from "./app/components/sample-sub.component";

import uniquePipe from "./app/pipes/unique.pipe.js";

angular
  .module("sampleApp", ["ngRoute"])
  .config(["$locationProvider", "$routeProvider", config])
  .service("getSampleData", getSampleData)
  .component("sampleComponent", sampleComponent)
  .component("sampleSubComponent", sampleSubComponent)
  .filter("uniquePipe", uniquePipe);
