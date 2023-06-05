// set up page header
let head = document.querySelector("#head");

// -- create elements
let nav = document.createElement("nav");
let list = document.createElement("ul");
let listItems = [
  document.createElement("li"),
  document.createElement("li"),
  document.createElement("li"),
  document.createElement("li"),
];
let links = [
  document.createElement("a"),
  document.createElement("a"),
  document.createElement("a"),
  document.createElement("a"),
];

// -- add attributes + text
// -- -- for link attributes
let linkText = ["About", "Previous Work", "Projects", "Contact"];
let pageLinks = [
  "./index.html",
  "./previous-work.html",
  "./projects.html",
  "./contact.html",
];

nav.setAttribute("class", "menu");
list.setAttribute("class", "menu-list");
for (let i = 0; i < 4; i++) {
  listItems[i].setAttribute("class", "menu-li");
  links[i].setAttribute("class", "menu-tab");
  links[i].setAttribute("href", pageLinks[i]);
  links[i].textContent = linkText[i];
}

// -- append elements
for (let i = 0; i < 4; i++) {
  listItems[i].append(links[i]); //link to list item
  list.append(listItems[i]); // list item to list
}
nav.append(list);
head.append(nav);

// set up page footer
let foot = document.querySelector("#foot");

// -- create elements
let ghost = document.createElement("img"); // logo
let gitSR = document.createElement("span"); // for screen reader
let gitIcon = document.createElement("i");
let gitLink = document.createElement("a");
let crDiv = document.createElement("span");
let cr = document.createElement("span"); // copyright
let crIcon = document.createElement("i");

// -- add attributes + text
let imgAttr = ["src", "alt", "width", "height"];
let ghostAttr = [
  "./images/ghost-trans.svg",
  "A ghost with a gold crown",
  "42",
  "70",
];
for (let i = 0; i < 4; i++) {
  ghost.setAttribute(imgAttr[i], ghostAttr[i]);
}
gitSR.setAttribute("class", "sr-only");
gitSR.textContent = "GitHub";
gitIcon.setAttribute("class", "fa-brands fa-github footer-git");
gitLink.setAttribute("href", "https://github.com/ashtonesawyer");
cr.textContent = "Copyright 2023";
crIcon.setAttribute("class", "fa fa-copyright copyright");

// -- append elements
crDiv.append(crIcon);
crDiv.append(cr);
gitLink.append(gitIcon);
gitLink.append(gitSR);
foot.append(ghost);
foot.append(gitLink);
foot.append(crDiv);
