const TerminalKit = require('terminal-kit');
const Menu = require('./menu');

const cv = require('./cv.json');

const term = TerminalKit.terminal;

// pass an object
// get all keys
// show as a menu
// on selection, take original object[selected key]
// if string, render
// if an object, call Menu function recursively

term.on('key', (name) => {
  if (name === 'CTRL_C') {
    term.grabInput(false);
    setTimeout(() => {
      process.exit();
    }, 100);
  }
});

term.on('key', (name) => {
  if (name === 'CTRL_A') {
    Menu();
  }
});

const experienceArray = [
  'Tablee Co.',
  'Potbox, Inc.',
  'Herzog & Freed Capital, Inc.',
  'Main',
];

const tableeCo = 'Director of Business Development\n Feb 2016 - Dec 2017\n New York, NY\n Responsibilities:\n Collaborated with founders on business expansion, partnership development, and acquisition strategies.\n Interfaced with 3rd party vendors, developed business partnerships and opportunities for acquisition.\n Implemented CRM processes and an integrated marketing and sales plan, promoting product and brand awareness.\n Used Agile CRM to run email campaigns: earning 26% open and 2% click-through rates, and 96% reputation rating.';
const potboxInc = 'Business Development Consultant\n Feb 2018 - Apr 2018\n New York, NY\n Responsibilities:\n Collaborated with founders on business expansion, partnership development, and acquisition strategies.\n Interfaced with 3rd party vendors, developed business partnerships and opportunities for acquisition.\n Implemented CRM processes and an integrated marketing and sales plan, promoting product and brand awareness.\n Used Reply.io and Pipedrive to manage affiliate acquisition, achieving subscriber growth of 300% in 18 months.\n Developed pro forma financials for investors, including 5-year P&L projections, monthly cash flow, and sales.';
const herzogAndFreedCapitalInc = 'President & Founding Partner\n Aug 2011 - May 2016\n New York, NY\n Responsibilities:\n Co-founded and grew a company to incubate start-ups and create an innovative captive insurance product.\n IConsulted to diverse start-ups with investment banking & operational guidance,  stakeholder communication, and accepting roles on the executive teams when appropriate.\n Implemented CRM processes and an integrated marketing and sales plan, promoting product and brand awarenessUsed Agile method to manage cross-functional teams of up to 10 people through product development life-cycles, helping to secure a Certificate of Authority by the Delaware Captive Insurance Department.\n Identified and educated potential distribution partners on a novel product, persuading Raymond James Financial to move forward with due diligence on the product’s investment engine and structure.';

const educationArray = [
  'Flatiron School',
  'Bentley University',
  'Boston University, BUx',
  'IIM Bangalore, EdX',
  'NYU School of Professional Studies',
];
const flatironSchool = 'Field: Software Engineering\n Jan 2019 - Apr 2019\n Brooklyn, NY';
const bentleyUniversity = 'Field: BSc. Finance\n Aug 2002 - May 2006\n Waltham, MA';
const bostonUniversityBUx = 'Field: Product Management with Lean, Agile and System Design Thinking\n 2018\n Online';
const iIMBangaloreEdX = 'Field: Customer Relationship Management\n 2018\n Online';
const nYUSchoolOfProfessionalStudies = 'Field: Behavioral Economics\n 2019\n New York, NY';

const showEducation = () => {
  term.singleColumnMenu(educationArray, (error, response) => {
    const selection = response.selectedText;
    switch (selection) {
      case 'Flatiron School':
        term.blue(flatironSchool);
        break;
      case 'Bentley University':
        term.green(bentleyUniversity);
        break;
      case 'Boston University, BUx':
        term.red(bostonUniversityBUx);
        break;
      case 'IIM Bangalore, EdX':
        term.red(iIMBangaloreEdX);
        break;
      case 'NYU School of Professional Studies':
        term.blue(nYUSchoolOfProfessionalStudies);
        break;

      default:
        break;
    }
    showEducation();
  });
};

const github = 'https://github.com/jonathanwfreed';
const linkedin = 'https://www.linkedin.com/in/jonathanwfreed/';

const header = () => {
  term.bold.cyan('Hi, my name is Jonathan\n');
  term.bold.red('CTRL C to quit\n');
  term.bold.green('CTRL A for Main Menu \n\n');
};

// const showMenu = () => {
//   const main = [
//     'experience',
//     'education',
//     'projects',
//     'skills',
//     'github',
//     'linkedin',
//   ];
//   term.singleColumnMenu(main, (error, response) => {
//     header();
//     const selection = response.selectedText;

//     switch (selection) {
//       case 'experience':
//         showExperiences();
//         break;
//       case 'education':
//         showEducation();
//         break;
//       case 'projects':
//         term.bold.red();
//         break;
//       case 'skills':
//         term.bold.red();
//         break;
//       case 'github':
//         term.bold.red(github);
//         break;
//       case 'linkedin':
//         term.bold.red(linkedin);
//         break;
//       default:
//         break;
//     }
//   });
// };

// const showExperiences = () => {
//   term.singleColumnMenu(experienceArray, (error, response) => {
//     const selection = response.selectedText;
//     switch (selection) {
//       case 'Tablee Co.':
//         term.wrap.green(tableeCo);
//         break;
//       case 'Potbox, Inc.':
//         term.wrap.red(potboxInc);
//         break;
//       case 'Herzog & Freed Capital, Inc.':
//         term.wrap.blue(herzogAndFreedCapitalInc);
//         break;
//       case 'Main':
//         term.clear();
//         showMenu();
//         break;
//       default:
//         break;
//     }
//   });
// };

header();
Menu(cv);
