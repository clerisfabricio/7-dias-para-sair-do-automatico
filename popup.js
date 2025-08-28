// Popup e validação de WhatsApp
document.addEventListener('DOMContentLoaded', function() {
    const popup = document.getElementById('popup');
    const openPopupBtn = document.getElementById('openPopup');
    const closePopupBtn = document.querySelector('.close-popup');
    const whatsappInput = document.getElementById('whatsapp');
    const signupForm = document.getElementById('signupForm');

    // Abrir popup
    openPopupBtn.addEventListener('click', function() {
        popup.style.display = 'block';
        document.body.style.overflow = 'hidden'; // Previne scroll da página
    });

    // Fechar popup
    closePopupBtn.addEventListener('click', function() {
        popup.style.display = 'none';
        document.body.style.overflow = 'auto';
    });

    // Fechar popup clicando fora
    popup.addEventListener('click', function(e) {
        if (e.target === popup) {
            popup.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });

    // Formatação automática do WhatsApp
    whatsappInput.addEventListener('focus', function() {
        if (this.value === '') {
            this.value = '+55 (';
        }
    });

    whatsappInput.addEventListener('input', function() {
        let value = this.value.replace(/\D/g, ''); // Remove tudo que não é dígito
        
        if (value.length >= 2) {
            if (value.startsWith('55')) {
                value = value.substring(2); // Remove o 55 inicial se digitado
            }
            
            if (value.length <= 2) {
                this.value = `+55 (${value}`;
            } else if (value.length <= 11) {
                const ddd = value.substring(0, 2);
                const numero = value.substring(2);
                this.value = `+55 (${ddd}) ${numero}`;
            } else {
                // Limita a 11 dígitos (2 DDD + 9 número)
                const ddd = value.substring(0, 2);
                const numero = value.substring(2, 11);
                this.value = `+55 (${ddd}) ${numero}`;
            }
        }
    });

    whatsappInput.addEventListener('keydown', function(e) {
        // Permite apenas números, backspace, delete, tab, escape, enter
        if ([46, 8, 9, 27, 13].indexOf(e.keyCode) !== -1 ||
            // Permite Ctrl+A, Ctrl+C, Ctrl+V, Ctrl+X
            (e.keyCode === 65 && e.ctrlKey === true) ||
            (e.keyCode === 67 && e.ctrlKey === true) ||
            (e.keyCode === 86 && e.ctrlKey === true) ||
            (e.keyCode === 88 && e.ctrlKey === true) ||
            // Permite home, end, left, right
            (e.keyCode >= 35 && e.keyCode <= 39)) {
            return;
        }
        // Garante que é um número
        if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
            e.preventDefault();
        }
    });

    // Validação do formulário
    signupForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const email = document.getElementById('email').value;
        const whatsapp = document.getElementById('whatsapp').value;
        
        // Validação básica de email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Por favor, insira um email válido.');
            return;
        }
        
        // Validação do WhatsApp (deve ter 11 dígitos após +55)
        const whatsappNumbers = whatsapp.replace(/\D/g, '');
        if (whatsappNumbers.length < 11) {
            alert('Por favor, insira um número de WhatsApp válido com DDD.');
            return;
        }
        
        // Aqui você pode adicionar a lógica para enviar os dados
        alert('Cadastro realizado com sucesso! Você receberá as instruções por email.');
        popup.style.display = 'none';
        document.body.style.overflow = 'auto';
        
        // Reset do formulário
        signupForm.reset();
    });
});

