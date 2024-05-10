document.addEventListener('DOMContentLoaded', function () {
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
    const btnFecharMenu = document.getElementById('fechar-menu');

    btnMenu.addEventListener('click', function () {
        menuMobile.classList.toggle('abrir-menu');
        overlayMenu.classList.toggle('active');
    });

    btnFecharMenu.addEventListener('click', function () {
        menuMobile.classList.remove('abrir-menu');
        overlayMenu.classList.remove('active');
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

    const form = document.getElementById('atualizarForm');
    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const nomeAtualizado = document.getElementById('nome_form').value;
        const emailAtualizado = document.getElementById('email_form').value;
        const celularAtualizado = document.getElementById('celular_form').value;
        const enderecoAtualizado = document.getElementById('endereco_form').value;
        const biografiaAtualizada = document.getElementById('biografia_form').value;
        const idadeAtualizada = document.getElementById('idade_form').value;

        document.getElementById('meunome').textContent = nomeAtualizado;
        document.getElementById('email').textContent = emailAtualizado;
        document.getElementById('telefone').textContent = celularAtualizado;
        document.getElementById('cidade').textContent = enderecoAtualizado;
        document.getElementById('biografia').textContent = biografiaAtualizada;
        document.getElementById('idade').textContent = idadeAtualizada;
    });
});
