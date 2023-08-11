$(window).ready(function () {
    
  AOS.init({
    offset: 120,
    delay: 0,
    duration: 750,
    easing: "ease-in-out-quad",
    once: true,
  });
  $("html").css("overflow-x", "hidden");

  var typed = new Typed("#info-text", {
    strings: [
      "Hello, My name is <b>Moinuddin Sheikh</b>.\n<br> I am a Software Developer.",
    ],
    typeSpeed: 50,
    startDelay: 2100,
    onComplete: (self) => {
      $("#splash").fadeOut(1000);
      $("#info-text").toggleClass("info-text-white");
      setTimeout(function () {
        $("html").css("overflow-y", "unset");
      }, 500);
    },
  });

  $("#splash-logo").toggleClass("popanim");

  typed.start();
  setTimeout(function () {
    $("#splash-logo").fadeOut();
  }, 1600);

  $("#coverpage-list a").click(function (e) {
    e.preventDefault();
    $("html,body").animate(
      {
        scrollTop: $(this.hash).offset().top,
      },
      100
    );
  });
});
