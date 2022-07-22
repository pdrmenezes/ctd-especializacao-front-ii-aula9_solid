/**
 * Aqui temos os elementos que servem de base para a construção do personagem.
 *
 * @type { Array<{
 *  [elemento: string]: {
 *   nome: string,
 *   logo: string,
 *   fraqueza: string,
 *   forca: number,
 *   vida: number,
 *   defesa: number,
 *   velocidade: number,
 * }
 * }>}
 *  */
const elementos = {
  agua: {
    nome: "Agua",
    logo: "./assets/agua.png",
    fraqueza: "Terra",
    forca: 30,
    vida: 100,
    defesa: 40,
    velocidade: 70,
  },
  fogo: {
    nome: "Fogo",
    logo: "./assets/fogo.png",
    fraqueza: "Agua",
    forca: 50,
    vida: 90,
    defesa: 50,
    velocidade: 60,
  },
  terra: {
    nome: "Terra",
    logo: "./assets/terra.png",
    fraqueza: "Ar",
    forca: 40,
    vida: 80,
    defesa: 60,
    velocidade: 50,
  },
  ar: {
    nome: "Ar",
    logo: "./assets/ar.png",
    fraqueza: "Fogo",
    forca: 30,
    vida: 80,
    defesa: 40,
    velocidade: 80,
  },
};

/**
 * Esses personagens são os que serão exibidos na página no início e por padrão.
 *
 * @type { Array<{
 *   nome: string,
 *   elemento: string,
 *   avatar: string,
 * }>
 * }
 */
const personagensComDefeito = [
  {
    nome: "Aquagirl",
    elemento: elementos.agua.nome,
    avatar:
      "https://i.pinimg.com/564x/e8/a6/7b/e8a67b8241f508dcfd67623ed400f6fb.jpg",
  },
  {
    nome: "Windstorm",
    elemento: elementos.ar.nome,
    avatar:
      "https://i.pinimg.com/564x/9b/2f/b1/9b2fb11fb0e56b914edf1ae2c15d55fa.jpg",
  },
  {
    nome: "Firegirl",
    elemento: elementos.fogo.nome,
    avatar:
      "https://i.pinimg.com/564x/84/09/58/84095862a57e6bd18f2b392f52bbd0d6.jpg",
  },
  {
    nome: "Earthquake",
    elemento: elementos.terra.nome,
    avatar:
      "https://i.pinimg.com/564x/2b/ac/3a/2bac3a5eb353e08e25a609993798a774.jpg",
  },
];

//
/**
 * Esta função retorna o HTML de um cartão de personagem como uma string.
 *
 * @param {{
 *  nome: string,
 *  elemento: string,
 *  avatar: string,
 *  logo: string,
 *  forca: number,
 *  vida: number,
 *  defesa: number,
 *  velocidade: number,
 * }
 * } personagem
 *
 * @returns {string}
 */
const CardPesonagem = (personagem) => `
<div class="card shadow-sm">
  <div class="card-header">
   <img src=${personagem.avatar} alt="${personagem.nome}" class="bd-placeholder-img card-img-top"/>
   <img src="${personagem.logo}" alt="${personagem.elemento}" class="logo-elemento" />
  </div>
  <div class="card-body">
      <h5 class="card-title">${personagem.nome}</h5>
      <small class="text-muted">${personagem.elemento}</small>
      <ul>
          <li><i>Força:</i> <span>${personagem.forca}</span></li>
          <li><i>Vida:</i> <span>${personagem.vida}</span></li>
          <li><i>Defesa:</i> <span>${personagem.defesa}</span></li>
          <li><i>Velocidade:</i> <span>${personagem.velocidade}e</span></li>
      </ul>
      </p>
      <div class="d-flex justify-content-between align-items-center">
      </div>
  </div>
</div>
`;

const $BTN_ADICIONAR_PERSONAGEM = document.querySelector("#criar-personagem");

$BTN_ADICIONAR_PERSONAGEM.addEventListener("click", () => {
  const nome = document.querySelector("#nome-personagem").value;
  const elemento = document.querySelector("#elemento-personagem").value;
  const avatar = document.querySelector("#avatar-personagem").value;

  if (nome && elemento && avatar) {
    // Aqui criamos o personagem e o adicionamos à lista de personagens.
  }
});

window.addEventListener("load", () => {
  // Aqui criamos a lista de personagens iniciais que serão exibidos na página.
});
