const playButtons = document.getElementsByClassName('btn');
const score = document.getElementById('score');

if(localStorage.getItem('finalScore') !== null){
    score.textContent = localStorage.getItem('finalScore');
}


for(let i = 0; i < playButtons.length; i++){
    playButtons[i].onclick = () => {
        playButtons[i].classList.add('player-selected');
        
        let btnSibs = playButtons[i].parentNode.children;

        let pChoice = playButtons[i].id;
        console.log(pChoice);

        for(let j = 0; j < btnSibs.length; j++){
            if(!btnSibs[j].classList.contains('player-selected')){
                btnSibs[j].classList.add('hidden')
            }
        }

        document.querySelector('.house-choice-bg').classList.remove('hidden');
        document.querySelector('.choice-label').classList.remove('hidden');
        document.querySelector('.right').classList.remove('hidden');
        
        const houseChoice = () => {
            const choiceArr = ['scissors', 'paper', 'rock', 'lizard', 'spock'];
            const randNum = Math.floor(Math.random()*5);
            let cChoice = choiceArr[randNum];
            console.log(cChoice);

            
            setTimeout(function(){

                document.getElementById('main').innerHTML += `<div class="btn house-selected ress" id="${cChoice}"><div class="btn-inner"></div></div>`;

                setTimeout(function(){
                    document.querySelector('.ress').classList.add('reveal');
                },100)
                
            },500)
            

            setTimeout(function(){
                document.querySelector('.ress').classList.add('result-out');
                playButtons[i].classList.add('result-out');
                document.querySelector('.choice-label').classList.add('result-out');
                document.querySelector('.right').classList.add('result-out');
                document.querySelector('.house-choice-bg').classList.add('hidden');
                document.getElementById('results').classList.remove('hidden');

                if(pChoice === 'scissors' && cChoice === 'paper' || pChoice === 'paper' && cChoice === 'rock'|| pChoice === 'rock' && cChoice === 'lizard'|| pChoice === 'lizard' && cChoice === 'spock'|| pChoice === 'spock' && cChoice === 'scissors'|| pChoice === 'scissors' && cChoice === 'lizard'|| pChoice === 'paper' && cChoice === 'spock'|| pChoice === 'rock' && cChoice === 'scissors'|| pChoice === 'lizard' && cChoice === 'paper' || pChoice === 'spock' && cChoice === 'rock'){
                    score.innerText = Number(score.innerText) + 1;
                    localStorage.setItem('finalScore', score.innerText);
                    document.getElementById('win-status').innerText = "YOU WIN";
                    playButtons[i].classList.add('winner');

                }else if(pChoice !== cChoice){
                    score.innerText = Number(score.innerText) - 1;
                    localStorage.setItem('finalScore', score.innerText);
                    document.getElementById('win-status').innerText = "YOU LOSE";
                    document.querySelector('.ress').classList.add('winner');
                }else{
                    document.getElementById('win-status').innerText = "TIE";
                    localStorage.setItem('finalScore', score.innerText);
                }
                
            }, 1500)
            

        }

        houseChoice();

    }
}


function reLoad(){
    location.reload()
};

function rulesShow(){
    document.querySelector('.rule-wrapper').classList.add('show')
}

function rulesHide(){
    document.querySelector('.rule-wrapper').classList.remove('show')
}