function openTab(evt, tabName) {
  evt.preventDefault();
  let i, tabcontent, tablinks;

  tabcontent = document.getElementsByClassName("tab-content");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].classList.remove("active");
  }

  tablinks = document.getElementsByClassName("tab-link");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].classList.remove("active");
  }

  document.getElementById(tabName).classList.add("active");

  for (i = 0; i < tablinks.length; i++) {
    if (tablinks[i].getAttribute("onclick").includes(`'${tabName}'`)) {
      tablinks[i].classList.add("active");
    }
  }
}

function openPopUp(sectionName) {
  const modal = document.getElementById("popupModal");
  const bodies = modal.querySelectorAll(".modal-body");
  const heading = modal.querySelector(".name");

  const frameColumn = document.getElementsByClassName("frame-column extra")[0];

  frameColumn.style.display = "block";

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
  const frameColumn = document.getElementsByClassName("frame-column extra")[0];

  frameColumn.style.display = "none";
}

function openProject(projectName) {
  const modal = document.getElementById("projectModal");
  const bodies = modal.querySelectorAll(".modal-body");
  const heading = modal.querySelector(".name");
  const subhead = document.getElementById("projects-subh");

  subhead.style.display = "none";

  bodies.forEach((body) => {
    body.style.display = "none";
  });

  const selectedBody = modal.querySelector(`.modal-body.${projectName}`);

  if (selectedBody) {
    selectedBody.style.display = "block";
  }

  modal.style.display = "flex";

  switch (projectName) {
    case "e-com":
      heading.textContent = "E-commerce Website";
      break;
    case "portfolio":
      heading.textContent = "This portfolio";
      break;
    case "learning":
      heading.textContent = "A language learning website";
      break;
    case "holiday":
      heading.textContent = "A holiday planner";
      break;
  }
}

function closeProject() {
  document.getElementById("projectModal").style.display = "none";
  document.getElementById("projects-subh").style.display = "block";
}

function updateClock() {
  let date = new Date(),
    h = date.getHours(),
    m = date.getMinutes(),
    s = date.getSeconds(),
    hDeg = h * 30 + m * (360 / 720),
    mDeg = m * 6 + s * (360 / 3600),
    hHand = document.querySelector(".hour"),
    mHand = document.querySelector(".minute");

  hHand.style.transform = "rotate(" + hDeg + "deg)";
  mHand.style.transform = "rotate(" + mDeg + "deg)";
}

updateClock();

setInterval(updateClock, 60000);
