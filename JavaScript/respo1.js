const buttons = document.getElementsByClassName('btn');

for (let i = 0; i < buttons.length; i++) {
    buttons[i].classList.toggle('border')
  buttons[i].addEventListener('click', function(event) {
    event.preventDefault();
    this.classList.toggle('border');
  });
}