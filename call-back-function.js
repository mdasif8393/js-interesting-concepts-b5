function welcomeMessage(name, greetHandler){
    greetHandler(name)
}

function greetMorning(name){
    console.log('Good Morning', name)
}
function greetAfterNoon(name){
    console.log('Good Afternoon', name)
}

welcomeMessage('Tom Hanks', greetMorning);
welcomeMessage('Sakib Khan', greetAfterNoon);