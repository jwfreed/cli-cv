const TerminalKit = require('terminal-kit');

const term = TerminalKit.terminal;

const cv = require('./cv.json');

term.on('key', (key) => {
  if (key === 'CTRL_C') {
    process.exit();
  }
});

const menu = (obj, parentObj) => {
  const menuItems = Object.keys(obj);

  term.singleColumnMenu(menuItems, (error, response) => {
    term.clear();
    const selectedKey = response.selectedText;
    const selectedResult = obj[selectedKey];

    if (typeof selectedResult === typeof '') {
      if (selectedResult === 'quit') {
        return process.exit();
      }

      term.bold.cyan(selectedResult);

      if (parentObj) {
        return menu(parentObj);
      }

      return menu(obj);
    }

    if (Array.isArray(selectedResult)) {
      selectedResult.forEach((item) => term.red(`${item}\n`));

      if (parentObj) {
        return menu(parentObj);
      }
      return menu(obj);
    }

    term.bold.green(selectedKey);
    return menu(selectedResult, obj);
  });
};

menu(cv);
