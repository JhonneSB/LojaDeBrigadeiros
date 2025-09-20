// Scroll suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Botão flutuante aparece após rolar
window.addEventListener('scroll', function () {
    const btn = document.querySelector('.floating-btn');
    btn.style.display = window.scrollY > 300 ? 'flex' : 'none';

    // Gatinho também aparece junto com o botão
    const cat = document.getElementById('catImage');
    cat.style.display = window.scrollY > 300 ? 'block' : 'none';
});

// Criar gotas de chocolate caindo - CORRIGIDO
function createChocolateDrip() {
    const drip = document.createElement('div');
    drip.className = 'chocolate-drip';

    // Posicionamento aleatório
    drip.style.left = Math.random() * window.innerWidth + 'px';

    // Velocidade e tamanho variados para efeito mais natural
    const duration = Math.random() * 5 + 3;
    drip.style.animation = `fall ${duration}s linear forwards`;
    drip.style.width = (Math.random() * 15 + 8) + 'px';
    drip.style.height = (Math.random() * 40 + 20) + 'px';
    drip.style.opacity = Math.random() * 0.6 + 0.2;

    // Adicionar ao body
    document.body.appendChild(drip);

    // Remover após a animação
    setTimeout(() => {
        if (drip.parentNode) {
            drip.parentNode.removeChild(drip);
        }
    }, duration * 1000 + 100);
}

// Criar gotejamentos periodicamente
setInterval(createChocolateDrip, 500);

// Iniciar algumas gotas imediatamente
for (let i = 0; i < 15; i++) {
    setTimeout(createChocolateDrip, i * 300);
}

// Interação com o gatinho
document.getElementById('catImage').addEventListener('click', function () {
    this.style.transform = 'scale(1.2) rotate(10deg)';
    setTimeout(() => {
        this.style.transform = '';
    }, 500);

    // Opcional: fazer um miado
    // const audio = new Audio('https://assets.mixkit.co/sfx/preview/mixkit-cat-meow-119.mp3');
    // audio.play();
});