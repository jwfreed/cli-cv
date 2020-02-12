const TerminalKit = require('terminal-kit');

const term = TerminalKit.terminal;

const menu = (obj) => {
  const menuItems = Object.keys(obj);
  console.log(menuItems);
  term.singleColumnMenu(menuItems, (error, response) => {
    const selection = response.selectedText;
    if (`obj.${selection}` === 'string') {
      return `obj.${selection}`;
    }
    return menu(`obj.${selection}`);
  });
};


module.exports = menu;
