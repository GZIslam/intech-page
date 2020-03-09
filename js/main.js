document.body.onload = function(){

    setTimeout(function(){
        var menu = document.getElementById('menu-loader');
        var preloader = document.getElementById('page-preloader');
        var vkinst = document.getElementById('vkinst');
        var contacts = document.getElementById('contacts');
        if (!preloader.classList.contains('done')){
            preloader.classList.add('done1');
            menu.classList.add('done');
            vkinst.classList.add('done2');
            contacts.classList.add('done2');
        }
    }, 1000);
}

var scene = document.getElementById('parolax1');
var parallaxInstance = new Parallax(scene);