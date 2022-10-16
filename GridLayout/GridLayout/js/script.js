// свернуть развернуть настройки
document.querySelectorAll('.header-container__setting-button').forEach((item)=>{
   item.addEventListener('click', ()=>{
      if(item.classList.toggle('active'))
         item.previousElementSibling.style.maxWidth = item.previousElementSibling.scrollWidth + 'px'; 
      else
         item.previousElementSibling.style.maxWidth = 0; 
   })
})

//переключить тему страницы
document.querySelectorAll('.switch-palette-mode').forEach((item)=>{
   item.addEventListener('click', () =>{
      var wrapper = document.querySelector('.wrapper');
      if(item.classList.toggle('switch-on')){
         wrapper.classList.remove('light-mode');
         wrapper.classList.add('dark-mode');
      }         
      else{
         wrapper.classList.remove('dark-mode');
         wrapper.classList.add('light-mode');
      }
   })
})

//спрятать/показать шапку
const header = document.getElementsByTagName('header')[0];
var postScrollY;
window.onscroll = () =>{
   var currentScrollY = window.scrollY;
   if((currentScrollY > 300) && (currentScrollY > postScrollY)){
      header.classList.add('header-hidden');
   }
   else{
      header.classList.remove('header-hidden');
   }
   postScrollY = currentScrollY;
}

//табы
document.querySelectorAll('.tabs-triggers__item').forEach((item)=>{
   item.addEventListener('click', function(e) {
      e.preventDefault();
      const id = e.target.getAttribute('href').replace('#','');
      item.parentElement.querySelectorAll('.tabs-triggers__item').forEach((child) =>
         child.classList.remove('tabs-triggers__active'));
      item.parentElement.nextElementSibling.querySelectorAll('.tabs-content__item').forEach((child) =>
         child.classList.remove('active'));
      item.classList.add('tabs-triggers__active');
      document.getElementById(id).classList.add('active');
   })
})
//запуск табов на прогрузке страницы
document.querySelectorAll('.tabs-triggers').forEach((item)=>{
   item.querySelector('.tabs-triggers__item').click();
})