//var str
pronoun = document.getElementById('gender');

var selectedPronoun = pronoun.options[pronoun.selectedIndex].value;
//console.log(selectedPronoun);

function fortune(){
    console.log('Insert Fortune!');
};

//console.log(pronoun)

document.getElementById('fortuneButton').onclick = function(){
    selectedPronoun = pronoun.options[pronoun.selectedIndex].value;
    //alert('button was clicked!');
    //console.log(pronoun)
    console.log(selectedPronoun);

    let fortuneNumber = Math.floor(Math.random() * 5); //will change num later

    switch(fortuneNumber){
        case 0:
            console.log(`Hey, ${selectedPronoun}! Your number is ${fortuneNumber}.`);
            break;
        case 1:
            console.log(`Hey, ${selectedPronoun}! Your number is ${fortuneNumber}.`);
            break;
        case 2:
            console.log(`Hey, ${selectedPronoun}! Your number is ${fortuneNumber}.`);
            break;
        case 3:
            console.log(`Hey, ${selectedPronoun}! Your number is ${fortuneNumber}.`);
            break;
        case 4:
            console.log(`Hey, ${selectedPronoun}! Your number is ${fortuneNumber}.`);
            break;
    }

}; 
