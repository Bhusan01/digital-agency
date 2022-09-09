const worksContainer = document.querySelector(".works__img--row");
const worksItem = document.querySelectorAll(".works__img--container");
const filterButtonsContainer = document.querySelector(
  ".filter__items--container"
);
const buttons = document.querySelectorAll(".works__link");
//  AOS animation
AOS.init({
  duration: 600, // values from 0 to 3000, with step 50ms
  easing: "ease",
});

// helper functions
const makebuttonActive = (element) => {
  buttons.forEach((button) => {
    button.classList.remove("active");
  });
  element.classList.add("active");
};
const givingStyleToELement = (element, id) => {
  // making invisible all elements
  worksItem.forEach((work, index) => {
    work.style.order = `${index}`;
    work.style.opacity = "0";
  });
  // making visible item
  document.querySelector(id).style.opacity = "1";
  document.querySelector(id).style.order = "-1";
  makebuttonActive(element);
};
// filtering works
filterButtonsContainer.addEventListener("click", function (e) {
  const targetedEl = e.target.closest(".works__link");
  switch (targetedEl.innerText) {
    case "UI/UX":
      worksItem.forEach((work) => {
        work.style.order = 0;
        work.style.opacity = "1";
      });
      makebuttonActive(targetedEl);
      break;
    case "Development":
      givingStyleToELement(targetedEl, "#Development");
      break;
    case "Graphic Design":
      givingStyleToELement(targetedEl, "#Graphic");
      break;
    case "Motion":
      givingStyleToELement(targetedEl, "#Motion");
      break;
    case "Branding":
      givingStyleToELement(targetedEl, "#Branding");
      break;
    case "Business Development":
      givingStyleToELement(targetedEl, "#Business");
      break;
  }
});
