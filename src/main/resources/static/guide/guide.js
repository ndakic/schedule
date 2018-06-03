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
	var checkBox = document.getElementById("tuts");
	if(checkBox.checked == false) {
		document.getElementById("tuts").checked = true;
	}	
    localStorage.setItem("tutorijal", "hint");
    javascript:introJs().addHints();
    //var x = document.getElementsByClassName("introjs-hints")[0].getElementsByTagName("a")[1].getAttribute("data-step"); 
    closeModalGuide();
}


function guideTutFun(){
	if (window.location.href != "http://localhost:8080/#!/") {
		closeModal();
		window.location.href = '/#!/';
		setTimeout(checkBoxGuide, 2000);
	} else {
		var checkBox = document.getElementById("tuts");
		if(checkBox.checked == false) {
			document.getElementById("tuts").checked = true;
		}	
	    localStorage.setItem("tutorijal", "guide");
	    window.location.href = '/#!/#jump';
	    introJs().setOption('doneLabel', 'Next page').start('weeks').oncomplete(function() {
	    	localStorage.setItem("tutorijal", "guideSettings");
	        window.location.href = '/#!/settings';
	    });
	    closeModalGuide();
	}
	

}


function checkBoxGuide() {
	var checkBox = document.getElementById("tuts");
	if(checkBox.checked == false) {
		document.getElementById("tuts").checked = true;
	}	
    localStorage.setItem("tutorijal", "guide");
    window.location.href = '/#!/#jump';
    introJs().setOption('doneLabel', 'Next page').start('weeks').oncomplete(function() {
    	localStorage.setItem("tutorijal", "guideSettings");
        window.location.href = '/#!/settings';
    });
    closeModalGuide();
}


function weekGuide() {
	var checkBox = document.getElementById("tuts");
	if(checkBox.checked == true) {
		if (localStorage.getItem("tutorijal") == "guide") {
			//introJs().exit();
			document.getElementById("tuts").checked = true;
		    introJs().setOption('doneLabel', 'Next page').start('weeks').oncomplete(function() {
		    	localStorage.setItem("tutorijal", "guideSettings");
		        window.location.href = '/#!/settings';
		    });
		} else {
			introJs().exit();
			checkBox.checked = false;
		}
	}

}


function settingsGuide() {
	setTimeout(settingsGuideCheckBox, 1000);
}

function settingsGuideCheckBox() {
	var checkBox = document.getElementById("tuts");
	if(checkBox.checked == true) {
	    if(localStorage.getItem("tutorijal") == "guideSettings") {
	    	checkBox.checked = true;
	        introJs().setOption('doneLabel', 'Next page').start('settings').oncomplete(function() {
	        	localStorage.setItem("tutorijal", "guideDay");
	            window.location.href = '/#!/day/Monday';
	        });
	    } else {
	    	introJs().exit();
	    	document.getElementById("tuts").checked = false;
	    }
	}
	
}


function daysGuide() {
	var checkBox = document.getElementById("tuts");
	if(checkBox.checked == true) {
	    if(localStorage.getItem("tutorijal") == "guideDay") {
	    	document.getElementById("tuts").checked = true;
	        introJs().setOption('doneLabel', 'Next page').start('days').oncomplete(function() {
	        	localStorage.setItem("tutorijal", "guideAddCourse");
	            window.location.href = '/#!/addCourse';
	        });

	    } else {
	    	introJs().exit();
	    	document.getElementById("tuts").checked = false;
	    }
	}

}

function addCourseGuide() {
	var checkBox = document.getElementById("tuts");
	if(checkBox.checked == true) {
	    if(localStorage.getItem("tutorijal") == "guideAddCourse") {
	    	document.getElementById("tuts").checked = true;
	        introJs().setOption('doneLabel', 'Next page').start('addCourse').oncomplete(function() {
	        	localStorage.setItem("tutorijal", "guideAddClassroom");
	            window.location.href = '/#!/addClassroom';
	        });
	
	    } else {
	    	introJs().exit();
	    	document.getElementById("tuts").checked = false;
	    }
	}
}


