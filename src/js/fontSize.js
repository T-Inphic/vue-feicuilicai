var docEl = document.documentElement,
    resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
    recalc = function() {
        var clientWidth = docEl.clientWidth;
        if (clientWidth){
            docEl.style.fontSize = 100 * (clientWidth / 375) + 'px';
        };
    };
if (document.addEventListener){
    window.addEventListener(resizeEvt, recalc, false);
    window.onload = function() {
        recalc();
    };
}