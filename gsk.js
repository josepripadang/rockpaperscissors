
function pilihanCom() {
    const acak = Math.random();
    if (acak < 0.34) return 'rock';
    if (acak >=0.34 && acak <0.64) return 'scissors';
    else return 'paper';
}

function hasil(com, org) {

    if ( com == org) return 'TIE';
    if (com == 'paper') return (org == 'rock') ? 'LOSE' : 'WIN';
    if (com == 'scissors') return (org == 'paper') ? 'LOSE' : 'WIN';
    if (com == 'rock') return (org == 'scissors') ? 'LOSE' : 'WIN';
}


function putar() {

    const gbr = ['paper', 'rock', 'scissors'];
    
    let i = 0;
    const wkt = new Date().getTime();
    setInterval(function(){
        
        const elemgbr = document.querySelector('.img-komputer');
        
        if (new Date().getTime() - wkt > 1000) {
            clearInterval;
            return;
        }

        elemgbr.setAttribute('src', 'img/'+gbr[i++]+'.png')
        if (i > gbr.length) i = 0;
        


    }, 100)

}


const gbr = document.querySelectorAll('ul li img');


let jlhpl =0;
let jlhk =0;
function nambahScore(a) {
    
}


gbr.forEach(function(e){
    e.addEventListener('click', function(){
        const player = e.className;
        const comp = pilihanCom();
        const hasiil = hasil(comp, player);
        const info = document.querySelector('.info');
        
        putar();
        setTimeout(function() {
        info.innerHTML = hasiil;
        
        const gbrk = document.querySelector('.img-komputer');
        gbrk.setAttribute('src', 'img/'+comp+'.png');
        
        if (hasiil == 'WIN') {
            jlhpl++;
        }
        else if (hasiil == 'LOSE') {
            jlhk++;
        }
        else if(hasiil == 'TIE'){
            return;
        }
        const scp = document.querySelector('.score-player');
        scp.innerHTML = 'Score: '+jlhpl;
        const sck = document.querySelector('.score-komputer');
        sck.innerHTML = 'Score: '+jlhk;
        }, 1000);

    })
});
