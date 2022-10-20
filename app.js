let contatore = 0

function aggiungi() {
	const input = document.querySelector("#to_do_input");
	const testo = input.value

	const to_do_list = document.querySelector("#to_do_list")

	const new_li = document.createElement("li");
	new_li.setAttribute("id", `li${contatore}`)
	new_li.innerHTML = testo

	const button = document.createElement("button");
	button.setAttribute("onclick", `elimina(li${contatore})`)
	button.innerHTML = "X"

	new_li.appendChild(button)
	to_do_list.appendChild(new_li);

	input.value = ""
	contatore += 1
}


function elimina(element) {
	element.remove()
}
