


function format(str){
    str  = str.toLowerCase();
    let mapaAcentosHex = {   
        a: /[\xE0-\xE6]/g,
        e: /[\xE8-\xEB]/g,
        i: /[\xEC-\xEF]/g,
        o: /[\xF2-\xF6]/g,
        u: /[\xF9-\xFC]/g,
        c: /\xE7/g,
        n: /\xF1/g
    };
    for (let letra in mapaAcentosHex) {
        let expressaoRegular = mapaAcentosHex[letra];
        str = str.replace(expressaoRegular, letra);
    };
    return str;
}


function search(str){
    let result;
    const file = require('./data/'+str[0]+'.json');
    str = format(str);
    file.forEach(e => {
        if(format(e.palavra)===str){
            result = e;
        }
        
    });
    return result;
}

module.exports = (input) => {
    let result;
    input = input.replace(/[^a-zA-Z ]/g, "").split(" ")
    if(Array.isArray(input)){
        result = [];
        input.forEach(word => {
            result.push(search(word));
        });
    } else {
        input = "" + input;
        result = search(input);
    }

    return result;
}