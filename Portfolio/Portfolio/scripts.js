function openTab(evt, tabName) {
  evt.preventDefault();
  let i, tabcontent, tablinks;

  tabcontent = document.getElementsByClassName("tab-content");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].className = tabcontent[i].className.replace(" active", "");
  }

  tablinks = document.getElementsByClassName("tab-link");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  document.getElementById(tabName).className += " active";
  evt.currentTarget.className += " active";
}

function openPopUp(sectionName) {
  const modal = document.getElementById("popupModal");
  const bodies = modal.querySelectorAll(".modal-body");
  const heading = modal.querySelector(".name");

  bodies.forEach((body) => {
    body.style.display = "none";
  });

  const selectedBody = modal.querySelector(`.modal-body.${sectionName}`);

  if (selectedBody) {
    selectedBody.style.display = "block";
  }

  modal.style.display = "flex";

  switch (sectionName) {
    case "coding":
      heading.textContent = "My coding skills";
      break;
    case "interests":
      heading.textContent = "My interests";
      break;
    case "other":
      heading.textContent = "Other skills";
      break;
    case "education":
      heading.textContent = "Education";
      break;
  }
}

function closePopUp() {
  document.getElementById("popupModal").style.display = "none";
}
