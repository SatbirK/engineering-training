console.log("Engineering Training");
const modalButton = document.getElementById("modalButton");
console.log("modalButton : ", modalButton);
const modalContainer = document.getElementById('modalContainer');
let listElement = document.querySelector('.grid-container');


const jiraTitles = [
  "Create a public repository under your GitHub account",
  "Create a new script file, and import it into index.html and add a console log",
  "JavaScript: Variables",
  "JavaScript: Event Listeners - Add Toggle Button Inside of Modal",
  "JavaScript: Functions - Write a function to toggle hidden class on modal",
];
jiraTitles.forEach((title) => console.log(title));

const jiraLinks = [
  "https://totalwine.atlassian.net/browse/TT-2",
  "https://totalwine.atlassian.net/browse/TT-16",
  "https://totalwine.atlassian.net/browse/TT-17",
  "https://totalwine.atlassian.net/browse/TT-18",
  "https://totalwine.atlassian.net/browse/TT-19",
];
jiraLinks.forEach(link);
function link(value) {
  console.log(value);
}


const jiraArrays = [];
for (let i = 0; i < jiraTitles.length; i++) {
  jiraObject = {
    title: jiraTitles[i],
    link: jiraLinks[i]
  }
  console.log("jiraObject : ", jiraObject);
  jiraArrays.push(jiraObject);
}
console.log("jiraArrays  :", jiraArrays);

function loadData() {
  setTimeout(() => {
    console.log("data loaded after a sec");
    modalContainer.classList.toggle("hidden");
    renderData();
  }
    , 1000);
}


function renderData() {
  jiraArrays.forEach((element) => {
    var listItem = document.createElement("li");
    listItem.innerHTML = `<li class="grid-container"><i class="bi bi-check-circle-fill"></i><a href="${element.link}">${element.title}</a></li>`
    listElement.append(listItem);
  });

}





modalButton.addEventListener("click", function () {
  console.log("clicked button!");
  modalContainer.classList.toggle("hidden");
  loadData();
});

const closeModalButton = document.getElementsByClassName("close-modal-button");
closeModalButton[0].addEventListener("click", function () {
  console.log("clicked close modal button!");
  modalContainer.classList.toggle("hidden");
});


