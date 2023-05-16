import {iosVhFix} from './utils/ios-vh-fix';
import {initModals} from './modules/modals/init-modals';
import {Form} from './modules/form-validate/form';
import {initTabs} from './utils/init-tabs';

// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------

  iosVhFix();

  // Modules
  // ---------------------------------

  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => {
    initModals();
    const form = new Form();
    window.form = form;
    form.init();
    initTabs();

    const wrapperVideo = document.querySelector('[data-video]');
    const picture = wrapperVideo.querySelector('picture');
    const buttonVideo = document.querySelector('[data-video-button]');
    const iframe = document.createElement('iframe');

    iframe.setAttribute('src', 'https://www.youtube.com/embed/9TZXsZItgdw');
    iframe.setAttribute('title', 'YouTube video player');
    iframe.setAttribute('frameborder', '0');
    iframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share');
    iframe.setAttribute('allowfullscreen', 'allowfullscreen');

    iframe.classList.add('video__play');

    wrapperVideo.addEventListener('click', function (evt) {
      evt.preventDefault();
      wrapperVideo.append(iframe);
      picture.remove();
      buttonVideo.remove();
    });

    const coachesSliderContainer = document.querySelector('.coaches__slider-container');
    const coachesSliderWrapper = document.querySelector('.coaches__slider-wrapper');

    if (coachesSliderContainer) {
      const nextButton = coachesSliderWrapper.querySelector('.coaches__slider-btn--next');
      const prevButton = coachesSliderWrapper.querySelector('.coaches__slider-btn--prev');

      const slider = new Swiper(coachesSliderContainer, {
        slidesPerView: 1,
        spaceBetween: 0,
        direction: 'horizontal',
        initialSlide: -4,
        loop: true,

        navigation: {
          nextEl: nextButton,
          prevEl: prevButton,
        },

        breakpoints: {
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },

          1200: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
        },
      });
    }

    const reviewsSliderContainer = document.querySelector('.reviews__slider-container');

    if (reviewsSliderContainer) {
      const nextButton = reviewsSliderContainer.querySelector('.reviews__slider-btn--next');
      const prevButton = reviewsSliderContainer.querySelector('.reviews__slider-btn--prev');

      const slider = new Swiper(reviewsSliderContainer, {
        slidesPerView: 1,
        spaceBetween: 0,
        direction: 'horizontal',

        navigation: {
          nextEl: nextButton,
          prevEl: prevButton,
        },
      });
    }
  });
});

// ---------------------------------

// ❗❗❗ обязательно установите плагины eslint, stylelint, editorconfig в редактор кода.

// привязывайте js не на классы, а на дата атрибуты (data-validate)

// вместо модификаторов .block--active используем утилитарные классы
// .is-active || .is-open || .is-invalid и прочие (обязателен нейминг в два слова)
// .select.select--opened ❌ ---> [data-select].is-open ✅

// выносим все в дата атрибуты
// url до иконок пинов карты, настройки автопрокрутки слайдера, url к json и т.д.

// для адаптивного JS используется matchMedia и addListener
// const breakpoint = window.matchMedia(`(min-width:1024px)`);
// const breakpointChecker = () => {
//   if (breakpoint.matches) {
//   } else {
//   }
// };
// breakpoint.addListener(breakpointChecker);
// breakpointChecker();

// используйте .closest(el)
