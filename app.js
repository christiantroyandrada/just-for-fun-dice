function randDice1(){
    let dice1 = document.getElementById('dice-1');
    let randomNumber1 = Math.floor(Math.random() * 6 + 1);
    dice1.setAttribute('src', `./images/dice${randomNumber1}.png`);
    return randomNumber1;
}
function randDice2(){
    let dice2 = document.getElementById('dice-2');
    let randomNumber2 = Math.floor(Math.random() * 6 + 1);
    dice2.setAttribute('src', `images/dice${randomNumber2}.png`);
    return randomNumber2;
}


function caller(){
   const num1 = randDice1();
   const num2 = randDice2();
   if( num1 > num2)
   {
       document.querySelector('#result').innerHTML = 'Player 1 Wins!';
   }
   else if (num2 > num1)
   {
       document.querySelector('#result').innerHTML = 'Player 2 Wins!';
   }
   else if(num1 === num2)
   {
       document.querySelector('#result').innerHTML = 'It is a draw!';
   }
   else document.querySelector('#result').innerHTML = 'Something went wrong!';     
}
