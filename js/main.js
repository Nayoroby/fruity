/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
// ############################## JAVA SCRIPT CODE ###################################

const anchors = document.querySelectorAll('a[href*="#"]');
for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const blockID = anchor.getAttribute('href').substr(1);
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
}

// ################################ BASE ###########################################

const animItems = document.querySelectorAll('._anim-items');
if (animItems.length > 0) {
  window.addEventListener('scroll', animOnScroll);
  function animOnScroll() {
    animItems.forEach(item => {
      const animItem = item;
      const animItemHeight = animItem.offsetHeight;
      const animItemOffset = offset(animItem).top;
      const animStart = 4;
      let animItemPoint = window.innerHeight - animItemHeight / animStart;
      if (animItemHeight > window.innerHeight) {
        animItemPoint = window.innerHeight - window.innerHeight - window.innerHeight / animStart;
      }
      if (pageYOffset > animItemOffset - animItemPoint && animItemOffset - animItemHeight) {
        animItem.classList.add('_active');
      } else {
        animItem.classList.remove('_active');
      }
    });
  }
  function offset(el) {
    const rect = el.getBoundingClientRect(),
      scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
      scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return {
      top: rect.top + scrollTop,
      left: rect.left + scrollLeft
    };
  }
}
setTimeout(animOnScroll(), 1000);

// ################## HEADER FIX #######################

const header = document.querySelector('header');
console.log(offset(header));
window.addEventListener('scroll', () => {
  if (offset(header).top >= 100) {
    header.classList.add('active');
  } else {
    header.classList.remove('active');
  }
});
function offset(el) {
  const rect = el.getBoundingClientRect(),
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  return {
    top: rect.top + scrollTop,
    left: rect.left + scrollLeft
  };
}

// #################### BURGER #############################

const burger = document.querySelector('.burger');
const body = document.querySelector('body');
const headerMenu = document.querySelector('.menu');
burger.addEventListener('click', function () {
  burger.classList.toggle('active');
  headerMenu.classList.toggle('active');
  body.classList.toggle('off');
});

// ####################### TABS #############################

// const tabLinks = document.querySelectorAll('.tab__link')
// const tabBody = document.querySelectorAll('.tab__body')

// tabLinks.forEach(function(item) {
//     item.addEventListener('click', function() {
//         let currentLink = item

//         let tabClass = currentLink.getAttribute('data-tab')
//         let currentTab = document.querySelector(tabClass)

//         tabLinks.forEach(function(item) {
//             item.classList.remove('clicked')
//         })

//         tabBody.forEach(function(item) {
//             item.classList.remove('see')
//         })

//         currentLink.classList.add('clicked')
//         currentTab.classList.add('see')
//     })
// })

// ################### acordion #######################

const acordTitle = document.querySelectorAll('.footer-column__title');
const acordList = document.querySelectorAll('.footer-column__list');
acordTitle.forEach(item => {
  item.addEventListener('click', () => {
    currList = document.querySelector(item.getAttribute('data-acord'));
    if (currList.style.maxHeight) {
      acordList.forEach(el => {
        el.style.maxHeight = null;
      });
    } else {
      acordList.forEach(el => {
        el.style.maxHeight = null;
      });
      currList.style.maxHeight = currList.scrollHeight + 'px';
    }
  });
});

// ################### popup ###################

const popups = document.querySelectorAll('.popup');
const popupBtns = document.querySelectorAll('.popup-open__btn');
const popupBody = document.querySelectorAll('.popup__body');
const arrowMargin = window.innerWidth - document.querySelector('.wrapper').offsetWidth;
if (popupBtns.length > 0) {
  popupBtns.forEach(item => {
    const currPopup = document.querySelector(`#${item.getAttribute('data-popup-open')}`);
    item.addEventListener('click', () => {
      open();
    });
    const popupClose = document.querySelectorAll('.popup-close');
    popupClose.forEach(closeItem => {
      closeItem.addEventListener('click', () => {
        close();
      });
    });
    currPopup.addEventListener('click', e => {
      if (!e.target.closest('.popup__body')) {
        close();
      }
    });
    function open() {
      currPopup.classList.add('open');
      body.classList.add('off');
      body.style.paddingRight = arrowMargin + 'px';
      header.style.paddingRight = arrowMargin + 'px';
    }
    function close() {
      currPopup.classList.remove('open');
      body.classList.remove('off');
      body.style.paddingRight = parseInt(body.style.paddingRight) - arrowMargin + 'px';
      header.style.paddingRight = parseInt(header.style.paddingRight) - arrowMargin + 'px';
    }
  });
}

// #################### MODAL-bask ###################################

const basketBtn = document.querySelector('.basket__btn');
const basketModal = document.querySelector('.basket-modal');
const basketModalBody = document.querySelector('.basket-modal__body');
const basketCross = document.querySelector('.basket-cross');
basketBtn.addEventListener('click', function () {
  basketModalBody.classList.add('active');
  basketModal.classList.add('active');
  body.classList.add('off');
  body.style.paddingRight = arrowMargin + 'px';
  header.style.paddingRight = arrowMargin + 'px';
});
basketModal.addEventListener('click', event => {
  if (!event.target.closest('.basket-modal__body')) {
    basketModalBody.classList.remove('active');
    basketModal.classList.remove('active');
    body.style.paddingRight = parseInt(body.style.paddingRight) - arrowMargin + 'px';
    header.style.paddingRight = parseInt(header.style.paddingRight) - arrowMargin + 'px';
    body.classList.remove('off');
  }
});
basketCross.addEventListener('click', function () {
  basketModalBody.classList.remove('active');
  basketModal.classList.remove('active');
  body.classList.remove('off');
  body.style.paddingRight = parseInt(body.style.paddingRight) - arrowMargin + 'px';
  header.style.paddingRight = parseInt(header.style.paddingRight) - arrowMargin + 'px';
});

