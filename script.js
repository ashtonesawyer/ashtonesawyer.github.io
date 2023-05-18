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

// -- add attributes
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
// todo

// -- append elements
// todo
