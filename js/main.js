const main = document.querySelector('main');
const links = document.querySelectorAll('.main-nav a');

const templates = {
  index: `
    <section>
      <h2>Nossa Missão</h2>
      <p>Promover o bem-estar animal e a inclusão social por meio de ações solidárias e educativas.</p>
      <img src="assets/imagens/voluntarios.jpg" alt="Voluntários da ONG cuidando de cães" class="responsive-img">
    </section>
    <section>
      <h3>Quem Somos</h3>
      <p>A Associação AmiCão é uma ONG sem fins lucrativos dedicada à proteção e ao resgate de animais abandonados.</p>
      <address>
        <strong>Contato:</strong><br>
        Rua Exemplo, 123 — Cidade Kemel/Poa<br>
        E-mail: <a href="mailto:contato@amicao.org">contato@amicao.org</a>
      </address>
    </section>
  `,
  projetos: `
    <h2>Projetos em Andamento</h2>
    <article>
      <h3>Projeto Patinhas Felizes</h3>
      <img src="assets/imagens/cadela_sorrindo.jpeg" alt="cadela_sorrindo" class="responsive-img">
      <p>Resgate, castração e adoção responsável de cães e gatos abandonados.</p>
    </article>
    <article>
      <h3>Educação Animal</h3>
      <img src="assets/imagens/cachorro-pequeno-no-colo.jpg" alt="cachorro-pequeno-no-colo" class="responsive-img">
      <p>Palestras e oficinas educativas sobre cuidados e direitos dos animais.</p>
    </article>
  `,
  cadastro: `
    <h2>Cadastro de Voluntário</h2>
    <form id="cadastroForm">
      <label for="nome">Nome completo *</label><br>
      <input id="nome" name="nome" type="text" required><br><br>

      <label for="email">E-mail *</label><br>
      <input id="email" name="email" type="email" required><br><br>

      <label for="interesse">Área de interesse</label><br>
      <select id="interesse" name="interesse">
        <option value="">Selecione</option>
        <option value="resgates">Resgates</option>
        <option value="adoção">Adoção</option>
        <option value="educação">Educação</option>
      </select><br><br>

      <button type="submit">Enviar</button>
    </form>
  `
};

function loadTemplate(page) {
  main.innerHTML = templates[page];
  if(page === 'cadastro') attachFormValidation();
}

function attachFormValidation() {
  const form = document.getElementById('cadastroForm');
  form.addEventListener('submit', e => {
    e.preventDefault();
    const nome = form.nome.value.trim();
    const email = form.email.value.trim();
    if(!nome || !email) {
      alert('Preencha todos os campos obrigatórios!');
      return;
    }
    alert('Cadastro enviado com sucesso!');
    form.reset();
  });
}

links.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const page = link.getAttribute('href').split('.')[0];
    loadTemplate(page);
    const navMenu = document.querySelector('.main-nav ul');
    const hamburger = document.querySelector('.hamburger');
    navMenu.classList.remove('active');
    hamburger.classList.remove('open');
  });
});

// Carrega início por padrão
loadTemplate('index');
