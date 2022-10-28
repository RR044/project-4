const tabParents = [...document.querySelectorAll('[data-tabs-parrent]')];

tabParents.forEach(function (tabParent) {
  let tabNavs = tabParent.querySelectorAll("[data-tab]");
  let tabPanes = tabParent.querySelectorAll("[data-tab-content]");

  for (let i = 0; i < tabNavs.length; i++) {
    tabNavs[i].addEventListener("click", function (e) {
      e.preventDefault();
      let activeTabAttr = e.target.getAttribute("data-tab");

      for (let j = 0; j < tabNavs.length; j++) {
        let contentAttr = tabPanes[j].getAttribute("data-tab-content");

        if (activeTabAttr === contentAttr) {
          tabNavs[j].classList.add("active");
          tabPanes[j].classList.add("active");
        } else {
          tabNavs[j].classList.remove("active");
          tabPanes[j].classList.remove("active");
        }
      }
    });
  }
});


// import { removeClassInArray,addCustomClass } from "../functions/customFunctions";

// const tabParents = [...document.querySelectorAll('[data-tabs-parrent]')];
// tabParents.map((tabParent) => {
//   if(tabParent) {
//     const tabNav = [...tabParent.querySelectorAll("[data-tab]")];
//     const tabContent = [...tabParent.querySelectorAll("[data-tab-content]")];

//     tabNav.map((nav) => {
//       nav.addEventListener('click', (e) => {
//         e.preventDefault();
//         const activeTabAttr = e.target.getAttribute("data-tab");
//         removeClassInArray(tabNav, 'active');
//         removeClassInArray(tabContent, 'active');
//         addCustomClass(tabParent.querySelector([data-tab="${activeTabAttr}"]),'active');
//         addCustomClass(tabParent.querySelector([data-tab-content="${activeTabAttr}"]), 'active');
//       });
//     });
//   }
// });

