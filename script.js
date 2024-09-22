const bar = document.getElementById('bar');
const menu = document.getElementById('menu');
const quit = document.getElementById('quit');

if (bar) {
    bar.addEventListener('click', () => {
        menu.classList.add('show');
    })
}

if (quit) {
    quit.addEventListener('click', () =>{
        menu.classList.remove('show')
    })
}