function addClassroomGuide() {
	var checkBox = document.getElementById("tuts");
	if(checkBox.checked == true) {

	    if(localStorage.getItem("tutorijal") == "guideAddClassroom") {
	    	document.getElementById("tuts").checked = true;
	        introJs().setOption('doneLabel', 'Next page').start('addClassroom').oncomplete(function() {
	        	localStorage.setItem("tutorijal", "guideAddDepartment");
	            window.location.href = '/#!/addDepartment';
	        });
	
	    } else {
	    	introJs().exit();
	    }
	}

}

function addDepartmentGuide() {
	var checkBox = document.getElementById("tuts");
	if(checkBox.checked == true) {
	    if(localStorage.getItem("tutorijal") == "guideAddDepartment") {
	    	document.getElementById("tuts").checked = true;
	        introJs().setOption('doneLabel', 'Done').start('addDepartment').oncomplete(function() {
	        	localStorage.setItem("tutorijal", false);
	            window.location.href = '/#!';
	            document.getElementById("tuts").checked = false;
	        });
	
	    } else {
	    	introJs().exit();
	    	document.getElementById("tuts").checked = false;
	    }
	}
}


function settingsHint() {
	if(localStorage.getItem("tutorijal") == "hint") {
		javascript:introJs().removeHints();

		javascript:introJs().showHints();
		javascript:introJs().hideHint(1);
	}
}


function removeHintsMainPage() {
	if(localStorage.getItem("tutorijal") == "hint") {
		javascript:introJs().removeHints();
		setTimeout(showHints, 2000);
		
	}
}


function daysHint() {
	if(localStorage.getItem("tutorijal") == "hint") {
		javascript:introJs().removeHints();
		javascript:introJs().showHints();
	}
}


function courseHint() {
	if(localStorage.getItem("tutorijal") == "hint") {
		javascript:introJs().removeHints();
		javascript:introJs().showHints();
		javascript:introJs().hideHint(0);
	}
}


function classroomHint() {
	if(localStorage.getItem("tutorijal") == "hint") {
		javascript:introJs().removeHints();
		javascript:introJs().showHints();
		javascript:introJs().hideHint(0);
	}
}

function departmentHint() {
	if(localStorage.getItem("tutorijal") == "hint") {
		javascript:introJs().removeHints();
		javascript:introJs().showHints();
		javascript:introJs().hideHint(0);
	}
}

function showHints() {
	javascript:introJs().addHints();	
}

function check(e) {
	if (e.checked == false) {
		if(localStorage.getItem("tutorijal") == "hint") {
			javascript:introJs().removeHints();
			localStorage.setItem("tutorijal", false);
		} else if (localStorage.getItem("tutorijal") == "guideDay") {
			localStorage.setItem("tutorijal", false);
			introJs().exit();
		} else if (localStorage.getItem("tutorijal") == "guideAddCourse") {
			localStorage.setItem("tutorijal", false);
			introJs().exit();
		} else if (localStorage.getItem("tutorijal") == "guideAddClassroom") {
			localStorage.setItem("tutorijal", false);
			introJs().exit();
		} else if (localStorage.getItem("tutorijal") == "guideAddDepartment") {
			localStorage.setItem("tutorijal", false);
			introJs().exit();
		} else if (localStorage.getItem("tutorijal") == "guideSettings") {
			localStorage.setItem("tutorijal", false);
			introJs().exit();
		} else if (localStorage.getItem("tutorijal") == "guide") {
			localStorage.setItem("tutorijal", false);
			introJs().exit();
		}
	} else {
		
		openModal();
		
	}
}







// Function to open modal
function openModal(){
    simpleModal.style.display = 'block';
}

// Function to close modal
function closeModal(){
    simpleModal.style.display = 'none';
    document.getElementById("tuts").checked = false;
}

function closeModalGuide(){
    simpleModal.style.display = 'none';
}

// Function to close modal if outside click
function outsideClick(e){
    if(e.target == simpleModal){
        localStorage.setItem("tutorijal", false);
        simpleModal.style.display = 'none';
        document.getElementById("tuts").checked = false;
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