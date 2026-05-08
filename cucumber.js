module.exports = {

  default: {

    require: [
      "support/*.ts",
      "features/step-definitions/*.ts"
    ],

    requireModule: ["ts-node/register"],

    format: [
      "progress",
      "html:reports/cucumber-report.html"
    ],

    paths: [
      "features/*.feature"
    ],

    timeout: 30000

  }

};