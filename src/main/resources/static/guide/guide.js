/**
 * Created by daka on 5/29/18.
 */


var simpleModal = document.getElementById('simpleModal');
// Get open modal button
var modalBtn = document.getElementById('modalBtn');
// Get close button
var closeBtn = document.getElementsByClassName('closeBtn')[0];
var accTutBtn = document.getElementById('accTutBtn');
var decTutBtn = document.getElementById('decTutBtn');
var guideTutBtn = document.getElementById('guideTutBtn');

// Get open modal button


// Listen for open click
//     modalBtn.addEventListener('click', function() {
//         openModal(simpleModal);
//     }, false);

// Listen for close click
//    closeBtn.addEventListener('click', function() {
//        closeModal(simpleModal);
//   }, false);

// Listen for outside click
if(localStorage.getItem("tutorijal") == null) {
    window.onload = function() {
        openModal();
    };
} 

closeBtn.addEventListener('click', closeModal);
window.addEventListener('click', outsideClick);

accTutBtn.addEventListener('click', accTutFun);
decTutBtn.addEventListener('click', decTutFun);
guideTutBtn.addEventListener('click', guideTutFun);




function decTutFun() {
    localStorage.setItem("tutorijal", false);
    closeModal();
}

function accTutFun(){
    localStorage.setItem("tutorijal", "hint");
    javascript:introJs().addHints();
    closeModal();
}





function guideTutFun(){
    localStorage.setItem("tutorijal", "guide");
    introJs().setOption('doneLabel', 'Next page').start('weeks').oncomplete(function() {
    	localStorage.setItem("tutorijal", "guideSettings");
        window.location.href = '/#!/settings';
    });
    closeModal();
}

function weekGuide() {
	if (localStorage.getItem("tutorijal") == "guide") {
		introJs().exit();
	    introJs().setOption('doneLabel', 'Next page').start('weeks').oncomplete(function() {
	    	localStorage.setItem("tutorijal", "guideSettings");
	        window.location.href = '/#!/settings';
	    });
	} else {
		introJs().exit();
	}
}

function settingsGuide() {
    if(localStorage.getItem("tutorijal") == "guideSettings") {
        introJs().setOption('doneLabel', 'Next page').start('settings').oncomplete(function() {
        	localStorage.setItem("tutorijal", "guideDay");
            window.location.href = '/#!/day/Monday';
        });
    } else {
    	introJs().exit();
    }
}

function daysGuide() {
    if(localStorage.getItem("tutorijal") == "guideDay") {
        introJs().setOption('doneLabel', 'Next page').start('days').oncomplete(function() {
        	localStorage.setItem("tutorijal", "guideAddCourse");
            window.location.href = '/#!/addCourse';
        });

    } else {
    	introJs().exit();
    }
}



function addCourseGuide() {
    if(localStorage.getItem("tutorijal") == "guideAddCourse") {
        introJs().setOption('doneLabel', 'Next page').start('addCourse').oncomplete(function() {
        	localStorage.setItem("tutorijal", "guideAddClassroom");
            window.location.href = '/#!/addClassroom';
        });

    } else {
    	introJs().exit();
    }

}


function addClassroomGuide() {
    if(localStorage.getItem("tutorijal") == "guideAddClassroom") {
        introJs().setOption('doneLabel', 'Next page').start('addClassroom').oncomplete(function() {
        	localStorage.setItem("tutorijal", "guideAddDepartment");
            window.location.href = '/#!/addDepartment';
        });

    } else {
    	introJs().exit();
    }

}

function addDepartmentGuide() {
    if(localStorage.getItem("tutorijal") == "guideAddDepartment") {
        introJs().setOption('doneLabel', 'Done').start('addDepartment').oncomplete(function() {
        	localStorage.setItem("tutorijal", false);
            window.location.href = '/#!';
        });

    } else {
    	introJs().exit();
    }

}



// Function to open modal
function openModal(){
    simpleModal.style.display = 'block';
}

// Function to close modal
function closeModal(){
    simpleModal.style.display = 'none';
}

// Function to close modal if outside click
function outsideClick(e){
    if(e.target == simpleModal){
        localStorage.setItem("tutorijal", false);
        simpleModal.style.display = 'none';
    }
}


if (RegExp('multipage', 'gi').test(window.location.search)) {
    introJs().start();
}



//===============================================================


function startTour() {
    var tour = introJs()
    tour.setOption('tooltipPosition', 'auto');
    tour.setOption('positionPrecedence', ['left', 'right', 'top', 'bottom']);
    tour.start();
}