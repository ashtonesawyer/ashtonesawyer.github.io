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
foot.setAttribute("class", "primary");

// -- create elements
let ghost = document.createElement("img"); // logo
let gitIcon = document.createElement("img");
let gitLink = document.createElement("a");
let cr = document.createElement("span"); // copyright

// -- add attributes + text
let imgAttr = ["src", "alt", "width", "height"];
let ghostAttr = ["#", "A white ghost with a gold crown", "#", "#"];
let gitIconAttr = ["./images/github-logo-black.jpg", "Github Logo", "35", "35"];
for (let i = 0; i < 4; i++) {
  ghost.setAttribute(imgAttr[i], ghostAttr[i]);
  gitIcon.setAttribute(imgAttr[i], gitIconAttr[i]);
}
gitLink.setAttribute("href", "https://github.com/ashtonesawyer");
cr.textContent = "Copyright 2023";

// -- append elements
gitLink.append(gitIcon);
foot.append(ghost);
foot.append(gitLink);
foot.append(cr);
