// Adicione funcionalidades JavaScript aqui, se necessário.
// Exemplo: rolagem suave para o formulário CTA

document.querySelectorAll("a[href^=\"#\"]").forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});

// Exemplo de validação de formulário (básica)
document.querySelector(".signup-form").addEventListener("submit", function(e) {
    const emailInput = this.querySelector("input[type=\"email\"]");
    if (!emailInput.value) {
        alert("Por favor, insira seu e-mail para continuar.");
        e.preventDefault(); // Impede o envio do formulário
    }
    // Você pode adicionar mais validações aqui
});


