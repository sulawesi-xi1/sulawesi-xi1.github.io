(function () {
  'use strict';

  // Satu momen gerak: kata kunci Lontara "ditulis" satu per satu saat halaman dibuka.
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!reduce) {
    var sels = document.querySelectorAll('.kata .sel');
    for (var i = 0; i < sels.length; i++) {
      sels[i].classList.add('in');
      sels[i].style.animationDelay = (i * 90) + 'ms';
    }
  }

  // Blok "Dengar" hanya muncul kalau file audionya memang ada di folder /audio/.
  var blok = document.querySelectorAll('.dengar');
  for (var j = 0; j < blok.length; j++) {
    (function (d) {
      var a = d.querySelector('audio');
      if (!a) return;
      a.addEventListener('loadedmetadata', function () { d.hidden = false; });
      a.addEventListener('error', function () { d.remove(); });
      a.load();
    })(blok[j]);
  }
})();
