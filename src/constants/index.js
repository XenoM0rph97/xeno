import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    netx64,
    skytekne,
    lanewan,
    almaviva,
    kirey,
    nf_logo,
    aws
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Ethical Hacker",
      icon: web,
    },
    {
      title: "Penetration Testing Engineer",
      icon: mobile,
    },
    {
      title: "Developer",
      icon: backend,
    },
    {
      title: "Network Security Engineer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Penetration Testing Engineer",
      company_name: "Amazon Web Services (AWS)",
      icon: aws,
      iconBg: "#E6DEDD",
      date: "Nov 2022 - Present",
      points: [
        "Penetration Testing",
        "R&D (Automation & Tooling development)",
        "Code Review",
        "Security Verification and Validation",
      ],
    },
    {
      title: "Head of Red Team & Developer",
      company_name: "NF_Security",
      icon: nf_logo,
      iconBg: "#E6DEDD",
      date: "Jan 2022 - Present",
      points: [
        "Red Team Lead",
        "Red Team Engineering",
        "Software Engineering",
        "Team main focus: Developing zero-day malware and offensive security researching.",
      ],
    },
    {
      title: "Cyber Defense Incident Responder/Cyber Security Analyst",
      company_name: "NF_Security",
      icon: nf_logo,
      iconBg: "#E6DEDD",
      date: "Jan 2021 - Jan 2022",
      points: [
        "Threat Intelligence (zero-day malware hunt and analysis)",
        "Malware Analysis",
        "Incident Response (CSIRT member)",
        "Software Engineering (zero-day malware development)",
      ],
    },
    {
      title: "Penetration Tester",
      company_name: "Kirey Group",
      icon: kirey,
      iconBg: "#E6DEDD",
      date: "May 2022 - Nov 2022",
      points: [
        "Web Application Penetration Testing",
        "Infrastructure Penetration Testing",
        "Mobile Application Penetration Testing (Android/iOS)",
        "Vulnerability Assessment",
        "Network Segmentation Check",
        "Market: Banking, Finance and Insurance",
      ],
    },
    {
      title: "Ethical Hacker | Penetration Tester",
      company_name: "AlmavivA ",
      icon: almaviva,
      iconBg: "#E6DEDD",
      date: "Jan 2022 - May 2022",
      points: [
        "Web Application Penetration Testing",
        "Infrastructure Penetration Testing",
        "Vulnerability Assessment",
        "DevSecOps",
        "Code Review",
        "Market: Government, Military and State-owned companies",
      ],
    },
    {
      title: "Cyber Security Specialist",
      company_name: "Lan&Wan Solutions ",
      icon: lanewan,
      iconBg: "#E6DEDD",
      date: "Jan 2022 - May 2022",
      points: [
        "Penetration Testing (Web Application - Infrastructure)",
        "Digital Forensic Analysis (Conduction of post-breach investigations to determine the root cause of compromisation by preserving valid proofs to present in case of legal action)",
        "Vulnerability Assessment (Network and Web Application Scan)",
        "R&D (scripting for Cybersec & PenTesting Tools)",
        "Network Monitoring & Log Analysis (SOC events and traffic analysis L1-L2)",
        "Antimalware Suite Management (Antimalware + EDR deploy, configuration and management)",
        "Firewall Policy Review (Routing policy review, Security Features configuration analysis and current firewall security posture evaluation with suggested improvements)",
        "Cybersecurity Consultancy",
      ],
    },
    {
      title: "System Specialist",
      company_name: "Netx64 Srl",
      icon: netx64,
      iconBg: "#383E56",
      date: "Jan 2022 - May 2022",
      points: [
        "Vulnerability Assessment (OpenVAS, Swascan, Nessus)",
        "R&D (scripting, mainly through Python, for internal cybersec tools or malware development)",
        "OSINT Research (Threat Intelligence Analysis)",
        "System Engineering (Design, Installation and Configuration of VMware, Windows & Linux Servers infrastructures)",
        "Network Engineering (Installation and Configuration of Firewalls, Switches and Access Points Solutions)",
        "Monitoring & Data Analysis (Open-Source Customized Monitoring Solutions Design and Deployment)",
      ],
    },
    {
      title: "Network & System Specialist",
      company_name: "SkyTekne Srls ",
      icon: skytekne,
      iconBg: "#E6DEDD",
      date: "Jan 2022 - May 2022",
      points: [
        "Vulnerability Assessment",
        "Design, Implementation and Management of Network Security Solutions (Firewalls)",
        "Windows & Linux Servers Installation and Management -> Proxy Servers, Domain Controllers, DNS, DHCP, Reverse Proxy",
        "Network Monitoring & Log Analysis (WatchGuard Dimension)",
        "Disaster Recovery",
        "Data Recovery",
        "Backup Management",
        "Help Desk",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };