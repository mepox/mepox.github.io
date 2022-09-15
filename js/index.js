function onStart() {
	console.log("Page ready.");
	
	addTitle("Projects");
	
	var projectGroupTitles = [ "Recent projects on GitHub", "Commercial Projects" ];
	generateProjectGroups(projectGroupTitles);
	
	/* Workout Tracker */
	
	var title = "Workout Tracker";
	var shortdesc = "Workout Tracker app made with Spring Boot.";
	var longdesc =	"<p>A workout tracker app where users are able to log their workouts and also create their own exercises. </p>" +
					"<p>" +
					"- Users can register and login to the application.<br>" +
					"- Users can create their custom exercises.<br>" +
					"- Users can log their workout by adding their custom exercises to a specific date.</p>" +
					"<p>Uses REST API design to handle the clients' (GET, POST, PUT, DELETE) requests. This could also easily provide a backend for a mobile app. </p>" +
					"<p><a href='https://github.com/mepox/simple-workouttracker'>View Source Code</a></p>" +
					"<p><a href='https://spring-workouttracker.herokuapp.com'>Live Demo</a>" +
					"<i> (Please note: app may take some time to start on Heroku.)</i></p>" +
					"<p><i>username: user<br>password: user</i></p>" + 
					"<ul class='tech-stack-list'>" +
					"<li>Java</li>" +
					"<li>Spring Boot</li>" +
					"<li>Spring Security</li>" +
					"<li>JavaScript</li>" +
					"<li>HTML</li>" +
					"<li>CSS</li>" +
					"<li>REST API</li>" +
					"<li>SQL</li>" +
					"<li>Git</li></ul>";					
	var directory = "projects/workouttracker";
	var photosName = [ "photo_1.png", "photo_2.png" ];
	
	addProject(0, title, shortdesc, longdesc, directory, photosName);
	
	/* URL Shortener */
	
	var title = "URL Shortener";
	var shortdesc = "URL Shortener made with Spring Boot.";
	var longdesc = "<p>It was a small project to create an URL shortener service as I was curious how they work and how to make one. </p>" +
					"<p>Uses REST API design to handle the clients' (GET, POST, DELETE) requests. </p>" +
					"<p><a href='https://github.com/mepox/simple-urlshortener'>View Source Code</a></p>" +
					"<p><a href='https://spring-urlshortener.herokuapp.com'>Live Demo</a>" +
					"<i> (Please note: app may take some time to start on Heroku.)</i></p>" +
					"<ul class='tech-stack-list'>" +
					"<li>Java</li>" +
					"<li>Spring Boot</li>" +
					"<li>Spring Security</li>" +
					"<li>JavaScript</li>" +
					"<li>HTML</li>" +
					"<li>CSS</li>" +
					"<li>REST API</li>" +
					"<li>SQL</li>" +
					"<li>Git</li></ul>";
	var directory = "projects/urlshortener";
	var photosName = [ "photo_1.png" ];
	
	addProject(0, title, shortdesc, longdesc, directory, photosName);
	
	/* Game Of Moves */
	
	var title = "Game Of Moves";
	var shortdesc = "Commercial Android game developed in a team of two.";
	var longdesc = "<p>The goal was to make a game which is challenging but also slow paced which is much more suited for a mobile game. </p>" +
					"<p><b>Game Of Moves</b> is a puzzle game where the players has to move all the boxes to the destination zones however each boxes has limited moves. </p>" +
					"<p>I was responsible for planning the game's framework, developing half of the code and integrating the Facebook API so the users are able share their progress on Social Media. " +
					"Also I was responsible for managing the Play Store's Developer Account (building and uploading the app) and marketing our game. </p>" +
					"<p>The game reached about 500 downloads.</p>" +
					"<p><a href='https://play.google.com/store/apps/details?id=com.pixelbits.thegameofmoves'><img alt='Get it on Google Play' src='logos/googleplay.png' class='googleplaylogo'/></a></p>" +
					"<p><i>(Please note: may not available on Google Play if it's under Review)</i></p>" +
					"<ul class='tech-stack-list'>" +
					"<li>Java</li>" +
					"<li>C#</li>" +
					"<li>Android</li>" +
					"<li>Unity</li>" +					
					"<li>Git</li></ul>";					
	var directory ="projects/gameofmoves";
	var photosName = [ "photo_1.png", "photo_2.png", "photo_3.png", "photo_4.png", "photo_5.png", "photo_6.png", "photo_7.png" ];
	
	addProject(1, title, shortdesc, longdesc, directory, photosName);
	
	/* Bouncy Ball */
	
	var title = "Bouncy Ball";
	var shortdesc = "Commercial Android game developed by myself.";
	var longdesc = "<p>The goal was to make an addicting game where the users are keep coming back to try to beat their previous highscores. </p>" +
					"<p><b>Bouncy Ball</b> is an action game, where the players has to jump higher and higher by tapping the screen and avoid the dangerous spikes. </p>" +					
					"<p>I was responsible for the whole development of the game, including " +
					"planning the game's framework, coding the core gameplay and integrating the Facebook API so the users are able to share their highscores on Social Media. " +
					"Also, managing the Play Store's Developer Account (building and uploading the app) and marketing the game.</p>" +
					"<p>The game reached about 1000 downloads.</p>" +
					"<p><a href='https://play.google.com/store/apps/details?id=com.laszlojanku.bouncyball'><img alt='Get it on Google Play' src='logos/googleplay.png' class='googleplaylogo'/></a></p>" +
					"<p><i>(Please note: may not available on Google Play if it's under Review)</i></p>" +
					"<ul class='tech-stack-list'>" +
					"<li>Java</li>" +
					"<li>C#</li>" +
					"<li>Android</li>" +
					"<li>Unity</li>" +					
					"<li>Git</li></ul>";					
	var directory ="projects/bouncyball";
	var photosName = [ "photo_1.png", "photo_2.png", "photo_3.png", "photo_4.png", "photo_5.png", "photo_6.png" ];
	
	addProject(1, title, shortdesc, longdesc, directory, photosName);
	
	/* Brick Maniac */
	
	var title = "Brick Maniac";
	var shortdesc = "Commercial Android game developed in a team of two.";
	var longdesc =  "<p>The goal was to make a classic brick breaker game which is much more polished than the rest of the similar games in the Play Store. </p>" +				 
					"<p><b>Brick Maniac</b> is a classic brick breaker game, where the users has to destroy all the bricks with the ball to complete the levels. </p>" +
					"<p>I was responsible for planning the game's framework and developing half of the game's code. " +
					"Also, I was responsible for managing the Play Store's Developer Account (building and uploading the app). </p>" +
					"<p>The game reached about 500 downloads.</p>" +
					"<p><a href='https://play.google.com/store/apps/details?id=com.tupix.brickmaniacfree'><img alt='Get it on Google Play' src='logos/googleplay.png' class='googleplaylogo'/></a></p>" +
					"<p><i>(Please note: may not available on Google Play if it's under Review)</i></p>" +
					"<ul class='tech-stack-list'>" +
					"<li>Java</li>" +					
					"<li>Android</li>" +
					"<li>Game engine from scratch</li>" +					
					"<li>Git</li></ul>";
	var directory ="projects/brickmaniac";
	var photosName = [ "photo_1.png", "photo_2.png", "photo_3.png"];
	
	addProject(1, title, shortdesc, longdesc, directory, photosName);
}

