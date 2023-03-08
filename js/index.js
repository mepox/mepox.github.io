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
	/*var about = "<p>An enthusiastic Junior Software Developer and Indie Game Developer with years of hands-on " +
				"experience in various (personal and commercial) projects.</p>" +				 
				"<p>Experience in coding and using different programming languages like Java, C#, " + 
				"Python (for scripting), JavaScript, HTML and CSS. " + 
				"I am passionate about developing software and games. " +
				"I am self-motivated and enjoy learning about new technologies and frameworks.</p>";*/
	var about = "<p>As an enthusiastic junior software developer and indie game developer, " +
				"I bring years of hands-on experience in various personal and commercial projects to every role I undertake.</p>" +

				"<p>With extensive experience coding in multiple programming languages, including Java, C#, Python (for scripting), " +
				"JavaScript, HTML, and CSS, I am passionate about creating high-quality software and games that deliver an exceptional user experience.</p>" +

				"<p>Self-motivated and always eager to learn about new technologies and frameworks, " +
				"I thrive on challenges and enjoy working collaboratively with others to develop innovative solutions that meet and exceed expectations.</p>" +

				"<p>Whether working on solo projects or as part of a team, I take pride in my ability to deliver quality results within tight deadlines. " +
				"With a keen eye for detail and a passion for delivering excellence, I am committed to creating software and games that inspire and delight users.</p>";

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
	var longdesc =	/*"<ul class='longdesc-list'>" +
					"<li>Open source project on GitHub</li>" +
					"<li>Managed and delegated tasks to contributors</li>" +
					"<li>Implemented REST API design to handle the clients’ (GET, POST, PUT, DELETE) requests</li>" +
					"<li>Incorporated the DTO design pattern into the project</li>" +
					"<li>Integrated Spring Boot Security to manage the users authentication</li>" +
					"<li>Frontend made with Bootstrap 5 (JavaScript, HTML and CSS)</li>" +
					"<li>Features: Users are able to register, login, create exercises and log their workouts</li>" +
					"</ul>" +*/
					"<p>This is an open source workout tracker application built with Spring Boot and available on GitHub. " +
					"The project is managed collaboratively, with tasks delegated to contributors to ensure high-quality code and functionality.</p>" +

					"<p>The application implements a RESTful API design that handles clients' requests (including GET, POST, PUT, and DELETE) " +
					"for exercises and workout logs. The project also incorporates the DTO (Data Transfer Object) design pattern " +
					"to improve efficiency and readability.</p>" +

					"<p>For user security, the application integrates Spring Boot Security, providing robust authentication and authorization features.</p>" +

					"<p>The frontend is built with Bootstrap 5 and uses JavaScript, HTML, and CSS to deliver an intuitive and responsive user experience. " +
					"Users can register, log in, create exercises, and log their workouts with ease, making it simple to track and manage their fitness goals.</p>" +

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
	var longdesc = 	/*"<ul class='longdesc-list'>" +
					"<li>Shortens the users' URL</li>" +
					"<li>Generates an unique key for each URL</li>" +
					"<li>REST API design to handle the clients' (GET, POST, DELETE) requests</li>" +
					"<li>Frontend uses plain JavaScript, HTML and CSS</li>" +
					"</ul>" +*/
					"<p>My open-source URL shortener application, built with Spring Boot and available on GitHub, " +
					"makes it easy for users to shorten their URLs and share them quickly and conveniently.</p>" +

					"<p>With my application, users can simply enter their long URL, and the system generates a unique key " +
					"for each URL, making it easier to share and access. I have implemented a REST API design to handle the " +
					"clients' (GET, POST, DELETE) requests, ensuring seamless integration with other systems.</p>" +

					"<p>Frontend uses plain JavaScript, HTML, and CSS, providing a clean, user-friendly interface that's easy " +
					"to navigate and understand. Whether you're looking to shorten a URL for a social media post or share a link " +
					"with friends, my URL shortener application provides a fast, reliable, and secure solution that's always at your fingertips.</p>" +
					
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
	var longdesc =  /*"<p>The goal was to make a game which is challenging but also slow paced which is much more suited " +
					"for a mobile game. </p>" +
					"<p><b>Game Of Moves</b> is a multi-level puzzle game where the players has to move all the boxes to the " + 
					"destination zones however each boxes has limited moves. </p>" +
					
					"<ul class='longdesc-list'>" +
					"<li>Multi-level puzzle game made with Unity</li>" +
					"<li>Designed core gameplay and programmed main game logic</li>" +
					"<li>Assisted with level design</li>" +
					"<li>Integrated Facebook API so the users are able to share their progress on Social Media</li>" +
					"<li>Managed the Google Play's Developer Console</li>" +
					"</ul>" +
					
					"<p>The game reached about 500 downloads.</p>" +*/
					"<p>Game of Moves is a challenging but relaxed multi-level puzzle game designed specifically for mobile devices. " +
					"Players must move all the boxes to their respective destination zones, but each box has a limited number of moves, " +
					"making the game both thought-provoking and engaging.</p>" +

					"<p>Built using the Unity game engine, Game of Moves features intuitive gameplay and a carefully crafted design that " +
					"challenges players at every turn. The core gameplay mechanics were designed and programmed by our team, " +
					"while we also assisted with level design to ensure each level offered a unique and engaging challenge.</p>" +

					"<p>We also integrated the Facebook API, so players can share their progress and achievements with friends and family " +
					"on social media. </p>" +

					"<p>Game of Moves has been well received, with approximately 500 downloads to date. It's a game that offers both " +
					"entertainment and intellectual stimulation, making it perfect for anyone looking for a mobile game that's both fun and challenging.</p>" +

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
	var longdesc =  /*"<p>The goal was to make an addicting game where the users are keep coming back to try to beat " + 
					"their previous highscores. </p>" +
					"<p><b>Bouncy Ball</b> is an action game, where the players has to jump higher and higher by " + 
					"tapping the screen and avoid the dangerous spikes. </p>" +
										
					"<ul class='longdesc-list'>" +					
					"<li>Casual action game made with Unity</li>" +
					"<li>Planned and developed the core gameplay</li>" +
					"<li>Designed game mechanics</li>" +
					"<li>Created game assets</li>" +
					"<li>Integrated Facebook API so the users are able to share their progress on Social Media</li>" +
					"<li>Conducted Market Research</li>" +
					"<li>Managed the Google Play's Developer Console</li>" +
					"</ul>" +										
					
					"<p>The game reached about 1000 downloads.</p>" +*/
					"<p>Bouncy Ball is an addictive action game designed to keep players coming back for more, as they " +
					"strive to beat their previous high scores. The game challenges players to jump higher and higher by " +
					"tapping the screen, while avoiding dangerous spikes that threaten to bring their journey to an abrupt end.</p>" +

					"<p>Built using the Unity game engine, Bouncy Ball is a casual yet engaging action game. I planned and developed " +
					"the core gameplay, designed the game mechanics, and created the game's assets to ensure a fun and satisfying experience for players.</p>" +

					"<p>We also integrated the Facebook API, so players can share their progress and achievements on social media, " +
					"making it easy to show off their high scores and challenge friends to beat them. </p>" +

					"<p>Bouncy Ball has been a hit with players, with approximately 1000 downloads to date. It's a game that combines action and strategy, " +
					"making it perfect for anyone looking for a fun and engaging mobile gaming experience.</p>" +

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
	var longdesc =  /*"<p>The goal was to make a classic brick breaker game which is much more polished than the rest " + 
					"of the similar games in the Play Store. </p>" +				 
					"<p><b>Brick Maniac</b> is a classic brick breaker game, where the players has to destroy all " + 
					"the bricks with the ball to complete the levels. </p>" +
					
					"<ul class='longdesc-list'>" +
					"<li>Designed core gameplay and programmed main game logic</li>" +
					"<li>Engineered a custom game engine</li>" +
					"<li>Integrated Facebook API so the users are able to share their progress on Social Media</li>" +
					"<li>Managed the Google Play's Developer Console</li>" +
					"</ul>" +
					
					"<p>The game reached about 500 downloads.</p>" +*/
					"<p>With a goal of creating a classic brick breaker game that surpassed the quality of similar titles in the " +
					"Play Store, we developed Brick Maniac – a thrilling game that challenges players to destroy all the bricks " +
					"with a ball to complete each level.</p>" +

					"<p>We designed the core gameplay and programmed the main game logic, engineering a custom game engine to ensure "+
					"a smooth and engaging experience for players. We also integrated the Facebook API, enabling users to share " +
					"their progress and achievements on social media and inviting friends to join in the fun.</p>" +

					"<p>With approximately 500 downloads to date, Brick Maniac has been a hit with players who enjoy the challenge " +
					"of classic arcade-style games. Whether looking to kill time or hone their skills, Brick Maniac offers " +
					"endless hours of entertainment and fun.<p>" +

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