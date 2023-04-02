document.addEventListener("DOMContentLoaded", () => {
	onStart();
});

function onStart() {
    addHome();
    addSkills();
    addProjects();
}

function addHome() {
    // data
    let prefix = "Hello World! My name is";
    let name = "Laszlo Janku";
    let aboutme = ["An enthusiastic <b>Software Developer</b> and <b>Indie Game Developer</b> with years of hands-on experience in various personal and commercial projects.",
                    
                    "Experience coding in multiple programming languages, including Java, C#, Python (for scripting), JavaScript, HTML, and CSS. " +
                    "I am passionate about creating high-quality software and games that deliver an exceptional user experience.",

                    "Self-motivated and always eager to learn about new technologies and frameworks, I thrive on challenges and " +
                    "enjoy working collaboratively with others to develop innovative solutions that meet and exceed expectations."];

    // create section
    let html = "<section id='home'>";    

    // add main title
    html += "<div id='title-container'>";
    html += "<div id='prefix'>" + prefix + "</div>";
    html += "<div id='name'>" + name + "</div>";
    html += "</div>";

    // add about me
    html += "<div id='aboutme'>";

    for (let i = 0; i < aboutme.length; i++) {
        html += "<p>";
        html += aboutme[i];
        html += "</p>";
    }

    html += "</div>";

    // close section
    html += "</section>";

    document.body.innerHTML += html;
}

function addSkills() {
    // data
    let skillData = [];
    skillData.push({ title: "Programming languages", desc: "HTML, CSS, JavaScript, SQL, Python, Java, C#" });
    skillData.push({ title: "Frameworks / Libraries", desc: "Spring Boot, Lombok, Bootstrap 5" });
    skillData.push({ title: "Game engine", desc: "Unity (since version 5)" });
    skillData.push({ title: "Database", desc: "MySQL" });
    skillData.push({ title: "Build automation / Version control", desc: "Maven, Git, SVN" });
    skillData.push({ title: "Cloud / Deployment", desc: "Heroku, DigitalOcean, Railway, Unity Cloud Automation" });
    skillData.push({ title: "Testing", desc: "JUnit, Mockito" });
    skillData.push({ title: "Software", desc: "Eclipse IDE, IntelliJ IDEA, Visual Studio, Visual Studio Code, MonoDevelop" });
    skillData.push({ title: "Platforms", desc: "Windows, Linux, Android" });

    // create section
    let html = "<section id='skills'>";

    // title
    html += "<h1 class='section-title'>Skills</h1>";    

    // skills container
    html += "<div id='skills-container'>";

    // create cards    
    for (let i = 0; i < skillData.length; i++) {
        // create card
        let card = "<div class='skill-card'>";

        // add title
        card += "<p class='skill-card-title'>" + skillData[i].title + ":</p>";

        // add description
        card += "<p class='skill-card-desc'>" + skillData[i].desc + "</p>";

        // close card
        card += "</div>";
        
        html += card;
    }

    // close skills container
    html += "</div>";
    
    // close section
    html += "</section>";    

    document.body.innerHTML += html;
}

function addProjects() {
    let projectsData = [];
    projectsData.push({ title: "FitBuddy",
                        tags: "Java, Spring Boot, REST API, Lombok, Bootstrap 5, SQL, Git, Maven",
                        shortDesc: "Workout Tracker app made with Spring Boot",
                        cardPhotos: "projects/fitbuddy/fitbuddy_history.png" });

    // create section
    let html = "<section id='projects'>";

    // add title
    html += "<h1 class='section-title'>Projects</h1>";

    // add container
    html += "<div id='projects-container'>";

    // add cards
    for (let i = 0; i < projectsData.length; i++) {
        // create card
        let card = "<div class='project-card'>";

        card += "<p class='project-card-title'>" + projectsData[i].title + "</p>";
        card += "<img class='project-card-img' src='" + projectsData[i].cardPhotos + "'>";
        card += "<p class='project-card-short-desc'>" + projectsData[i].shortDesc + "</p>";

        // close card
        card += "</div>";

        html += card;
    }

    // close container
    html += "</div>";

    // close section
    html += "</section>";

    document.body.innerHTML += html;
}