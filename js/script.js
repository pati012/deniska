"use strict";


  const isMobile = {
    Android: function (){
      return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function (){
      return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function (){
      return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function(){
      return navigator.userAgent.match(/Opera Mini/i);
    },
    Googole: function(){
      return navigator.userAgent.match(/Googole/i);
    },
    Windows: function (){
      return navigator.userAgent.match(/IEMobile/i);
    },
    any: function (){
    return  (
      isMobile.Android() ||
      isMobile.BlackBerry() ||  
      isMobile.iOS() || 
      isMobile.Opera() || 
      isMobile.Windows() ||
      isMobile.Googole());
    }
  };

  if(isMobile.any()){
    document.body.classList.add('mobile');
    const arrow = document.querySelectorAll('.menu__arrow');
     
    if(arrow.length > 0){
      for(let value = 0; value < arrow.length; value++){
        const elements = arrow[value];
         elements.addEventListener('click', function (){
           elements.parentElement.classList.toggle('active');
            
         })
      }
    }
  }
  else{
    document.body.classList.add('pc');
  }

  const elements = document.querySelectorAll('.header__items-menu[data-gotos]');
   if(elements.length > 0){
     elements.forEach(item => {
       item.addEventListener("click", onclickTp);
     });
     function onclickTp(e){
        const elm = event.target;
        if(elm.dataset.gotos != false){
         const elementCompos = document.querySelector(elm.dataset.gotos);
         const tp = elementCompos.getBoundingClientRect().top + pageYOffset - document.querySelector(header).offsetHeight;
         //const tpValue = elementCompos.getBoundingClientRect().top + pageYOffset - document.querySelector('header');
         if(burger.classList.contains('openesc')){
          burger.classList.remove('openesc')
          opens.classList.remove('open'); 
          document.body.style.overflow = 'visible';
         }
         window.scrollTo({
          top: tpValue,
          behavior: 'smooth',
         });
         event.preventDefault();
       }
     }
    }

    new Swiper('.swiper__container',{

    })