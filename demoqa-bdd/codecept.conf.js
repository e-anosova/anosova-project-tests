const { setHeadlessWhen, setCommonPlugins } = require('@codeceptjs/configure');

setHeadlessWhen(process.env.HEADLESS);
setCommonPlugins();

exports.config = {
  name: 'demoqa-bdd',
  output: './output',
  helpers: {
    Playwright: {
      url: 'https://demoqa.com',
      show: true,
      browser: 'chromium'
    }
  },
  gherkin: {
    features: './features/*.feature',
    steps: './step_definitions/*.steps.js'
  },
  include: {
    I: './steps_file.js'
  }
  };
