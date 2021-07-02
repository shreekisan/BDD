$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/login.feature");
formatter.feature({
  "line": 1,
  "name": "validate Techfios login functionality",
  "description": "",
  "id": "validate-techfios-login-functionality",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 5,
      "value": "#Scenario: User should be able to login with valid credentials."
    },
    {
      "line": 6,
      "value": "#\tWhen User enters username as \"demo@techios.com\""
    },
    {
      "line": 7,
      "value": "#\tWhen User enters password as \"abc123\""
    },
    {
      "line": 8,
      "value": "#\tWhen User cliks on signin button"
    },
    {
      "line": 9,
      "value": "#\tThen User should be on dashbaord page."
    },
    {
      "line": 10,
      "value": "# for parametrized the data secenario outline is used."
    }
  ],
  "line": 13,
  "name": "User should be able to login with valid credentials.",
  "description": "",
  "id": "validate-techfios-login-functionality;user-should-be-able-to-login-with-valid-credentials.",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 14,
  "name": "User enters \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "User cliks on signin button",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "User should be on dashbaord page.",
  "keyword": "Then "
});
formatter.examples({
  "line": 17,
  "name": "",
  "description": "",
  "id": "validate-techfios-login-functionality;user-should-be-able-to-login-with-valid-credentials.;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 18,
      "id": "validate-techfios-login-functionality;user-should-be-able-to-login-with-valid-credentials.;;1"
    },
    {
      "cells": [
        "demo@techfios.com",
        "abc123"
      ],
      "line": 19,
      "id": "validate-techfios-login-functionality;user-should-be-able-to-login-with-valid-credentials.;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3411263400,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User is on the techfios login page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinition.User_is_on_the_techfios_login_page()"
});
formatter.result({
  "duration": 1475340900,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "User should be able to login with valid credentials.",
  "description": "",
  "id": "validate-techfios-login-functionality;user-should-be-able-to-login-with-valid-credentials.;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 14,
  "name": "User enters \"demo@techfios.com\" and \"abc123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "User cliks on signin button",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "User should be on dashbaord page.",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "demo@techfios.com",
      "offset": 13
    },
    {
      "val": "abc123",
      "offset": 37
    }
  ],
  "location": "StepDefinition.user_enters_and(String,String)"
});
formatter.result({
  "duration": 186228700,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_cliks_on_signin_button()"
});
formatter.result({
  "duration": 1591048500,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_should_be_on_dashbaord_page()"
});
formatter.result({
  "duration": 9242800,
  "error_message": "java.lang.AssertionError: expected [Dashboard- iBilling--] but found [Dashboard- iBilling]\r\n\tat org.testng.Assert.fail(Assert.java:94)\r\n\tat org.testng.Assert.failNotEquals(Assert.java:494)\r\n\tat org.testng.Assert.assertEquals(Assert.java:123)\r\n\tat org.testng.Assert.assertEquals(Assert.java:176)\r\n\tat org.testng.Assert.assertEquals(Assert.java:186)\r\n\tat steps.StepDefinition.user_should_be_on_dashbaord_page(StepDefinition.java:62)\r\n\tat ✽.Then User should be on dashbaord page.(features/login.feature:16)\r\n",
  "status": "failed"
});
});