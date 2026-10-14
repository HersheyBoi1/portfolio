//#region Nav Bar Hover Code
let hTab = document.querySelector("#homeTab");
let resTab = document.querySelector("#resumeTab");
let projTab = document.querySelector("#projectsTab");

hTab.addEventListener("mouseover", (event) => {
    hTab.style.color = "#4AF626";
});

hTab.addEventListener("mouseout", (event) => {
    hTab.style.color = "#264AF6";
}); 


resTab.addEventListener("mouseover", (event) => {
    resTab.style.color = "red";
});

resTab.addEventListener("mouseout", (event) => {
    resTab.style.color = "#264AF6";
});

//#endregion


let image = document.querySelector("#project1Image");

image.addEventListener("mouseover", (event) => {
    image.style.border = "2px solid #264AF6";
})

image.addEventListener("mouseout", (event) => {
    image.style.border = "2px solid black";
})


let projectName = document.querySelector("#projectName") 

projectName.addEventListener("mouseover", (event) => {
    projectName.style.color = "#26F6D2";
});

projectName.addEventListener("mouseout", (event) => {
    projectName.style.color = "#264AF6";
});