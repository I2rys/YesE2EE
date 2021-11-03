//Dependencies
const YesE2EE = require("../index.js")

//Variables
const encrypted = YesE2EE.encrypt("Secret message.", "n15128951515151n", "1518u21895n152851521")
const decrypted = YesE2EE.decrypt(encrypted, "n15128951515151n", "1518u21895n152851521")

//Main
console.log(encrypted)
console.log(decrypted)
