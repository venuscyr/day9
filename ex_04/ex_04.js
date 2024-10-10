document.addEventListener('mousemove', (e) =>
 {
    const container = document.querySelector('.parallax-container');
    const layers = document.querySelectorAll('.layer');
    const containerRect = container.getBoundindClientRect();
    const mouseX = e.clientX -containerRect.left;
    const mouseY = e.clientY -containerRect.top;
    const centerX = containerRect.width / 2;
    const centerY = containerRect.height / 2;
    layers.forEach(layer => {
           const depth = parseFloat(layer.getAttribute('data-depth'));
           const moveX = (mouseX - centerX) * depth;
           const moveY = (mouseY - centerY) * depth;

        layer.style.transform = `tranlate(${moveX}px, ${moveY}px)`;
    });

 });
