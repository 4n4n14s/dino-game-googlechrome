// selecionei a classe dino onde vou manipular o dinossauro
const dino = document.querySelector('.dino');

const background = document.querySelector('.background')

// para não bugar o pulo
let isjump = false;

let position = 0;
// para pegar o precionamento da tecla
function handleKeyUp(event){
    if(event.keyCode === 32){
        if(!isjump){}
        
        jump()
    }

function jump(){
    
    isjump = true; 
    let upinterval = setInterval(()=>{  
        //parando a subida  
        if(position >= 150){
            clearInterval(upinterval);

            //descendo
            let downInterval = setInterval(()=>{
                //parando a descida
                if(position<=0){
                    clearInterval(downInterval);
                    isjump=false;
                }else{
                position-=20
                dino.style.bottom = position+'px'
                }

            },20)
        }else{
        //subindo
        position+=20;
        dino.style.bottom = position+'px'
        }
    },20);

}    

}
function criateCactus(){
    // criando uma div no HTML pelo javascript
    const cactus = document.createElement('div');
    let cactusPosition=1000;
    let randomTime = Math.random() * 6000; 
    console.log(randomTime)

    //criando a classe para manipular com css
    cactus.classList.add('cactus');
    cactus.style.left = 1000 +'px';
    background.appendChild(cactus);

    let leftItenval = setInterval(()=>{
        cactusPosition-=3;
        cactus.style.left = cactusPosition + 'px';
        if(cactusPosition < -60){
            clearInterval(leftItenval);
            // evita prcessamento desnecessario, pois o cactus iria embora infinitamente
            background.removeChild(cactus);
        }else if(cactusPosition > 0 && cactusPosition < 60 && position <60 ){
            //gameover
            clearInterval(leftItenval);
            document.body.innerHTML = '<h1 class= "game-over">fim de jogo</h1>'

        }
        else{
            cactusPosition -=10;
            cactus.style.left = cactusPosition+'px'
        }

    },20)
    setTimeout(criateCactus, randomTime);
}
criateCactus();
document.addEventListener('keyup', handleKeyUp);