console.log("Engineering Training");
const modalButton = document.getElementById("modalButton");
console.log("modalButton : ", modalButton);
const modalContainer = document.getElementById("modalContainer");
let listElement = document.querySelector(".grid-container");

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
const jiraTemplate = { icon: "bi bi-check-circle-fill" };
const errorJiraTemplate = { icon: "bi bi-x-circle" };

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

console.log("Random num between 0-3 is " + getRandomInt(3));
class JiraHandler {
  constructor(links, titles) {
    this.links = links;
    this.titles = titles;
    this.jirasObject = this.createJiraObject();
  }
  createJiraObject() {
    const jiraArrays = [];
    for (let i = 0; i < this.titles.length; i++) {
      let rInt = getRandomInt(3);
      console.log("Randon Int value is  " + rInt);
      const z = (rInt == '1') ? errorJiraTemplate : jiraTemplate;


      const jiraCObj = {
        title: this.titles[i],
        link: this.links[i],
        ...z,
      };
      console.log("jiraObject : ", jiraCObj);
      jiraArrays.push(jiraCObj);
    }
    return jiraArrays;
  }
}

const jiraHandler = new JiraHandler(jiraLinks, jiraTitles);
console.log(" stirng form of object " + JSON.stringify(jiraHandler.jirasObject));


/*console.log (" Begining of jira title + link using class" );
this.links.forEach((link) => console.log(link));
 
this.titles.forEach(titles)
function titles(value) 
{
  console.log(value);
}
console.log (" Ending with  jira title + link using class" );
}
 
}*/
//console.log("jira object value " , jiraHandler.jirasObject);


/*for (let i = 0; i < jiraTitles.length; i++) {
  jiraObject = {
    title: jiraTitles[i],
    link: jiraLinks[i]
  }*/

/*for (let i = 0; i < jiraHandler.titles.length; i++) {
  jiraObject = {
    title: jiraHandler.titles[i],
    link: jiraHandler.links[i],
    ...,
  };
  console.log("jiraObject : ", jiraObject);
  jiraArrays.push(jiraObject);
}

console.log("jiraArrays  :", jiraArrays);*/

//let dataLoaded = false;
const utils = {
  renderData: function () {
    return new Promise((resolve) => {
      var response = "";
      jiraHandler.jirasObject.forEach((element) => {
        const { link, title, icon } = element;
        listItems = document.createElement("li");
        //response += `<li class="grid-container"><i class="bi bi-check-circle-fill"></i><a href="${link}">${title}</a></li>`;
        response += `<li class="grid-container"><i class="${icon}"></i><a href="${link}">${title}</a></li>`;


      });
      resolve(response);
    });
  },

  loadData: function (callback) {
    callback();
    setTimeout(function () {
      utils.renderData().then((response) => {
        dataLoaded = true;
        listElement.innerHTML = response;
        console.log("data loaded after a sec");
        modalContainer.classList.toggle("hidden");
        return response;
      });
    }, 1000);
  },
};

/*function renderData() {
  jiraArrays.forEach((element) => {
    var listItem = document.createElement("li");
    listItem.innerHTML = `<li class="grid-container"><i class="bi bi-check-circle-fill"></i><a href="${element.link}">${element.title}</a></li>`
    listElement.append(listItem);
  });

}*/


function initModalButton() {
  var dataLoaded = false
  modalButton.addEventListener("click", function () {
    if (dataLoaded === true) {
      return;
    }
    console.log("clicked button!");
    modalContainer.classList.toggle("hidden");
    utils.loadData(() => {
      dataLoaded = true;
    });

});

}

initModalButton();

const closeModalButton = document.getElementsByClassName("close-modal-button");
closeModalButton[0].addEventListener("click", function () {
  console.log("clicked close modal button!");
  modalContainer.classList.toggle("hidden");
});

//console.log("dataLoaded", dataLoaded);
