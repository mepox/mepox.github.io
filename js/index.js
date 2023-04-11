let projectsData = [];

document.addEventListener("DOMContentLoaded", () => {    
	onStart();
});

function onStart() {
    fillProjectsData();
    addHome();
    addSkills();
    addProjects();

    // add events for burger menu
    const burgerMenu = document.querySelector("#burger-menu");
    const menuItems = document.querySelector("#menu-items");

    burgerMenu.addEventListener("click", () => {
        menuItems.classList.toggle("active");
        burgerMenu.classList.toggle("active");
    });
    menuItems.querySelectorAll("a").forEach(n => n.addEventListener("click", () => {
        menuItems.classList.remove("active");
        burgerMenu.classList.remove("active");
    }));
}

function fillProjectsData() {
    projectsData.push({ 
        title: "FitBuddy",
        tags: "Java, Spring Boot, REST API, HTML, CSS, JavaScript, Lombok, Bootstrap 5, SQL, Git, Maven",
        shortDesc: "Workout Tracker app made with Spring Boot",
        cardImage: "projects/fitbuddy/fitbuddy_history.png",
        longDesc: "<p>This is an open source workout tracker application built with Spring Boot and available on GitHub. The project is managed by myself. " +
                "I delegated some tasks to contributors and I oversaw them to ensure high-quality code and functionality.</p>" +

                "<p>The application implements a RESTful API design that handles clients' requests (including GET, POST, PUT, and DELETE) for exercises and workout logs. " +
                "The project also incorporates the DTO (Data Transfer Object) design pattern to improve efficiency and readability.</p>" +

                "<p>For user security, the application integrates Spring Boot Security, providing robust authentication and authorization features.</p>" +
                "<p>The frontend is built with Bootstrap 5 and uses JavaScript, HTML, and CSS to deliver an intuitive and responsive user experience. " +
                "Users can register, log in, create exercises, and log their workouts with ease, making it simple to track and manage their fitness goals.</p>" +

                "<p><a href='https://github.com/mepox/fitbuddy' target='_blank'>View Source Code on GitHub</a></p>" +

                "<p><a href='https://fitbuddy-demo.up.railway.app/' target='_blank'>Live Demo</a>" +
                "<span><i> (Please note: app may take some time to start on Railway.)</i></span></p>" +

                "<p><i>username: user</i></p>" +
                "<p><i>password: user</i></p>",
        projectImages: "projects/fitbuddy/fitbuddy_exercises.png, " +
                       "projects/fitbuddy/fitbuddy_history.png, " +
                       "projects/fitbuddy/fitbuddy_login.png, " +
                       "projects/fitbuddy/fitbuddy_register.png"        
        });

    projectsData.push({
        title: "Trebol eCommerce",
        tags: "Java, Spring Boot, REST API, Lombok, Git, Maven",
        shortDesc: "eCommerce backend API with Spring Boot",
        cardImage: "projects/trebol/photo_1.png",
        longDesc: "<p>Trebol is open source eCommerce web application. Backend API was made with Spring Boot and the Frontend with Angular framework.</p>" +
                "<p>I participated as an open source contributor to the backend API.</p>" +
                "<ul>" +
                "<li>Completed tickets that involved writing unit tests for the project using JUnit and Mockito</li>" +
                "<li>Implemented an account protection mechanism (one user must be root and cannot be deleted)</li>" +
                "<li>Added a custom annotation to validate phone numbers using regex</li>" +
                "<li>Reviewed new contributors' Pull Requests to ensure they follow the best coding practices</li>" +
                "</ul>",
        projectImages: "projects/trebol/photo_1.png"
    });

    projectsData.push({ 
        title: "URL Shortener",
        tags: "Java, Spring Boot, REST API, HTML, CSS, JavaScript, SQL, Git, Maven",
        shortDesc: "URL Shortener app made with Spring Boot",
        cardImage: "projects/urlshortener/photo_2.png",
        longDesc: "<p>My open-source URL shortener application, built with Spring Boot and available on GitHub, " +
                "makes it easy for users to shorten their URLs and share them quickly and conveniently.</p>" +

                "<p>With my application, users can simply enter their long URL, and the system generates a unique key for each URL, " +
                "making it easier to share and access. I have implemented a REST API design to handle the clients' (GET, POST, DELETE) requests, " +
                "ensuring seamless integration with other systems.</p>" +

                "<p>Frontend uses plain JavaScript, HTML, and CSS, providing a clean, user-friendly interface that's easy to navigate and understand. " +
                "Whether you're looking to shorten a URL for a social media post or share a link with friends, my URL shortener application provides a fast, " +
                "reliable, and secure solution that's always at your fingertips.</p>" +

                "<p><a href='https://github.com/mepox/simple-urlshortener' target='_blank'>View Source Code on GitHub</a></p>",
        projectImages: "projects/urlshortener/photo_1.png"
        });

    projectsData.push({
        title: "Game Of Moves",
        tags: "C#, Android, Unity, Git",
        shortDesc: "Multi-level puzzle game made with Unity", 
        cardImage: "projects/gameofmoves/photo_1.png",
        longDesc: "<p>Game of Moves is a challenging but relaxed multi-level puzzle game designed specifically for mobile devices. " +
                "Players must move all the boxes to their respective destination zones, but each box has a limited number of moves, " +
                "making the game both thought-provoking and engaging.</p>" +

                "<p>Built using the Unity game engine, Game of Moves features intuitive gameplay and a carefully crafted design that challenges players at every turn. " +
                "The core gameplay mechanics were designed and programmed by our team, while we also assisted with level design to ensure each level offered a " +
                "unique and engaging challenge.</p>" +

                "<p>We also integrated the Facebook API, so players can share their progress and achievements with friends and family on social media.</p>" +

                "<p>Game of Moves has been well received, with approximately 500 downloads to date. It's a game that offers both entertainment and intellectual stimulation, " +
                "making it perfect for anyone looking for a mobile game that's both fun and challenging.</p>" +

                "<p><a href='https://play.google.com/store/apps/details?id=com.pixelbits.thegameofmoves' target='_blank'> " +
                "<img alt='Get it on Google Play' src='logos/googleplay.png' class='googleplaylogo'></a>" +
				"<i>(Please note: may not available on Google Play if it's under Review)</i></p>",
        projectImages: "projects/gameofmoves/photo_1.png, " +
                       "projects/gameofmoves/photo_2.png, " +
                       "projects/gameofmoves/photo_3.png, " +
                       "projects/gameofmoves/photo_4.png, " +
                       "projects/gameofmoves/photo_5.png, " +
                       "projects/gameofmoves/photo_7.png"
        });
                        
    projectsData.push({
        title: "Bouncy Ball",
        tags: "C#, Android, Unity, Git",
        shortDesc: "Casual action game made with Unity",
        cardImage: "projects/bouncyball/photo_1.png",
        longDesc: "<p>Bouncy Ball is an addictive action game designed to keep players coming back for more, as they strive to beat their previous high scores. " +
                "The game challenges players to jump higher and higher by tapping the screen, while avoiding dangerous spikes that threaten to bring their journey " +
                "to an abrupt end.</p>" +

                "<p>Built using the Unity game engine, Bouncy Ball is a casual yet engaging action game. I planned and developed the core gameplay, " +
                "designed the game mechanics, and created the game's assets to ensure a fun and satisfying experience for players.</p>" +        

                "<p>I also integrated the Facebook API, so players can share their progress and achievements on social media, making it easy to show off " +
                "their high scores and challenge friends to beat them.</p>" +        

                "<p>Bouncy Ball has been a hit with players, with approximately 1000 downloads to date. It's a game that combines action and strategy, " +
                "making it perfect for anyone looking for a fun and engaging mobile gaming experience.</p>" +

                "<p><a href='https://play.google.com/store/apps/details?id=com.laszlojanku.bouncyball' target='_blank'>" +
                "<img alt='Get it on Google Play' src='logos/googleplay.png' class='googleplaylogo'></a>" +
				"<i>(Please note: may not available on Google Play if it's under Review)</i></p>",
        projectImages: "projects/bouncyball/photo_1.png, " +
                       "projects/bouncyball/photo_2.png, " +
                       "projects/bouncyball/photo_3.png, " +
                       "projects/bouncyball/photo_4.png, " +
                       "projects/bouncyball/photo_5.png, " +
                       "projects/bouncyball/photo_6.png"
        });

    projectsData.push({
        title: "Brick Maniac",
        tags: "Java, Android, SVN",
        shortDesc: "Classic brick breaker game",
        cardImage: "projects/brickmaniac/photo_3.png",
        longDesc: "<p>With a goal of creating a classic brick breaker game that surpassed the quality of similar titles in the Play Store, " +
                "we developed Brick Maniac – a thrilling game that challenges players to destroy all the bricks with a ball to complete each level.</p>" +

                "<p>We designed the core gameplay and programmed the main game logic, engineering a custom game engine to ensure a smooth and engaging " +
                "experience for players. We also integrated the Facebook API, enabling users to share their progress and achievements on social media " +
                "and inviting friends to join in the fun.</p>" +        

                "<p>With approximately 500 downloads to date, Brick Maniac has been a hit with players who enjoy the challenge of classic arcade-style games. " +
                "Whether looking to kill time or hone their skills, Brick Maniac offers endless hours of entertainment and fun.</p>" +

                "<p><a href='https://play.google.com/store/apps/details?id=com.tupix.brickmaniacfree' target='_blank'>" +
                "<img alt='Get it on Google Play' src='logos/googleplay.png' class='googleplaylogo'></a>" +
				"<i>(Please note: may not available on Google Play if it's under Review)</i></p>",
        projectImages: "projects/brickmaniac/photo_1.png, " +
                       "projects/brickmaniac/photo_2.png, " +
                       "projects/brickmaniac/photo_3.png"
        });
}

