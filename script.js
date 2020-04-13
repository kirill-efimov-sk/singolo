//NAVBAR
document.querySelector('#base').addEventListener('click', function() {
  let btn = document.querySelector('#base').id;
  clickBtm(btn)
});
document.querySelector('#ServicesHrf').addEventListener('click', function() {
  let btn = document.querySelector('#ServicesHrf').id;
  clickBtm(btn)
});
document.querySelector('#PortfolioHrf').addEventListener('click', function() {
  let btn = document.querySelector('#PortfolioHrf').id;
  clickBtm(btn)
});
document.querySelector('#AboutHrf').addEventListener('click', function() {
  let btn = document.querySelector('#AboutHrf').id;
  clickBtm(btn)
});
document.querySelector('#ContactHrf').addEventListener('click', function() {
  let btn = document.querySelector('#ContactHrf').id;
  clickBtm(btn)
});
function clickBtm(btn) {
  
    let massHrf = ['#base', '#ServicesHrf', '#PortfolioHrf', '#AboutHrf', '#ContactHrf'];
    i=0;
    while (i<5) {
    let stat = document.querySelector(massHrf[i]).className;
      if (stat == 'active' || stat == 'navBull active') {
      document.querySelector(massHrf[i]).classList.remove('active');
      document.querySelector('#'+btn).classList.add('active');
      return;
      }
      i++;
    }
};
window.addEventListener('scroll', function(e) {
  if (window.pageYOffset < 400 && window.pageYOffset > 0) {
    let btn = document.querySelector('#base').id;
    clickBtm(btn)
  }
  if (window.pageYOffset > 550 && window.pageYOffset < 1045) {
    let btn = document.querySelector('#ServicesHrf').id;
    clickBtm(btn)
  }
  if (window.pageYOffset > 1045 && window.pageYOffset < 1800) {
    let btn = document.querySelector('#PortfolioHrf').id;
    clickBtm(btn)
  }
  if (window.pageYOffset > 1800 && window.pageYOffset < 2460) {
    let btn = document.querySelector('#AboutHrf').id;
    clickBtm(btn)
  }
  if (window.pageYOffset > 2460) {
    let btn = document.querySelector('#ContactHrf').id;
    clickBtm(btn)
  }
});
//burger for navbar
document.querySelector('#burger_panel').addEventListener('click', function() {
  let rotate = document.querySelector('.header nav').classList.length;
  document.querySelector('.header nav').className = 'new-list';
  if (rotate == 0) {
    document.querySelector('.burger_img').style.transform = 'rotate(90deg)';
    document.querySelector('.containerSin1').classList.add('bg-fon');
    document.querySelector('.contentSin2').classList.add('bg-fon');
    document.querySelector('.contentSin3').classList.add('bg-fon');
    document.querySelector('.logo').classList.add('logo-translate');
  }
  else {
    document.querySelector('.burger_img').style.transform = 'rotate(180deg)';
    document.querySelector('.header nav').classList.remove('new-list');
    document.querySelector('.containerSin1').classList.remove('bg-fon');
    document.querySelector('.contentSin2').classList.remove('bg-fon');
    document.querySelector('.contentSin3').classList.remove('bg-fon');
    document.querySelector('.logo').classList.remove('logo-translate');
  }
  return;
});
document.querySelector('.containerSin1').addEventListener('click', listen);
document.querySelector('.contentSin2').addEventListener('click', listen);
document.querySelector('.contentSin3').addEventListener('click', listen);

  function listen() {
  let rotate = document.querySelector('.header nav').classList.length;
  if (rotate == 0) {
   return false;
  }
  else {
    document.querySelector('.burger_img').style.transform = 'rotate(180deg)';
    document.querySelector('.header nav').classList.remove('new-list');
    document.querySelector('.containerSin1').classList.remove('bg-fon');
    document.querySelector('.contentSin2').classList.remove('bg-fon');
    document.querySelector('.contentSin3').classList.remove('bg-fon');
    document.querySelector('.logo').classList.remove('logo-translate');
  }
  return;
};


//MOBILE SCREEN OFF

document.querySelector('.black_screenV2pic').style.opacity = 0;
document.querySelector('.buttonMobileV2pic').style.display = 'none';

document.querySelector('#MobileV').addEventListener('click', function() {
  let masVal = document.querySelector('.black_screenV').style.opacity;
  if (masVal==0) {
    document.querySelector('.black_screenV').style.opacity = 1;
    return;
  }
  else if (masVal==1) {
    document.querySelector('.black_screenV').style.opacity = 0;
  }
});

document.querySelector('#MobileV2pic').addEventListener('click', function() {
  let masVal = document.querySelector('.black_screenV2pic').style.opacity;
  if (masVal==0) {
    document.querySelector('.black_screenV2pic').style.opacity = 1;
    return;
  }
  else if (masVal==1) {
    document.querySelector('.black_screenV2pic').style.opacity = 0;
  }
});

