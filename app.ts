const toggle_btn:HTMLElement |null = document.querySelector('.toggle-btn')
const drop_down:HTMLElement |null = document.querySelector('.dropdown')
const backwards:NodeListOf<Element>|null = document.querySelectorAll('.backward')
const main_menu:HTMLElement |null = document.querySelector('.main-menu')
const setting_btn:HTMLElement |null = document.querySelector('.setting-btn')
const setting_menu:HTMLElement |null = document.querySelector('.setting-menu')
const animal_btn:HTMLElement |null = document.querySelector('.animal-btn')
const animal_menu:HTMLElement |null = document.querySelector('.animal-menu')

backwards.forEach(backward=>{
    backward.addEventListener('click', (e)=>{
        const el = e.currentTarget as HTMLElement
        const menu = el.parentElement?.parentElement
        menu ? menu.style.visibility = 'hidden':null
        menu ? menu.style.position = 'static' : null;

        setting_menu ? setting_menu.style.height= '0' :null
        animal_menu ? animal_menu.style.height= '0' :null

        
        main_menu ? main_menu.style.transform = 'translateX(0)' : null;
        main_menu ? main_menu.style.position = 'static' : null;
    })
})
let isOpen = false
toggle_btn?.addEventListener('click', (e)=>{
    console.log(toggle_btn)
    console.log(e.target)
    isOpen ? (drop_down ? drop_down.style.display = 'none' : null) : (drop_down ? drop_down.style.display = 'block' : null)
    isOpen = !isOpen
})

setting_btn?.addEventListener('click', ()=>{

    main_menu ? main_menu.style.transform = 'translateX(-110%)' : null;
    main_menu ? main_menu.style.position = 'absolute' : null;
    setting_menu ? setting_menu.style.visibility= 'visible' :null
    setting_menu ? setting_menu.style.height= 'auto' :null
    setting_menu ? setting_menu.style.position= 'static' :null
    if(setting_menu && setting_menu.style.transform === "translateX(110%)"){
        setting_menu ? setting_menu.style.transform = 'translateX(0)' :null
    }
    animal_menu ? animal_menu.style.transform = 'translateX(110%)':null
    animal_menu ? animal_menu.style.position = 'absolute' : null;
})

animal_btn?.addEventListener('click', ()=>{
    // animal_menu ? animal_menu.style.display= 'block' :null

    main_menu ? main_menu.style.transform = 'translateX(-110%)' : null;
    main_menu ? main_menu.style.position = 'absolute' : null;
    animal_menu ? animal_menu.style.height= 'auto' :null
    animal_menu ? animal_menu.style.visibility= 'visible' :null
    animal_menu ? animal_menu.style.position= 'static' :null
    if(animal_menu && animal_menu.style.transform === "translateX(110%)"){
        animal_menu ? animal_menu.style.transform = 'translateX(0)' :null
    }
    setting_menu ? setting_menu.style.transform = 'translateX(110%)' :null
    setting_menu ? setting_menu.style.position = 'absolute' : null;
})