function addHome() {    
    // create section
    let html = "<section id='home'>";
    
    // add home top
    html += "<div id='home-top'>";
    html += "<h2 id='prefix'>Hello World! My name is</h2>";
    html += "<h1 id='my-name'>Laszlo Janku</h1>";
    html += "</div>";

    // add home middle
    html += "<div id='home-middle'>";
    html += "<img src='logos/intro.png' alt='Intro photo'>"
    html += "<div id='aboutme'>";
    html += "<h2>About Me</h2>";
    html += "<p>An enthusiastic <b>Software Developer</b> and <b>Indie Game Developer</b> with years of hands-on experience in various personal and commercial projects.</p>";
    html += "</div></div>";

    // add home bottom
    html += "<div id='home-bottom'>";    
    html += "<h2>More About Me</h2>";
    html += "<p>Experience coding in multiple programming languages, including Java, C#, Python (for scripting), JavaScript, HTML, and CSS. " +
            "I am passionate about creating high-quality software and games that deliver an exceptional user experience.</p>";
    html += "<p>Self-motivated and always eager to learn about new technologies and frameworks, I thrive on challenges and " +
            "enjoy working collaboratively with others to develop innovative solutions that meet and exceed expectations.</p>";
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

        card += "<img class='project-card-img' src='" + projectsData[i].cardImage + "'>";                

        card += "<div class='project-card-info'>";
        card += "<p class='project-card-title'>" + projectsData[i].title + "</p>";        
        card += "<p class='project-card-short-desc'>" + projectsData[i].shortDesc + "</p>";

        if (projectsData[i].longDesc !== "") {
            card += "<button onclick='showProjectModal(" + JSON.stringify(projectsData[i].title) + ")'>View details</button>";
        }

        // close card info
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

function getProjectDataByTitle(title) {
    for (let i = 0; i < projectsData.length; i++) {
        if (projectsData[i].title === title) {
            return projectsData[i];
        }
    }    
}

function showProjectModal(title) {
    let projectData = getProjectDataByTitle(title);

    // create modal and content
    let modal = "<div id='project-modal'>";
    modal += "<div id='project-modal-content'>";

    // add close button
    modal += "<span id='project-modal-close' onclick='closeProjectModal()'>&times;</span>";
    
    // add title
    modal += "<h1 id='project-modal-title'>" + projectData.title + "</h1>";

    // add short description
    modal += "<h2 id='project-modal-short-desc'>" + projectData.shortDesc + "</h2>";

    // add tags
    modal += "<ul id='project-modal-tags'>";
    let tagsArr = projectData.tags.split(",");
    for (let i = 0; i < tagsArr.length; i++) {
        modal += "<li>" + tagsArr[i] + "</li>";
    }
    modal += "</ul>";    

    // add description
    modal += projectData.longDesc;

    // add project images
    modal += "<div id='project-modal-images'>";
    let imagesArr = projectData.projectImages.split(",");
    for (let i = 0; i < imagesArr.length; i++) {
        modal += "<a href='" + imagesArr[i] + "' target='_blank'>";
        modal += "<img src='" + imagesArr[i] + "'>";
        modal += "</a>";
    }
    modal += "</div>";

    // close content and modal
    modal += "</div></div>";
    
    document.body.innerHTML += modal;
    document.body.style.overflow = "hidden";
}

function closeProjectModal() {
    let modal = document.getElementById("project-modal");
    modal.remove();
    document.body.style.overflow = "auto";
}