document.querySelector('#MobileH').addEventListener('click', function() {
  let masVal = document.querySelector('.black_screenH').style.opacity;
  if (masVal==0) {
    document.querySelector('.black_screenH').style.opacity = 1;
    return;
  }
  else if (masVal==1) {
    document.querySelector('.black_screenH').style.opacity = 0;
  }
});


//CAROUSEL
let items = document.querySelectorAll('.carousel-item');
let currentItem = 0;
let isEnabled = true;
document.querySelector('.slider').style.backgroundColor = '#F06C64';
//document.querySelector('.sliderBtm').style.backgroundColor = '#EA676B';

function changeCurrentItem (n) {
  currentItem = (n+items.length) % items.length;
}

function hideItem(direction) {
  isEnabled = false;
  items[currentItem].classList.add(direction);
  items[currentItem].addEventListener('animationend',function() {
    this.classList.remove('active', direction);
  })
}

function showItem(direction) {
  items[currentItem].classList.add('next', direction);
  items[currentItem].addEventListener('animationend',function() {
    this.classList.remove('next', direction);
    this.classList.add('active');
    isEnabled = true;
  })
}

function previousItem(n) {
  hideItem('to-right');
  changeCurrentItem(n-1);
  showItem('from-left');
}

function nextItem(n) {
  hideItem('to-left');
  changeCurrentItem(n+1);
  showItem('from-right');
}

document.querySelector('#PreviousSl').addEventListener('click', function() {
  let bgColor = document.querySelector('.slider').style.backgroundColor;
  if (bgColor === 'rgb(240, 108, 100)') {
    document.querySelector('.slider').style.backgroundColor = '#648BF0';
    //document.querySelector('.sliderBtm').style.backgroundColor = '#648BF0';
    document.querySelector('.buttonMobileH').style.display = 'none';
    document.querySelector('.buttonMobileV').style.display = 'none';
    document.querySelector('.buttonMobileV2pic').style.display = 'block';
  }
  else if (bgColor === 'rgb(100, 139, 240)') {
    document.querySelector('.slider').style.backgroundColor = '#F06C64';
    //document.querySelector('.sliderBtm').style.backgroundColor = '#EA676B';
    document.querySelector('.buttonMobileH').style.display = 'block';
    document.querySelector('.buttonMobileV').style.display = 'block';  
    document.querySelector('.buttonMobileV2pic').style.display = 'none';
  }

  document.querySelector('.black_screenH').style.opacity = 0;
  document.querySelector('.black_screenV').style.opacity = 0;
  document.querySelector('.black_screenV2pic').style.opacity = 0;

  if (isEnabled) {
    previousItem(currentItem)
  }
});

document.querySelector('#NextSl').addEventListener('click', function() {
  let bgColor = document.querySelector('.slider').style.backgroundColor;
  if (bgColor === 'rgb(240, 108, 100)') {
    document.querySelector('.slider').style.backgroundColor = '#648BF0';
    //document.querySelector('.sliderBtm').style.backgroundColor = '#648BF0';
    document.querySelector('.buttonMobileH').style.display = 'none';
    document.querySelector('.buttonMobileV').style.display = 'none';
    document.querySelector('.buttonMobileV2pic').style.display = 'block';
  }
  else if (bgColor === 'rgb(100, 139, 240)') {
    document.querySelector('.slider').style.backgroundColor = '#F06C64';
    //document.querySelector('.sliderBtm').style.backgroundColor = '#EA676B';
    document.querySelector('.buttonMobileH').style.display = 'block';
    document.querySelector('.buttonMobileV').style.display = 'block'; 
    document.querySelector('.buttonMobileV2pic').style.display = 'none';
  }

  document.querySelector('.black_screenH').style.opacity = 0;
  document.querySelector('.black_screenV').style.opacity = 0;
  document.querySelector('.black_screenV2pic').style.opacity = 0;

  if (isEnabled) {
    previousItem(currentItem)
  }
});


//GalleryImgBorder
const galleryImg = document.getElementsByClassName('img'); 
for(const img of galleryImg){
    img.addEventListener('click',()=>GalleryNewActive(img))
    function GalleryNewActive(img){[...galleryImg].map(elem=>elem.style.border='none');[...galleryImg].map(elem=>elem.style.opacity='0.8');
    img.style.margin='14px 20px 0 0';
    img.style.cursor='pointer';
    img.style.zoom='17px 17px 0 0';
    img.style.opacity='1.0';
    img.style.border='3px solid #4a457ca9';}
};


