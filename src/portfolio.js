/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

// Summary And Greeting Section

import emoji from "react-easy-emoji";

const illustration = {
  animated: true // set to false to use static SVG
};

const greeting = {
  username: "Samira Sharma",
  title: "Hi, I'm Samira",
  subTitle: emoji(
    "A passionate Sr. Technology Professional with a hands-on experience in python, bash scripting, developing desktop and mobile applications. Skilled in configuring and maintaining CI/CD pipeline using Jenkins, Ansible, Docker, Kubernetes. Also, capable of setting up infrastructure in AWS, such as:  EC2, S3, Route53, RDS, etc. as well as configuring hadoop cluster and developing spark(python) application in distributed environment."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1eT3ISE1iolKQWX9ZbI88D4J9gDQ_Zcka/view?usp=sharing",
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/samirasharma",
  linkedin: "https://www.linkedin.com/in/samira-sharma-1134b2a3/",
  gmail: "samira.sharmaaa@gmail.com",
  // Instagram and Twitter are also supported in the links !
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "TECHNOLOGY ENTHUSIAST WITH GREAT INTEREST IN CLOUD/DEVOPS/DATA SCIENCE FIELD",
  skills: [
    emoji(
      "⚡ Execute projects and/or support tasks while maintaining a high level of direct client interaction"
    ),
    emoji("⚡ Manage production system in a distributed and highly available critical infrastructure"),
    emoji(
      "⚡ Install, Configure and maintain CI/CD using Jenkins"),
    emoji(
      "⚡ Develop spark application in python in standalone as well as distributed environment"
    )
  ],

  /* Make sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "Linux",
      fontAwesomeClassname: "fab fa-linux"
    },
    {
      skillName: "Github",
      fontAwesomeClassname: "fab fa-github"
    },
    {
      skillName: "Jenkins",
      fontAwesomeClassname: "fab fa-jenkins"
    },
    
    {
      skillName: "Hadoop",
      fontAwesomeClassname: "fas fa-server"
    },
    {
      skillName: "AWS",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "Docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "Oracle",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "MongoDB",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "Android",
      fontAwesomeClassname: "fab fa-android"
    },
    {
      skillName: "IONIC",
      fontAwesomeClassname: "fab fa-angular"
    },
    {
      skillName: "HTML",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "R",
      fontAwesomeClassname: "fab fa-r-project"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "New Jersey Institute of Technology",
      logo: require("./assets/images/NJIT-logo.png"),
      subHeader: "Master of Science in Computer Science",
      duration: "Jan 2020 - Aug 2021",
      desc: "Focus on Data & Cloud courses and projects- Cloud Computing, Data Analytics with R, Advanced Database System Design, Data Mining, Introduction to Big Data, Data Structure and Algorithm",
      descBullets: [
        "Developed a project to analyse stream of tweets on twitter and display their sentiments using Tweepy, Pyspark, Spark Streaming, SQL",
        "Built a parallel processing project where one instance reads images, detects label and stores information in sqs queue. Next instance picks up index of image and detects text.Used Java, Amazon Rekognition, SQS, S3, EC2",
	"Developed wine quality predictor application that run in AWS distributed system using Python, Hadoop-Spark, Python"
      ]
    },
    {
      schoolName: "National College Of Engineering, Tribhuvan University,Nepal",
      logo: require("./assets/images/NCE-logo.png"),
      subHeader: "Bachelor of Electronics and Computer Engineering",
      duration: "Nov 2011 - Dec 2015",
      desc: "Fellowship and Regular scholarship during the 4-year study along with College Outstanding Award and top rank. Took courses related to DBMS, Artificial Intelligence, Data Mining, C, C++, Networking",
      descBullets: [
	"Project developed to monitor and control the switching of household devices with Android as well as Web application globally using Internet. Android application and Web applications were synchronized and Arduino microcontroller was used to physically turn the device on or off. IDE such as: Android Studio, Arduino, Netbeans were used to develop applications",
	"Second Prize winner in the ChildApp Appathon organized by UNICEF, Microsoft Innovation Center and ChildReach,Nepal.Main Objective of this project was to provide interactive learning environment to connect students with their course through game based learning. Motion sensor of Microsoft Kinect Technology was programmed to detect the gestures of user and C# programming was used to develop an application"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "CI/CD Pipelines", //Insert stack or technology you have experience in
      progressPercentage: "70%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Cloud Design and Architecture",
      progressPercentage: "75%"
    },
    {
      Stack: "Scripting and Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Sr. Technology Professional",
      company: "Public Service Enterprise Group (PSEG)",
      companylogo: require("./assets/images/PSEG-logo.png"),
      date: "September 2019 – Present",
      descBullets: [
        "Responsible for executing projects and/or support tasks and maintain a high level of direct client interaction",
	" Responsible for operating and maintaining production systems",
        " Automate daily jobs using python and PowerShell scripts",
	" Hands-on experience with IBM WebSphere Application Server for both standalone server as well as clusters",
	" Responsible for coordinating the implementation of multiple SAAS solutions for existing applications",
	" Analyze inquiries, determine appropriate technical area or vendor to resolve problems, and make suggestions for improvements"
      ]
    },
    {
      role: "AWS DevOps Engineer",
      company: "CloudChomp Inc.",
      companylogo: require("./assets/images/cloudchomp-logo.png"),
      date: "August 2018 – May 2019",
      descBullets: [
        " Developed and maintained automated CI/CD pipelines for code deployment using Jenkins",
	" Actively managed, improved and monitored cloud infrastructure on AWS",
	" Performed code merges and deployments with DEV and QA teams",
	" Wrote Ansible playbooks to manage Web applications while deploying the necessary changes and monitored the process",
	" Wrote scripts in Python and Bash to automate various processes, such as: rotating AWS access key, take snapshots of AWS EC2 servers, provide DB read/write/all permissions"
      ]
    },
    {
      role: "DevOps/Computer Engineer",
      company: "Bajra Technologies Pvt. Ltd.",
      companylogo: require("./assets/images/bajratechnologies-logo.png"),
      date: "April 2016 – April 2018",
      descBullets: [
	 " Built & configured Linux systems over the network, implemented automated tasks through crontab",
	 " Migrated VMWARE VMs to AWS and Managed Services like EC2, S3 Bucket, Route53, ELB, EBS",
	 " Worked on Angular framework and had experience working with Ng-Modules, components, Observables, Ng-router, AUTH-guards", 
	 " Developed a project using IONIC framework. Created GUI based on layout, maintained database (SQLITE) to store information and sync data to server",
	 " Installed multiple instances of Apache Tomcat and helped with the deployment of JARs and WARs on development environments"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements and Certifications that I received !",

  achievementsCards: [
    {
      title: "Microsoft Certified Professional",
      subtitle:
        "Server Virtualization With Windows Server Hyper-V and System Center",
      image: require("./assets/images/microsoft-certified-professional-logo.png"),
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1gArp4yzAiEOiFnoAH59PeRzFESvSoylA/view?usp=sharing"
        }
      ]
    },
    {
      title: "Microsoft Student Partner",
      subtitle:
        "Microsoft Innovation Center",
      image: require("./assets/images/msp-logo.png"),
      footerLink: [
        {
          name: "Achievement",
          url: "https://drive.google.com/file/d/0Bwg4gVyssGr9RE4wOVF3UzNCVWM/view?usp=sharing&resourcekey=0-QNhHM2_WeFl6jpCzgf_BBw"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Want to say hi or have a discussion ? Please reach out to me.",
  number: "+1609-972-2580",
  email_address: "samira.sharmaaa@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails
};
