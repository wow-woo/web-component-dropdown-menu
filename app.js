var toggle_btn = document.querySelector('.toggle-btn');
var drop_down = document.querySelector('.dropdown');
var backwards = document.querySelectorAll('.backward');
var main_menu = document.querySelector('.main-menu');
var setting_btn = document.querySelector('.setting-btn');
var setting_menu = document.querySelector('.setting-menu');
var animal_btn = document.querySelector('.animal-btn');
var animal_menu = document.querySelector('.animal-menu');
backwards.forEach(function (backward) {
    backward.addEventListener('click', function (e) {
        var _a;
        var el = e.currentTarget;
        var menu = (_a = el.parentElement) === null || _a === void 0 ? void 0 : _a.parentElement;
        menu ? menu.style.visibility = 'hidden' : null;
        menu ? menu.style.position = 'static' : null;
        setting_menu ? setting_menu.style.height = '0' : null;
        animal_menu ? animal_menu.style.height = '0' : null;
        main_menu ? main_menu.style.transform = 'translateX(0)' : null;
        main_menu ? main_menu.style.position = 'static' : null;
    });
});
var isOpen = false;
toggle_btn === null || toggle_btn === void 0 ? void 0 : toggle_btn.addEventListener('click', function (e) {
    console.log(toggle_btn);
    console.log(e.target);
    isOpen ? (drop_down ? drop_down.style.display = 'none' : null) : (drop_down ? drop_down.style.display = 'block' : null);
    isOpen = !isOpen;
});
setting_btn === null || setting_btn === void 0 ? void 0 : setting_btn.addEventListener('click', function () {
    main_menu ? main_menu.style.transform = 'translateX(-110%)' : null;
    main_menu ? main_menu.style.position = 'absolute' : null;
    setting_menu ? setting_menu.style.visibility = 'visible' : null;
    setting_menu ? setting_menu.style.height = 'auto' : null;
    setting_menu ? setting_menu.style.position = 'static' : null;
    if (setting_menu && setting_menu.style.transform === "translateX(110%)") {
        setting_menu ? setting_menu.style.transform = 'translateX(0)' : null;
    }
    animal_menu ? animal_menu.style.transform = 'translateX(110%)' : null;
    animal_menu ? animal_menu.style.position = 'absolute' : null;
});
animal_btn === null || animal_btn === void 0 ? void 0 : animal_btn.addEventListener('click', function () {
    // animal_menu ? animal_menu.style.display= 'block' :null
    main_menu ? main_menu.style.transform = 'translateX(-110%)' : null;
    main_menu ? main_menu.style.position = 'absolute' : null;
    animal_menu ? animal_menu.style.height = 'auto' : null;
    animal_menu ? animal_menu.style.visibility = 'visible' : null;
    animal_menu ? animal_menu.style.position = 'static' : null;
    if (animal_menu && animal_menu.style.transform === "translateX(110%)") {
        animal_menu ? animal_menu.style.transform = 'translateX(0)' : null;
    }
    setting_menu ? setting_menu.style.transform = 'translateX(110%)' : null;
    setting_menu ? setting_menu.style.position = 'absolute' : null;
});
