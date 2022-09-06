/* seleção de elementos */

const loginDiv = document.querySelector('div#page')
const createDiv = document.querySelector('div#create')

function criarConta(){
    loginDiv.classList.toggle('hide')
    createDiv.classList.toggle('hide')

}
/* method toggle = caso há a presença do parametro estabelecido no parentese, o parametro é removido, e vice versa caso não haja a presença do parametro */