export type PortfolioMedia = { src:string; alt:string; caption:string }
const raw='https://raw.githubusercontent.com/joshuamussanga7-cpu/sitta-jared-portfolio/main/public/projects/';
export const projectMedia:Record<string,PortfolioMedia[]> = {
 'university-notes':[
  {src:raw+'University%20Notes-1.jpg',alt:'University Notes home screen',caption:'Learning resources home'},
  {src:raw+'University%20Notes-2.jpg',alt:'University Notes academic organization screen',caption:'Organized academic materials'},
  {src:raw+'University%20Notes-3.jpg',alt:'University Notes subject selection screen',caption:'Subject discovery'},
  {src:raw+'University%20Notes-4.jpg',alt:'University Notes document viewer',caption:'Study material viewer'},
  {src:raw+'University%20Notes-5.jpg',alt:'University Notes search and filter screen',caption:'Content discovery'}
 ],
 'uni-connect':[
  {src:raw+'uni-connect-1.jpg',alt:'Uni Connect marketplace interface',caption:'Marketplace experience'},
  {src:raw+'uni-connect-2.jpg',alt:'Uni Connect product listing interface',caption:'Product listings'},
  {src:raw+'uni-connect-3.jpg',alt:'Uni Connect messaging interface',caption:'Buyer and seller communication'},
  {src:raw+'uni-connect-4.jpg',alt:'Uni Connect user profile interface',caption:'User profiles'}
 ],
 'uniplanner':[
  {src:raw+'Screenshot_20260409_163417_uni%20planner.jpg',alt:'UniPlanner dashboard',caption:'Student planner dashboard'},
  {src:raw+'Screenshot_20260409_163426_uni%20planner.jpg',alt:'UniPlanner timetable',caption:'Academic timetable'},
  {src:raw+'Screenshot_20260409_163432_uni%20planner.jpg',alt:'UniPlanner reminders and tasks',caption:'Tasks and reminders'},
  {src:raw+'Screenshot_20260409_163447_uni%20planner.jpg',alt:'UniPlanner GPA dashboard',caption:'Academic performance tools'}
 ]
};
export type EditorialArticle={slug:string;title:string;category:string;description:string;date:string;tags:string[];sections:{heading:string;body:string[]}[];project?:string;kind:'article'|'case-study'}
export const portfolioEditorial:EditorialArticle[]=[
 {slug:'university-notes-case-study',title:'University Notes: organizing academic resources for students',category:'Case study · Education',description:'A closer look at the academic content structure, mobile experience and AI-assisted learning direction behind University Notes.',date:'2026-08-30',tags:['University Notes','Flutter','Firebase','AI','Education'],project:'university-notes',kind:'case-study',sections:[
  {heading:'The product challenge',body:['University Notes began with a practical student need: finding academic material without searching through disconnected files and conversations. The product direction is to make study resources easier to discover, organize and revisit.']},
  {heading:'Organizing learning material',body:['The portfolio documents a nested academic structure that lets learners move from broad study categories toward specific subjects and materials. Search and predictable navigation are central to that experience.']},
  {heading:'Mobile, web and AI-assisted learning',body:['The project combines a mobile application with a web presence and Firebase-backed services. Its AI direction focuses on explaining difficult topics, supporting questions about documents and making large amounts of information easier to approach. AI output should remain clearly identified as assistance, with original learning resources available for reference.']},
  {heading:'Technical approach',body:['The documented stack includes Flutter, Dart, Firebase and Next.js, with AI-assisted workflows. The project is described as an active product ecosystem with Android and web experiences.']}
 ]},
 {slug:'uni-connect-case-study',title:'Uni Connect: shaping a campus marketplace experience',category:'Case study · Marketplace',description:'Product discovery, listings, media handling and communication in a mobile marketplace concept.',date:'2026-08-30',tags:['Uni Connect','Flutter','Firebase','Marketplace'],project:'uni-connect',kind:'case-study',sections:[
  {heading:'The marketplace problem',body:['A campus marketplace needs to support two connected journeys: people listing products and people discovering them. The portfolio describes Uni Connect as a private marketplace project exploring product presentation, buyer and seller workflows and communication.']},
  {heading:'Application architecture',body:['The documented implementation uses Flutter and Firebase services. Firestore is described for listings and user data, Firebase Authentication for account access, and Firebase Storage for product media.']},
  {heading:'Media and communication',body:['The portfolio highlights image-heavy listings as a performance concern and describes client-side image compression to reduce upload size. User communication, search and profiles are part of the documented interface work.']},
  {heading:'Current direction',body:['The original portfolio identifies payment gateway and community delivery integrations as areas being explored, not as completed features.']}
 ]},
 {slug:'uniplanner-case-study',title:'UniPlanner: supporting student organization',category:'Case study · Productivity',description:'Academic schedules, task reminders and performance utilities in a student-focused planning project.',date:'2026-08-30',tags:['UniPlanner','Flutter','Productivity','Students'],project:'uniplanner',kind:'case-study',sections:[
  {heading:'The student planning challenge',body:['University life involves recurring classes, deadlines, exams and personal tasks. UniPlanner is documented as a student productivity project intended to bring these planning activities into one focused experience.']},
  {heading:'Timetables and reminders',body:['The portfolio describes a flexible timetable for weekly classes and different session types, alongside local notifications for upcoming classes or exams. Offline behaviour is part of the documented planning approach.']},
  {heading:'Academic utilities',body:['The project also documents GPA and performance tracking, with Provider for state management and local persistence for access when connectivity is unavailable.']},
  {heading:'Project status',body:['The company catalogue currently identifies UniPlanner as in progress. This page therefore describes documented project direction and capabilities without claiming a current public release.']}
 ]},
 {slug:'building-savi-web-platform',title:'Building SAVI: from product idea to a web platform',category:'Product · Systems',description:'A product-focused look at user journeys, responsive design and the architecture choices behind SAVI.',date:'2026-09-01',tags:['SAVI','Next.js','Firebase','Product development'],kind:'article',project:'savi',sections:[
  {heading:'Design the user journey first',body:['SAVI is a rewards platform concept built around task and offer discovery, completion, validation and reward workflows. The product needs a clear path between each stage, with eligibility and outcomes explained to users.']},
  {heading:'A connected web stack',body:['The portfolio documents Next.js, React, TypeScript, Tailwind CSS and Firebase as the core stack. The architecture separates interface presentation from application data and rules.']},
  {heading:'Build for responsive use',body:['Desktop and mobile layouts should present the same product journey with different information density. Navigation, spacing, controls and feedback need to adapt to the available screen.']},
  {heading:'Trust is a product requirement',body:['Validation, eligibility and abuse prevention are not optional details for a rewards product. They need to shape both the user experience and backend rules.']}
 ]},
 {slug:'building-university-notes-with-ai',title:'Building University Notes: education, mobile development and AI',category:'AI · Education',description:'How an academic resource experience can evolve into a broader AI-assisted learning workflow.',date:'2026-08-30',tags:['University Notes','AI','Flutter','Firebase'],kind:'article',project:'university-notes',sections:[
  {heading:'From storage to learning',body:['A document library becomes more useful when resources are structured around the way students study. Courses, subjects, topics and documents need predictable organization and discovery.']},
  {heading:'Where AI can help',body:['AI can help explain challenging material, answer questions about documents and summarize long content. These functions should reduce friction rather than become decoration.']},
  {heading:'Keep source material visible',body:['AI-generated output should be clearly identified as assistance. Students should be able to return to original materials and use their own judgement alongside generated explanations.']},
  {heading:'Think beyond one screen',body:['The portfolio describes a connected mobile and web product with Firebase-backed services. Identity, content, storage and AI features need to work together as one coherent ecosystem.']}
 ]},
 {slug:'flutter-vs-nextjs-product-decisions',title:'Flutter vs Next.js: choosing the right stack for a product',category:'Engineering · Architecture',description:'A practical framework for choosing between mobile-first and web-first product architectures.',date:'2026-08-29',tags:['Flutter','Next.js','Architecture'],kind:'article',sections:[
  {heading:'When Flutter fits',body:['Flutter is a strong option when the product is mobile-first and depends on touch interaction, device capabilities or a dedicated application workflow. The portfolio cites University Notes, Uni Connect and UniPlanner as examples.']},
  {heading:'When Next.js fits',body:['Next.js is useful for public websites, dashboards, content-rich experiences and web products that benefit from direct link access and search visibility.']},
  {heading:'Make the decision from requirements',body:['Compare where users are, what they need to do, how the product will be discovered and how quickly the experience must evolve. The framework should follow those answers.']}
 ]},
 {slug:'firebase-for-real-world-apps',title:'Using Firebase for real-world mobile and web applications',category:'Engineering · Backend',description:'Authentication, structured data, media storage and security considerations when building with Firebase.',date:'2026-08-28',tags:['Firebase','Firestore','Security','Cloud Storage'],kind:'article',sections:[
  {heading:'Authentication is the foundation',body:['Authentication establishes identity and supports permissions, profile data and personalized experiences. It should be considered early in product architecture.']},
  {heading:'Model application data carefully',body:['Firestore works well when collections and documents map naturally to product concepts such as profiles, listings, learning resources and tasks. Schema design shapes query behaviour and interface complexity.']},
  {heading:'Treat media separately',body:['Images and documents require attention to upload size, validation, naming, access rules and storage. Media can become a major source of bandwidth and performance cost.']},
  {heading:'Security remains the developer’s responsibility',body:['Managed infrastructure does not automatically make an application secure. Access rules, validation, least privilege and clear client/server responsibilities remain essential.']}
 ]},
 {slug:'from-idea-to-production-web-app',title:'From idea to production: a practical web app workflow',category:'Engineering · Workflow',description:'A structured approach to problem definition, user flows, data integration, testing and deployment.',date:'2026-08-26',tags:['Web development','Next.js','Vercel','Workflow'],kind:'article',sections:[
  {heading:'Define the problem',body:['Start by identifying who the product is for, what problem it addresses and what a user should be able to accomplish. This keeps the first version focused.']},
  {heading:'Map the core flow',body:['Map the entry point, primary action, success state and recovery path before building every screen. This provides a useful product skeleton.']},
  {heading:'Connect real data early',body:['Real data exposes loading, empty, validation, permission and error states that static mockups can hide. Addressing them early makes later changes safer.']},
  {heading:'Deploy and observe',body:['Deployment is part of development. Test routes, assets, configuration and performance in the hosted environment, then improve based on observed behaviour.']}
 ]},
 {slug:'how-i-built-iq-booster',title:'IQ Booster: designing a clear brain-training game loop',category:'Interactive · Game design',description:'Core loops, difficulty progression and feedback in an interactive brain-training project.',date:'2026-09-04',tags:['IQ Booster','Game development','UX'],kind:'article',project:'iq-booster',sections:[
  {heading:'Define the core loop',body:['A useful game loop connects player action, feedback, result and the next challenge. Keeping this sequence understandable helps players learn quickly.']},
  {heading:'Progress difficulty carefully',body:['Difficulty should rise gradually. Early rounds establish the mechanic, while later rounds can introduce combinations or time pressure without making the game feel unfair.']},
  {heading:'Feedback is part of the mechanic',body:['Correct and incorrect responses should feel distinct. Score, timing, sound and visual transitions communicate what happened and what the player can do next.']}
 ]},
 {slug:'designing-hoop-shot',title:'Hoop Shot: making a simple basketball game feel responsive',category:'Interactive · Game design',description:'How timing, input feedback and visible consequences shape a focused sports game.',date:'2026-09-03',tags:['Hoop Shot','Game design','Mobile'],kind:'article',project:'hoop-shot',sections:[
  {heading:'Make the action understandable',body:['Players need to understand how aiming and input affect the shot. The relationship between an action and its result should be clear before and after interaction.']},
  {heading:'Timing creates skill',body:['A timing-based mechanic can create a learning curve without a long tutorial. Players learn the rhythm and adjust based on previous results.']},
  {heading:'Every action needs feedback',body:['A successful shot should produce immediate confirmation. A miss should also be clear and leave the player with an understandable next action.']}
 ]},
 {slug:'building-stack-hop',title:'Stack Hop: what a small game teaches about progression',category:'Interactive · Game design',description:'Simple rules, escalating challenge and rapid feedback in a casual game project.',date:'2026-09-02',tags:['Stack Hop','Game development','Progression'],kind:'article',project:'stack-hop',sections:[
  {heading:'Keep the rules small',body:['A casual game should communicate its rules quickly. A compact ruleset makes it easier to test timing, responsiveness and visual clarity.']},
  {heading:'Progress without unnecessary complexity',body:['Small changes in speed, spacing, timing or precision can increase challenge without introducing a large number of new systems.']},
  {heading:'Build the smallest useful loop',body:['Start with the smallest playable loop, observe how it behaves and improve it through evidence rather than adding features without a clear reason.']}
 ]},
 {slug:'responsive-web-design',title:'Building responsive web design',category:'Engineering · Web',description:'Content hierarchy, mobile-first composition and testing across real devices.',date:'2026-08-27',tags:['CSS','Responsive design','Web development'],kind:'article',sections:[
  {heading:'Start with content hierarchy',body:['Identify what must remain visible and what can move, stack or become secondary on smaller screens. This is more effective than choosing breakpoints first.']},
  {heading:'Design mobile-first',body:['Establish the essential structure on a small screen, then introduce wider layouts, richer navigation and additional supporting information on larger screens.']},
  {heading:'Test real devices',body:['Device testing reveals issues with touch targets, text wrapping, performance and navigation feel. Responsive quality is about clarity and usability at every size.']}
 ]},
 {slug:'optimizing-mobile-games-for-low-end-devices',title:'Optimizing mobile games for entry-level Android devices',category:'Engineering · Performance',description:'Rendering, memory, asset size and device testing considerations for mobile game performance.',date:'2026-08-25',tags:['Android','Performance','Game development'],kind:'article',sections:[
  {heading:'Find the expensive work',body:['Look first at repeated work such as rendering, animation, image processing, physics and data operations. Optimize the largest costs before small isolated functions.']},
  {heading:'Control asset and memory use',body:['Oversized textures, unnecessary animation and duplicated resources increase memory pressure. Use appropriately sized assets and release resources when they are no longer needed.']},
  {heading:'Measure on target hardware',body:['A game should be tested on the devices its intended players use. Performance on a development computer is not a reliable substitute for real-device observation.']}
 ]}
];
export const faqs=[
 {q:'What does ClastarHub build?',a:'ClastarHub develops mobile applications, websites and web applications, backend-connected products, AI-enabled features and interactive digital experiences.'},
 {q:'Can you build both Android and web versions?',a:'Yes. The architecture depends on the product. Flutter is used for cross-platform mobile experiences, while React and Next.js are used for web products where appropriate.'},
 {q:'How does a project begin?',a:'A project usually begins with a short discussion about the problem, intended users, key features, timeline and constraints. We then clarify scope and the next practical step.'},
 {q:'Do you work with existing applications?',a:'Maintenance, bug fixing, performance improvements and feature development are among the services presented by ClastarHub. The exact scope is agreed after reviewing the existing product.'},
 {q:'Can you integrate AI into an existing product?',a:'AI integration can be explored when it solves a specific user problem. The use case, data handling, model choice, cost and safeguards need to be assessed before implementation.'},
 {q:'How much does a project cost?',a:'Pricing depends on scope, complexity, integrations, design requirements and delivery expectations. ClastarHub discusses requirements before preparing a project estimate.'},
 {q:'Who owns the finished product?',a:'Ownership, source-code delivery, third-party licences and handover terms should be agreed in writing before work begins.'},
 {q:'Do you provide ongoing support?',a:'Maintenance and optimization are listed as services. Support arrangements, response expectations and costs should be agreed for each project.'}
];
