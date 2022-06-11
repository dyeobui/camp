let text = document.getElementById('text');
let bird1 = document.getElementById('bird1');
let bird2 = document.getElementById('bird2');
let rocks = document.getElementById('rocks');
let forest = document.getElementById('forest');
let water = document.getElementById('water');

window.addEventListener('scroll', function() {
    let value = window.scrollY;
    
    bird2.style.top = value * -1 + 'px';
    bird2.style.left = value * 2 + 'px';
    bird1.style.top = value * -0.8 + 'px';
    bird1.style.left = value * -5 + 'px';
    rocks.style.top = value * -.1 + 'px';
    forest.style.top = value * .25 + 'px';
    water.style.top = value * -.05 + 'px';
});
