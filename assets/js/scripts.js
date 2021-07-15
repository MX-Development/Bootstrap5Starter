var subNavTogglers = document.querySelectorAll('.has-sub-nav');

subNavTogglers.forEach(toggler => {
  toggler.onclick = function() {
    const subNav = this.parentNode.querySelector('.sub-nav');
    subNav.classList.add('active');
  }
});

var subNavBack = document.querySelectorAll('.back-btn');

subNavBack.forEach(button => {
  button.onclick = function() {
    const subNav = this.parentNode;
    subNav.classList.remove('active');
  }
});