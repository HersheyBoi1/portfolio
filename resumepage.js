//#region Nav Bar Hover Code
let hTab = document.querySelector("#homeTab");
let resTab = document.querySelector("#resumeTab");
let projTab = document.querySelector("#projectsTab");

hTab.addEventListener("mouseover", (event) => {
    hTab.style.color = "#4AF626";
});

hTab.addEventListener("mouseout", (event) => {
    hTab.style.color = "#ff2222";
}); 


projTab.addEventListener("mouseover", (event) => {
    projTab.style.color = "#264AF6";
});

projTab.addEventListener("mouseout", (event) => {
    projTab.style.color = "#ff2222";
});

//#endregion

