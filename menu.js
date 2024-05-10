let meuNome = "Davi Diaz!";
let meunomeElement = document.getElementById("meunome");
meunomeElement.innerHTML = meuNome;

let minhaIdade = "20";
let minhaIdadeElement = document.getElementById("idade");
minhaIdadeElement.innerHTML = minhaIdade;

let meuEmail = "felipediaz3974@gmail.com";
let meuemailElement = document.getElementById("email");
meuemailElement.innerHTML = meuEmail;

let meuTelefone = "(83) 98653-3193";
let meutelefoneElement = document.getElementById("telefone");
meutelefoneElement.innerHTML = meuTelefone;

let minhacidade = " Rua carolino cardoso, 79 / João Pessoa, PB";
let minhacidadeElement = document.getElementById("cidade");
minhacidadeElement.innerHTML = minhacidade;

let minhabiografia = "Estou no 3° periodo de ADS, busco conhecimento constante por fora, em plataformas como Udemy, Dev media. Sigo firme em busca da minha primeira oportunidade!";
let minhabiografiaElement = document.getElementById("biografia");
minhabiografiaElement.innerHTML = minhabiografia;



document.addEventListener('DOMContentLoaded', function () {
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                const offset = targetElement.getBoundingClientRect().top + window.pageYOffset;
                const scrollOptions = {
                    top: offset,
                    behavior: 'smooth',
                    duration: 1000
                };

                window.scrollTo(scrollOptions);
            }
        });
    });

    const btnMenu = document.getElementById('btn-menu');
    const menuMobile = document.getElementById('menu-mobile');
    const overlayMenu = document.getElementById('overlay-menu');

    btnMenu.addEventListener('click', function () {
        menuMobile.classList.toggle('abrir-menu');
        overlayMenu.classList.toggle('active');
    });

    overlayMenu.addEventListener('click', function () {
        menuMobile.classList.remove('abrir-menu');
        overlayMenu.classList.remove('active');
    });

    const btnSobre = document.getElementById('btn-sobre');
    const imgSobreSection = document.querySelector('.img-sobre');

    btnSobre.addEventListener('click', function () {
        const offset = imgSobreSection.getBoundingClientRect().top + window.pageYOffset;
        const scrollOptions = {
            top: offset,
            behavior: 'smooth',
            duration: 1000
        };

        window.scrollTo(scrollOptions);
    });

    /*const nome = "Davi Diaz";
    const email = "felipediaz3974@gmail.com";
    const celular = "(83) 986533193";
    const endereco = "João Pessoa (PB)";
    const biografia = "Estou atualmente buscando minha primeira oportunidade no mercado de trabalho, ansioso para contribuir com uma equipe dinâmica e aprender com as experiências que essa jornada profissional trará. Estou pronto para aplicar minha paixão, habilidades e determinação para enfrentar desafios e crescer como profissional na área de desenvolvimento de software.";

    const form = document.getElementById('atualizarForm');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const nomeAtualizado = document.getElementById('nome').value || nome;
        const emailAtualizado = document.getElementById('email').value || email;
        const celularAtualizado = document.getElementById('celular').value || celular;
        const enderecoAtualizado = document.getElementById('endereco').value || endereco;
        const biografiaAtualizada = document.getElementById('biografia').value || biografia;

        console.log("Nome: " + nomeAtualizado);
        console.log("E-mail: " + emailAtualizado);
        console.log("Celular: " + celularAtualizado);
        console.log("Endereço: " + enderecoAtualizado);
        console.log("Biografia: " + biografiaAtualizada);

    });*/




});
