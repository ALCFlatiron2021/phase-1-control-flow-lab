function scuberGreetingForFeet(distance) {
  if (distance <= 400){
    return "This one is on me!";
  } else if (distance > 2500) {
    return "No can do."
  } else if (distance > 2000) {
    return "I will gladly take your thirty bucks.";
  }
}

function ternaryCheckCity(Location){
  if (Location === "NYC"){
    return "Ok, sounds good."
  } else if (Location !== "NYC") {
    return "No go."
  }
}

function switchOnCharmFromTip(Tip){
  switch (Tip) {
    case 'generous':
        return "Thank you so much."
    case 'not as generous':
        return "Thank you."
    case 'thanks for everything':
        return "Bye."
  }
}