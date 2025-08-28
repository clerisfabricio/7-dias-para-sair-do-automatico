// Sistema de popups para múltiplas ofertas
document.addEventListener('DOMContentLoaded', function() {
    // Elementos dos popups
    const popupMainOffer = document.getElementById('popupMainOffer');
    const popupPrelaunch = document.getElementById('popupPrelaunch');
    
    // Botões para abrir popups
    const openMainOfferBtns = document.querySelectorAll('#openMainOffer, #openFinalCTA');
    const openPrelaunchBtn = document.getElementById('openPrelaunch');
    
    // Botões para fechar popups
    const closePopupBtns = document.querySelectorAll('.close-popup');
    
    // Formulários
    const mainOfferForm = document.getElementById('mainOfferForm');
    const prelaunchForm = document.getElementById('prelaunchForm');
    
    // Campos de WhatsApp
    const whatsappMain = document.getElementById('whatsappMain');
    const whatsappPrelaunch = document.getElementById('whatsappPrelaunch');

    // Função para abrir popup
    function openPopup(popup) {
        popup.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }

    // Função para fechar popup
    function closePopup(popup) {
        popup.style.display = 'none';
        document.body.style.overflow = 'auto';
    }

    // Event listeners para abrir popups
    openMainOfferBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            openPopup(popupMainOffer);
        });
    });

    if (openPrelaunchBtn) {
        openPrelaunchBtn.addEventListener('click', function() {
            openPopup(popupPrelaunch);
        });
    }

    // Event listeners para fechar popups
    closePopupBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const popupId = this.getAttribute('data-popup');
            const popup = document.getElementById(popupId);
            if (popup) {
                closePopup(popup);
            }
        });
    });

    // Fechar popup clicando fora
    [popupMainOffer, popupPrelaunch].forEach(popup => {
        if (popup) {
            popup.addEventListener('click', function(e) {
                if (e.target === popup) {
                    closePopup(popup);
                }
            });
        }
    });

    // Formatação automática do WhatsApp
    function setupWhatsAppFormatting(input) {
        if (!input) return;

        input.addEventListener('focus', function() {
            if (this.value === '') {
                this.value = '+55 (';
            }
        });

        input.addEventListener('input', function() {
            let value = this.value.replace(/\D/g, '');
            
            if (value.length >= 2) {
                if (value.startsWith('55')) {
                    value = value.substring(2);
                }
                
                if (value.length <= 2) {
                    this.value = `+55 (${value}`;
                } else if (value.length <= 11) {
                    const ddd = value.substring(0, 2);
                    const numero = value.substring(2);
                    this.value = `+55 (${ddd}) ${numero}`;
                } else {
                    const ddd = value.substring(0, 2);
                    const numero = value.substring(2, 11);
                    this.value = `+55 (${ddd}) ${numero}`;
                }
            }
        });

        input.addEventListener('keydown', function(e) {
            if ([46, 8, 9, 27, 13].indexOf(e.keyCode) !== -1 ||
                (e.keyCode === 65 && e.ctrlKey === true) ||
                (e.keyCode === 67 && e.ctrlKey === true) ||
                (e.keyCode === 86 && e.ctrlKey === true) ||
                (e.keyCode === 88 && e.ctrlKey === true) ||
                (e.keyCode >= 35 && e.keyCode <= 39)) {
                return;
            }
            if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
                e.preventDefault();
            }
        });
    }

    // Aplicar formatação aos campos de WhatsApp
    setupWhatsAppFormatting(whatsappMain);
    setupWhatsAppFormatting(whatsappPrelaunch);

    // Validação de formulários
    function validateForm(form, whatsappField) {
        const email = form.querySelector('input[type="email"]').value;
        const whatsapp = whatsappField.value;
        
        // Validação de email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Por favor, insira um email válido.');
            return false;
        }
        
        // Validação do WhatsApp
        const whatsappNumbers = whatsapp.replace(/\D/g, '');
        if (whatsappNumbers.length < 11) {
            alert('Por favor, insira um número de WhatsApp válido com DDD.');
            return false;
        }
        
        return true;
    }

    // Event listener para formulário da oferta principal
    if (mainOfferForm) {
        mainOfferForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            if (validateForm(this, whatsappMain)) {
                alert('Parabéns! Seu acesso ao Ritual de 7 Dias foi garantido. Você receberá as instruções por email e WhatsApp.');
                closePopup(popupMainOffer);
                this.reset();
            }
        });
    }

    // Event listener para formulário do pré-lançamento
    if (prelaunchForm) {
        prelaunchForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            if (validateForm(this, whatsappPrelaunch)) {
                alert('Excelente! Seu acesso à Comunidade Humano Infinito foi garantido. Você receberá todas as informações por email e WhatsApp.');
                closePopup(popupPrelaunch);
                this.reset();
            }
        });
    }

    // Scroll suave para âncoras
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

