let findMatching = (array, string) =>array.filter( (possibleMatch) => possibleMatch.toLowerCase() === string.toLowerCase())

let fuzzyMatch =(magic, string) => magic.filter( possibleMatch =>possibleMatch.indexOf(string) === 0)

//function fuzzyMatch(letters, words){
  //  return letters.filter( fans => fans.indexOf(words) === 0 )
//}


let matchName = (placeHolder, theName) => placeHolder.filter( record => record.name === theName)
