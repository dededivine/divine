// project-filter.js
const projects = [
  {
    name: "Todo App",
    category: "web-apps",
    description: "A classic Todo app built with JavaScript.",
    link: "#",
    poster: "assets/images/pro8.png",
  },

  {
    name: "Portfolio Website",
    category: "websites",
    description: "A personal portfolio website.",
    link: "#",
    poster: "assets/images/pro8.png",
  },

  {
    name: "Movies App",
    category: "web-apps",
    description: "A web application for checing info on movies.",
    link: "#",
    poster: "../images/",
  },

  {
    name: "Landing page",
    category: "websites",
    description: "A responsive landing page.",
    link: "#",
    poster: "assets/images/pro4.png",
  },

  {
    name: "Blog Website",
    category: "websites",
    description: "A clean and responsive blog template.",
    link: "#",
    poster: "assets/images/pro9.png",
  },

  {
    name: "Task App",
    category: "web-apps",
    description: "A web app for managing tasks and projects.",
    link: "#",
    poster: "assets/images/pro5.png",
  },

  {
    name: "clicker game",
    category: "games",
    description: "A clicker to earn coins.",
    link: "#",
    poster: "assets/images/pro10.png",
  },

  {
    name: "Landing Page",
    category: "websites",
    description: "A responsive landing page.",
    link: "#",
    poster: "assets/images/pro6.png",
  },

  {
    name: "Image slider",
    category: "web-apps",
    description: "A simple image slider built with javascript.",
    link: "#",
    poster: "assets/images/pro3.png",
  },

  {
    name: "Earning Game",
    category: "games",
    description: "An interactive quiz game.",
    link: "#",
    poster: "assets/images/pro2.png",
  },
];

// Generate project cards
const projectContainer = document.getElementById("project-cont");

function renderProjects(filter = "web-apps") {
  projectContainer.innerHTML = ""; // Clear existing projects
  const filteredProjects = projects.filter(
    (project) => project.category === filter
  );

  filteredProjects.forEach((project) => {
    const poster = document.createElement("img");

    const projectCard = `
    <div class="project"> <div class="project_img">
   <img src=${project.poster}>
    </div> <div class="project-details"> <h2>${project.name}
  </h2> <a href=${project.link}>
    Demo
  </a> </div> </div> `;
    projectContainer.innerHTML += projectCard;
  });
}

// Initialize with all projects
renderProjects();

// Filter buttons functionality
const filterButtons = document.querySelectorAll(".category-buttons button");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // Remove active class from all buttons
    filterButtons.forEach((btn) => btn.classList.remove("active"));
    // Add active class to the clicked button
    button.classList.add("active");
    // Render projects based on filter
    const filter = button.getAttribute("data-filter");
    renderProjects(filter);
  });
});

const myProfile = document.getElementById("sidebarcard");
const chevron = document.getElementById("showmyprofile");
chevron.addEventListener("click", () => {
  myProfile.classList.toggle("active");
  // if (myProfile.style.display <= 210) {
  //   myProfile.style.display = "500px";
  // } else {
  //   myProfile.style.display = "200px";
  // }
});
