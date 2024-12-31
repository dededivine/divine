let togglediv = document.getElementById("themetoggle");
let togglebtn = document.getElementById("tgbtn");

togglediv.addEventListener("click", () => {
  togglediv.classList.toggle("active");
  togglebtn.classList.toggle("active");
  document.body.classList.toggle("dark");
});

let sidebarToggle = document.getElementById("menu");
const sidebar = document.getElementById("sidebar");
sidebarToggle.addEventListener("click", () => {
  if (sidebar.style.width == "0px") {
    sidebar.style.width = "70%";
  } else {
    sidebar.style.width = "0px";
  }
});

function closeSidebar() {
  sidebar.style.width = "0px";
}

function navLink(linkid) {
  const links = document.querySelectorAll(".navlinks");
  links.forEach((link) => {
    link.classList.remove("active");
  });
  document.getElementById(linkid).classList.add("active");
}