function addTitle(text) {
	document.getElementsByTagName("body")[0].innerHTML += "<div class='main-title'><h1>" + text + "</h1></div>";
}

function generateProjectGroups(titles) {
	var body = document.getElementsByTagName("body")[0];
	
	for (var i = 0; i < titles.length; i++) {
		body.innerHTML += "<div class='project-group'>" +
			"<div class='project-group-title'>" + "<h2>" + titles[i] + "</h2>" + "</div></div>";			
	}
}

function addProject(groupId, title, shortdesc, longdesc, directory, photosName) {
	var projectGroup = document.getElementsByClassName("project-group")[groupId];
	var toAdd = "";
	
	toAdd += "<div class='project'>" +
		"<div class='project-title'>" +	"<h3>" + title + "</h3></div>" +
		"<div class='project-shortdesc'>" + "<p><i>" + shortdesc + "</i></p>" + "</div><br>" +
		"<div class='project-longdesc'>" + longdesc + "</div><br>";		
		
	if (photosName != null) {
		toAdd += "<div class='project-photos'>"; 
		
		for (var i = 0; i < photosName.length; i++) {
			var fullPhotoName = directory + "/" + photosName[i];
			toAdd += "<a href='" + fullPhotoName + "'>" +
					"<img src='" + fullPhotoName + "' class='project-photo'></a>";	
		}
		
		toAdd += "</div>";
	}
	
	toAdd += "</div><br><hr><br>";
	
	projectGroup.innerHTML += toAdd;
}
