/*
Stripping Names: Store a persons name, and include some whitespace characters at the beginning and end of the name. Make sure you use each
character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.
 */




let teamCoach: string = "Mikey Author"
console.log(`Whitespaces ===> \t \n ${teamCoach}`)



let captain: string = "Baber Azam"
let stripped: string = captain.trim()
console.log(`stripped Captain ===> ${stripped}`)
