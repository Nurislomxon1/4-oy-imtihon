var elBurgerBtn = document.querySelector(".header__burger");

elBurgerBtn.addEventListener("click" , function(){
    document.body.classList.toggle("header__open")
});



$(document).ready(function(){
  $('.servises__list').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 680,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  });
});
