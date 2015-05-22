var webdriverjs = require('webdriverjs');

// ['chrome'].forEach(detectBrowser);
['firefox', 'chrome'].forEach(detectBrowser);
// ['internet explorer', 'firefox', 'chrome'].forEach(detectBrowser);

function detectBrowser(name) {
  webdriverjs
    .remote({
      host: '192.168.59.103', // docker host IP
      desiredCapabilities: {
        browserName: name
      }
    })
    .init()
    .url('http://www.whatismybrowser.com/')
    .getText('.detection-primary .string-major', function(err, text) {
        console.log(name, 'browser was detected as', text);
    })
    .end();
}
