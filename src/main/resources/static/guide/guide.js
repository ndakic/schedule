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
        window.location.href = '/#!/settings';
    });
    closeModal();
}

function settingsGuide() {
    if(localStorage.getItem("tutorijal") == "guide") {
        introJs().setOption('doneLabel', 'Next page').start('settings').oncomplete(function() {
            window.location.href = '/#!/day/Monday';
        });
    }
}

function daysGuide() {
    if(localStorage.getItem("tutorijal") == "guide") {
        introJs().setOption('doneLabel', 'Next page').start('days');
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