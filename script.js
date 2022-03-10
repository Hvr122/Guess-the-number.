let secretnumber = Math.trunc( Math.random()*20)+1  
let score= 20
let highscore =0
document.querySelector('.check').addEventListener('click',function(){
    const guess= Number( document.querySelector('.guess').value)
    console.log(guess)
    if(score>1){
if (!guess){
    document.querySelector('.message').textContent='no number!'
// when player wins 


}    else if (guess===secretnumber) {
    document.querySelector('.message').textContent='correct number'
    document.querySelector('body').style.backgroundColor='#60b347'
    document.querySelector('.number').style.width='30rem'
    document.querySelector('.number').textContent=secretnumber
// when the guess is too high 
if(score>highscore){
    highscore=score
    document.querySelector('.highscore').textContent=highscore;
}
}
else if ( guess!== secretnumber){
if (score>1){
    document.querySelector('.message').textContent=guess>secretnumber? 'too high ': 'too low '
    score--
    document.querySelector('.score').textContent=score

}

}else if ( guess> secretnumber){
    document.querySelector('.message').textContent='too high 😫'
    score--;
    document.querySelector('.score').textContent=score;
    // when the guess is too low 

} else if (guess < secretnumber){
    document.querySelector('.message').textContent=' too low ';
    score--;
    document.querySelector('.score').textContent=score;
}
// when u loose the game 
    } else {
        document.querySelector('.message').textContent='You lost the game !';
        document.querySelector('.score').textContent=0
    }
})
document.querySelector('.again').addEventListener('click',function(){
    score=20;
  secretnumber=Math.trunc(Math.random()*20)+1  
  document.querySelector('.message').textContent='start guessing...'
  document.querySelector('.score').textContent=score
  document.querySelector('.guess').value=''
  document.querySelector('body').style.backgroundColor='#222'
  document.querySelector('.number').style.width='15rem'
  document.querySelector('.number').textContent='?'
    
})