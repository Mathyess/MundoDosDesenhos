// Aguarda o carregamento completo da página
document.addEventListener('DOMContentLoaded', function() {
    
    // Elementos do DOM
    const idadeBtns = document.querySelectorAll('.idade-btn');
    const desenhoCards = document.querySelectorAll('.desenho-card');
    const ctaButton = document.querySelector('.cta-button');
    const navLinks = document.querySelectorAll('.nav-menu a');
    const atividadeBtns = document.querySelectorAll('.atividade-btn');
    const jogarBtns = document.querySelectorAll('.jogar-btn');
    const newsletterForm = document.querySelector('.newsletter-form');
    const newsletterInput = document.querySelector('.newsletter-input');
    const newsletterBtn = document.querySelector('.newsletter-btn');
    
    // Função para filtrar desenhos por idade
    function filtrarPorIdade(idade) {
        desenhoCards.forEach(card => {
            const cardIdade = card.getAttribute('data-idade');
            
            if (idade === 'todas' || cardIdade === idade) {
                card.classList.remove('hidden');
                card.classList.add('visible');
            } else {
                card.classList.add('hidden');
                card.classList.remove('visible');
            }
        });
    }
    
    // Event listeners para os botões de filtro
    idadeBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const idadeSelecionada = this.getAttribute('data-idade');
            
            // Remove a classe active de todos os botões
            idadeBtns.forEach(b => b.classList.remove('active'));
            
            // Adiciona a classe active ao botão clicado
            this.classList.add('active');
            
            // Filtra os cards
            desenhoCards.forEach(card => {
                const cardIdade = card.getAttribute('data-idade');
                
                if (idadeSelecionada === 'todas' || cardIdade === idadeSelecionada) {
                    card.style.display = 'block';
                    card.classList.add('visible');
                } else {
                    card.style.display = 'none';
                    card.classList.remove('visible');
                }
            });
            
            // Adiciona efeito de clique
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
        });
    });
    
    // Event listener para o botão CTA
    if (ctaButton) {
        ctaButton.addEventListener('click', function() {
            // Scroll suave para a seção de desenhos
            document.getElementById('desenhos').scrollIntoView({
                behavior: 'smooth'
            });
            
            // Efeito de clique
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
        });
    }
    
    // Navegação suave para links internos
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            if (href.startsWith('#')) {
                e.preventDefault();
                const targetSection = document.querySelector(href);
                
                if (targetSection) {
                    targetSection.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
    
    // Efeitos de hover nos cards de desenhos
    desenhoCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
        
        // Adiciona efeito de clique
        card.addEventListener('click', function() {
            this.style.transform = 'scale(0.98)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
            
            // Simula abertura de vídeo
            showVideoModal(this.querySelector('h3').textContent);
        });
    });
    
    // Função para mostrar modal de vídeo (com trailer do YouTube)
    function showVideoModal(titulo) {
        // Mapear trailers por título
        const trailers = {
            'Blippi': 'https://www.youtube.com/embed/cOlwIweQLj8',
            'Bluey': 'https://www.youtube.com/embed/vDVFk56PTd8',
            'Cocomelon': 'https://www.youtube.com/embed/eW4EYrmiNGo',
            'Curious George': 'https://www.youtube.com/embed/tH0hwk-vXIo',
            'Octonauts': 'https://www.youtube.com/embed/dnyLnL-0CuQ',
            'Paw Patrol': 'https://www.youtube.com/embed/LRMTr2VZcr8',
            'Peppa Pig': 'https://www.youtube.com/embed/lGZOFDwnWrI',
            'Wild Kratts': '' // Sem vídeo enviado
        };
        const trailerUrl = trailers[titulo] || '';
        const modal = document.createElement('div');
        modal.className = 'video-modal';
        modal.innerHTML = `
            <div class="modal-content">
                <div class="modal-header">
                    <h3>🎬 ${titulo}</h3>
                    <button class="close-btn">✕</button>
                </div>
                <div class="modal-body">
                    ${trailerUrl ? `<div class='video-embed'><iframe width='100%' height='315' src='${trailerUrl}' title='Trailer de ${titulo}' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe></div>` : `<div class='video-placeholder'><div class='play-icon'>▶️</div><p>Vídeo do ${titulo}</p></div>`}
                </div>
            </div>
        `;
        // Adiciona estilos ao modal
        modal.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0,0,0,0.8);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 10000;
            animation: fadeIn 0.3s ease;
        `;
        const modalContent = modal.querySelector('.modal-content');
        modalContent.style.cssText = `
            background: white;
            border-radius: 20px;
            padding: 2rem;
            max-width: 600px;
            width: 90%;
            animation: slideInUp 0.3s ease;
        `;
        const modalHeader = modal.querySelector('.modal-header');
        modalHeader.style.cssText = `
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 1rem;
        `;
        const closeBtn = modal.querySelector('.close-btn');
        closeBtn.style.cssText = `
            background: #FF6B6B;
            color: white;
            border: none;
            border-radius: 50%;
            width: 30px;
            height: 30px;
            cursor: pointer;
            font-size: 1rem;
        `;
        const videoEmbed = modal.querySelector('.video-embed');
        if (videoEmbed) {
            videoEmbed.style.cssText = `
                width: 100%;
                height: 315px;
                display: flex;
                align-items: center;
                justify-content: center;
            `;
        }
        document.body.appendChild(modal);
        // Fecha o modal
        closeBtn.addEventListener('click', () => {
            modal.remove();
        });
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.remove();
            }
        });
    }
    
    // Event listeners para botões de atividades
    atividadeBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const atividade = this.closest('.atividade-card').querySelector('h3').textContent;
            showAtividadeModal(atividade);
            
            // Efeito de clique
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
        });
    });
    
    // Função para mostrar modal de atividade
    function showAtividadeModal(atividade) {
        const modal = document.createElement('div');
        modal.className = 'atividade-modal';
        modal.innerHTML = `
            <div class="modal-content">
                <div class="modal-header">
                    <h3>🎨 ${atividade}</h3>
                    <button class="close-btn">✕</button>
                </div>
                <div class="modal-body">
                    <p>Em breve: ${atividade} será disponibilizado!</p>
                    <div class="coming-soon">
                        <span>🚧</span>
                        <p>Funcionalidade em desenvolvimento</p>
                    </div>
                </div>
            </div>
        `;
        
        // Aplica os mesmos estilos do modal de vídeo
        modal.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0,0,0,0.8);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 10000;
            animation: fadeIn 0.3s ease;
        `;
        
        const modalContent = modal.querySelector('.modal-content');
        modalContent.style.cssText = `
            background: white;
            border-radius: 20px;
            padding: 2rem;
            max-width: 500px;
            width: 90%;
            text-align: center;
            animation: slideInUp 0.3s ease;
        `;
        
        const comingSoon = modal.querySelector('.coming-soon');
        comingSoon.style.cssText = `
            background: linear-gradient(45deg, #FFD700, #FF6B6B);
            padding: 2rem;
            border-radius: 15px;
            color: white;
            margin-top: 1rem;
        `;
        
        const comingSoonIcon = comingSoon.querySelector('span');
        comingSoonIcon.style.fontSize = '3rem';
        comingSoonIcon.style.display = 'block';
        comingSoonIcon.style.marginBottom = '1rem';
        
        document.body.appendChild(modal);
        
        // Fecha o modal
        const closeBtn = modal.querySelector('.close-btn');
        closeBtn.addEventListener('click', () => modal.remove());
        modal.addEventListener('click', (e) => {
            if (e.target === modal) modal.remove();
        });
    }
    
    // Event listeners para botões de jogos
    jogarBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const jogo = this.closest('.jogo-card').querySelector('h3').textContent;
            showJogoModal(jogo);
            
            // Efeito de clique
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
        });
    });
    
    // Função para mostrar modal de jogo
    function showJogoModal(jogo) {
        const modal = document.createElement('div');
        modal.className = 'jogo-modal';
        modal.innerHTML = `
            <div class="modal-content">
                <div class="modal-header">
                    <h3>🎮 ${jogo}</h3>
                    <button class="close-btn">✕</button>
                </div>
                <div class="modal-body">
                    <div class="game-preview">
                        <div class="game-screen">
                            <div class="game-content">
                                <h4>🎯 ${jogo}</h4>
                                <p>Clique para jogar!</p>
                                <button class="start-game-btn">Iniciar Jogo</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
        
        // Aplica estilos
        modal.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0,0,0,0.8);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 10000;
            animation: fadeIn 0.3s ease;
        `;
        
        const modalContent = modal.querySelector('.modal-content');
        modalContent.style.cssText = `
            background: white;
            border-radius: 20px;
            padding: 2rem;
            max-width: 700px;
            width: 90%;
            animation: slideInUp 0.3s ease;
        `;
        
        const gameScreen = modal.querySelector('.game-screen');
        gameScreen.style.cssText = `
            background: linear-gradient(45deg, #4ECDC4, #45B7D1);
            height: 400px;
            border-radius: 15px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
        `;
        
        const gameContent = modal.querySelector('.game-content');
        gameContent.style.textAlign = 'center';
        
        const startGameBtn = modal.querySelector('.start-game-btn');
        startGameBtn.style.cssText = `
            background: linear-gradient(45deg, #FF6B6B, #FFD700);
            color: white;
            border: none;
            padding: 1rem 2rem;
            border-radius: 25px;
            font-size: 1.2rem;
            font-weight: bold;
            cursor: pointer;
            margin-top: 1rem;
            transition: all 0.3s ease;
        `;
        
        startGameBtn.addEventListener('click', () => {
            alert('🎮 Jogo iniciado! Em breve você poderá jogar diretamente aqui!');
        });
        
        document.body.appendChild(modal);
        
        // Fecha o modal
        const closeBtn = modal.querySelector('.close-btn');
        closeBtn.addEventListener('click', () => modal.remove());
        modal.addEventListener('click', (e) => {
            if (e.target === modal) modal.remove();
        });
    }
    
    // Newsletter form
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const email = newsletterInput.value.trim();
            
            if (email && isValidEmail(email)) {
                showSuccessMessage('🎉 Email cadastrado com sucesso! Você receberá nossas novidades em breve.');
                newsletterInput.value = '';
            } else {
                showErrorMessage('❌ Por favor, insira um email válido.');
            }
        });
    }
    
    // Função para validar email
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    
    // Função para mostrar mensagem de sucesso
    function showSuccessMessage(message) {
        showNotification(message, 'success');
    }
    
    // Função para mostrar mensagem de erro
    function showErrorMessage(message) {
        showNotification(message, 'error');
    }
    
    // Função para mostrar notificação
    function showNotification(message, type) {
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        notification.textContent = message;
        
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: ${type === 'success' ? '#4ECDC4' : '#FF6B6B'};
            color: white;
            padding: 1rem 2rem;
            border-radius: 10px;
            box-shadow: 0 5px 15px rgba(0,0,0,0.2);
            z-index: 10001;
            animation: slideInRight 0.3s ease;
            max-width: 300px;
        `;
        
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.style.animation = 'slideOutRight 0.3s ease';
            setTimeout(() => {
                notification.remove();
            }, 300);
        }, 3000);
    }
    
    // Animação de scroll para revelar elementos
    function revealOnScroll() {
        const elements = document.querySelectorAll('.desenho-card, .atividade-card, .jogo-card');
        
        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementVisible = 150;
            
            if (elementTop < window.innerHeight - elementVisible) {
                element.classList.add('visible');
            }
        });
    }
    
    // Event listener para scroll
    window.addEventListener('scroll', revealOnScroll);
    
    // Chama a função uma vez para elementos já visíveis
    revealOnScroll();
    
    // Efeito de parallax suave no hero
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const hero = document.querySelector('.hero');
        const balloons = document.querySelectorAll('.balloon');
        
        if (hero) {
            const rate = scrolled * -0.5;
            hero.style.transform = `translateY(${rate}px)`;
        }
        
        // Movimento diferente para cada balão
        balloons.forEach((balloon, index) => {
            const rate = scrolled * (0.1 + index * 0.05);
            balloon.style.transform = `translateY(${rate}px) rotate(${rate * 0.1}deg)`;
        });
    });
    
    // Adiciona efeitos de som (opcional - apenas para feedback visual)
    function addClickEffect(element) {
        element.style.transition = 'all 0.1s ease';
        element.style.transform = 'scale(0.95)';
        
        setTimeout(() => {
            element.style.transform = '';
        }, 100);
    }
    
    // Aplica efeito de clique em todos os elementos interativos
    const interactiveElements = document.querySelectorAll('button, .desenho-card, .atividade-card, .jogo-card');
    interactiveElements.forEach(element => {
        element.addEventListener('click', function() {
            addClickEffect(this);
        });
    });
    
    // Função para adicionar confetes (efeito especial)
    function createConfetti() {
        const colors = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFD700'];
        const confettiCount = 50;
        
        for (let i = 0; i < confettiCount; i++) {
            const confetti = document.createElement('div');
            confetti.style.position = 'fixed';
            confetti.style.width = '10px';
            confetti.style.height = '10px';
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.left = Math.random() * window.innerWidth + 'px';
            confetti.style.top = '-10px';
            confetti.style.borderRadius = '50%';
            confetti.style.pointerEvents = 'none';
            confetti.style.zIndex = '9999';
            
            document.body.appendChild(confetti);
            
            // Animação de queda
            const animation = confetti.animate([
                { transform: 'translateY(0px) rotate(0deg)', opacity: 1 },
                { transform: `translateY(${window.innerHeight + 100}px) rotate(${Math.random() * 360}deg)`, opacity: 0 }
            ], {
                duration: Math.random() * 3000 + 2000,
                easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
            });
            
            animation.onfinish = () => {
                confetti.remove();
            };
        }
    }
    
    // Adiciona confetes ao clicar no botão CTA
    if (ctaButton) {
        ctaButton.addEventListener('click', createConfetti);
    }
    
    // Função para adicionar efeito de brilho nos cards
    function addGlowEffect() {
        const cards = document.querySelectorAll('.desenho-card, .atividade-card, .jogo-card');
        
        cards.forEach(card => {
            card.addEventListener('mouseenter', function() {
                this.style.boxShadow = '0 20px 40px rgba(255, 215, 0, 0.3)';
            });
            
            card.addEventListener('mouseleave', function() {
                this.style.boxShadow = '';
            });
        });
    }
    
    addGlowEffect();
    
    // Função para adicionar contador de visualizações (simulado)
    function addViewCounter() {
        const cards = document.querySelectorAll('.desenho-card');
        
        cards.forEach(card => {
            const viewCount = Math.floor(Math.random() * 1000) + 100;
            const viewElement = document.createElement('div');
            viewElement.style.position = 'absolute';
            viewElement.style.top = '10px';
            viewElement.style.right = '10px';
            viewElement.style.background = 'rgba(0,0,0,0.7)';
            viewElement.style.color = 'white';
            viewElement.style.padding = '5px 10px';
            viewElement.style.borderRadius = '15px';
            viewElement.style.fontSize = '0.8rem';
            viewElement.textContent = `👁️ ${viewCount}`;
            
            card.style.position = 'relative';
            card.appendChild(viewElement);
        });
    }
    
    addViewCounter();
    
    // Função para adicionar efeito de loading
    function addLoadingEffect() {
        const cards = document.querySelectorAll('.desenho-card');
        
        cards.forEach((card, index) => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(50px)';
            
            setTimeout(() => {
                card.style.transition = 'all 0.6s ease';
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, index * 200);
        });
    }
    
    // Chama o efeito de loading quando a página carrega
    setTimeout(addLoadingEffect, 500);
    
    // Adiciona animações CSS
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideInRight {
            from {
                transform: translateX(100%);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
        
        @keyframes slideOutRight {
            from {
                transform: translateX(0);
                opacity: 1;
            }
            to {
                transform: translateX(100%);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
    
    console.log('🎨 Site de Desenhos Infantis carregado com sucesso!');
}); 