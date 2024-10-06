const menuIcon = document.getElementById('menu-icon');
const navLinks = document.getElementById('nav-links');
const cta = document.getElementById('cta');
const header = document.querySelector('header');

// Evento para abrir/fechar o menu
menuIcon.addEventListener('click', () => {
    navLinks.classList.toggle('active');

    // Troca o ícone entre "bars" e "times" (X)
    if (navLinks.classList.contains('active')) {
        menuIcon.innerHTML = '<i class="fas fa-times"></i>';
    } else {
        menuIcon.innerHTML = '<i class="fas fa-bars"></i>';
    }
});

// Fixa o cabeçalho ao rolar
window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
        header.classList.add('fixed');
    } else {
        header.classList.remove('fixed');
    }
});

// Ajusta a rolagem dos links
navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault(); // Impede o comportamento padrão do link
        const targetId = this.getAttribute('href'); // Obtém o ID do destino
        const targetElement = document.querySelector(targetId); // Seleciona o elemento alvo

        // Calcula a posição de rolagem
        const offsetPosition = targetElement.getBoundingClientRect().top + window.scrollY - 50;

        // Anima a rolagem
        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth' // Rolagem suave
        });

        // Fecha o menu em dispositivos móveis
        navLinks.classList.remove('active');
        menuIcon.innerHTML = '<i class="fas fa-bars"></i>'; // Troca o ícone de volta
    });
});
