// Carrossel de depoimentos
const testimonials = [
    {
        text: "Em 7 dias voltei a sentir energia e clareza. Saí da estagnação e finalmente senti que estava no controle da minha rotina de novo.",
        author: "Maria Silva"
    },
    {
        text: "O ritual transformou completamente minha manhã. Agora acordo com propósito e energia para enfrentar qualquer desafio.",
        author: "João Santos"
    },
    {
        text: "Nunca pensei que 20 minutos por dia pudessem fazer tanta diferença. Minha produtividade e bem-estar aumentaram drasticamente.",
        author: "Ana Costa"
    },
    {
        text: "Finalmente encontrei uma rotina que funciona! O ritual me ajudou a conectar corpo, mente e espírito de forma prática.",
        author: "Carlos Oliveira"
    },
    {
        text: "Depois de anos tentando criar hábitos saudáveis, este ritual foi o que realmente funcionou. Simples e transformador.",
        author: "Fernanda Lima"
    }
];

let currentTestimonial = 0;

function updateTestimonial() {
    const testimonialElement = document.querySelector('.testimonial blockquote');
    const authorElement = document.querySelector('.testimonial .author');
    
    if (testimonialElement && authorElement) {
        testimonialElement.textContent = testimonials[currentTestimonial].text;
        authorElement.textContent = `— ${testimonials[currentTestimonial].author}`;
        
        currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    }
}

// Inicializar carrossel quando a página carregar
document.addEventListener('DOMContentLoaded', function() {
    updateTestimonial();
    setInterval(updateTestimonial, 7000); // Trocar a cada 7 segundos
});

