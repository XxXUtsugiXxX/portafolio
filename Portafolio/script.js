
document.addEventListener("DOMContentLoaded", () => {
  console.log("JS cargado correctamente");
});


const header = document.querySelector("header");

if (header) {
  header.style.opacity = "0";
  header.style.transform = "translateY(-20px)";

  setTimeout(() => {
    header.style.transition = "all 0.6s ease";
    header.style.opacity = "1";
    header.style.transform = "translateY(0)";
  }, 200);
}


const links = document.querySelectorAll("nav a");

links.forEach(link => {
  link.addEventListener("mouseenter", () => {
    link.style.color = "#00bcd4";
    link.style.transform = "scale(1.05)";
  });

  link.addEventListener("mouseleave", () => {
    link.style.color = "";
    link.style.transform = "scale(1)";
  });
});


const proyectos = document.querySelectorAll(".nav_proyectos a");

if (proyectos.length > 0) {
  proyectos.forEach((proyecto, index) => {
    proyecto.style.opacity = "0";
    proyecto.style.transform = "translateY(15px)";

    setTimeout(() => {
      proyecto.style.transition = "all 0.4s ease";
      proyecto.style.opacity = "1";
      proyecto.style.transform = "translateY(0)";
    }, index * 120);
  });
}

const mascotas = document.querySelectorAll(".galeria article");

if (mascotas.length > 0) {
  mascotas.forEach(mascota => {
    mascota.addEventListener("mouseenter", () => {
      mascota.style.transform = "scale(1.05)";
      mascota.style.boxShadow = "0 8px 20px rgba(0,0,0,0.2)";
    });

    mascota.addEventListener("mouseleave", () => {
      mascota.style.transform = "scale(1)";
      mascota.style.boxShadow = "none";
    });
  });
}


const form = document.querySelector("form");

if (form) {
  form.addEventListener("submit", e => {
    e.preventDefault();
    alert("Gracias por tu mensaje 😊");
    form.reset();
  });
}

// Resaltar proyecto tocado (tablet / móvil)
document.querySelectorAll(".nav_proyectos li a").forEach(link => {
  link.addEventListener("click", () => {
    link.classList.add("activo");
    setTimeout(() => {
      link.classList.remove("activo");
    }, 300);
  });
});