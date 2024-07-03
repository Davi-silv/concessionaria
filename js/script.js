document.addEventListener('DOMContentLoaded', () => {
    const cars = [
        {
            name: 'Honda-civic-2021',
            image: src = 'carro1.jpg',
            description: 'O Honda Civic 2021 é um sedan compacto popular da Honda, conhecido por seu estilo esportivo, eficiência de combustível e confiabilidade. Em 2021, o Civic continuou a ser uma escolha sólida no mercado automotivo, oferecendo diversas versões e opções para atender às necessidades dos compradores.'
        },
        {
            name: 'Ford-mustang',
            image: src = 'mustang.jpg',
            description: 'Possui de 340 a 605 km de alcance e um sistema Ford Sync atualizado com uma tela de 15,5 polegadas. O Mustang Mach-E vem em vários acabamentos diferentes, incluindo First Edition, Select, Premium, California Route 1, e GT. O Mustang Mach-E também oferece "baterias regulares e de longo alcance'
        },
        {
            name: 'Corolla',
            image: src = 'toyota-corolla-2024-frente.web',
            description: 'O Toyota Corolla XEi 2024 é um exemplo de desempenho confiável e eficiência energética. Seu motor 2.0 flex de quatro cilindros e 16 válvulas oferece uma potência impressionante de 175 cv com etanol e 167 cv com gasolina, acompanhados de um torque máximo de 21,3 kgfm.'
        },

    ];

    const carGallery = document.querySelector('.car-gallery');


    cars.forEach(car => {
        const carDiv = document.createElement('div');
        carDiv.classList.add('car');

        carDiv.innerHTML = `
            <img src="${car.image}" alt="${car.name}">
            <h2>${car.name}</h2>
            <p>${car.description}</p>
        `;

        carGallery.appendChild(carDiv);
    });

    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        console.log(`Nome: ${name}`);
        console.log(`Email: ${email}`);
        console.log(`Mensagem: ${message}`);

        alert('Formulário enviado com sucesso!');

        contactForm.reset();
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const img = document.createElement('img');
    img.src = 'dowload.jpeg';
    img.alt = 'Descrição da imagem';
    img.className = 'minha-imagem';
    const imageContainer = document.getElementById('image-container');
    imageContainer.appendChild(img);
});
