const character = document.getElementById('character');
let x = 0; 
let speed = 10;
document.addEventListener('keydown', function(e) {
    if (e.key === 'ArrowLeft') {
        x -= speed;
        character.classList.add('left', 'walking'); 
    } else if (e.key === 'ArrowRight') {
        x += speed;
        character.classList.remove('left'); 
        character.classList.add('walking'); 
    }
    character.style.transform = `translateX(${x}px)`;
});
document.addEventListener('keyup', function(e) {
    if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
        character.classList.remove('walking'); 
    }});