//GallerySort
const mixRand = () => Math.random() - 0.5;
const massHrfPortfolio = ['#All', '#Web', '#Graphic', '#Artwork'];
document.querySelector('#All').addEventListener('click', function () {let btnPortfolio = document.querySelector('#All').id;sortGallery(btnPortfolio)});
document.querySelector('#Web').addEventListener('click', function () {let btnPortfolio = document.querySelector('#Web').id;sortGallery(btnPortfolio)});
document.querySelector('#Graphic').addEventListener('click', function () {let btnPortfolio = document.querySelector('#Graphic').id;sortGallery(btnPortfolio)});
document.querySelector('#Artwork').addEventListener('click', function () {let btnPortfolio = document.querySelector('#Artwork').id;sortGallery(btnPortfolio)});

  function sortGallery(btnPortfolio) {
    const arrImg=[...galleryImg];
    arrImg.forEach(e=>e.style.border="none");
    const arrImgSrcMix=arrImg.map(e=>e.src).sort((a,b) =>mixRand());
    arrImg.map((e,i)=>e.src=arrImgSrcMix[i]);
    clickBtmPortfolio(btnPortfolio);

    function clickBtmPortfolio(btnPortfolio) {
      i=0;
      while (i<4) {
      let stat = document.querySelector(massHrfPortfolio[i]).className;
        if (stat == 'active') {
        document.querySelector(massHrfPortfolio[i]).classList.remove('active');
        document.querySelector('#'+btnPortfolio).classList.add('active');
        return;
        }
        i++;
      }
    }
  };

//Toast
let Toast = function (element, config) {
  let
    _this = this,
    _element = element,
    _config = {
      autohide: true,
      delay: 5000
    };
  for (let prop in config) {
    _config[prop] = config[prop];
  }
  Object.defineProperty(this, 'element', {
    get: function () {
      return _element;
    }
  });
  Object.defineProperty(this, 'config', {
    get: function () {
      return _config;
    }
  });
  _element.addEventListener('click', function (e) {
    if (e.target.classList.contains('toast__close')) {
      _this.hide();
    }
  });
}

Toast.prototype = {
  show: function () {
    let _this = this;
    this.element.classList.add('toast_show');
    if (this.config.autohide) {
      setTimeout(function () {
        _this.hide();
      }, this.config.delay)
    }
  },
  hide: function () {
    let event = new CustomEvent('hidden.toast', { detail: { toast: this.element } });
    this.element.classList.remove('toast_show');
    document.dispatchEvent(event);
  }
};

Toast.create = function (text1,text2,text3,text4, color) {
  let
    fragment = document.createDocumentFragment(),
    toast = document.createElement('div'),
    toastClose = document.createElement('button');
    toast.classList.add('toast');
    toast.style.backgroundColor = '#E6E6FA';
    toast.style.opacity = '0.5';
    toast.style.cursor = 'default';
    toast.style.border = '1px solid black';
    toast.textContent = [text1, text2, text3, text4];
    toastClose.classList.add('toast__close');
    toastClose.setAttribute('type', 'button');
    toastClose.textContent = '×';
    toast.appendChild(toastClose);
    fragment.appendChild(toast);
    return fragment;
};

Toast.add = function (params) {
  let config = {
    header: 'Название заголовка',
    text1: bodyText_name,
    text2: bodyText_email,
    text3: bodyText_subject,
    text4: bodyText_describe,
    color: '#ffffff',
    autohide: true,
    delay: 5000
  };
  if (params !== undefined) {
    for (let item in params) {
      config[item] = params[item];
    }
  }
  if (!document.querySelector('.toasts')) {
    let container = document.createElement('div');
    container.classList.add('toasts');
    container.style.cssText = 'position: absolute; margin: 10px 10px; width: 360px;';
    document.querySelector('.msgBox').appendChild(container);
  }
  document.querySelector('.toasts').appendChild(Toast.create(config.text1, config.text2, config.text3, config.text4, config.color));
  let toasts = document.querySelectorAll('.toast');
  let toast = new Toast(toasts[toasts.length - 1], { autohide: config.autohide, delay: config.delay });
  toast.show();
  return toast;
}

document.addEventListener('hidden.toast', function (e) {
  let element = e.detail.toast;
  if (element) {
    element.parentNode.removeChild(element);
  }
});
/*
Параметры функции add:
header (строка) - название заголовка
body (строка) - текст сообщения
color (строка) - цвет
autohide (булево) - скрывать ли автоматически всплывающее сообщение
delay (число) - количество миллисекунд, после которых сообщение будет автоматически скрыто
*/
document.querySelector('.inBut').addEventListener('click', function d() {
  bodyText_name = document.querySelector('#name').value;
  if (bodyText_name === '') {bodyText_name = 'No name'}
  bodyText_email = document.querySelector('#email').value;
  if (bodyText_email === '') {bodyText_email = 'No email\n'}
  bodyText_subject = document.querySelector('#subject').value;
  if (bodyText_subject === '') {bodyText_subject = 'No subject\n'}
  bodyText_describe = document.querySelector('#describe').value;
  if (bodyText_describe === '') {bodyText_describe = 'No describe\n'}
  
Toast.add({
  header: 'Название заголовка',
  body1: 'Текст сообщения...',
  body2: 'Текст сообщения...',
  body3: 'Текст сообщения...',
  body4: 'Текст сообщения...',
  color: '#28a745',
  autohide: true,
  delay: 5000
  });
  });