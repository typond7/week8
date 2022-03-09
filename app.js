// creating multiple functions
var counter= 0;

function onClickAbout() {
   document.getElementById("interact_tab").style.display= "none";
   document.getElementById("home_tab").style.display= "none";
   document.getElementById("about_tab").style.display= "block";
}

function onCLickHome() {
    document.getElementById("interact_tab").style.display= "none";
    document.getElementById("home_tab").style.display= "block";
    document.getElementById("about_tab").style.display= "none";
}

function onClickInteract() {
    document.getElementById("interact_tab").style.display= "block";
    document.getElementById("home_tab").style.display= "none";
    document.getElementById("about_tab").style.display= "none";
}

function countClick() {
 ++counter;
 document.getElementById("counter_label").innerHTML ="Counter: " + counter;
}
