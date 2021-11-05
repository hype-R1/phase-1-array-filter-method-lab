let findMatching = (array, string) =>array.filter( (possibleMatch) => possibleMatch.toLowerCase() === string.toLowerCase())

let fuzzyMatch =(magic, string) => magic.filter( possibleMatch =>possibleMatch.toLowerCase().indexOf(string.toLowerCase()) === 0)

let matchName = (placeHolder, theName) => placeHolder.filter( record => record.name === theName)
