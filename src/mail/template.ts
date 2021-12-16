const template = (name: string) => {
    
    let content = `
    <p>
        Olá ${name}, você acabou de receber o seu e-book com o guia de <strong>Como utilizar o RegEx</strong> que vai te ajudar a se tornar um especialista e dominar as expressoões regulares. E ai tá preparado?<br>
        Para obter o e-book basta clicar no botão <strong>"Baixar E-book"</strong> e boa leitura<br>
        <a href="https://carlosalves.now.sh/ebook.pdf" style="color: #fff; background: #580dae; display: inline-block; padding: 5px 10px; text-decoration: none; border-radius: 5px; font-weight: bold;">BAIXAR E-BOOK</a>
    </p>
    `

    return content
}

export = template