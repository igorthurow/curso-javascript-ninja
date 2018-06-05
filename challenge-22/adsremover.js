//mensagem do adblock da abril
(function (d, w) {
    'use strict;'
    w.onload = function () {

        d.querySelector('body, html').style.overflow = 'auto';

        function adsElements() {
            var ads = 'div[class^=paywall], div[class^=piano], div[id^=piano], div[class^=tp-]'; //Altere somente esta linha.

            var $adTotal = Array.prototype.slice.call(d.querySelectorAll(ads));

            console.log('Anuncios identificados: ', $adTotal);

            $adTotal.forEach(function (item) {
                setTimeout(function () {
                    d.querySelector('.' + item.classList[0]).remove();
                    console.log('Elemento classe', item.classList.value, 'removido');
                }, 100);

            });
        }
        adsElements();
    };
})(document, window);