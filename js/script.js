if (document.querySelector('.flexvars')) {
    var dialogVars = document.getElementById("vars");
    var dialogPage = document.getElementById("Pagevars");
    var dialogNode = document.getElementById("Nodevars");

    var openButton = document.getElementById("showDialog");
    openButton.onclick = function() {
        dialogVars.showModal();
    }

    var openPageButton = document.getElementById("showDialogPage");
    openPageButton.onclick = function() {
        dialogPage.showModal();
    }

    var openNodeButton = document.getElementById("showDialogNode");
    openNodeButton.onclick = function() {
        dialogNode.showModal();
    }
}

const hamburger = document.getElementById("hamburger");

hamburger.onclick = function() {
    if (hamburger.className == "offScreen") {
        //document.getElementById("menu").style.transform = "translate(0%)";
        document.getElementById("hmenu").style.transform = "scale(100%)";
        hamburger.classList.toggle("offScreen");
    } else {
        //document.getElementById("menu").style.transform = "translate(110%)";
        document.getElementById("hmenu").style.transform = "scale(0)";
        hamburger.classList.toggle("offScreen");
    }
};