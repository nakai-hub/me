/**
 * ハンバーガーメニュー：ボタンクリックでナビを開閉する
 * 初心者向け：jQuery で「ボタンがクリックされたら、ナビに is-open クラスを付ける/外す」
 */
$(function () {
  var $hamburger = $("#hamburger");
  var $nav = $("#nav");

  $hamburger.on("click", function () {
    $(this).toggleClass("is-active");
    $nav.toggleClass("is-open");
  });

  // ナビのリンクをクリックしたらメニューを閉じる（スマホで見た目を自然にするため）
  $nav.find("a").on("click", function () {
    $hamburger.removeClass("is-active");
    $nav.removeClass("is-open");
  });
});
