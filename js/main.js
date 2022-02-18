let open = document.getElementById('id-open-menu');
let navbox = document.getElementById('id-menubox');
let icon = document.getElementById('id-icon');

let count = 0;
open.addEventListener('click', function () {
  navbox.classList.toggle('open');
  if (count == 0) {
    icon.className = "bx bx-x";
    icon.style.fontSize = '32px';
    icon.style.color = '#fff';
    icon.style.position = 'relative';
    icon.style.top = '4px';
    count++;
  } else {
    icon.className = "bx bx-menu";
    icon.style.position = 'relative';
    icon.style.fontSize = '32px';
    icon.style.color = '#fff';
    icon.style.top = '4px';
    count = 0;
  }
})