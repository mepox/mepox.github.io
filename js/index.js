function onStart() {
	console.log("Page ready.");
	
	addTitle("Projects");
	
	var projectGroupTitles = [ "Recent projects on GitHub", "Commercial Projects" ];
	generateProjectGroups(projectGroupTitles);
	
		/* URL Shortener */
	
	var title = "URL Shortener";
	var shortdesc = "A simple URL Shortener made with Spring Boot.";
	var longdesc = "<p></p>" +
					"<p><label><b>Tech Summary:</b></label>" +
					"<ul>" +
					"<li>Language: Java</li>" +
					"<li>Framework: Spring Boot</li>" +
					"<li>Version control: Git</li></ul></p>";
	var directory = "projects/urlshortener";
	var photosName = [ "screenshot.jpg" ];
	
	addProject(0, title, shortdesc, longdesc, directory, photosName);
	
	/* Workout Tracker */
	
	var title = "Workout Tracker";
	var shortdesc = "A simple Workout Tracker made with Spring Boot.";
	var longdesc = "<p></p>" +
					"<p><label><b>Tech Summary:</b></label>" +
					"<ul>" +
					"<li>Language: Java</li>" +
					"<li>Framework: Spring Boot</li>" +
					"<li>Version control: Git</li></ul></p>";	
	var directory = "projects/workouttracker";
	var photosName = [ "screenshot1.jpg", "screenshot2.jpg" ];
	
	addProject(0, title, shortdesc, longdesc, directory, photosName);
	
	/* Game Of Moves */
	
	var title = "Game Of Moves (2019)";
	var shortdesc = "An Android game developed in a team of two.";
	var longdesc = "<p>The goal was to make a free game which is challenging but slow paced which is much more suited for a mobile game. " +
					"The game was completely free and supported by full screen ads at the end of each level. Users were able to remove the ads by paying a small fee.</p>" +
					"<p>I was responsible to plan the game's framework, develop half of the code and integrate the Facebook API. " +
					"Also I was responsible to manage the Developer Account and market our game.</p>" +
					"<p>The game reached about 500 downloads.</p>" +
					"<p><label><b>Tech Summary:</b></label>" +
					"<ul>" +
					"<li>Language: C# and Java (Android)</li>" +
					"<li>Game engine: Unity game engine</li>" +
					"<li>Version control: Git</li></ul></p>";
	var directory ="projects/gameofmoves";
	var photosName = [ "photo_1.png", "photo_2.png", "photo_3.png", "photo_4.png", "photo_5.png", "photo_6.png", "photo_7.png" ];
	
	addProject(1, title, shortdesc, longdesc, directory, photosName);
	
	/* Bouncy Ball */
	
	var title = "Bouncy Ball (2016)";
	var shortdesc = "An Android game developed by myself.";
	var longdesc = "<p>The goal was to make a free game where the user can play endlessly but once the user dies in the game, it resets back to the start. " +
					"This encourage the users to keep coming back to the game and try to beat their own previous highscores. " +
					"Facebook API was also integrated in the App so the users were able to share their highscores on Social Media to compete with each other. </p>" +
					"<p>I was responsible for the whole development of the game, including " +
					"planning the game's framework, developing the App, managing the Developer Account and marketing the game.</p>" +
					"<p>The game reached about 1000 downloads.</p>" +
					"<p><label><b>Tech Summary:</b></label>" +
					"<ul>" +
					"<li>Language: C# and Java (Android)</li>" +
					"<li>Game engine: Unity game engine</li>" +
					"<li>Version control: Git</li></ul></p>";
	var directory ="projects/bouncyball";
	var photosName = [ "photo_1.png", "photo_2.png", "photo_3.png", "photo_4.png", "photo_5.png", "photo_6.png" ];
	
	addProject(1, title, shortdesc, longdesc, directory, photosName);
	
	/* Brick Maniac */
	
	var title = "Brick Maniac (2014)";
	var shortdesc = "An Android game developed in a team of two.";
	var longdesc =  "<p>The goal was to make a classic brick breaker game which is much more polished than the rest of the similar games in the Play Store. " + 
					"We made a free version of the game which contained banner ads and limited levels. " + 
					"Also we had a paid (pro) version which was completely ad free and all the levels were available. </p>" +
					"<p>I was responsible to plan out the game's framework and to develop half of the game's code. " +
					"Also, as I was in charge to manage our Play Store's Developer Account I had to build a separate package (free and paid) from the game and upload them.</p>" +
					"<p>We have reached about 500 downloads.</p>" +
					"<p><label><b>Tech Summary:</b></label>" +
					"<ul>" +
					"<li>Language: Java (Android)</li>" +
					"<li>Game engine: Written from scratch</li>" +
					"<li>Version control: SVN</li></ul></p>";
	var directory ="projects/brickmaniac";
	var photosName = [ "photo_1.jpg", "photo_2.jpg", "photo_3.png"];
	
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
		"<div class='project-shortdesc'>" + "<p><i>" + shortdesc + "</i></p>" + "</div>" +
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
