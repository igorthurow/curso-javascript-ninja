(function(d, w){
    'use strict';

    var $start = d.querySelector('[data-js=start]');
    var $stop = d.querySelector('[data-js=stop]');
    var $reset = d.querySelector('[data-js=reset]');
    var $area = d.querySelector('[data-js=cronometer]');
    var $uservalue = d.querySelector('[data-js=uservalue]');
    var counter =+ 1;
    
    function timer(){
        if (counter <= ($uservalue.value ? $uservalue.value : Infinity)) {
            $area.innerHTML = counter;
            var time = setTimeout(function(){
                counter++;
                return timer();
            }, 1000);
        }
        $stop.addEventListener('click', function(){
            return clearTimeout(time);
        });
    };

    $start.addEventListener('click', function(){
        return timer();
    });
    $reset.addEventListener('click', function(){
        counter = 0;
        $area.innerHTML = 0;
    });

})(document, window);