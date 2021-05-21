const dropdownTrigger = document.querySelectorAll('.form-search__dropdown-trigger');
const dropdown = document.querySelectorAll('.dropdown');
const mql = window.matchMedia("(max-width: 760px)")


for (let i = 0; i < dropdownTrigger.length; i++) {
 dropdownTrigger[i].addEventListener("click", () => {
    dropdown[i].classList.toggle("is-active");
  });
}

mql.addEventListener('change', (e) => {
  if (e.matches) {
    for (let i = 0; i < dropdownTrigger.length; i++) {
      dropdown[i].classList.remove("is-active");
    }
  } else {
    for (let i = 0; i < dropdownTrigger.length; i++) {
      dropdown[i].classList.add("is-active");
    }
  }
})
