const mario = document.querySelector('.mario');
const cano = document.querySelector('.cano');
const telaFim = document.querySelector('.fim');
const botaoReiniciar = document.querySelector('.reiniciar');

function pular(){
    mario.classList.add('pular');

    setTimeout(() => {
        mario.classList.remove('pular');
    }, 500);
}

document.addEventListener('keydown', pular);

let loopDoJogo = setInterval(() => {

    const posicaoCano = cano.offsetLeft;
    const posicaoMario = +window.getComputedStyle(mario).bottom.replace('px','');

    if (posicaoCano <= 120 && posicaoCano > 0 && posicaoMario < 80){

        // parar animação
        cano.style.animation = 'none';
        cano.style.left = posicaoCano + 'px';

        mario.style.animation = 'none';
        mario.style.bottom = posicaoMario + 'px';

        // imagem game over
        mario.src = './img/game-over.png';
        mario.style.width = '75px';
        mario.style.marginLeft = '50px';

        telaFim.style.visibility = 'visible';

        clearInterval(loopDoJogo);
    }

}, 10);

function reiniciarJogo(){

    telaFim.style.visibility = 'hidden';

    mario.src = './img/coreirirda.gif';
    mario.style.width = '130px';
    mario.style.bottom = '0px';
    mario.style.marginLeft = '0';
    mario.style.animation = '';

    cano.style.animation = 'mexerCano 1.5s infinite linear';
    cano.style.left = '';

    loopDoJogo = setInterval(() => {

        const posicaoCano = cano.offsetLeft;
        const posicaoMario = +window.getComputedStyle(mario).bottom.replace('px','');

        if (posicaoCano <= 120 && posicaoCano > 0 && posicaoMario < 80){

            cano.style.animation = 'none';
            cano.style.left = posicaoCano + 'px';

            mario.style.animation = 'none';
            mario.style.bottom = posicaoMario + 'px';

            mario.src = './img/game-over.png';
            mario.style.width = '75px';
            mario.style.marginLeft = '50px';

            telaFim.style.visibility = 'visible';

            clearInterval(loopDoJogo);
        }

    }, 10);
}

botaoReiniciar.addEventListener('click', reiniciarJogo);