window.addEventListener("DOMContentLoaded", () => {
  // モーダルを取得
  const modal = document.getElementById("modal");
  // モーダルを表示するボタンを全て取得
  const openModalBtns = document.querySelectorAll(".js-open-modal");
  // モーダルを閉じるボタンを全て取得
  const closeModalBtns = document.querySelectorAll(".js-close-modal");

  // Swiperの設定
  const swiper = new Swiper(".swiper", {
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    spaceBetween: 30,
  });

  // モーダルを表示するボタンをクリックしたとき
  openModalBtns.forEach((openModalBtn) => {
    openModalBtn.addEventListener("click", () => {
      // data-slide-indexに設定したスライド番号を取得
      const modalIndex = openModalBtn.dataset.slideIndex;
      swiper.slideTo(modalIndex);
      modal.classList.add("is-active");
    });
  });

  // モーダルを閉じるボタンをクリックしたとき
  closeModalBtns.forEach((closeModalBtn) => {
    closeModalBtn.addEventListener("click", () => {
      modal.classList.remove("is-active");
    });
  });
});

// menuトグルスイッチ
const trigger = document.getElementById('js-trigger');
if(trigger){
  trigger.addEventListener('click', function(){
    const toggleTarget = document.getElementById('js-target');
    const toggleTarget2 = document.getElementById('js-trigger');
    toggleTarget.classList.toggle('show');
    toggleTarget2.classList.toggle('is-active');
  }, false);
}

// トップ自己紹介ボタン
const btnTarget = "about-top-toRight";
const btnTarget2 = "about-top-toLeft";
const elementClass = "is-active";
const aboutTop = document.getElementById("about-top");
const mv = document.getElementById("mv");
const body = document.body;

document.getElementById(btnTarget).addEventListener("click", function() {
  aboutTop.classList.add(elementClass);
  mv.classList.add(elementClass);
  body.classList.add(elementClass);
});

document.getElementById(btnTarget2).addEventListener("click", function() {
  aboutTop.classList.remove(elementClass);
  mv.classList.remove(elementClass);
  body.classList.remove(elementClass);
});