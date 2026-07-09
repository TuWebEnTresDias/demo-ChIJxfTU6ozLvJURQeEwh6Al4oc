// ========================================
// Philo Café - Landing Page JavaScript
// ========================================

document.addEventListener('DOMContentLoaded', () => {
    // Menú Hamburguesa
    const hamburger = document.getElementById('hamburger');
    const mainNav = document.getElementById('mainNav');
    
    if (hamburger && mainNav) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            mainNav.classList.toggle('active');
        });
        
        // Cerrar menú al hacer clic en un enlace
        mainNav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                mainNav.classList.remove('active');
            });
        });
    }
    
    // Animaciones al hacer scroll (Intersection Observer)
    const animatedElements = document.querySelectorAll('[data-animate]');
    
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    animatedElements.forEach(el => observer.observe(el));
    
    // Header con sombra al hacer scroll
    const header = document.querySelector('.header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.08)';
        }
    });
    
    // Datos del menú
    const menuData = {
        'empanadas': [
            { name: 'Empanada De Espinaca Y Queso', price: '$7.700', description: 'Harina de almendras' },
            { name: 'Empanada De Pollo', price: '$7.700', description: 'Harina de almendras' },
            { name: 'Empanada De Carne', price: '$7.700', description: 'Harina de almendras' }
        ],
        'bagels': [
            { name: 'Bagel Argentino', price: '$31.300', description: 'Lomito, burrata, huevo revuelto y rúcula' },
            { name: 'Bagel Mex', price: '$28.000', description: 'Pavita, guacamole, tomates frescos y mix de verdes' },
            { name: 'Bagel Nórdico', price: '$40.500', description: 'Salmón gravlax, palta, sour cream y hojas de rúcula' }
        ],
        'tartaletas': [
            { name: 'Tartaleta De Frutillas', price: '$21.300', description: 'Tarteleta de Frutillas' },
            { name: 'Tarteleta Mini Matilda', price: '$27.500', description: 'Base de harina de almendras, relleno de mantequilla de maní' },
            { name: 'Tartaleta Pastafrola', price: '$21.300', description: 'Sin azúcares' },
            { name: 'Tartaleta Lemon Pie', price: '$21.300', description: 'Tarteleta Lemon Pie' },
            { name: 'Tartaleta De Chocolate', price: '$23.600', description: 'Sin azúcares y avellanas' },
            { name: 'Tartaleta Chocolate Vegana', price: '$23.600', description: 'Sin azúcares' },
            { name: 'Tarteleta Havanette Blanco', price: '$22.500', description: 'Base de harina de almendras' },
            { name: 'Frutos Rojos Cheesecake', price: '$21.300', description: 'Base de harina de almendras' },
            { name: 'Dulce De Leche Cheesecake', price: '$21.300', description: 'Tartaleta cheesecake dulce de leche' }
        ],
        'platos-calientes': [
            { name: 'Chipa Lomito Y Queso', price: '$23.000', description: 'Chipá con lomito y queso' },
            { name: 'Guiso De Lentejas', price: '$23.600', description: 'Lentejas, papa, calabaza, zanahorias, tomate, morrón y cebolla' },
            { name: 'Pollo Con Ragout De Hongos', price: '$26.000', description: 'Pollo con champiñón' },
            { name: 'Sopa', price: '$26.600', description: 'Cabutia y queso' },
            { name: 'Chipa Capresse', price: '$23.000', description: 'Chipá con queso, tomate y pesto' }
        ],
        'bakery': [
            { name: 'Cookie Doble Chocolate', price: '$13.000', description: 'Sin azúcares' },
            { name: 'Snickers Blancos', price: '$32.500', description: 'Sin azúcares' },
            { name: 'Snickers', price: '$30.000', description: 'Sin azúcares' },
            { name: 'Bites Choco Maní', price: '$29.000', description: 'Sin azúcar' },
            { name: 'Muffin De Coco Y Manzana', price: '$15.000', description: 'Sin harinas' },
            { name: 'Cookies', price: '$13.000', description: 'Harina de almendras' },
            { name: 'Chipa', price: '$8.500', description: 'Chipa con fécula de mandioca' },
            { name: 'Muffin De Limón Y Frambuesa', price: '$15.000', description: 'Harina de almendras' },
            { name: 'Alfajor De Almendras', price: '$13.600', description: 'Harina de almendras y dulce de leche sin azúcar' },
            { name: 'Muffin De Banana', price: '$15.000', description: 'Harina de almendras, banana, nuez y almendras' },
            { name: 'Pepa De Frutos Rojos', price: '$12.400', description: 'Harina de almendras y harina de arroz' },
            { name: 'Cookie De Pistacho', price: '$11.800', description: 'Sin azúcares' },
            { name: 'Alfajor Mar Del Plata', price: '$13.600', description: 'Harina de almendras' },
            { name: 'Pepa De Dulce De Leche', price: '$12.400', description: 'Harina de almendras y harina de arroz' },
            { name: 'Brownies', price: '$11.800', description: 'Harina de almendras' }
        ],
        'wraps': [
            { name: 'Roast Beef Wrap', price: '$22.600', description: 'Roast beef deshilachado, queso, tomate, cebolla caramelizada y salsa romesco' },
            { name: 'Salmon Wrap', price: '$25.600', description: 'Salmón Gravlax, rúcula, palta, y dressing de lima' },
            { name: 'Chicken Wrap', price: '$22.600', description: 'Pollo deshilachado, queso feta, espinaca, cebolla caramelizada, tomates, y honey mustard' }
        ],
        'tartas': [
            { name: 'Tarta Mediterránea', price: '$24.500', description: 'Cebolla, champiñones, puerros, zucchini, y morrón en masa de harina de almendras y huevo' },
            { name: 'Tarta De Espinaca', price: '$24.500', description: 'Espinaca y muzzarella' },
            { name: 'Tarta De Pollo', price: '$24.500', description: 'Pollo, burrata, y cabutia asada en masa de salvado de avena y huevo' }
        ],
        'ensaladas': [
            { name: 'Ensalada Criolla De Quinoa', price: '$29.500', description: 'Mix de verdes, tomate cherry, choclo' },
            { name: 'Summer Chicken', price: '$26.600', description: 'Pollo grillado, rúcula, zanahorias asadas, tomate confitado, huevo, palta, pimiento rojo y amarillo' },
            { name: 'Ensalada Rosada', price: '$31.800', description: 'Salmón cocido, palta, huevo, granos de maíz tostado, verdes, canchita y dressing suave de ají amarillo' },
            { name: 'Ensalada Power Up', price: '$26.000', description: 'Mix de verdes, huevo, panceta, palta, tomates cherrys, pollo y roquefort' }
        ],
        'tortas': [
            { name: 'Torta De Chocolate - Matilda', price: '$23.600', description: 'Sin azúcares' },
            { name: 'Havanette', price: '$21.300', description: 'Torta havanette' }
        ],
        'sandwiches': [
            { name: 'Sándwich Holy Chicken', price: '$28.300', description: 'Láminas de pollo, palta, hojas de rúcula, tomates confitados, dressing de albahaca, lima y girasol tostado' },
            { name: 'Sandwich De Roast Beef', price: '$25.000', description: 'Roast beef deshilachado, queso, tomate, lechuga, huevo duro, cebolla caramelizada, salsa romesco' },
            { name: 'Avocado Grilled Cheese', price: '$25.500', description: 'Muzzarella, boniato, queso crema, pimentón ahumado, tomate confitado, rúcula y palta' },
            { name: 'Sandwich Oriente', price: '$26.000', description: 'Humus, hongos grillados, pimientos asados marinados en tomillo, olivas griegas, espinaca y semillas de girasol tostado' }
        ],
        'panes': [
            { name: 'Pan Trigo Sarraceno', price: '$39.000', description: 'Pan entero de trigo sarraceno' },
            { name: 'Pan Keto Grande', price: '$40.700', description: 'Harina de almendras' }
        ]
    };
    
    // Renderizar menú
    const menuGrid = document.getElementById('menuGrid');
    const categoryButtons = document.querySelectorAll('.menu__category-btn');
    
    function renderMenu(category) {
        if (!menuGrid || !menuData[category]) return;
        
        const items = menuData[category];
        menuGrid.innerHTML = '';
        
        items.forEach(item => {
            const itemElement = document.createElement('div');
            itemElement.className = 'menu__item';
            itemElement.innerHTML = `
                <div class="menu__item-header">
                    <h3 class="menu__item-name">${item.name}</h3>
                    <span class="menu__item-price">${item.price}</span>
                </div>
                <p class="menu__item-description">${item.description}</p>
            `;
            menuGrid.appendChild(itemElement);
        });
    }
    
    // Inicializar menú con la primera categoría
    renderMenu('empanadas');
    
    // Event listeners para botones de categoría
    categoryButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remover clase active de todos los botones
            categoryButtons.forEach(b => b.classList.remove('active'));
            // Agregar clase active al botón clickeado
            btn.classList.add('active');
            // Renderizar menú de la categoría seleccionada
            const category = btn.dataset.category;
            renderMenu(category);
        });
    });
    
    // Formulario de contacto - enviar por WhatsApp
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const name = document.getElementById('name').value;
            const phone = document.getElementById('phone').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            
            // Mapear asuntos a texto descriptivo
            const subjectMap = {
                'consulta': 'Consulta general',
                'pedido': 'Hacer un pedido',
                'reserva': 'Reservar para evento',
                'otro': 'Otro'
            };
            
            const subjectText = subjectMap[subject] || subject;
            
            // Construir mensaje para WhatsApp
            const whatsappMessage = `Hola Philo Café, soy ${name}.\n\nAsunto: ${subjectText}\n\n${message}\n\nMi número de WhatsApp: ${phone}`;
            
            // Codificar mensaje para URL
            const encodedMessage = encodeURIComponent(whatsappMessage);
            
            // Redirigir a WhatsApp
            window.open(`https://wa.me/0111566781369?text=${encodedMessage}`, '_blank');
            
            // Limpiar formulario
            contactForm.reset();
        });
    }
    
    // Formulario de newsletter
    const newsletterForm = document.getElementById('newsletterForm');
    
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const email = newsletterForm.querySelector('input[type="email"]').value;
            
            const whatsappMessage = `Hola Philo Café, me quiero suscribir al newsletter.\n\nMi email: ${email}`;
            const encodedMessage = encodeURIComponent(whatsappMessage);
            
            window.open(`https://wa.me/0111566781369?text=${encodedMessage}`, '_blank');
            
            newsletterForm.reset();
        });
    }
    
    // Smooth scroll para enlaces internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Indicador de scroll del hero
    const scrollIndicator = document.querySelector('.hero__scroll-indicator');
    if (scrollIndicator) {
        scrollIndicator.addEventListener('click', () => {
            const diferenciales = document.getElementById('diferenciales');
            if (diferenciales) {
                diferenciales.scrollIntoView({ behavior: 'smooth' });
            }
        });
        scrollIndicator.style.cursor = 'pointer';
    }
});