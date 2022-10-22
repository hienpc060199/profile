/* Reference to elements */
const homeElm = document.getElementById("link-home");
const aboutElm = document.getElementById("link-about");
const experienceElm = document.getElementById("link-experience");
const servicesElm = document.getElementById("link-services");

// Global var
const allElms = [
  {
    tag: document.getElementById("link-home"),
    to: document.getElementById("home")
  },
  {
    tag: document.getElementById("link-about"),
    to: document.getElementById("about")
  },
];

// Set on click to header
allElms.forEach((elm) => {
  elm.tag.addEventListener('click', () => {
    // Remove active
    const aTags = document.querySelectorAll("header nav.desktop a");
    const liTags = document.querySelectorAll("header nav.desktop li");
    aTags.forEach(tag => {
      tag.classList.remove('a-active');
    })
    liTags.forEach(tag => {
      tag.classList.remove('li-active');
    })
    // Active
    elm.tag.classList.add('a-active');
    elm.tag.parentElement.classList.add('li-active');
    // Scroll
    elm.to.scrollIntoView({ behavior: "smooth", block: "center" });
  })
});
