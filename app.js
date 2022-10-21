let contatore = 0

function aggiungi() {
	const input = document.querySelector("#to_do_input");
	const testo = input.value

	const to_do_list = document.querySelector("#to_do_list")

	const new_div = document.createElement("div")
	new_div.setAttribute("class", "item_container")
	new_div.setAttribute("id", `div${contatore}`);

	const new_li = document.createElement("li");
	new_li.innerHTML = testo

	const button = document.createElement("button");
	button.setAttribute("onclick", `elimina(div${contatore})`)
	button.setAttribute("id", "elimina_button")
	button.innerHTML = "X"

	new_div.appendChild(new_li);
	new_div.appendChild(button)

	to_do_list.appendChild(new_div)

	input.value = ""
	contatore += 1
}


function elimina(element) {
	element.remove()
}
