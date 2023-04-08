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
    let html = "<section id='intro'>";     
      
    html += "<h2 id='prefix'>" + prefix + "</h2>";
    html += "<h1 id='name'>" + name + "</h1>";
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
    html += "<h1 class='section-title'>SKILLS</h1>";
    
    // skills
    for (let i = 0; i < skillData.length; i++) {
        html += "<p>";
        html += "<b>" + skillData[i].title + ": </b>" + skillData[i].desc;
        html += "</p>";
    }
    
    // close section
    html += "</section>";    

    document.body.innerHTML += html;
}

function addProjects() {
    let projectsData = [];
    projectsData.push({ title: "FitBuddy",
                        tags: "Java, Spring Boot, REST API, HTML, CSS, JavaScript, Lombok, Bootstrap 5, SQL, Git, Maven",
                        shortDesc: "Workout Tracker app made with Spring Boot",
                        cardPhotos: "projects/fitbuddy/fitbuddy_history.png",
                        link: "projects/fitbuddy.html" });

    projectsData.push({ title: "URL Shortener",
                        tags: "Java, Spring Boot, REST API, HTML, CSS, JavaScript, SQL, Git, Maven",
                        shortDesc: "URL Shortener app made with Spring Boot",
                        cardPhotos: "projects/urlshortener/photo_2.png",
                        link: "" });

    projectsData.push({ title: "Game Of Moves",
                        tags: "C#, Android, Unity, Git",
                        shortDesc: "Multi-level puzzle game made with Unity", 
                        cardPhotos: "projects/gameofmoves/photo_7.png",
                        link: "" });
                        
    projectsData.push({ title: "Bouncy Ball",
                        tags: "C#, Android, Unity, Git",
                        shortDesc: "Casual action game made with Unity",
                        cardPhotos: "projects/bouncyball/photo_1.png",
                        link: "" });

    projectsData.push({ title: "Brick Maniac",
                        tags: "Java, Android, SVN",
                        shortDesc: "Classic brick breaker game",
                        cardPhotos: "projects/brickmaniac/photo_1.png",
                        link: "" });

    // create section
    let html = "<section id='projects'>";

    // add title
    html += "<h1 class='section-title'>PROJECTS</h1>";

    // add container
    html += "<div id='project-cards-container'>";

    // add cards
    for (let i = 0; i < projectsData.length; i++) {
        // create card
        let card = "<div class='project-card'>";

        //card += "<div class='project-card-img-container'>";
        card += "<img class='project-card-img' src='" + projectsData[i].cardPhotos + "'>";                
        //card += "</div>";

        card += "<div class='project-card-info'>";
        card += "<p class='project-card-title'>" + projectsData[i].title + "</p>";        
        card += "<p class='project-card-short-desc'>" + projectsData[i].shortDesc + "</p>";
        if (projectsData[i].link !== "") {
            card += "<a href='" + projectsData[i].link + "'>View details</a>";
        }
        card += "</div>";

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