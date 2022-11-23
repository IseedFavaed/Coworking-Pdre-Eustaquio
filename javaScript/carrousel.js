var posicaoSliderIntegrante = 0;

function MudarIntegrante() {
    //Lista de objetos com várias propriedades
    let integrantes = [
        './img/slide/slideLocalizacao.gif',
        './img/slide/slideProgressao.gif',
        './img/slide/slideTrabalho.gif',
    ];
    //Mudando html de acordo com o conteúdo das propriedades do integrante específico
    document.getElementById('integranteFoto').src = integrantes[posicaoSliderIntegrante];
    console.log(integrantes[posicaoSliderIntegrante])

    posicaoSliderIntegrante++;

    //Quando chega no último integrante ele reincia a posição
    if(posicaoSliderIntegrante == integrantes.length)
        posicaoSliderIntegrante = 0;

    setTimeout('MudarIntegrante()',3500);
}