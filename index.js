//var str
pronoun = document.getElementById('gender').value;

//var selectedPronoun = pronoun.options[pronoun.selectedIndex].value;
//console.log(selectedPronoun);

function fortune(){
    console.log('Insert Fortune!');
};

//console.log(pronoun)

document.getElementById('fortuneButton').onclick = function(){
    //alert('button was clicked!');
    console.log(pronoun)
    if (pronoun == 'Woman'){
        console.log('Sup bitch!');
    } else if (pronoun == 'Person'){
        console.log('Sup homosapien!');
    } else if (pronoun == 'Man'){
        console.log('Sup Bruh!');
    } else {
        console.log('Who are you?!');
    }   //For Testing

    let fortuneNumber = Math.floor(Math.random() * 5); //will change num later

    switch(fortuneNumber){
        case 0:
            console.log(`Hey, ${pronoun}! Your number is ${fortuneNumber}.`);
            break;
        case 1:
            console.log(`Hey, ${pronoun}! Your number is ${fortuneNumber}.`);
            break;
        case 2:
            console.log(`Hey, ${pronoun}! Your number is ${fortuneNumber}.`);
            break;
        case 3:
            console.log(`Hey, ${pronoun}! Your number is ${fortuneNumber}.`);
            break;
        case 4:
            console.log(`Hey, ${pronoun}! Your number is ${fortuneNumber}.`);
            break;
    }

}; 
