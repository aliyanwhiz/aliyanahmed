export const BLUR_DELAY=0.04

export const DATA = {
  personalData:{
    name:"Aliyan Ahmed",
    description:"I am a Software Developer. I love to learn and explore new technologies and am passionate about problem-solving. I like a well structured environment that way I love to work with c#.",
    skill:["Javascript","TypeScript","Node.js","React.js","Next.js","Framer Motion","PHP","Laravel","jQuery","C#","ASP .NET","ASP .NET Core","MS SQL Server","MySQL","MongoDB"],
    email:"aliyanahmed853@gmail.com",
    phone:"+92 3232732106",
    link:[
      {
        name:"github",
        url:"https://github.com/aliyanwhiz/aliyanwhiz"
      },
      {
        name:"linkedin",
        url:"https://www.linkedin.com/in/realaliyanahmed"
      },
      {
        name:"x",
        url:"https://x.com/Aliyan_Ahmed101"
      },
      {
        name:"instagram",
        url:"https://www.instagram.com/aliyan.ahmed05"
      },
      {
        name:"stackoverflow",
        url:"https://stackoverflow.com/users/23166872/aliyan-ahmed?tab=profile"
      }
    ],
    resume: "/AliyanAL_Resume.pdf",
    heroMedia: "/AliyanA_Bitmoji_Bearded.png", 
    heroBody: "/AliyanA_Bitmoji_Body.png", 
    heroArm: "/AliyanA_Bitmoji_Hand.png",
    aboutMe:`My journey into code kicked off during the **2020 lockdown**. What started as a deep curiosity quickly turned into a career, taking me from a self-taught enthusiast to a **core contributor** on established **ASP.NET Core** teams.
* While my "home base" is the Microsoft stack, I’ve built a versatile toolkit spanning **PHP (Laravel)**, **Full-stack JavaScript (React/Next.js)**, and a mix of **SQL/NoSQL** architectures.

Even while finishing my degree, I’ve remained active in the industry—consistently bridging the gap between heavy technical requirements and **intuitive user experiences**.

When I’m not in the IDE, you can usually find me:
* **Keeping up with F1 & Football** (🏎️ ⚽) — I'm a big fan of the technical strategy and the weekend drama.
* **Gaming** — I usually prefer getting lost in a deep story on my console.
* **Decompressing** — Listening to **soft music** to catch a break from the screen.
* That’s pretty much the story so far. I’m always looking for the next complex problem to solve or a new stack to master.
`

  },
experiences: [
    {
      company: "Indigo Textile",
      logo: "/logos/experience/indigo.png",
      role: "Software Developer",
      location: "Karachi, Pakistan",
      startDate: "2024",
      endDate: "2026",
      technologies: ["C#", ".NET", "MS SQL Server", "ReactJs", "JavaScript", "jQuery", "Bootstrap"],
      description: [
        "Led the development of FBR-regulated invoicing systems, ensuring 100% compliance with national tax standards.",
        "Engineered an automated dispensary solution that digitized inventory tracking and eliminated manual entry errors.",
        "Optimized complex SQL stored procedures, significantly improving report generation and data retrieval speeds.",
        "Collaborated with cross-functional teams to translate business requirements into scalable technical solutions.",
        "Maintained and upscaled application performance based on direct stakeholder feedback and user requests."
      ],
      shortSummary: "Architected FBR-compliant invoicing and automated inventory solutions."
    },
    {
      company: "Aptech Learning",
      logo: "/logos/experience/aptech.png",
      role: "Teaching Assistant & Lab Instructor",
      location: "Karachi, Pakistan",
      startDate: "2023",
      endDate: "2024",
      technologies: ["PHP (Laravel)", "C# (ASP.NET)", "Flutter", "MERN Stack"],
      description: [
        "Assisted lead instructors in delivering curriculum for diverse stacks including Laravel, ASP.NET, Flutter, and MERN.",
        "Provided one-on-one technical mentorship to students, focusing on logic building and debugging complex code issues.",
        "Managed grading for technical assignments and prepared hands-on lab material for student cohorts.",
        "Substituted for lead teachers during lectures, ensuring consistent instructional progress.",
        "Conducted targeted revision sessions for students requiring extra attention on core programming concepts."
      ],
      shortSummary: "Mentored students across multiple tech stacks and managed technical lab environments."
    },
    {
      company: "Weblinx Solutions",
      logo: "/logos/experience/weblinx.png",
      role: "Software Development Intern",
      location: "Karachi, Pakistan",
      startDate: "2021",
      endDate: "2022",
      technologies: ["PHP (Laravel)", "jQuery", "Bootstrap", "MySQL"],
      description: [
        "Contributed to a scaled enterprise application featuring integrated HR components, payroll management, and employee attendance.",
        "Developed checkout and inventory-keeping modules for a local store management solution.",
        "Adapted to professional SDLC workflows, focusing on clean code implementation and team collaboration.",
        "Gained hands-on experience in full-stack development using Laravel, jQuery, and Bootstrap to build responsive UIs.",
        "Fixed UI/UX bugs and assisted in feature migrations for ongoing client projects."
      ],
      shortSummary: "Contributed to scaled HR and inventory systems using the Laravel stack."
    }
  ],
  academics: [
    {
      school: "Mohammad Ali Jinnah University",
      logo: "/logos/academics/maju.png",
      degree: "BS Computer Science",
      location: "Karachi, Pakistan",
      startDate: "2026",
      endDate: "Present",
      subjects: ["OOP", "Data Structures", "Database Systems", "Software Engineering"],
      description: [
        "Deepening knowledge in advanced algorithms and enterprise system architecture.",
        "Applying professional industry standards to academic research and software projects.",
        "Engaging with the local tech community through university coding circles and workshops."
      ]
    },
    {
      school: "Sindh Board of Technical Education",
      logo: "/logos/academics/sbte.png",
      degree: "DAE Computer & Information Technology",
      location: "Karachi, Pakistan",
      startDate: "2023",
      endDate: "2025",
      subjects: ["C++ Programming", "OOP", "Networking", "Hardware Theory"],
      description: [
        "Built a specialized C++ calculator featuring advanced functions for averages, roots, and base power calculations.",
        "Developed a strong foundation in Object-Oriented Programming and practical network configuration.",
        "Studied deep hardware theory and hands-on troubleshooting for organizational IT infrastructure."
      ]
    },
    {
      school: "Board of Secondary Education",
      logo: "/logos/academics/bsek.png",
      degree: "Secondary School Certificate (CS)",
      location: "Karachi, Pakistan",
      startDate: "2019",
      endDate: "2021",
      subjects: ["Introduction to CS", "Programming Logic", "Hardware Fundamentals"],
      description: [
        "Completed a file-management automation project involving programmatic directory manipulation.",
        "Developed early proficiency in basic programming logic and hardware theory.",
        "Maintained a strong focus on technical subjects and computational thinking."
      ]
    }
  ],
  projectData: [
  {
    id: 1,
    name: "Weblinx Intern Project",
    title: "Store Inventory & HR Module",
    results: [
      { title: "Developed checkout and inventory modules for local store management." },
      { title: "Integrated core HR components including employee attendance and payroll." },
    ],
    link: "",
    code: "https://github.com/aliyanwhiz/Master_Hub",
    image: "",
    tools: ['PHP (Laravel)', 'jQuery', 'Bootstrap', 'MySQL'],
    role: 'Software Development Intern',
  },
  {
    id: 2,
    name: "Pittho Garham",
    title: "High-Intensity Brick Breaker Game",
    results: [
      { title: "Designed time-and-speed intensive difficulty curves for engaging gameplay." },
      { title: "Optimized 2D rendering and physics for smooth performance on mobile devices." },
    ],
    link: "",
    code: "https://github.com/aliyanwhiz/Brick-Breakers",
    image: "",
    tools: ['Flutter', 'Dart'],
    role: 'Game Developer',
  },
  {
    id: 3,
    name: "Carto",
    title: "E-Commerce Solution",
    results: [
      { title: "Integrated local payment gateways to facilitate secure regional transactions." },
      { title: "Built a mobile-first shopping experience with real-time inventory syncing." },
    ],
    link: "",
    code: "https://github.com/aliyanwhiz/Carto-Ecommerece",
    image: "",
    tools: ['Flutter', 'Dart', 'Laravel', 'MySQL'],
    role: 'Mobile App Developer',
  },
  {
    id: 4,
    name: "Kitabcha",
    title: "E-Library Mobile App",
    results: [
      { title: "Implemented a subscription model with tiered access for Premium users." },
      { title: "Engineered an offline-first 'Download to Read' feature for on-the-go access." },
    ],
    link: "",
    code: "https://github.com/aliyanwhiz/Appbook-ELibrary",
    image: "",
    tools: ['Flutter', 'Dart', 'Laravel', 'MySQL'],
    role: 'Mobile App Developer',
  },
  {
    id: 5,
    name: "IMS - POS",
    title: "Inventory & Point of Sale System",
    results: [
      { title: "Developed a desktop POS using WinForms with a modern Microsoft 365 UI aesthetic." },
      { title: "Implemented multi-role user management for secure inventory and sales tracking." },
    ],
    link: "",
    code: "https://github.com/aliyanwhiz/IMS-POS",
    image: "",
    tools: ['C#', 'Windows Forms', '.NET Core', 'MS SQL Server'],
    role: 'Desktop App Developer',
  },
  {
    id: 6,
    name: "Dukaan",
    title: "Versatile POS Ecosystem",
    results: [
      { title: "Built a cross-compatible POS engine supporting 8+ distinct business types." },
      { title: "Developed a high-performance React frontend with Type-Safe logic." },
    ],
    link: "",
    code: "https://github.com/aliyanwhiz/Dukaan",
    image: "",
    tools: ['ReactJs', 'TypeScript', 'Laravel', 'MySQL'],
    role: 'Full Stack Developer',
  },
  {
    id: 7,
    name: "Master Hub",
    title: "On-Demand Home Services Platform",
    results: [
      { title: "Architected a robust backend to manage service scheduling and provider dispatching." },
      { title: "Developed a responsive Angular frontend for seamless user booking experiences." },
    ],
    link: "",
    code: "https://github.com/aliyanwhiz/Master_Hub",
    image: "",
    tools: ['C#', 'ASP.NET Core', 'MS SQL Server', 'Angular'],
    role: 'Full Stack Developer',
  },
  {
    id: 8,
    name: "HRMS",
    title: "Enterprise HR Management System",
    results: [
      { title: "Architected advanced report generation modules for payroll and appraisals." },
      { title: "Streamlined data visualization for annual bonuses and performance metrics." },
    ],
    link: "",
    code: "",
    image: "",
    tools: ['ReactJs', 'Bootstrap', 'ASP.NET Core', 'MS SQL Server'],
    role: 'Software Developer (Contributor)',
  },
  {
    id: 9,
    name: "Compliance Stock",
    title: "Stock Compliance & Waste Monitor",
    results: [
      { title: "Automated waste monitoring with integrated email alerts for stock discrepancies." },
      { title: "Generated detailed compliance reports for internal auditing and tracking." },
    ],
    link: "",
    code: "https://github.com/aliyanwhiz/CSManagement",
    image: "",
    tools: ['C#', 'ASP.NET Core', 'MS SQL Server'],
    role: 'Backend Developer',
  },
  {
    id: 10,
    name: "Indigo Invoicing & Dispensary",
    title: "FBR-Regulated Invoicing & Medical Suite",
    results: [
      { title: "Directly integrated with FBR Digital Invoicing APIs for real-time compliance." },
      { title: "Built an occupational health record system with automated diagnostic logic." },
    ],
    link: "",
    code: "",
    image: "",
    tools: ['C#', 'ASP.NET Core', 'MS SQL Server'],
    role: 'Software Developer',
  },
]
};