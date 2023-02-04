document.addEventListener("DOMContentLoaded", () => {
	onStart();
});

function onStart() {
	console.log("Page ready.");
	
	/* Top Header */
	addHeader("Hello World! My name is", "Laszlo Janku", "Junior Software Developer | Indie Game Developer");
	
	/* Menu */
	/*var menu = [ "About", "Skills", "Projects" ];
	addMenu(menu);*/
	
	addDivider();
	
	/* About */
	var about = "<p>An enthusiastic Junior Software Developer and Indie Game Developer with years of hands-on " +
				"experience in various (personal and commercial) projects.</p>" +				 
				"<p>Experience in coding and using different programming languages like Java, C#, " + 
				"Python (for scripting), JavaScript, HTML and CSS. " + 
				"I am passionate about developing software and games. " +
				"I am self-motivated and enjoy learning about new technologies and frameworks.</p>";	
	addBoxAndTitle("About", about);	
	
	/* Skills */	
	var skills = 	"<ul class='longdesc-list'>" +
					"<li>OOP concepts and common design patterns</li>" +
					"<li>Core data structures and algorithms knowledge</li>" +
					"<li>Clean code and SOLID principles</li>" +
					"</ul>" +

					"<ul class='longdesc-list'>" +
					"<li>Java, C# and Python (for scripting)</li>" +
					"<li>HTML, CSS and JavaScript</li>" +
					"<li>SQL queries</li>" +
					"</ul>" +

					"<ul class='longdesc-list'>" +
					"<li>Git, SVN</li>" +
					"<li>Understand CI/CD concepts</li>" +
					"</ul>" +

					"<ul class='longdesc-list'>" +
					"<li>Maven</li>" +
					"<li>Experience with Spring Boot</li>" +
					"<li>Unit testing (JUnit, Mockito)</li>" +
					"<li>Eclipse IDE and IntelliJ IDEA</li>" +
					"</ul>" +
					
					"<ul class='longdesc-list'>" +
					"<li>Excellent knowledge of the Unity cross-platform game engine (since version 5)</li>" +
					"<li>Experience with UI elements, Physics, Particle system, Lights and Audio</li>" +
					"<li>Understand design patterns and game design principles</li>" +
					"<li>Experience with mobile and PC game development</li>" +
					"<li>Visual Studio and Visual Studio Code</li>" +
					"</ul>" +

					"<ul class='longdesc-list'>" +
					"<li>Windows & Linux</li>" +
					"</ul>";	
	addBoxAndTitle("Skills", skills);
	
	/* Projects */
	addSectionTitle("Projects");
	
	var projectGroupTitles = [ "Recent projects on GitHub", "Commercial Projects" ];
	generateProjectGroups(projectGroupTitles);
	
	/* FitBuddy */
	
	var title = "FitBuddy";
	var shortdesc = "Workout Tracker app made with Spring Boot.";
	var longdesc =	"<ul class='longdesc-list'>" +
					"<li>Open source project on GitHub</li>" +
					"<li>Managed and delegated tasks to contributors</li>" +
					"<li>Implemented REST API design to handle the clients’ (GET, POST, PUT, DELETE) requests</li>" +
					"<li>Incorporated the DTO design pattern into the project</li>" +
					"<li>Integrated Spring Boot Security to manage the users authentication</li>" +
					"<li>Frontend made with Bootstrap 5 (JavaScript, HTML and CSS)</li>" +
					"<li>Features: Users are able to register, login, create exercises and log their workouts</li>" +
					"</ul>" +

					"<p>" + 
					"<a href='https://github.com/mepox/fitbuddy' target='_blank'>View Source Code on GitHub</a></p>" +
					"<p>" +
					"<a href='https://fitbuddy-demo.up.railway.app' target='_blank'>Live Demo</a>" +
					"<i> (Please note: app may take some time to start on Railway.)</i></p>" +
					"<p><i>username: user<br>password: user</i></p>";
					
	var directory = "projects/fitbuddy";
	var photosName = [ "fitbuddy_login.png", "fitbuddy_register.png", "fitbuddy_history.png", "fitbuddy_exercises.png" ];
	var photoClass = "project-photo-big";
	var techStack = [ "Java", "Spring Boot", "Spring Security", "REST API", "Lombok", "Bootstrap 5", "SQL", "Git", "Maven" ];	
	
	addProject(0, title, shortdesc, longdesc, directory, photosName, photoClass, techStack);
	
	/* URL Shortener */
	
	var title = "URL Shortener";
	var shortdesc = "URL Shortener made with Spring Boot.";
	var longdesc = 	"<ul class='longdesc-list'>" +
					"<li>Shortens the users' URL</li>" +
					"<li>Generates an unique key for each URL</li>" +
					"<li>REST API design to handle the clients' (GET, POST, DELETE) requests</li>" +
					"<li>Frontend uses plain JavaScript, HTML and CSS</li>" +
					"</ul>" +				
					
					"<p><a href='https://github.com/mepox/simple-urlshortener' target='_blank'>" + 
					"View Source Code on GitHub</a></p>";
					
	var directory = "projects/urlshortener";
	var photosName = [ "photo_1.png" ];
	var photoClass = "project-photo-big";
	var techStack = [ "Java", "Spring Boot", "JavaScript", "HTML", "CSS", "REST API", "SQL", "Git" ];
	
	addProject(0, title, shortdesc, longdesc, directory, photosName, photoClass, techStack);
	
	/* Game Of Moves */
	
	var title = "Game Of Moves";
	var shortdesc = "Commercial Android game developed in a team of two.";
	var longdesc = "<p>The goal was to make a game which is challenging but also slow paced which is much more suited " +
					"for a mobile game. </p>" +
					"<p><b>Game Of Moves</b> is a multi-level puzzle game where the players has to move all the boxes to the " + 
					"destination zones however each boxes has limited moves. </p>" +
					
					"<ul class='longdesc-list'>" +
					"<li>Planned and developed the game's framework and core gameplay</li>" +
					"<li>Integrated Facebook API so the users are able to share their progress on Social Media</li>" +
					"<li>Managed the Google Play's Developer Console</li>" +
					"</ul>" +
					
					"<p>The game reached about 500 downloads.</p>" +
					"<p>" + 
					"<a href='https://play.google.com/store/apps/details?id=com.pixelbits.thegameofmoves' " + 
					"target='_blank'><img alt='Get it on Google Play' src='logos/googleplay.png' " + 
					"class='googleplaylogo'/></a>" +
					"<i>(Please note: may not available on Google Play if it's under Review)</i></p>";
										
	var directory ="projects/gameofmoves";
	var photosName = [ "photo_1.png", "photo_2.png", "photo_3.png", "photo_4.png", "photo_5.png", "photo_7.png" ];
	var photoClass = "project-photo";
	var techStack = [ "Java", "C#", "Android", "Unity", "Git" ];
	
	addProject(1, title, shortdesc, longdesc, directory, photosName, photoClass, techStack);
	
	/* Bouncy Ball */
	
	var title = "Bouncy Ball";
	var shortdesc = "Commercial Android game developed by myself.";
	var longdesc = "<p>The goal was to make an addicting game where the users are keep coming back to try to beat " + 
					"their previous highscores. </p>" +
					"<p><b>Bouncy Ball</b> is an action game, where the players has to jump higher and higher by " + 
					"tapping the screen and avoid the dangerous spikes. </p>" +
										
					"<ul class='longdesc-list'>" +					
					"<li>Planned and developed the game's framework and core gameplay</li>" +
					"<li>Integrated Facebook API so the users are able to share their progress on Social Media</li>" +
					"<li>Managed the Google Play's Developer Console</li>" +
					"</ul>" +										
					
					"<p>The game reached about 1000 downloads.</p>" +
					"<p><a href='https://play.google.com/store/apps/details?id=com.laszlojanku.bouncyball' " + 
					"target='_blank'><img alt='Get it on Google Play' src='logos/googleplay.png' " + 
					"class='googleplaylogo'/></a>" +
					"<i>(Please note: may not available on Google Play if it's under Review)</i></p>";
					
	var directory ="projects/bouncyball";
	var photosName = [ "photo_1.png", "photo_2.png", "photo_3.png", "photo_4.png", "photo_5.png", "photo_6.png" ];
	var photoClass = "project-photo";
	var techStack = [ "Java", "C#", "Android", "Unity", "Git" ];
	
	addProject(1, title, shortdesc, longdesc, directory, photosName, photoClass, techStack);
	
	/* Brick Maniac */
	
	var title = "Brick Maniac";
	var shortdesc = "Commercial Android game developed in a team of two.";
	var longdesc =  "<p>The goal was to make a classic brick breaker game which is much more polished than the rest " + 
	"of the similar games in the Play Store. </p>" +				 
					"<p><b>Brick Maniac</b> is a classic brick breaker game, where the players has to destroy all " + 
					"the bricks with the ball to complete the levels. </p>" +
					
					"<ul class='longdesc-list'>" +
					"<li>Planned and developed the game's framework and core gameplay</li>" +
					"<li>Uses custom game engine</li>" +
					"<li>Integrated Facebook API so the users are able to share their progress on Social Media</li>" +
					"<li>Managed the Google Play's Developer Console</li>" +
					"</ul>" +
					
					"<p>The game reached about 500 downloads.</p>" +
					"<p><a href='https://play.google.com/store/apps/details?id=com.tupix.brickmaniacfree' " + 
					"target='_blank'><img alt='Get it on Google Play' src='logos/googleplay.png' " +
					"class='googleplaylogo'/></a>" +
					"<i>(Please note: may not available on Google Play if it's under Review)</i></p>";

	var directory ="projects/brickmaniac";
	var photosName = [ "photo_1.png", "photo_2.png", "photo_3.png"];
	var photoClass = "project-photo";
	var techStack = [ "Java", "Android", "SVN" ];
	
	addProject(1, title, shortdesc, longdesc, directory, photosName, photoClass, techStack);
}

