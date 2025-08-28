// Carrossel de depoimentos expandido
const testimonials = [
    {
        text: "Em 7 dias voltei a sentir energia e clareza. Saí da estagnação e finalmente senti que estava no controle da minha rotina de novo.",
        author: "Maria Silva, Empresária"
    },
    {
        text: "O ritual transformou completamente minha manhã. Agora acordo com propósito e energia para enfrentar qualquer desafio que apareça.",
        author: "João Santos, Consultor"
    },
    {
        text: "Nunca pensei que 20 minutos por dia pudessem fazer tanta diferença. Minha produtividade e bem-estar aumentaram drasticamente.",
        author: "Ana Costa, Designer"
    },
    {
        text: "Finalmente encontrei uma rotina que funciona! O ritual me ajudou a conectar corpo, mente e espírito de forma prática e sustentável.",
        author: "Carlos Oliveira, Engenheiro"
    },
    {
        text: "Depois de anos tentando criar hábitos saudáveis, este ritual foi o que realmente funcionou. Simples, poderoso e transformador.",
        author: "Fernanda Lima, Psicóloga"
    },
    {
        text: "A clareza mental que desenvolvi em apenas uma semana me ajudou a tomar decisões importantes que estava adiando há meses.",
        author: "Roberto Mendes, Advogado"
    },
    {
        text: "Minha família notou a diferença na minha energia e disposição. O ritual não só me transformou, mas impactou todos ao meu redor.",
        author: "Juliana Rocha, Professora"
    },
    {
        text: "Como empreendedor, sempre busquei performance. Este ritual me deu o equilíbrio que faltava entre produtividade e bem-estar.",
        author: "Diego Ferreira, CEO"
    }
];

let currentTestimonial = 0;

function updateTestimonial() {
    const testimonialElement = document.querySelector('.testimonial blockquote');
    const authorElement = document.querySelector('.testimonial .author');
    
    if (testimonialElement && authorElement) {
        // Adiciona efeito de fade out
        testimonialElement.style.opacity = '0';
        authorElement.style.opacity = '0';
        
        setTimeout(() => {
            testimonialElement.textContent = testimonials[currentTestimonial].text;
            authorElement.textContent = `— ${testimonials[currentTestimonial].author}`;
            
            // Adiciona efeito de fade in
            testimonialElement.style.opacity = '1';
            authorElement.style.opacity = '1';
            
            currentTestimonial = (currentTestimonial + 1) % testimonials.length;
        }, 300);
    }
}

// Adicionar transições suaves ao CSS
function addTestimonialTransitions() {
    const style = document.createElement('style');
    style.textContent = `
        .testimonial blockquote,
        .testimonial .author {
            transition: opacity 0.3s ease-in-out;
        }
    `;
    document.head.appendChild(style);
}

// Inicializar carrossel quando a página carregar
document.addEventListener('DOMContentLoaded', function() {
    addTestimonialTransitions();
    updateTestimonial();
    setInterval(updateTestimonial, 7000); // Trocar a cada 7 segundos
});

