// Change website animations
const animation = {
    // make it false to switch off fade-up animation
    animate: true,
    // animation playing duration
    duration: 750,
    // if false, animation plays everytime element comes on screen
    once: true
}
// Change your display name on tha landing display
const header = {
    name: "Muhamad Luqman",
}
const background = {
    // Options: Snow or Particle
    type: "Snow"
}
// Write a para about yourself here
// To update your image, go to './styles/images.css'
const section2title = "About Me"
const about = {
    paragraph: "A fresh graduate/front-end developer wannabe who just loves to solve the issues by creating an application. Knowledge of various programming language, web development and a passion of collaborating with creative individuals..",
    // resume: 'https://drive.google.com/file/d/1SsBhFbdPtGA0n96dbFRYJxFhzopsQXUA/view?usp=sharing'
}
// Edit your skill and the percentage you know about it
// To Add a skill, copy any one below and paste it after the last comma
const skillsBar = [
    {
        name: "HTML5",
        faClass: "fab fa-html5"
    },{
        name: "CSS3",
        faClass: "fab fa-css3"
    },{
        name: "Javascript",
        faClass: "fab fa-js"
    },{
        name: "PHP",
        faClass: "fab fa-php"
    },{
        name: "Laravel",
        faClass: "fab fa-laravel"
    },{
        name: "Vue",
        faClass: "fab fa-vuejs"
    },{
        name: "MySQL",
        faClass: "fas fa-database"
    }
]
// Edit your projects, its name, your skills used to make it, and the url. 
// You can omit freely anything if you dont have it
// To Add a Project, copy any one below and paste it after the last comma and increment the id's project number
const section3Title = "Experiences"
const projects = [
    {
        // Add image in './styles/images.css' in #project1
        id: "project1",
        name: "Degree Internship at RunCloud",
        skills: ["March 2021 - Now"],
        url: " "
    },
    {
        // Add image in './styles/images.css' in #project2
        id: "project2",
        name: "Diploma Internship at UiTM Kelantan",
        skills: ["July 2018 - Sept 2018"],
        url: " "
    },
    {
        // Add image in './styles/images.css' in #project3
        id: "project3",
        name: "Develop Web Application for Final Year Project",
        skills: ["Laravel, PHP, JS, ChartJS, Telegram API"],
        url: "https://github.com/luqman7/fyp"
    },
    {
        // Add image in './styles/images.css' in #project4
        id: "project4",
        name: "Develop Budget Planner Web Application",
        skills: ["JS, D3.js"],
        url: "https://github.com/luqman7/budgetplanner"
    },
    {
        // Add image in './styles/images.css' in #project5
        id: "project5",
        name: "Develop Forum Web Application",
        skills: ["PHP, Laravel, MySQL"],
        url: "https://github.com/luqman7/forum-web-app"
    },
    {
        // Add image in './styles/images.css' in #project6
        id: "project6",
        name: "Develop Currency Converter Bot",
        skills: ["NodeJS, Telegram API"],
        url: "https://github.com/luqman7/currency-convertor-bot"
    },
    {
        // Add image in './styles/images.css' in #project7
        id: "project7",
        name: "Develop JamilBot",
        skills: ["PHP, Telegram API"],
        url: "https://github.com/luqman7/jamilbot"
    },
    {
        // Add image in './styles/images.css' in #project6
        id: "project8",
        name: "Participate in Hackathon",
        skills: ["Joined Hack2Hire organized by Dell Malaysia. Develop a web app to used by 3 roles using Laravel and Bootstrap"],
        url: "https://github.com/luqman7"
    },
    {
        // Add image in './styles/images.css' in #project6
        id: "project9",
        name: "Cloning Netflix.com front-end",
        skills: ["ReactJS, TMDB API"],
        url: "https://github.com/luqman7/netflix-front-end"
    },
    {
        // Add image in './styles/images.css' in #project6
        id: "project10",
        name: "Cloning Tinder ",
        skills: ["ReactJS, MaterialUI, Firebase"],
        url: "https://github.com/luqman7/tinder-clone"
    },
    {
        // Add image in './styles/images.css' in #project6
        id: "project11",
        name: "REST API using Golang and Mux",
        skills: ["Go"],
        url: "https://github.com/luqman7/go-restapi"
    },
]
// Edit your Miscellaneous Activities, its name and the url. 
// You can omit freely anything if you dont have it
// To Add a Activity, copy any one below and paste it after the last comma and increment the id's Miscellaneous number

// Contact form text, and Jotforms link
// To get your own jotform link, go to https://www.jotform.com/
// If you hacve the link already, paste it in the contactUrl below
const section5Title = "Download my resume"
const contact = {
    pitch: "Whether you want to get in touch, talk about a project collaboration, or just say hi, I'd love to hear from you. Simply fill the from and send me an email.",
    copyright: "Luke Hakem",
    contactUrl: ''
}
// Paste your respective social media links. You can omit any if you dont have it
// Upload your resume in your drive, get the shaareable link and paste it in the resume section
const social = {
    github: 'https://github.com/luqman7',
    facebook: 'https://facebook.com',
    linkedin: 'https://linkedin.com',
    instagram: 'https://instagram.com',
    whatsapp: 'https://wa.me/601110521832',
    resume: 'https://drive.google.com/file/d/1Uxjh8xkxoEA5gbu7JasYPIXyeZY8ELsp/view?usp=sharing'
}
// Dont change anything here
export { animation, header, background, about, skillsBar, projects, contact, social, section2title, section3Title, section5Title }