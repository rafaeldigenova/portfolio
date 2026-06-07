import { baseExperience, experience } from "../models/experience.interface";

const experiences: baseExperience[] = [
  {
    title: 'Senior Full Stack Engineer',
    company: 'IntrosMatter',
    location: 'Delaware, USA (remote)',
    summary: 'Full Stack Engineer focused on .NET C#, Angular and SQL.',
    startDate: 'Sep 2025',
    endDate: 'May 2026',
  },
  {
    title: 'Performance and Tooling Engineer IV',
    company: 'Starbucks',
    location: 'Seattle, WA, USA (remote)',
    summary: 'Full Stack Engineer focused on .NET C#, Angular, SQL, Troubleshooting and performance analysis.',
    startDate: 'Oct 2022',
    endDate: 'Jul 2025',
    carrerProgression: [
      {
        title: 'Performance and Tooling Engineer III', 
        date: 'Oct 2022'
      },
      {
        title: 'Performance and Tooling Engineer IV', 
        date: 'Feb 2024'
      }
    ]
  },
  {
    title: 'Senior Full Stack Developer',
    company: 'Safra Bank',
    location: 'São Paulo, Brazil (remote)',
    summary: 'Full Stack Developer focused on Angular and .NET C#.',
    startDate: 'Oct 2019',
    endDate: 'Sep 2022',
    carrerProgression: [
      {
        title: 'Mid Level Full Stack Developer', 
        date: 'Oct 2019'
      },
      {
        title: 'Senior Full Stack Developer', 
        date: 'Oct 2020'
      }
    ]
  },
  {
    title: 'Senior Full Stack Developer',
    company: 'Samurai Experts',
    location: 'São Paulo, Brazil ',
    summary: 'Full Stack Developer, worked on ERP integrations with .NET CORE, Shopify store fronts with JS and CSS and on POS app using Java.',
    startDate: 'Jun 2018',
    endDate: 'Oct 2019',
  },
  {
    title: 'Mid Level III Full Stack Developer',
    company: 'Eguru',
    location: 'São Paulo, Brazil (remote)',
    summary: 'Full Stack Developer, worked the company\'s LMS integration software built with .NET C#, worked on the company\'s gaming framework built with Javascript following the SCORM standards, worked on multiple HTML5 games using canvas and javascript.',
    startDate: 'Nov 2014',
    endDate: 'Jun 2018',
    carrerProgression: [
      {
        title: 'Junior II Full Stack Developer', 
        date: 'Nov 2014'
      },
      {
        title: 'Junior III Full Stack Developer', 
        date: 'Mar 2015'
      },
      {
        title: 'Mid Level I Full Stack Developer', 
        date: 'Sep 2015'
      },
      {
        title: 'Mid Level III Full Stack Developer', 
        date: 'Jul 2017'
      }
    ]
  },
  {
    title: 'Junior .NET C# Developer',
    company: 'ATMA IT Solutions',
    location: 'São Bernardo do Campo, SP, Brazil',
    summary: 'Worked on a Javascript focused project solving bugs and adding features to our client\'s system.',
    startDate: 'Jul 2014',
    endDate: 'Nov 2014',
  },
  {
    title: 'Senior Full Stack Developer',
    company: 'OOHM - Agile Factory',
    location: 'Santo André, SP, Brazil',
    summary: 'Worked with multiple clients, with modern stack: Restful .NET C# APIs, unit and integrated tests, code review and scrum',
    startDate: 'Aug 2013',
    endDate: 'May 2014',
  },
]

