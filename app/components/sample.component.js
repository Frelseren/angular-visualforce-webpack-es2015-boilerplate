export default {
  "templateUrl": "/templates/sample.component.html",
  "controller": ["getSampleData", function sampleCtrl(getSampleData) {
    this.heroes = getSampleData.heroes;
  }]
}