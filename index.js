//Main
function encrypt(text, key = String, key2 = String){
    var secondkey = ""
    var encryptedText = ""

    for( i = 0; i <= key.length * key2.length;i ++){
        secondkey += i
    }

    key += key2 + secondkey

    for( i = 0; i < text.length; i++){
        var char = text.charCodeAt(i)
        var encryptedChar = char + key.charCodeAt(i % key.length)

        encryptedText += String.fromCharCode(encryptedChar)
    }

    return encryptedText
}

function decrypt(text, key = String, key2 = String){
    var secondkey = ""
    var decryptedText = ""

    for( i = 0; i <= key.length * key2.length;i ++){
        secondkey += i
    }

    key += key2 + secondkey

    for( i = 0; i < text.length; i++){
        var char = text.charCodeAt(i)
        var decryptedChar = char - key.charCodeAt(i % key.length)

        decryptedText += String.fromCharCode(decryptedChar)
    }

    return decryptedText
}

//Exporter
module.exports = {
    encrypt: encrypt,
    decrypt: decrypt
}
