//var str
pronoun = document.getElementById('gender');

//resulting fortune after random number
var outputFortune;

var selectedPronoun = pronoun.options[pronoun.selectedIndex].value;
//console.log(selectedPronoun);

//clears text for new fortune
function text_clear() { 
        
    //Clears game for next click
    $("#output").html("")
}

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
            outputFortune = (`Hey, ${selectedPronoun}! Your number is ${fortuneNumber}.`);
            break;
        case 1:
            outputFortune = (`Hey, ${selectedPronoun}! Your number is ${fortuneNumber}.`);
            break;
        case 2:
            outputFortune = (`Hey, ${selectedPronoun}! Your number is ${fortuneNumber}.`);
            break;
        case 3:
            outputFortune = (`Hey, ${selectedPronoun}! Your number is ${fortuneNumber}.`);
            break;
        case 4:
            outputFortune = (`Hey, ${selectedPronoun}! Your number is ${fortuneNumber}.`);
            break;
    }

    //clears the output area so that fortunes do not stack.
    text_clear();

    //appends the fortune to the html so that you can see it on the page.
    $( "#output" ).append(outputFortune); 

}; 

