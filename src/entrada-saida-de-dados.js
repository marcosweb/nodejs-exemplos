// node entrada-saida-de-dados.js -a
const anonimo = process.argv.indexOf('-a') !== -1

if(anonimo) {
    process.stdout.write('Olá anônimo!')
    process.exit()
} else {
    // (stdout) saida padrão
    process.stdout.write('Informe seu nome:\n')
    
    // (stdin) entrada padrão
    // pega o que usuario digita, incluindo o ENTER
    process.stdin.on('data', data => {
        //removendo o ENTER
        const nome = data.toString().replace('\n', '')
        process.stdout.write(`Olá ${nome}!\n`)
        process.exit()
    })
}