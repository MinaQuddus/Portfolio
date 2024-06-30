const sections = document.querySelectorAll(".section");
const sectBtns = document.querySelectorAll(".controlls");
const sectBtn = document.querySelectorAll(".control");
const allSections = document.querySelector(".main-content");
const tablinks = document.getElementsByClassName(".tab-links");
const tablink = document.getElementsByClassName(".tab-link");
const tabcontents = document.getElementsByClassName(".tab-contents");
const tabcontent = document.getElementsByClassName(".tab-content");

const form1 = document.getElementById("form1");
const nameInputField = document.getElementById("name"); 
function opentab(event, tabname) {
  // Prevent default behavior of the event (e.g., following a link)
  // event.preventDefault();

  // Get all elements with class name 'tab-contents' and hide them
  var tabcontents = document.getElementsByClassName("tab-contents");
  for (var i = 0; i < tabcontents.length; i++) {
    //tabcontents[i].className = tabcontent[i].className.replace(" active", "");

    // tablinks[i].classList.remove('active-tab');
    //tabcontent[i].classList.remove('active-tab');
    tabcontents[i].style.display = "none";
  }

  // }
  // tabcontent[i].classList.remove('active-tab');

  // Get all elements with class name 'tab-links' and remove the 'active-link' class
  var tablinks = document.getElementsByClassName("tab-links");
  for (var i = 0; i < tablinks.length; i++) {
    //  tablink[i].classList.remove('active-link');
    tablinks[i].className = tablinks[i].className.replace(" active-link", "");
  }
  //tablinks[i].classList.remove('active-link');
  // tablink[i].classList.remove('active-link');

  // Show the selected tab and add 'active-link' class to the clicked tab
  document.getElementById(tabname).style.display = "block";
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
  // document.getElementById("defaultOpen").click()
}

document.addEventListener("DOMContentLoaded", function () {
  // Add event listener to the submit button using its class

  form1.addEventListener("submit", function (e) {
    e.preventDefault(); // stop form submission
    var nameValue = nameInputField.value.trim();
    var blogValue = blogInputField.value.trim();

    if (nameValue === "" || blogValue === "") {
      alert("Please fill in field!");
      nameInputField.focus();
      blogInputField.focus();
      e.preventDefault(); // stop form submission
    }
    const outputText = `Name: ${nameValue}, Blog: ${blogValue}`;

    // Display the combined output as list items
    const outputList = document.getElementById("output-list");

    if (nameValue || blogValue) {
      const listItem = document.createElement("li");
      listItem.className = "output-item";
      listItem.textContent = outputText;

      const deleteButton = document.createElement("button");

      //   outputList.appendChild(listItem);
      //  outputList.appendChild(deleteButton);
      //listItem.appendChild(deleteButton);

      // outputList.style.display = 'block'; // Show the output list

      deleteButton.style.backgroundColor = "red"; // Show the output list
      deleteButton.textContent = "Delete"; // Show the delete name

      deleteButton.addEventListener("click", function () {
        outputList.removeChild(listItem);
        if (outputList.children.length === 0) {
          outputList.style.display = "none";
        }
      });

      listItem.appendChild(deleteButton);
      outputList.appendChild(listItem);
      outputList.style.display = "block";
    } else {
      // Clear  the output list

      outputList.innerHTML = "";
      outputList.style.display = "none"; // Hide the output list
    }

    form1.reset();
  });
});

PageTransitions();
