module.exports = {
  reporters: [
    "default",
    [
      "jest-html-reporters",
      {
        publicPath: "./reports/html-report",
        filename: "index.html",
        openReport: true,
      },
    ],
  ],
};