function addSectionTitle(text) {
	document.getElementsByTagName("body")[0].innerHTML += "<div class='section-title'>" + text + "</div>";
}

function generateProjectGroups(titles) {
	var body = document.getElementsByTagName("body")[0];
	
	for (var i = 0; i < titles.length; i++) {
		body.innerHTML += "<div class='project-group'>" +
			"<div class='project-group-title'>" + "<h2>~ " + titles[i] + " ~</h2>" + "</div></div>";			
	}
}

function addProject(groupId, title, shortDesc, longDesc, directory, photosName, photoClass, techStack) {
	var projectGroup = document.getElementsByClassName("project-group")[groupId];
	
	// Add project div
	var toAdd = "<div class='project box'></div><br><hr class='project-divider'><br>";
	projectGroup.innerHTML += toAdd;
	
	var projects = document.getElementsByClassName("project");
	var project = projects[projects.length-1];
	
	// Add title
	addProjectTitle(project, title);
	
	// Add short description
	addProjectShortDesc(project, shortDesc);
	
	// Add tech stack
	addProjectTechStack(project, techStack);
	
	// Add long description
	addProjectLongDesc(project, longDesc);
	
	// Add photos
	addProjectPhotos(project, directory, photosName, photoClass);
}

function addProjectTitle(project, title) {
	// Add title
	var toAdd = "<div class='project-title'>" + "<h3>" + title + "</h3></div>";
	
	project.innerHTML += toAdd;
}

