var bio = {
    "name" : "Jeffery Glover",
    "role" : "Front-End Developer",
    "contacts" : {
        "mobile" : "(970)-631-3036",
        "email" : "jkg700@gmail.com",
        "location" : "Los Angeles, CA",
        "twitter" : "@jkg700",
        "github" : "jeffery-glover"
    },
    "welcomeMessage" : "'Commiting the oldest sins in the newest ways' - William Shakespeare",
    "skills" : [
        "HTML5",
        "CSS3",
        "jQuery",
        "JavaScript"
        ],
    "biopic" : "images/jeff.jpg"
};

bio.display = function() {
    var headerRole = HTMLheaderRole.replace("%data%", "Front-End Web Developer");
    $("#header").prepend(headerRole);
    var headerName = HTMLheaderName.replace("%data%", "Jeffery Glover");
    $("#header").prepend(headerName);

    var formattedBiopic = HTMLbioPic.replace("%data%", bio.biopic);
    $("#header").append(formattedBiopic);

    var contactsMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    $("#topContacts, #footerContacts").append(contactsMobile);
    var contactsEmail = HTMLemail.replace("%data%", bio.contacts.email);
    $("#topContacts, #footerContacts").append(contactsEmail);
    var contactsTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
    $("#topContacts, #footerContacts").append(contactsTwitter);
    var contactsGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    $("#topContacts, #footerContacts").append(contactsGithub);
    var contactsLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    $("#topContacts, #footerContacts").append(contactsLocation);

    var welcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    $("#header").append(welcomeMessage);

    $("#header").append(HTMLskillsStart);
    for (var n = 0; n < bio.skills.length; n++) {

        var formattedSkills = HTMLskills.replace("%data%", bio.skills[n]);
        $("#skills").append(formattedSkills);
    }
};

bio.display();

var work = {
    "jobs" : [
        {
            "title" : "Sales Associate",
            "employer" : "Los Angeles Phil",
            "dates" : "April 2017 - Current",
            "location" : "Los Angeles, CA",
            "description" : "As a Sales Associate Jeff works with other members of the team to provide exceptional customer service to all soliciters of the Los Angeles Philharmonic Orchestra. Duties include making sales, maintaining store-front, and being knowledgable about performances and the surrounding area among other things."
        },
        {
            "title" : "Freelance Musician",
            "employer" : "Self Employed",
            "dates" : "July 2015 - Current",
            "location" : "Fort Collins, CO",
            "description" : "Jeff ran his own percussion studio where he specialized in preparing students for college auditions. He also picked up many performance opportunites in the local area where he would perform with local musicians."
        },
        {
            "title" : "Percussion Coordinator",
            "employer" : "Loveland High School",
            "dates" : "July 2015 - May 2016",
            "location" : "Loveland, CO",
            "description" : "Mr. Glover coordinated all percussion related activities at Loveland High School during the school year. These activites included performances around the state with the Loveland High School Marching Band, Percussion Ensemble performances, and performances with the schools multiple ensembles. He helped decide the music that would be played and coordinated with other staff member to achieve the best possible result for both the band and the percussion section."
        },
        {
            "title" : "Assistant Director",
            "employer" : "Juniata Valley School District",
            "dates" : "September 2013 - May 2015",
            "location" : "Alexandria, PA",
            "description" : "Jeff worked multiple years with this group and was promoted to Assistant Director during his second year. The work ranged from designing a performance to scheduling, organizing, and running rehearsals to taking students to the competitions across the state."
        }
    ]
};

work.display = function() {
    work.jobs.forEach(function(job) {
        $("#workExperience").append(HTMLworkStart);

        var formattedEmployer = HTMLworkEmployer.replace("%data%", job.employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", job.title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        var formattedDates = HTMLworkDates.replace("%data%", job.dates);
        var formattedDescription = HTMLworkDescription.replace("%data%", job.description);

        $(".work-entry:last").append(formattedEmployerTitle);
        $(".work-entry:last").append(formattedDates);
        $(".work-entry:last").append(formattedDescription);
    });
};

work.display();

var education = {
    "schools" : [
        {
            "name" : "Penn State",
            "dates" : "2011 - 2015",
            "degree" : "BA",
            "location" : "University Park, PA",
            "majors" : ["Music Performance"]
        }
    ],
    "onlineClasses" : [
        {
            "school" : "Udacity",
            "dates" : "2017 - Current",
            "title" : "Front-End Development",
            "url" : "https://www.udacity.com/"
        }
    ]
};

education.display = function () {
    education.schools.forEach(function(school) {
        $("#education").append(HTMLschoolStart);

        var formattedSchoolName = HTMLschoolName.replace("%data%", school.name);
        var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", school.degree);
        var formattedSchoolDates = HTMLschoolDates.replace("%data%", school.dates);
        var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", school.location);
        var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", school.majors);
        var formattedEducation = formattedSchoolName + formattedSchoolDegree + formattedSchoolDates + formattedSchoolLocation + formattedSchoolMajor;

        $(".education-entry:last").append(formattedEducation);
    });

    $("#education").append(HTMLonlineClasses);

    education.onlineClasses.forEach(function(course) {
        $("#education").append(HTMLschoolStart);

        var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", course.title);
        var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", course.school);
        var formattedOnlineDates = HTMLonlineDates.replace("%data%", course.dates);
        var formattedOnlineURL = HTMLonlineURL.replace("%data%", course.url);
        var formattedOnlineEducation = formattedOnlineTitle + formattedOnlineSchool + formattedOnlineDates + formattedOnlineURL;

        $(".education-entry:last").append(formattedOnlineEducation);
    });
};

education.display();

var projects = {
    "projects" : [
        {
            "title" : "Drum Build",
            "dates" : "August 2015 - December 2015",
            "description" : "Custom drum built from scratch",
            "images" : ["images/Optimized-drum.jpg"]
        },
        {
            "title" : "Udacity Project 1",
            "dates" : "April 2017 - May 2017",
            "description" : "First Udacity project",
            "images" : ["images/udacity.png"]
        }
    ]
};

projects.display = function() {
    projects.projects.forEach(function(project) {
        $("#projects").append(HTMLprojectStart);

        var formattedProjectTitle = HTMLprojectTitle.replace("%data%", project.title);
        var formattedProjectDates = HTMLprojectDates.replace("%data%", project.dates);
        var formattedProjectDescription = HTMLprojectDescription.replace("%data%", project.description);
        var formattedProject = formattedProjectTitle + formattedProjectDates + formattedProjectDescription;
        for (var n = 0; n < project.images.length; n++) {
            var formattedProjectImage = HTMLprojectImage.replace("%data%", project.images[n]);
            formattedProject = formattedProject + formattedProjectImage;
        }

        $(".project-entry:last").append(formattedProject );
    });
};

projects.display();

$(document).click(function(loc) {
  // your code goes here
    var x = loc.pageX;
    var y = loc.pageY;

    logClicks(x, y);
});

$("#mapDiv").append(googleMap);
