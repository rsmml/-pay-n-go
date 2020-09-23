const initContactUs = () => {
  const contact = document.getElementById('contact');
  contact.addEventListener('click', function(){
    document.querySelector('.nav-bar').style.padding = "0 30px 100% 30px";
    document.querySelector('.contact-card').style.display = "flex";
  })
  const close = document.querySelector('#close');
  close.addEventListener('click', function(){
    document.querySelector('.contact-card').style.display = "none";
    document.querySelector('.nav-bar').style.padding = "0 30px";
  })
};

export { initContactUs };
