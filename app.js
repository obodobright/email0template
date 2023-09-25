console.log("THIS IS THE APP FILE");

const headerText = document.getElementById("headerText");
// console.log(headerText, "header");

const getElementsTags = () => {
  const liTags = document.getElementsByTagName("li");

  return liTags;
};

const getElementByClass = () => {
  return document.getElementsByClassName("movieItem");
};

// console.log(getElementsTags());
// modifying css from javascript
const container = document.querySelector(".container");
container.style.backgroundColor = "green";

const movieItem = document.querySelectorAll(".movieItem");
console.log(movieItem);
// movieItem.forEach((val) => (val.style.backgroundColor = "red"));
// to style multiple elemts, you must loop through the elemts.
// movieItem.style.backgroundColor = "blue";

// reating new elements
const movieUl = document.querySelector("#movieUl");
const newLi = document.createElement("li");

newLi.innerText = "Bambozee";
movieUl.append(newLi);

// newDivTag.append(movieWrapper);

// modifying and setting attributes and classes;
newLi.setAttribute("id", "new-movie-item");

console.log(newLi);
