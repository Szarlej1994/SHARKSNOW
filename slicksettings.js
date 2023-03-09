//mobile

$('.team-carousel').slick(
  
  {
    arrows: false,
    autoplay: true,
    autoplaySpeed: 1800,
    mobileFirst: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 766,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3
        }
      }

    ]

  }

);
