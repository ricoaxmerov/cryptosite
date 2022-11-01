const signUpButton = document.getElementById('signUp');
const logInButton = document.getElementById('logIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
    container.classList.add("right-panel-active");
});

logInButton.addEventListener('click', () => {
    container.classList.remove("right-panel-active");
});


function createSlick(){  
    $(".slider").not('.slick-initialized').slick({
      centerMode: true,
        autoplay: true,
        dots: true, 
        arrows: true,
        slidesToShow: 3,
        responsive: [{ 
            breakpoint: 768,
            settings: {
                dots: false,
                arrows: false,
                infinite: true,
                slidesToShow: 1,
                slidesToScroll: 1
            } 
        }]
    }); 
  
} 
createSlick();
$(window).on( 'resize', createSlick );


