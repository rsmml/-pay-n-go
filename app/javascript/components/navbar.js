const initNavBar = () => {
  window.onscroll = function(){
    const navbar = document.querySelector('.nav-bar');
    var top = window.scrollY;
    if (top >= 580){
      navbar.classList.add('active');
    }else{
      navbar.classList.remove('active');
    }
  }
};

export { initNavBar };
