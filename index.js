// display intro
// menu
// - past experience
// - education
// - technical projects
// - technical skills
// on menu item select, display

const TerminalKit = require('terminal-kit');

const term = TerminalKit.terminal;

term.on('key', function(name, matches, data) {
  if (name === 'CTRL_C') {
    term.grabInput(false);
    setTimeout(() => {
      process.exit();
    }, 100);
  }
});

term.on('key', function(name, matches, data) {
  if (name === 'CTRL_A') {
    showMenu();
  }
});

const experienceArray = [
  'Tablee Co.',
  'Potbox, Inc.',
  'Herzog & Freed Capital, Inc.',
  'Main'
];

const tableeCo =
  'Director of Business Development\n Feb 2016 - Dec 2017\n New York, NY\n Responsibilities:\n Collaborated with founders on business expansion, partnership development, and acquisition strategies.\n Interfaced with 3rd party vendors, developed business partnerships and opportunities for acquisition.\n Implemented CRM processes and an integrated marketing and sales plan, promoting product and brand awareness.\n Used Agile CRM to run email campaigns: earning 26% open and 2% click-through rates, and 96% reputation rating.';
const potboxInc =
  'Business Development Consultant\n Feb 2018 - Apr 2018\n New York, NY\n Responsibilities:\n Collaborated with founders on business expansion, partnership development, and acquisition strategies.\n Interfaced with 3rd party vendors, developed business partnerships and opportunities for acquisition.\n Implemented CRM processes and an integrated marketing and sales plan, promoting product and brand awareness.\n Used Reply.io and Pipedrive to manage affiliate acquisition, achieving subscriber growth of 300% in 18 months.\n Developed pro forma financials for investors, including 5-year P&L projections, monthly cash flow, and sales.';
const herzogAndFreedCapitalInc =
  'President & Founding Partner\n Aug 2011 - May 2016\n New York, NY\n Responsibilities:\n Co-founded and grew a company to incubate start-ups and create an innovative captive insurance product.\n IConsulted to diverse start-ups with investment banking & operational guidance,  stakeholder communication, and accepting roles on the executive teams when appropriate.\n Implemented CRM processes and an integrated marketing and sales plan, promoting product and brand awarenessUsed Agile method to manage cross-functional teams of up to 10 people through product development life-cycles, helping to secure a Certificate of Authority by the Delaware Captive Insurance Department.\n Identified and educated potential distribution partners on a novel product, persuading Raymond James Financial to move forward with due diligence on the product’s investment engine and structure.';

const showExperiences = () => {
  term.singleColumnMenu(experienceArray, function(error, response) {
    let selection = response.selectedText;
    switch (selection) {
      case 'Tablee Co.':
        term.wrap.green(tableeCo);
        break;
      case 'Potbox, Inc.':
        term.wrap.red(potboxInc);
        break;
      case 'Herzog & Freed Capital, Inc.':
        term.wrap.blue(herzogAndFreedCapitalInc);
        break;
      case 'Main':
        term.clear();
        showMenu();

      default:
        break;
    }
    // showExperiences();
  });
};

const educationArray = [
  'Flatiron School',
  'Bentley University',
  'Boston University, BUx',
  'IIM Bangalore, EdX',
  'NYU School of Professional Studies'
];
const flatironSchool =
  'Field: Software Engineering\n Jan 2019 - Apr 2019\n Brooklyn, NY';
const bentleyUniversity =
  'Field: BSc. Finance\n Aug 2002 - May 2006\n Waltham, MA';
const bostonUniversityBUx =
  'Field: Product Management with Lean, Agile and System Design Thinking\n 2018\n Online';
const iIMBangaloreEdX =
  'Field: Customer Relationship Management\n 2018\n Online';
const nYUSchoolOfProfessionalStudies =
  'Field: Behavioral Economics\n 2019\n New York, NY';

const showEducation = () => {
  term.singleColumnMenu(educationArray, function(error, response) {
    let selection = response.selectedText;
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

const projects = {
  DumboView: {
    responsibilities: [
      'Built website using Shopify for eCommerce accommodating client usability and manageable maintenance costs',
      'Implemented client’s custom design specs using Photoshop mockups, CSS, HTML, jQuery, and Liquid (Ruby)',
      'Employed a photographer to detail and organize product variants and effectuated inventory supply management',
      'Integrated Google Ads, Facebook Ads, and Google Tags to facilitate the client’s marketing and sales strategy'
    ],
    description:
      'Client Project: eCommerce retail website selling DumboView merchandise'
  },
  NowPlaying: {
    responsibilities: [
      'Built using React.js, leveraging Redux.js single-source state management design pattern to reduce prop drilling',
      'Employed the Redux Thunk middleware for handling asynchronous API request operations for updating state',
      'Leveraged Semantic UI and CSS for rapid deployment and to maximize user experience and easy site navigation',
      'Fetched, separately, cinema and showtime data from Gracenote API and film poster data from themoviedb.com API',
      'Deployed on Heroku for future CI/CD considerations and for its straightforward command-line interface'
    ],
    description:
      'Project imitating Fandango to find current films and showtimes within a zip code radius'
  },
  BestBooking: {
    responsibilities: [
      'Leveraged Ruby on Rails’ MVC architecture to separate UI, data, and business logic for a consistent workflow',
      'Crafted algorithm balancing time and space complexity preventing double-booked listings for more performant UX',
      'Used the Rails framework to contribute controller configuration logic and RESTful route scope and namespacing',
      'Designed the database schema, overcoming the challenge of distinguishing property owner users from renter users',
      'Implemented Git workflow to manage team member pull requests, isolated experiments, and efficient collaboration'
    ],
    description: 'Team project imitating Airbnb to list and book homes'
  }
};

const langsLibFrameworksTools = [
  'JavaScript (ES6+)',
  ' React',
  ' Redux',
  ' Ruby',
  ' Rails',
  ' HTML',
  ' CSS',
  ' Node',
  ' Express',
  ' Liquid',
  ' jQuery',
  ' Git',
  ' PostgreSQL/MySQL',
  ' Webpack',
  ' Babel',
  ' NPM',
  ' Gem',
  ' Rspec',
  ' Jest',
  ' React Native',
  ' Gatsby',
  ' Redis'
];

const ServicesPlatforms = [
  'Shopify',
  ' Heroku',
  ' AWS',
  ' Datadog',
  ' Trello',
  ' Photoshop',
  ' Docker',
  ' Hugo',
  ' Netlify'
];

const concepts = [
  'Object-Oriented Programming (OOP)',
  ' Functional Programming',
  ' Responsive Web Design',
  ' a11y'
];

const github = 'https://github.com/jonathanwfreed';
const linkedin = 'https://www.linkedin.com/in/jonathanwfreed/';

const header = () => {
  term.bold.cyan('Hi, my name is Jonathan\n');
  term.bold.red('CTRL C to quit\n');
  term.bold.green('CTRL A for Main Menu \n\n');
};

const showMenu = () => {
  const main = [
    'experience',
    'education',
    'projects',
    'skills',
    'github',
    'linkedin'
  ];
  term.singleColumnMenu(main, function(error, response) {
    header();
    let selection = response.selectedText;

    switch (selection) {
      case 'experience':
        showExperiences();
        break;
      case 'education':
        showEducation();
        break;
      case 'projects':
        term.bold.red();
        break;
      case 'skills':
        term.bold.red();
        break;
      case 'github':
        term.bold.red(github);
        break;
      case 'linkedin':
        term.bold.red(linkedin);
        break;
      default:
        break;
    }
  });
};

header();
showMenu();
