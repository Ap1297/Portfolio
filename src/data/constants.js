export const Bio = {
  name: "Ankit Panchal",
  roles: ["Senior Java Developer", "Full Stack Developer", "Backend Architect"],
  description:
    "Accomplished Senior Java Developer with 7+ years of experience in full-stack development and DevOps. Specialized in Banking, E-Commerce, and Flight Booking domains, designing scalable microservices architectures and integrating event-driven systems with Kafka. Proficient in Java (11/17), Spring Boot, Node.js, and modern frontend frameworks like Next.js and React.",
  github: "https://github.com/Ap1297",
  resume: "https://drive.google.com/file/d/1N5k-_t1aDh87eqnyV4Y12N-VvqRbKuwy/view?usp=drive_link",
  linkedin: "https://www.linkedin.com/in/ankit-panchal-developer/",
  insta: "",
};

export const skills = [
  {
    title: "Programming Languages",
    skills: [
      { name: "Java", image: "https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg" },
      { name: "Node.js", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1180px-Node.js_logo.svg.png" },
      { name: "Python", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/242px-Python-logo-notext.svg.png" },
      { name: "SQL/NoSQL", image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg" },
    ],
  },
  {
    title: "Frontend",
    skills: [
      { name: "Next.js", image: "https://static-00.iconduck.com/assets.00/nextjs-icon-512x512-11y9unve.png" },
      { name: "React.js", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/440px-React-icon.svg.png" },
      { name: "Angular", image: "https://angular.io/assets/images/logos/angular/angular.png" },
      { name: "Tailwind CSS", image: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" },
    ],
  },
  {
    title: "Backend & Messaging",
    skills: [
      { name: "Spring Boot", image: "https://upload.wikimedia.org/wikipedia/commons/7/79/Spring_Boot.svg" },
      { name: "Kafka", image: "https://upload.wikimedia.org/wikipedia/commons/0/05/Apache_kafka_logo.svg" },
      { name: "Hibernate", image: "https://static-00.iconduck.com/assets.00/hibernate-icon-496x512-v9ue7it3.png" },
      { name: "GraphQL", image: "https://upload.wikimedia.org/wikipedia/commons/1/17/GraphQL_Logo.svg" },
    ],
  },
  {
    title: "DevOps & Cloud",
    skills: [
      { name: "Docker", image: "https://www.docker.com/wp-content/uploads/2022/03/Moby-logo.png" },
      { name: "OpenShift", image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/OpenShift-LogoType.svg" },
      { name: "Jenkins", image: "https://www.jenkins.io/images/logos/jenkins/jenkins.svg" },
      { name: "AWS", image: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: "https://cdn.brandfetch.io/idHL5VpF2b/w/400/h/400/theme/dark/icon.jpeg?c=1bxid64Mup7aczewSAYMX&t=1766988482208",
    role: "Senior Java Developer",
    company: "Emirates NBD Bank (Third-Party Vendor)",
    date: "Aug 2025 - Present",
    desc: "Developing and maintaining core banking features for mobile banking applications. Implementing scalable microservices with Java Spring Boot and Node.js. Orchestrating deployments using OpenShift and managing real-time data streams with Apache Kafka.",
    skills: ["Java", "Spring Boot", "Node.js", "OpenShift", "Kafka"],
  },
  {
    id: 1,
    img: "https://cdn.brandfetch.io/idfbkjnTkc/w/400/h/400/theme/dark/icon.png?c=1bxid64Mup7aczewSAYMX&t=1755971121901",
    role: "Senior Java Developer",
    company: "Voizzit Technologies, Dubai, UAE",
    date: "Sep 2024 – Aug 2025",
    desc: "Mentored junior developers and optimized Java codebases. Utilized Docker for streamlined containerization and deployment, reducing system downtime significantly.",
    skills: ["Java", "Spring Boot", "Docker"],
  },
  {
    id: 2,
    img: "https://cdn.brandfetch.io/idDNlITzR1/w/400/h/400/theme/dark/icon.jpeg?c=1bxid64Mup7aczewSAYMX&t=1761414968140",
    role: "Senior Associate",
    company: "PriceWaterHouse Coopers, Mumbai, India",
    date: "Apr 2023 – Sep 2024",
    desc: "Spearheaded HRMS and financial projects for government entities. Managed complex SQL/NoSQL architectures using MongoDB and MySQL.",
    skills: ["Spring Boot", "MongoDB", "Microservices", "Oracle"],
  },
  {
    id: 3,
    img: "https://cdn.brandfetch.io/idII9y1JHF/w/400/h/400/theme/dark/icon.jpeg?c=1bxid64Mup7aczewSAYMX&t=1765632206104",
    role: "Senior Software Engineer",
    company: "Goldensource International",
    date: "Apr 2021 – Mar 2023",
    desc: "Built Enterprise Data Management solutions using Vaadin and Spring Boot. Developed AI-integrated chatbots for automated customer interactions.",
    skills: ["Vaadin", "Java", "Spring Boot", "MongoDB"],
  },
  {
    id: 4,
    img: "https://cdn.brandfetch.io/idK2mWG2SJ/w/400/h/400/theme/dark/icon.jpeg?c=1bxid64Mup7aczewSAYMX&t=1759053240417",
    role: "System Engineer",
    company: "Tata Consultancy Services",
    date: "Jan 2019 – Mar 2021",
    desc: "Focused on Struts-JSP frontends and Restful API integrations. Contributed to a BPM workflow framework that improved performance by 20%.",
    skills: ["Struts", "Hibernate", "Restful API", "SQL"],
  },
];

export const projects = [
  {
    id: 0,
    title: "ThunderChat",
    date: "2023 - 2024",
    description: "A real-time anonymous chat platform built with Next.js 14 and Spring Boot. Uses WebSocket (STOMP protocol) for instant messaging and robust session handling for a seamless user experience.",
    image: "https://media.licdn.com/dms/image/v2/D4D2DAQGHUL59Plek-g/profile-treasury-image-shrink_800_800/B4DZuUlp2_K0AY-/0/1767724458006?e=1768330800&v=beta&t=EbGc-Wo1hUEwfdw8_m_xT_5aic1ftDpkC5nk8gD6jxM", // Placeholder path
    tags: ["Next.js", "Spring Boot", "WebSocket", "TypeScript", "Tailwind CSS"],
    category: "web app",
    webapp: "https://thunderchatapp.netlify.app/",
    github: "https://github.com/Ap1297/Random-Chat-Application",
  },
  {
    id: 1,
    title: "File Compress & Convert Tool",
    date: "2023",
    description: "An all-in-one media processing suite. Features include document optimization, format conversion, and watermark removal. Built with a Spring Boot backend using PDFBox and Apache Commons.",
    image: "https://media.licdn.com/dms/image/v2/D4D2DAQGk0okyk1fkWA/profile-treasury-image-shrink_800_800/B4DZuUlMk1K0AY-/0/1767724338238?e=1768330800&v=beta&t=7rzJEz2iw_omqnf84JQ3Okrm9gGNPX-B-RP5rpxshog", // Placeholder path
    tags: ["Java", "Spring Boot", "Next.js", "Apache Commons", "PDFBox"],
    category: "web app",
    webapp: "https://filecompressconvert.netlify.app/",
    github: "https://github.com/Ap1297/pdf-compressor",
  },
];

export const education = [
  {
    id: 0,
    img: "https://image-static.collegedunia.com/public/college_data/images/logos/1709543727PHCETLogo21.png?h=71.17&w=71.17&mode=stretch",
    school: "Mumbai University: Rajiv Gandhi Institute Of Technology",
    date: "2015 - 2018",
    desc: "Bachelor of Engineering in Information Technology",
    degree: "B.E.",
  },
  {
    id: 1,
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/242px-Python-logo-notext.svg.png",
    school: "Maharashtra State Board of Technical Education",
    date: "2012 - 2015",
    desc: "Diploma in Computer Engineering",
    degree: "Diploma",
  },
];

