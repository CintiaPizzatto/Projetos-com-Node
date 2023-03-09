let {readFile, writeFile} = require('fs'); 

readFile('arquivo.txt', 'utf8', (error, texto) => {    
    if (error) {
        throw error;
    } else {   
    console.log(texto);
    }
});    

writeFile('arquivo.txt', '2º escreve isso: Texto por write file', (error) => {    
    if (error) {
        throw error;
    } else {   
    console.log('1º escreve isso: Arquivo escrito com sucesso!');
    }
});  