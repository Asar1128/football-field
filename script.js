  function togglePopup() {
    const overlay = document.getElementById("unique-overlay");
    const popup = document.getElementById("unique-popup");

    if (overlay.style.display === "block") {
        overlay.style.display = "none";
        popup.style.display = "none";
    } else {
        overlay.style.display = "block";
        popup.style.display = "block";
    }
}
var column1 = document.getElementById("column1");
var column2 = document.getElementById("column02");
const uniquecoltwo = document.querySelector(".unique-col-2")
const uniquecolone = document.querySelector(".unique-col-1")
function showteamtwo(){
    if (uniquecoltwo , uniquecolone) {
        uniquecoltwo.style.display = "block";
        uniquecolone.style.display = "none";

    }
}
function showteamone(){
    if (uniquecoltwo , uniquecolone) {
        uniquecoltwo.style.display = "none";
        uniquecolone.style.display = "block";

    }
}
// function showColumn(columnNumber) {


// // if (columnNumber === 1) {
// // column1.style.display = "block";
// // column2.style.display = "none";
// // } else if (columnNumber === 2) {
// // column1.style.display = "none";
// // column2.style.display = "block";
// // console.log("clicked")

// // }
//  }