export const fullStackExperiences: experience[] = [
  { 
    ...experiences[0],
    bulletPoints:[
      'Worked across backend and frontend on the prospect-nding tool using .NET C# and Angular;',
      'Helped the business team to de ne the requirements to handle prospects statuses lifecycle and implemented the business logic and APIs to keep it always consistent;',
      'Prepared training sessions with the team to teach the core of our system, and share the knowledge about the prospects life cycle;',
      'Delivered multiple pages and functionalities, but the highlight was replicating the system completely as a chrome extension in a couple of sprints.'
    ],
    skills: ['.NET', '.NET Core', 'C#', 'Angular', 'SQL Server', 'Clean Architecture', 'AWS'],
    highlights: [
      'Solved a long lasting issue with statuses definition.',
      'Had 2 weeks to redo the chrome extension front end to match our web app version.'
    ]
  },
  {
    ...experiences[1],
    bulletPoints:[
      'Worked on the home grown performance tool built with .NET C# to run on Azure DevOps, maintaining it and adding new features;',
      'Created a UI version on angular for the performance test tools so teams would be able to configure the test run parameters and start their own runs at will;',
      'Ran daily analysis on our internal clients performance tests to find issues and identifying patterns to help them find performance bottlenecks;',
      'Tailored a solution using nodeJs pixelmatch to detect if any of instore monitors had broken images.'
    ],
    skills: ['.NET', '.NET Core', 'C#', 'Azure DevOps', 'Performance Test', 'SQL Server', 'Angular', 'Datadog'],
    highlights: [
      'Worked closely with internal teams to run performance and stress tests, and find bottlenecks. We were able to have 2 holiday seasons, with no performance incidents'
    ],
  },
  {
    ...experiences[2],
    bulletPoints:[
      'Worked on the Cockpit, an aggregator tool built with .NET C# and AngularJS that allowed account managers to reach multiple Mainframe APIs without having to handle multiple tools and environments.',
      'Helped build the Cockpit second version with Angular and modern front end architecture;',
      'Built a feature toggle API with multi client capability and friendly UI so other teams could configure and manage their features'
    ],
    skills: ['Angular', 'AngularJS', '.NET', '.NET Core', 'C#', 'Azure', 'SQL Server'],
    highlights: [
      'Solved a chronicle issue with rollbacks during deployment windows with a feature toggle service and easy to use angular directives;',
      'Reduced rollbacks and post deploy chaos by virtually zero by adding the capability to hide and show features at ease, and controlling the audience that had access to the features through the feature toggle service;',
      'Acted as a Tech lead on the second version of the Cockpit being the member of the team that traveled easier between frontend, backend and businesse requirements.'
    ],
  },
  {
    ...experiences[3],
    bulletPoints:[
      'Worked as tech lead on a team with 8 developers;',
      'Worked on store fronts inside Shopify ecosystem;',
      'Worked "SellerCenter" the company\'s integration software built with .NET C#, a tool that integrated Client\'s ERPs with Shopify APIs',
      'Developed tailormade shopify apps to customize clothes and add them to cart',
      'Worked on the Company checkout App, adding Brazilian specific requirements to checkout process and payment providers',
      'Developed a POS app with Java, then kotlin connecting Shopify Stores with our partner payment provider APIs'
    ],
    skills: ['.NET', '.NET Core', 'C#', 'SQL', 'Rest API', 'JavaScript', 'JQuery', 'CSS', 'Azure', 'Java', 'Kotlin' ],
    highlights: [
      'Worked simultaneously on multiple overdue shopify store fronts, customizing the CSS and Javascript while teaching Junior developers to eventually take the company back to a spot where we didn\'t have multiple unsatisfied clients.',
      'Developed a Java POS app overnight where the seller was able to open shopify catalog, setup the shopping cart and execute the payment through the client\'s card machine for a meeting that the CEO had setup the next day;',
      'Helped design a new version of our Integration .NET C# software that connected our client\'s ERPs to shopify, as a multitenant, event sourced CQRS system that eventually became the main piece of software of the company'
    ],
  },
  {
    ...experiences[4],
    bulletPoints:[
      'Contributed to serious games development, improved our custom JavaScript framework and worked on the company Web API and LMS product using .NET C#',
      'Led a SQL Server to MongoDB migration, worked on an Event Sourcing and CQRS cloud project.',
      'Developed multiple HTML5 games with JavaScript',
      'Created an iOS podcast app for a multinational company using .NET Xamarin.',
      'Maintained and added new features to our client\'s Yoga platform. Using .NET C# on the backend and vanilla JS with HTML and CSS on the front end.'
    ],
    skills: ['.NET Standard', 'C#', 'Javascript', 'React', 'Vue', 'SQL', 'MongoDB', 'Xamarin', 'HTML5'],
    highlights: [
      'I was assigned to a project that had failed clients approval for over one year, It was a heavy mathematical game where the user would manage a virtual company budget . Although we had the blueprint the numbers never matched the blueprint. I rewrote the calculations algorithm from scratch and was able to nally deliver the project',
      'Proposed and led the migration of our serious game platform from SQL to MongoDB to solve a long lasting performance issue, dropping the latency for the nal user to a tenth of the original value;',
      'Took the responsability to nish a Xamarin iOS radio app, for a very strategic client, after a few weekends wrapping the functionalities and going through the iOS validation process I was able to deliver the app in the due date',
      'Worked on the company\'s biggest project thus far, a mothers day promotion for the biggest telecom operator in Brazil. The delivery date was unegotiable due to it beeing attached to a holiday and we had roughly a month and a half to deliver the project. The CEO assembled the team and during his speech he said "I know it\'s impossible, but  we have to do it". I worked multiple nights, bridging the gap between frontend, backend and game designers. Stayed late with QAs fixing backend and frontend bugs up until the very last week, when we successfully delivered the project to a satisfied client', 
    ],
  },
  {
    ...experiences[5],
    bulletPoints:[
      'Worked on a Javascript focused project solving bugs and adding features to our client\'s system',
    ],
    skills: ['Javascript'],
    highlights: [],
  },
  {
    ...experiences[6],
    bulletPoints:[
      'Worked on the matrix running code reviews and doing integrated tests to support our allocated teams',
      'Worked on a finance client, created a SignalR site to help their support team work together on their tasks',
      'Worked on a Ecommerce for the commerce syndicate'
    ],
    skills: [
      '.NET', 'C#', 'Integrated tests', 'Unit tests', 'GIT', 'SignalR', 'HTML/CSS', 'SQL'
    ],
    highlights: [],
  }
];
