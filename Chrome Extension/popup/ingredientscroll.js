(function() {
    var scroll = document.querySelector('div[class*="ingredient"]')

    if (scroll != undefined){
        console.log('we made it!')
        scroll.scrollIntoView(true);
        return true
    } 

})();
