let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n',
    'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'a', 'b', 'c', 'd', 
    'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't',
    'u', 'v', 'w', 'x', 'y', 'z'];

// encoding

var encodeText;
var encodeShift;
var encoded = "";
var encodeTextLen;
var currentCharacter;
var newPosition;
var position;

// encoding the message
document.querySelector("#encode-btn").addEventListener("click", function() {
    
    encodeText = document.querySelector("#encode-message").value;
    encodeText = encodeText.toLowerCase();
    encodeShift = document.querySelector("#encode-shift").value;
    encodeTextLen = encodeText.length;
    for(var i = 0; i < encodeTextLen; i++) {
        currentCharacter = encodeText[i];
        if(currentCharacter === " ") {
            encoded += " ";
        }
        else if (currentCharacter === "!") {
            encoded += "!";
        }
        else if (currentCharacter === ".") {
            encoded += ".";
        }
        else if (currentCharacter === "?") {
            encoded += "?";
        }
        else if (currentCharacter === ":") {
            encoded += ":";
        }
        else if (currentCharacter === ",") {
            encoded += ",";
        }
        else if (currentCharacter === "0") {
            encoded += "0";
        }
        else if (currentCharacter === "1") {
            encoded += "1";
        }
        else if (currentCharacter === "2") {
            encoded += "2";
        }
        else if (currentCharacter === "3") {
            encoded += "3";
        }
        else if (currentCharacter === "4") {
            encoded += "4";
        }
        else if (currentCharacter === "5") {
            encoded += "5";
        }
        else if (currentCharacter === "6") {
            encoded += "6";
        }
        else if (currentCharacter === "7") {
            encoded += "7";
        }
        else if (currentCharacter === "8") {
            encoded += "8";
        }
        else if (currentCharacter === "9") {
            encoded += "9";
        }
        else {
            encodeShift = parseInt(encodeShift) % 26;
            position = alphabet.indexOf(currentCharacter);
            newPosition = parseInt(position) + encodeShift;
            encoded += alphabet[newPosition];
        }
    }  document.querySelector(".encoded-result").innerHTML = encoded;
    encoded = "";
} )


// decoding
var decodeText;
var decodeShift;
var decodeTextLen;
var deCurrentCharacter;
var dePosition;
var deNewPosition;
var decoded = "";
// decoding the message
document.querySelector("#decode-btn").addEventListener("click", function() {

    decodeText = document.querySelector("#decode-message").value;
    decodeText = decodeText.toLowerCase();
    decodeShift = document.querySelector("#decode-shift").value;
    decodeTextLen = decodeText.length;
    for (var z = 0; z < decodeTextLen; z++) {
        deCurrentCharacter = decodeText[z];
        if(deCurrentCharacter === " ") {
            decoded += " ";
        }
        else if (deCurrentCharacter === "!") {
            decoded += "!";
        }
        else if (deCurrentCharacter === ".") {
            decoded += ".";
        }
        else if (deCurrentCharacter === "?") {
            decoded += "?";
        }
        else if (deCurrentCharacter === ":") {
            decoded += ":";
        }
        else if (deCurrentCharacter === ",") {
            decoded += ",";
        }
        else if (deCurrentCharacter === "0") {
            decoded += "0";
        }
        else if (deCurrentCharacter === "1") {
            decoded += "1";
        }
        else if (deCurrentCharacter === "2") {
            decoded += "2";
        }
        else if (deCurrentCharacter === "3") {
            decoded += "3";
        }
        else if (deCurrentCharacter === "4") {
            decoded += "4";
        }
        else if (deCurrentCharacter === "5") {
            decoded += "5";
        }
        else if (deCurrentCharacter === "6") {
            decoded += "6";
        }
        else if (deCurrentCharacter === "7") {
            decoded += "7";
        }
        else if (deCurrentCharacter === "8") {
            decoded += "8";
        }
        else if (deCurrentCharacter === "9") {
            decoded += "9";
        }
        else {
            decodeShift = parseInt(decodeShift) % 26;
            dePosition = alphabet.lastIndexOf(deCurrentCharacter);
            deNewPosition = parseInt(dePosition) - decodeShift ;
            decoded += alphabet[deNewPosition]; 
        }
        
    } document.querySelector(".decoded-result").innerHTML = decoded;
    decoded = "";
})