function addProjectShortDesc(project, shortDesc) {		
	// Add short description
	var toAdd = "<div class='project-shortdesc'>" + "<p><i>" + shortDesc + "</i></p>" + "</div>";
	
	project.innerHTML += toAdd;
}

function addProjectLongDesc(project, longDesc) {
	// Add long description
	var toAdd = "<div class='project-longdesc'>" + longDesc + "</div><br>";
	
	project.innerHTML += toAdd;
}

function addProjectTechStack(project, techStack) {
	var toAdd = "";
	
	// Add tech stack	
	if (techStack != null) {
		toAdd += "<div class='project-techstack'>";
		toAdd += "<ul class='tech-stack-list'>";
		
		for (var i = 0; i < techStack.length; i++) {
			toAdd += "<li>" + techStack[i] + "</li>";
		}
		
		toAdd += "</ul></div>";
	}
	
	project.innerHTML += toAdd;
}

function addProjectPhotos(project, directory, photosName, photoClass) {
	var toAdd = "";
	
	// Add photos
	if (photosName != null) {
		toAdd += "<div class='project-photos'>"; 
		
		for (var i = 0; i < photosName.length; i++) {
			var fullPhotoName = directory + "/" + photosName[i];
			toAdd += "<a href='" + fullPhotoName + "' target='_blank'>" +
					"<img src='" + fullPhotoName + "' class='" + photoClass + "'></a>";	
		}
		
		toAdd += "</div>";
	}
	
	project.innerHTML += toAdd;
}

function addHeader(prefix, title, subtitle) {
	var body = document.getElementsByTagName("body")[0];
	
	body.innerHTML += 	"<div class='header'>" +
						"<div class='header-prefix'>" + prefix + "</div>" +
						"<div class='header-title'>" + title + "</div>" +
						"<div class='header-subtitle'>" + subtitle + "</div>" +
						"</div>";
}

function addDivider() {
	var body = document.getElementsByTagName("body")[0];
	
	body.innerHTML += "<hr class='project-divider'>";
}


function addMenu(items) {
	var body = document.getElementsByTagName("body")[0];
	
	var toAdd = "";
	
	toAdd +=   	"<div class='menuBox'>" +
				"<ul class='menu-list'>";
				
	for (var i = 0; i < items.length; i++) {
		toAdd += "<li class='menu-item'><a href='#" + items[i] + "'>" + items[i] + "</a></li>"; 
	}
	
	toAdd += "</ul></div>";
	
	body.innerHTML += toAdd;
}

function addBoxAndTitle(title, text) {
	addSectionTitle(title);
	addBox(text);
}

function addBox(text) {
	var body = document.getElementsByTagName("body")[0];
	
	body.innerHTML += 	"<div class='box'>" +
						"<div class='box-content'>" +	text + "</div></div";
}