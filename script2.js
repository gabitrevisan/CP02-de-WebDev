function validar(){

	let nome = document.getElementById("nome").value
	let telefone = document.getElementById("telefone").value
    let email = document.getElementById("email").value

    if (nome =="") {
		alert('Por favor, preencha o campo "Nome".')
	}
    if (telefone =="") {
		alert('Por favor, preencha o campo "Telefone".')
	}
    if (email =="") {
		alert('Por favor, preencha o campo "E-mail".')
	}
else {
	alert('Suas informações foram recebidas com sucesso. Logo mais entraremos em contato!')
		    }
}