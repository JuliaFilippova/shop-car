window.addEventListener('DOMContentLoaded', () => {
  window.onload = function () {
    // swiper
    let swiperBanner = new Swiper('.slider-banner', {
      loop: true,
      pagination: {
            el: '.swiper-pagination',
            clickable: true,
          },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },  
    });

    // ------------------------------------------

    let swiperShopLink = new Swiper('.slider-shop-link', {
      slidesPerView: 6,
        spaceBetween: 10,
      pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
      navigation: {
        nextEl: '.slider-shop-link_next',
        prevEl: '.slider-shop-link_prev',
      },
        breakpoints: {
            0: {
              slidesPerView: 2
            },
            450: {
              slidesPerView: 3
            },
            576: {
              slidesPerView: 4
            },
            768: {
              slidesPerView: 5
            },
            992: {
              slidesPerView: 6
            }
        }
    });

  // ------------------------------------------

    const sliderCategory = document.querySelector('.slider-category-link');

    let mySwiper;

    function mobileSlider() {
        if (window.innerWidth <= 991 && sliderCategory.dataset.mobile == 'false') {
            mySwiper = new Swiper(sliderCategory, {
                slidesPerView: 2,
                slideClass: 'swiper-slide',
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
            });

            sliderCategory.dataset.mobile = 'true';
        }

        if (window.innerWidth > 991) {
            sliderCategory.dataset.mobile = 'false';
            if (sliderCategory.classList.contains('swiper-container-initialized')) {
                mySwiper.destroy();
            }
        }
    }

    // запускаем слайдер если он есть на странице
    if (sliderCategory) {
        console.log('есть на странице');
        mobileSlider();

        window.addEventListener('resize', () => {
            mobileSlider();
        });
    }

    // ------------------------------------------

    let swiperProduct = new Swiper('.slider-product-card', {
        slidesPerView: 4,
        slidesPerGroup: 1,
        spaceBetween: 10,
        navigation: {
            nextEl: '.slider-product-card_next',
            prevEl: '.slider-product-card_prev',
        },
        breakpoints: {
            0: {
              slidesPerView: 2,
              spaceBetween: 5,
            },
            600: {
              slidesPerView: 3
            },
            992: {
              slidesPerView: 4
            }
        }
    });

    // ------------------------------------------

    let swiperShopCard = new Swiper('.slider-shop-card', {
        slidesPerView: 3,
        slidesPerGroup: 1,
        spaceBetween: 20,
        navigation: {
            nextEl: '.slider-shop-card_next',
            prevEl: '.slider-shop-card_prev',
        },
        // Responsive breakpoints
        breakpoints: {
            0: {
              slidesPerView: 1.3
            },
            390: {
              slidesPerView: 2,
              spaceBetween: 8
            },
            760: {
              slidesPerView: 3,
              spaceBetween: 10
            },
            992: {
              slidesPerView: 3
            }
        }
    });

    // -------------------
    let galleryThumbs = new Swiper('.gallery-thumbs', {
      spaceBetween: 10,
      slidesPerView: 4,
      freeMode: true,
      watchSlidesVisibility: true,
      watchSlidesProgress: true,
    });
    let galleryTop = new Swiper('.gallery-top', {
      spaceBetween: 10,
      loop: true,
      navigation: {
        nextEl: '.gallery-top_next',
        prevEl: '.gallery-top_prev',
      },
      thumbs: {
        swiper: galleryThumbs
      }
    });
  }

  // показать или скрыть ссылки в категориях
  let linkOpen = document.querySelector('.link-open'),
  	linkList = document.querySelector('.menu-category__drop');

  // по клику показать, разворачиваем список
  linkOpen.addEventListener('click', (e) => { //(e) если есть href#
      if (e.target) {
          e.preventDefault();
      }

      linkList.classList.toggle('open');
      linkOpen.innerText = 'Скрыть';
  });
});