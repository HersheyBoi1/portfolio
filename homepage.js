//#region Nav Bar Hover Code
let hTab = document.querySelector("#homeTab");
let resTab = document.querySelector("#resumeTab");
let projTab = document.querySelector("#projectsTab");

resTab.addEventListener("mouseover", (event) => {
    resTab.style.color = "#ff2222";
});

resTab.addEventListener("mouseout", (event) => {
    resTab.style.color = "#4AF626";
});


projTab.addEventListener("mouseover", (event) => {
    projTab.style.color = "#264AF6";
});

projTab.addEventListener("mouseout", (event) => {
    projTab.style.color = "#4AF626";
});

//#endregion

