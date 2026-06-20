// Custom reporter emits a concise run summary for build logs.
class CustomReporter {
  onBegin(config, suite) {
    console.log(`Custom Reporter: ${suite.allTests().length} tests scheduled.`);
  }

  onTestEnd(test, result) {
    console.log(`Custom Reporter: ${test.title} - ${result.status}`);
  }

  onEnd(result) {
    console.log(`Custom Reporter: finished with status ${result.status}.`);
  }
}

module.exports = CustomReporter;