// ####################### BASKET BACK-END ################################

const basketNo = document.querySelector('.basket-no');
const basketContent = document.querySelector('.basket-content');
const cartCards = document.querySelector('.basket-content');
const baskPlush = document.querySelector('.basket__plush');
window.addEventListener('click', function (event) {
  const currItemClass = event.target.dataset.prod;
  if (currItemClass) {
    const currItem = document.querySelector('.' + currItemClass);
    const currCart = currItem.closest('.product__card');
    const cartInfo = {
      id: currCart.dataset.id,
      img: currCart.querySelector('.product__card-image').querySelector('img').getAttribute('src'),
      title: currCart.querySelector('.product__card__title').innerText,
      price: currCart.querySelector('.product__price').innerText,
      size: currCart.querySelector('.prod-inf').querySelector('.product__size').innerText
    };
    const itemInCard = cartCards.querySelector(`[data-id="${cartInfo.id}"]`);
    if (itemInCard) {
      const cardSize = itemInCard.querySelector('.basket-cart__size');
      const cardPrice = itemInCard.querySelector('.basket-cart__price');
      cardSize.innerText = parseInt(cardSize.innerText) + parseInt(cartInfo.size) + 'g';
      cardPrice.innerText = Math.floor(parseFloat(cardPrice.innerText.replace('$', '')) + parseFloat(cartInfo['price'].replace('$', ''))) + '$';
    } else {
      const cartLike = `
            <div class="basket-cart" data-id='${cartInfo.id}'>
            <div class="basket-cart__body">
              <img src="${cartInfo['img']}" alt="" class="basket-cart__img">
              <h6 class="basket-cart__title">${cartInfo['title']}</h6>
              <div class="basket-cart__info">
                <p class="basket-cart__price">${cartInfo['price']}</p>
                <p class="basket-cart__size">${cartInfo['size']}</p>
              </div>
              <button class="basket-cart__btn del${cartInfo.id}" data-del="del${cartInfo.id}">delete</button>
            </div>
            </div>`;
      basketContent.insertAdjacentHTML('afterbegin', cartLike);
      basketNo.style.display = 'none';
    }
  }
  if (event.target.dataset.del) {
    const currDelBtn = this.document.querySelector('.' + event.target.dataset.del);
    const currDelCart = currDelBtn.closest('.basket-cart');
    currDelCart.remove();
  }
  if (!cartCards.querySelector('.basket-cart')) {
    basketNo.style.display = 'block';
    baskPlush.style.display = 'none';
  } else {
    basketNo.style.display = 'none';
    baskPlush.style.display = 'block';
  }
  const basketCard = cartCards.querySelectorAll('.basket-cart');
  let cartCount = 0;
  if (basketCard) {
    basketCard.forEach(item => {
      cartCount += 1;
      baskPlush.innerText = cartCount;
    });
  }
});

// ########################### SEARCH ############################

const searchClose = document.querySelector('.search-close');
const searchModal = document.querySelector('.search__modal');
const searchBody = document.querySelector('.search__body');
const searchBtn = document.querySelector('.search__btn');
const searchInput = document.querySelector('.search__input');
const searchExamples = document.querySelectorAll('.search__example');
searchBtn.addEventListener('click', () => {
  addOpen();
  unsetValue();
});
searchClose.addEventListener('click', () => {
  removeOpen();
  unsetValue();
  body.style.paddingRight = 0;
  header.style.paddingRight = 0;
});
searchModal.addEventListener('click', event => {
  if (!event.target.closest('.search__body') && searchModal.classList.contains('open')) {
    removeOpen();
    unsetValue();
  }
});
searchInput.addEventListener('input', () => {
  console.log(searchInput.value);
  for (let i = 0; i < searchExamples.length; i++) {
    let searchExamplesText = searchExamples[i].innerText.toLowerCase().trim().replace(' ', '');
    if (!searchExamplesText.includes(searchInput.value.toLowerCase().trim().replace(' ', ''))) {
      console.log(searchExamples[i]);
      searchExamples[i].style.display = 'none';
      const closeAfter = searchExamples[i];
    } else {
      searchExamples[i].style.display = 'block';
    }
  }
});
searchExamples.forEach(item => {
  item.addEventListener('click', () => {
    removeOpen();
  });
});
function addOpen() {
  searchModal.classList.add('open');
  searchBody.classList.add('open');
  body.classList.add('off');
  body.style.paddingRight = arrowMargin + 'px';
  header.style.paddingRight = arrowMargin + 'px';
}
function removeOpen() {
  searchModal.classList.remove('open');
  searchBody.classList.remove('open');
  body.classList.remove('off');
  body.style.paddingRight = 0;
  header.style.paddingRight = 0;
}
function unsetValue() {
  searchInput.value = '';
  searchExamples.forEach(item => {
    item.style.display = 'block';
  });
}

// ########################## SWIPER ################################

if (window.innerWidth > 1100) {
  let reviewSwiper = new Swiper(".review__swiper", {
    effect: "cards",
    grabCursor: true,
    loop: true,
    navigation: {
      nextEl: '.review-button-next',
      prevEl: '.review-button-prev'
    }
  });
} else {
  let reviewSwiper = new Swiper(".review__swiper", {
    loop: true,
    spaceBetween: 20
  });
}
/******/ })()
;
//# sourceMappingURL=main.js.map