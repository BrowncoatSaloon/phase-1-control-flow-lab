function scuberGreetingForFeet(someValue){
  let result
  if (someValue <= 400) {
    result = "This one is on me!"
  } else if (someValue>2000 && someValue<2500) {
    result = 'I will gladly take your thirty bucks.'
  } else {
    result = 'No can do.'
  }

 
  return result
}

function ternaryCheckCity(someCity) {
  return "NYC" == someCity ? 'Ok, sounds good.' :  'No go.'
}
  

function switchOnCharmFromTip(tip){
  switch(tip){
    case 'generous':
      return 'Thank you so much.'
    case 'not as generous':
      return 'Thank you.'
    default:
      return 'Bye.'
  } 
}