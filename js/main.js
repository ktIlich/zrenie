$(function () {
  $('a[href^="#"]').on('click', function (event) {
    event.preventDefault();
    var sc = $(this).attr("href"),
      dn = $(sc).offset().top;
    $('html, body').animate({
      scrollTop: dn
    }, 1100);
  });
});
$(document).ready(function () {
  $('.slider').slick({
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 700,
    prevArrow: '<button type="button" class="slider-btn slider-btn_prev"><img src="../img/prev.svg" alt=""></button>',
    nextArrow: '<button type="button" class="slider-btn slider-btn_next"><img src="../img/next.svg" alt=""></button>'
  });
  $('.garant-slider').slick({
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    speed: 700,
    prevArrow: '<button type="button" class="slider-btn slider-btn_prev"><img src="../img/prev.svg" alt=""></button>',
    nextArrow: '<button type="button" class="slider-btn slider-btn_next"><img src="../img/next.svg" alt=""></button>',
    responsive: [{
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
    },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
    }]
  });
  $('.spec-slider').slick({
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 5,
    speed: 700,
    prevArrow: '<button type="button" class="slider-btn slider-btn_prev"><img src="../img/prev.svg" alt=""></button>',
    nextArrow: '<button type="button" class="slider-btn slider-btn_next"><img src="../img/next.svg" alt=""></button>',
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
    ]
  });
  $('.stages-tab_title').on("click", function () {
    var time = this;
    $('.stages-tab_info').removeClass('info-active')
    $('.stages-tab_title').removeClass('title-active');
    $(time).addClass('title-active');
    $(time).next().addClass('info-active');
  });
});
