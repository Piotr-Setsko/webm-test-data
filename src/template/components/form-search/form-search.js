const dropdownTrigger = document.querySelectorAll('.form-search__dropdown-trigger');
const dropdown = document.querySelectorAll('.dropdown');

for (let i = 0; i < dropdownTrigger.length; i++) {
 dropdownTrigger[i].addEventListener("click", () => {
    dropdown[i].classList.toggle("is-active");
  });
}

