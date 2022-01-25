/* ABRINDO O MENU */
const nav = document.querySelector("#header nav")
/*selecionando o seletor a tag nav e guardando em uma 
variavel "const nav"  */

const getToggle = document.querySelectorAll("nav .toggle")
/*quardando todos os elementos que possuem eum suas lista de classes a calsse "toggle" em uma variavel constante. os elementos toggle são as <div></div> dos icon-menu e con-close */

for (const elementsToggle of getToggle) {
  elementsToggle.addEventListener("click", function () {
    nav.classList.toggle("show")
    /*DESCREVENDO TODA A FUNÇÃO 

  laço de repetição que está pegando o resultado da 
  variavel "toggle_menu" e inserido a outra constante "elements_toggle". dentro do laço a variavel  elements_toggle conterá os dois elementos 
  que estão com os icones de abrir o menu e de fechar menu para chamar/ouvir o evento "click(do mouse)" e então adicionar  a lista de class da tag nav a classe "show"
  quando for clicar no icone de abrir o menu, e retirar 
  quando clicar no icone de fechar o menu.
  o estado inical do menu é fechada, ou seja, somente 
  depois de abrir o menu é que a lista de class da tag nav
  receberá a class show
  */
  })
}

/* FECHANDO O MENU */
const getLinks = document.querySelectorAll("#header .menu ul li a")

for (const linksOfMenu of getLinks) {
  linksOfMenu.addEventListener("click", function () {
    nav.classList.remove("show")
    /*esse laço de repetição é parte do primeiro laço
    dos elementos toggle. ao clicar em uma das opções
    do menu (essas opções são links) é nescessário
    remover a class "show", fechando o menu para visualizar a seção escolhida.  
     */
  })
}

/* ADICIONAR SOMBRA NO CABEÇALHO DA PAGINA QUANDO OCORRER
O EVENTO DE SCROLL (ROLOCAR A BARRA DA PAGINA) */
const header = document.querySelector("#header")
const navOfHeight = header.offsetHeight
/* navOfHeight está recebendo o deslocamento da altura do
cabeçalho, #header.  */

/*o evento de scroll ocorre na janela de visualização do navega
dor então é nessesario adicionar para ouvir o evento de scroll
na janela, que no caso pode ser adicionado o evento de scroll
através do objeto "window": window siginifica janela. */
window.addEventListener("scroll", function () {
  if (window.scrollY >= navOfHeight) {
    /* window.scrollY (está recbendo o deslocamento do scroll no eixo Y) e comparando com a altura do cabeçalho.*/

    header.classList.add("scroll")
  } else {
    header.classList.remove("scroll")
  }
})
