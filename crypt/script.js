var swiper = new Swiper(".slide-content", {
    slidesPerView: 3,
    spaceBetween: 25,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints:{
        0: {
            slidesPerView: 1,
        },
        520: {
            slidesPerView: 2,
        },
        950: {
            slidesPerView: 3,
        },
    },
});
  

  

// window.addEventListener('DOMContentLoaded', function () {
//     var div81foto = document.querySelector('.div8_1_foto');
//     var divplay = document.querySelector('.divplay');

//     div81foto.addEventListener('click', function () {

//         if (div81foto.classList.contains('ready'),
//             divplay.classList.contains('noneblock')) {
//             return
//         }

//         div81foto.classList.add('ready');
//         divplay.classList.add('noneblock');
//         div81foto.insertAdjacentHTML('afterbegin','<iframe width="1224" height="697" src="https://www.youtube.com/embed/tEFU46jYVOI?autoplay=1" title="im better homelander" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');
//     });
// });


// $('.divplay').click(function() {
//     this.style.display = 'none';
// });


                    

           


  $(document).ready(function() {
  
    var $videoSrc;  
    $('.video-btn').click(function() {
        $videoSrc = $(this).data( "src" );
    });
    console.log($videoSrc);
    

    $('#myModal').on('shown.bs.modal', function (e) {
        
    $("#video").attr('src',$videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
    
    })  
    
    
    $('#myModal').on('hide.bs.modal', function (e) {
        $("#video").attr('src',$videoSrc); 
    }) 
        
        
});
    


