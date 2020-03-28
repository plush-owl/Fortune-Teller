var str
pronoun = document.getElementById('gender');

//var selectedPronoun = pronoun.options[pronoun.selectedIndex].value;
//console.log(selectedPronoun);

if (pronoun = 'Man') {
    console.log('It\'s a boy!');
} else if (pronoun = 'Woman'){
    console.log('It\'s a girl!');
} else if (pronoun = 'Person'){
    console.log('It\'s a person!');
}; // theory: if you select a diff gender and click fortune it should change the fortune

function fortune(){
    console.log('Insert Fortune!');
};

console.log(pronoun)

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
    } 

    /*switch (pronoun){
        case 'He':
            console.log('Hey bro');
            break;
        case 'She':
            console.log('Hey sis');
            break;
        case 'They':
            console.log('Hey person')
            break;
    }*/
}; 

console.log(`Hello there, ${pronoun}.`)