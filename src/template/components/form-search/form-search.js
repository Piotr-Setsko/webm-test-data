var dropdown = document.querySelectorAll('.dropdown');

for (let i = 0; i < dropdown.length; i++) {
 dropdown[i].addEventListener("click", () => {
    dropdown[i].classList.toggle("is-active");
  });
}

