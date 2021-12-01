function auternarFormulario(){
    /* acessando a div no html (serve para acessar qualquer parte do documento) */
    let formulario = document.getElementById('formularioLancamento');
    /* acessando o valor do display  */
    let display = formulario.style.display;
    formulario.style.display = display === 'block' ? 'none' : 'block';

    let botao  = document.getElementById('novoLancamento');
    /* acessando o primeiro elemento dontro do id 'novoLancamento' */
    let texto =  botao.firstChild;
    texto.data = texto.data.trim() === 'Esconder' ? 'Novo Lançamento' : 'Esconder';
}

