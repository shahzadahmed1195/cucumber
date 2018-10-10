$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("test.Feature.feature");
formatter.feature({
  "line": 1,
  "name": "Simple feature",
  "description": "",
  "id": "simple-feature",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Go to QAShahin Youtube Page",
  "description": "",
  "id": "simple-feature;go-to-qashahin-youtube-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "I go to \"QASHAHIN\"",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I should be on \"QAShahin\" youtube page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "QASHAHIN",
      "offset": 9
    }
  ],
  "location": "StepDefinition.i_go_to(String)"
});
formatter.result({
  "duration": 11768502082,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "QAShahin",
      "offset": 16
    }
  ],
  "location": "StepDefinition.i_should_be_on_youtube_page(String)"
});
formatter.result({
  "duration": 2182365813,
  "status": "passed"
});
});