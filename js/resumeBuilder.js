
var bio = {
	"name": "Nikko T. Lee",
	"role": "Software Engineer",
	"contacts": {
		"mobile": "408-661-5026",
		"email": "nikko.lee88@yahoo.com",
		"github": "nikko0327",
		"linkedin": "linkedin.com/in/nikkolee",
		"location": "San Jose"
	},
	"pic": "images/nikko.jpg",
	"welcomeMessage": "Actively Looking for Software Engineering Internship Position",
	"skills": ["Java", "JavaScript", "HTML", "CSS", "JQuery", "Boostrap", "Agile", "Scrum", "Google App Engine", "Android Application Development"]
}

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedPicture = HTMLbioPic.replace("%data%", bio.pic);
var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
var formattedLinkedin = HTMLlinkedin.replace("%data%", bio.contacts.linkedin);
var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
var formattedMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

$("#topContacts").append(formattedMobile);
$("#topContacts").append(formattedEmail);
$("#topContacts").append(formattedGithub);
$("#topContacts").append(formattedLinkedin);
$("#topContacts").append(formattedLocation);
$("#header").append(formattedName);
$("#header").append(formattedRole);
$("#header").append(formattedPicture);
$("#header").append(formattedMessage);
$("#footerContacts").append(formattedMobile);
$("#footerContacts").append(formattedEmail);
$("#footerContacts").append(formattedGithub);
$("#footerContacts").append(formattedLinkedin);
$("#footerContacts").append(formattedLocation);

var education = {
    "schools": [
        {
            "name": "Mission college",
            "location": "Santa Clara, California",
            "degree": "AS",
            "major":"Mathematics",
            "dates": "2013",
            "url":"http://www.missioncollege.edu"
        },
        {
            "name": "San Jose State University",
            "location": "San Jose, California",
            "degree": "BS",
            "major":"Software Engineering",
            "dates": "2016",
            "url":"http://www.sjsu.edu"
        }
    ],
    "onlineCourses": [
        {
            "title": "JavaScript Syntax",
            "school": "Udacity",
            "dates": "2015",
            "url": "http://www.udacity.com/course/ud804"
        }
    ]
}

for(edu in education.schools){
	$("#education").append(HTMLschoolStart);

	var formattedName = HTMLschoolName.replace("%data%", education.schools[edu].name);
	$(".education-entry:last").append(formattedName);
	var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[edu].degree);
	$(".education-entry:last").append(formattedSchoolDegree);
	var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[edu].dates);
	$(".education-entry:last").append(formattedSchoolDates);
	var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[edu].location);
	$(".education-entry:last").append(formattedSchoolLocation);
	var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[edu].major);
	$(".education-entry:last").append(formattedSchoolMajor);

}
/*
for(online in education.onlineCourses){
	$("#education").append(HTMLonlineClasses);

	var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[online].title);
	$(".education-entry:last").append(formattedTitle);
}
*/

var work = {

	"jobs" : [
		{
			"employer": "Subway Restaurants",
			"title": "Sandwhich Artist",
			"location":"San Jose",
			"dates":"08/2008 - 03/2011",
			"description":"Applied best customer service practices to meet customer statisfaction. Responsibilites include: Customer service, Food preparation, Maintaining workplace cleanliness, Cash handling, and stocking."
		},
		{
			"employer": "Frys Electroincs",
			"title": "Loss Prevention Associate",
			"location":"San Jose",
			"dates":"04/2012 - 03/2013",
			"description":"Responsible for store safety and security. Helped the company from thefts and loss. Maintained store cleanliness for customer and employee's safety."
		},
		{
			"employer": "The Tech Museum",
			"title": "Volunteer",
			"location":"San Jose",
			"dates":"01/2012 - 05/2012",
			"description":"Responsible for store safety and security. Helped the company from thefts and loss. Maintained store cleanliness for customer and employee's safety."
		}

	]
}

var projects = {
	"projects": [
		{
			"title": "Table Jumper",
			"dates":"Fall 2009",
			"description": "Engineering project where teams build their own version of table jumper. The goal for this project is to make the prototype jump from one table to other with using only recycled materials.",
			"images":"images/tableJumper.jpg"
		},
		{
			"title": "PVault",
			"dates":"Fall 2014",
			"description": "Mobile application project where users can securely store their photos and documents. This application is password protected, therefore keeps other users from accessing the owner's documents.",
			"images":"images/pvault.png"
		},
		{
			"title": "Techeria",
			"dates":"Spring 2015",
			"description": "A professional social network aimed at the tech and business industry to get students and professionals alike an internship or job.",
			"images": "images/techeria.png"
		},
		{
			"title": "Ninja Tutor",
			"dates":"Fall 2015",
			"description": "A On-demand web application where user can either find a tutor or offer a tutoring session. Payment transaction is done through using Paypal API.",
			"images": "images/ninjatutor.png"
		}
	]


}

if(bio.skills.length > 0){
	$("#header").append(HTMLskillsStart);
	
	var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[4]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[5]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[6]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[7]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[8]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[9]);
	$("#skills").append(formattedSkill);
}

function displayWork(){
	for(job in work.jobs){
		$("#workExperience").append(HTMLworkStart);

		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title); 
		var formattedEmployerTitle = formattedEmployer + formattedTitle;
		$(".work-entry:last").append(formattedEmployerTitle);

		var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
		$(".work-entry:last").append(formattedLocation);

		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		$(".work-entry:last").append(formattedDates);

		var formattedDescription = HTMLworkDescription.replace("%data%",work.jobs[job].description);
		$(".work-entry:last").append(formattedDescription);
	}
}
displayWork(); //Displays the work section.

$(document).click(function(loc){
	var x = loc.pageX;
	var y = loc.pageY;

	logClicks(x,y);
});

function inName(name){
	name = name.trim().split(" ");
	console.log(name);
	name[1] = name[1].toUpperCase();
	name[0] = name[0].slice(0,1).toUpperCase() +
	name[0].slice(1).toLowerCase();

	return name[0] + " " + name[1];
}

$("#main").append(internationalizeButton);


function displayProject(){
	for(project in projects.projects) {	
		$("#projects").append(HTMLprojectStart);

		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		$(".project-entry:last").append(formattedTitle);

		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		$(".project-entry:last").append(formattedDates);

		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		$(".project-entry:last").append(formattedDescription);
		
		var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images);
		$(".project-entry:last").append(formattedImage);
		
		/*
		if(projects.projects[project].images.length > 0){
			for(image in projects.projects[project].images){
				var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
				$(".project-entry:last").append(formattedImage);
			}
		}*/
	}
}
displayProject();

$("#mapDiv").append(googleMap);
