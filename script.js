console.log("checking if it's available");

// writing to the body of html

// const body = document.body
// // append is used to add element to the body
// body.append("Hello the contact is here");

// the difference between append and appendChild is that for append, you can append a string but appendChild tends to append a node,when using
// appendChild, you will only want to put in the html element like div, p and the rest

// difference between innerHtml, textContent and innerText.
// TextContent tends to include all forms of pasdding and breakpoint
// innerText only returns the text in a plain form without breakpoint or margin or so.
// innerHTML accepts html tags inside the div.innerHTML = <p>bright</p>
// while the other one will display the html tags in it's raw form
//

const modal1 = document.querySelector("#modal-1");
const modal2 = document.querySelector("#modal-2");

const modalBtn = document.getElementsByTagName("button");
function openModal() {
  modal1.classList.add("show");
  const getAttributes = modal1.getAttribute("id") === modalBtn.dataSet.modal1;
}

modalBtn.addEventElistener("click", openModal());
