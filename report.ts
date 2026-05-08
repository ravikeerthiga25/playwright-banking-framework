import report from "multiple-cucumber-html-reporter";

report.generate({
  jsonDir: "reports/json",
  reportPath: "reports/html",

  metadata: {
    browser: {
      name: "chrome",
      version: "latest",
    },
    device: "Local Machine",
    platform: {
      name: "windows",
      version: "11",
    },
  },

  customData: {
    title: "ParaBank Automation Report",
    data: [
      { label: "Project", value: "Playwright Banking Framework" },
      { label: "Framework", value: "Playwright + Cucumber + TypeScript" },
      { label: "Tester", value: "Keerthiga R" },
    ],
  },
});