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
	    var intro = introJs();
	    intro.setOptions({
	    	steps: steps,
	        showBullets: false,
	        showButtons: true,
	        showProgress: false,
	        exitOnOverlayClick: false,
	        showStepNumbers: true,
	        keyboardNavigation: true,
	        doneLabel : 'Next Page'
	      });
	    intro.start('weeks').oncomplete(function() {
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
    var intro = introJs();
    intro.setOptions({
    	steps: steps,
        showBullets: false,
        showButtons: true,
        showProgress: false,
        exitOnOverlayClick: false,
        showStepNumbers: true,
        keyboardNavigation: true,
        doneLabel : 'Next Page'
      });
    intro.start('weeks').oncomplete(function() {
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
		    var intro = introJs();
		    intro.setOptions({
		    	steps: settingsSeteps,
		        showBullets: false,
		        showButtons: true,
		        showProgress: false,
		        exitOnOverlayClick: false,
		        showStepNumbers: true,
		        keyboardNavigation: true,
		        doneLabel : 'Next Page'
		      });
	        intro.start('settings').oncomplete(function() {
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
	setTimeout(checkBoxDaysGuide, 1000);

}

function checkBoxDaysGuide() {
	var checkBox = document.getElementById("tuts");
	if(checkBox.checked == true) {
	    if(localStorage.getItem("tutorijal") == "guideDay") {
	    	checkBox.checked = true;
		    var intro = introJs();
		    intro.setOptions({
		    	steps: daysSteps,
		        showBullets: false,
		        showButtons: true,
		        showProgress: false,
		        exitOnOverlayClick: false,
		        showStepNumbers: true,
		        keyboardNavigation: true,
		        doneLabel : 'Next Page'
		      });
	        intro.start('days').oncomplete(function() {
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
	setTimeout(checkBoxCourseGuide, 1000);
}

function checkBoxCourseGuide() {
	var checkBox = document.getElementById("tuts");
	if(checkBox.checked == true) {
	    if(localStorage.getItem("tutorijal") == "guideAddCourse") {
	    	checkBox.checked = true;
		    var intro = introJs();
		    intro.setOptions({
		    	steps: courseSteps,
		        showBullets: false,
		        showButtons: true,
		        showProgress: false,
		        exitOnOverlayClick: false,
		        showStepNumbers: true,
		        keyboardNavigation: true,
		        doneLabel : 'Next Page'
		      });
	        intro.start('addCourse').oncomplete(function() {
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
	setTimeout(checkBoxClassroomGuide, 1000);

}

function checkBoxClassroomGuide() {
	var checkBox = document.getElementById("tuts");
	if(checkBox.checked == true) {
	    if(localStorage.getItem("tutorijal") == "guideAddClassroom") {
	    	checkBox.checked = true;
		    var intro = introJs();
		    intro.setOptions({
		    	steps: classroomsSteps,
		        showBullets: false,
		        showButtons: true,
		        showProgress: false,
		        exitOnOverlayClick: false,
		        showStepNumbers: true,
		        keyboardNavigation: true,
		        doneLabel : 'Next Page'
		      });
	        intro.start('addClassroom').oncomplete(function() {
	        	localStorage.setItem("tutorijal", "guideAddDepartment");
	            window.location.href = '/#!/addDepartment';
	        });
	
	    } else {
	    	introJs().exit();
	    }
	}
}

function addDepartmentGuide() {
	setTimeout(checkBoxDepartmentGuide, 1000);
}

function checkBoxDepartmentGuide() {
	var checkBox = document.getElementById("tuts");
	if(checkBox.checked == true) {
	    if(localStorage.getItem("tutorijal") == "guideAddDepartment") {
	    	checkBox.checked = true;
		    var intro = introJs();
		    intro.setOptions({
		    	steps: departmentSteps,
		        showBullets: false,
		        showButtons: true,
		        showProgress: false,
		        exitOnOverlayClick: false,
		        showStepNumbers: true,
		        keyboardNavigation: true,
		        doneLabel : 'Done'
		      });
	        intro.start('addDepartment').oncomplete(function() {
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

var steps = [
    {
       element: '#weekWednesday',
       intro: 'Welcome<br><br> This page contains all information related to the weekly schedule of classes per classroom. Each course has its own color. It was taken one day to get closer to the user.<br><br><img style="max-width: 100%; max-height: 100vh; margin: auto;" src="images/week.png"><br><br><br><p style="font-size:12px;text-align:right;"><i>Please follow step by step. . .</i></p>',
       position: 'right'
    }
  ];

var settingsSeteps = [
    {
        element: '#settingsId',
        intro: 'Choose classrooms to display on front page, on schedule table.',
        position: 'right'
    }
//     },
//     {
//         element: '#btnId',
//         intro: 'Run the workflow to complete the AB Controls step.<br><br>After running the workflow, open the next guided workflow &mdash; <a href="../../4. Analyzing your test results.yxmd">4. Analyzing your test results</a>.',
//         position: 'right'
//      }
  ];

var daysSteps = [
    {
        element: '#daysTableId',
        intro: 'Schedule table for this day. Here are all information about the daily schedule of courses per classroom.<br><br><p style="font-size:12px;text-align:right;"><i>Press ESC to leave. . .</i></p>',
        position: 'right'
     },
     {
         element: '#trash',
         intro: 'This step shows you how to use trash, drag course from schedule and drop it in trash.<br><br><img style="max-width: 100%; max-height: 100vh; margin: auto;" src="images/trash.gif"><p style="font-size:12px;text-align:right;"><i>Press ESC to leave. . .</i></p>',
         position: 'left'
      },
      {
          element: '#daysCourseId',
          intro: 'This step shows you how to use drag and drop system, to put course on schedule.<br>You can also search the course by title in the search bar.<br><br><img style="max-width: 100%; max-height: 100vh; margin: auto;" src="images/drag.gif"><p style="font-size:12px;text-align:right;"><i>Press ESC to leave. . .</i></p>',
          position: 'left'
       }
  ];

var courseSteps = [
    {
        element: '#courseTableId',
        intro: 'Course table shows all information, here you can edit course by clicking on ID, or delete specific course.<p style="font-size:12px;text-align:right;"><i>Press ESC to leave. . .</i></p>',
        position: 'right'
     },
     {
         element: '#courseAddId',
         intro: 'Here you can add new course.<p style="font-size:12px;text-align:right;"><i>Press ESC to leave. . .</i></p>',
         position: 'right'
      }
  ];

var classroomsSteps = [
    {
        element: '#classroomTableId',
        intro: 'Classroom table shows all information about classrooms you need to know, also you can edit classroom by clicking on label, or delete specific classroom.<p style="font-size:12px;text-align:right;"><i>Press ESC to leave. . .</i></p>',
        position: 'right'
     },
     {
         element: '#classroomAddId',
         intro: 'Here you can add new classroom.<p style="font-size:12px;text-align:right;"><i>Press ESC to leave. . .</i></p>',
         position: 'right'
      }
  ];

var departmentSteps = [
    {
        element: '#departmentTableId',
        intro: 'Department table shows all inforimation, also you can edit department by clicking on ID, or delete specific department.<p style="font-size:12px;text-align:right;"><i>Press ESC to leave. . .</i></p>',
        position: 'right'
     },
     {
         element: '#departmentAddId',
         intro: 'Here you can add new department.<p style="font-size:12px;text-align:right;"><i>Press ESC to leave. . .</i></p>',
         position: 'right'
      }
  ];

function settingsHint() {
	if(localStorage.getItem("tutorijal") == "hint") {
		javascript:introJs().removeHints();
		javascript:introJs().showHints();

	}
}


function removeHintsMainPage() {
	if(localStorage.getItem("tutorijal") == "hint") {
		document.getElementById("tuts").checked = true;
		javascript:introJs().removeHints();
		setTimeout(showHints, 2000);
		
	}
}


function daysHint() {
	if(localStorage.getItem("tutorijal") == "hint") {
		document.getElementById("tuts").checked = true;
		javascript:introJs().removeHints();
		setTimeout(showHints, 2000);
	}
}


function courseHint() {
	if(localStorage.getItem("tutorijal") == "hint") {
		document.getElementById("tuts").checked = true;
		javascript:introJs().removeHints();
		javascript:introJs().showHints();
		javascript:introJs().hideHint(0);
	}
}


function classroomHint() {
	if(localStorage.getItem("tutorijal") == "hint") {
		document.getElementById("tuts").checked = true;
		javascript:introJs().removeHints();
		javascript:introJs().showHints();
		javascript:introJs().hideHint(0);
	}
}


function departmentHint() {
	if(localStorage.getItem("tutorijal") == "hint") {
		document.getElementById("tuts").checked = true;
		javascript:introJs().removeHints();
		javascript:introJs().showHints();
		javascript:introJs().hideHint(0);
	}
}


function softwareHint() {
	if(localStorage.getItem("tutorijal") == "hint") {
		document.getElementById("tuts").checked = true;
		javascript:introJs().removeHints();
		javascript:introJs().showHints();
		console.log("SOFTWARE HINT");

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