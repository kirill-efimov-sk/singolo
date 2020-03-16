//NAVBAR
document.querySelector('#base').addEventListener('click', function() {
  let massHrf = ['#base', '#ServicesHrf', '#PortfolioHrf', '#AboutHrf', '#ContactHrf'];
  i=0;
  while (i<5) {
  let stat = document.querySelector(massHrf[i]).className;
    if (stat == 'active' || stat == 'navBull active') {
    document.querySelector(massHrf[i]).classList.remove('active');
    document.querySelector('#base').classList.add('active');
    return;
    }
    i++;
  }
});

document.querySelector('#ServicesHrf').addEventListener('click', function() {
  let massHrf = ['#base', '#ServicesHrf', '#PortfolioHrf', '#AboutHrf', '#ContactHrf'];
  i=0;
  while (i<5) {
  let stat = document.querySelector(massHrf[i]).className;
    if (stat == 'active' || stat == 'navBull active') {
    document.querySelector(massHrf[i]).classList.remove('active');
    document.querySelector('#ServicesHrf').classList.add('active');
    return;
    }
    i++;
  }
});

document.querySelector('#PortfolioHrf').addEventListener('click', function() {
  let massHrf = ['#base', '#ServicesHrf', '#PortfolioHrf', '#AboutHrf', '#ContactHrf'];
  i=0;
  while (i<5) {
  let stat = document.querySelector(massHrf[i]).className;
    if (stat == 'active' || stat == 'navBull active') {
    document.querySelector(massHrf[i]).classList.remove('active');
    document.querySelector('#PortfolioHrf').classList.add('active');
    return;
    }
    i++;
  }
});

document.querySelector('#AboutHrf').addEventListener('click', function() {
  let massHrf = ['#base', '#ServicesHrf', '#PortfolioHrf', '#AboutHrf', '#ContactHrf'];
  i=0;
  while (i<5) {
  let stat = document.querySelector(massHrf[i]).className;
    if (stat == 'active' || stat == 'navBull active') {
    document.querySelector(massHrf[i]).classList.remove('active');
    document.querySelector('#AboutHrf').classList.add('active');
    return;
    }
    i++;
  }
});

document.querySelector('#ContactHrf').addEventListener('click', function() {
  let massHrf = ['#base', '#ServicesHrf', '#PortfolioHrf', '#AboutHrf', '#ContactHrf'];
  i=0;
  while (i<5) {
  let stat = document.querySelector(massHrf[i]).className;
    if (stat == 'active' || stat == 'navBull active') {
    document.querySelector(massHrf[i]).classList.remove('active');
    document.querySelector('#ContactHrf').classList.add('active');
    return;
    }
    i++;
  }
});

//MOBILE SCREEN OFF
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
document.querySelector('.slider').style.backgroundColor = "#F06C64";
document.querySelector('.sliderBtm').style.backgroundColor = "#EA676B"

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
  if (bgColor === "rgb(240, 108, 100)") {
    document.querySelector('.slider').style.backgroundColor = "#648BF0";
    document.querySelector('.sliderBtm').style.backgroundColor = "#648BF0";
    document.querySelector('.buttonMobileH').style.display = 'none';
    document.querySelector('.buttonMobileV').style.display = 'none';
  }
  else if (bgColor === "rgb(100, 139, 240)") {
    document.querySelector('.slider').style.backgroundColor = "#F06C64";
    document.querySelector('.sliderBtm').style.backgroundColor = "#EA676B";
    document.querySelector('.buttonMobileH').style.display = 'block';
    document.querySelector('.buttonMobileV').style.display = 'block';  
  }

  document.querySelector('.black_screenV').style.opacity = 0;
  document.querySelector('.black_screenH').style.opacity = 0;

  if (isEnabled) {
    previousItem(currentItem)
  }
});

document.querySelector('#NextSl').addEventListener('click', function() {
  let bgColor = document.querySelector('.slider').style.backgroundColor;
  if (bgColor === "rgb(240, 108, 100)") {
    document.querySelector('.slider').style.backgroundColor = "#648BF0";
    document.querySelector('.sliderBtm').style.backgroundColor = "#648BF0";
    document.querySelector('.buttonMobileH').style.display = 'none';
    document.querySelector('.buttonMobileV').style.display = 'none';
  }
  else if (bgColor === "rgb(100, 139, 240)") {
    document.querySelector('.slider').style.backgroundColor = "#F06C64";
    document.querySelector('.sliderBtm').style.backgroundColor = "#EA676B";
    document.querySelector('.buttonMobileH').style.display = 'block';
    document.querySelector('.buttonMobileV').style.display = 'block'; 
  }
    document.querySelector('.black_screenV').style.opacity = 0;
    document.querySelector('.black_screenH').style.opacity = 0;

  if (isEnabled) {
    previousItem(currentItem)
  }
});