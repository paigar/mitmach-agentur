document.addEventListener("DOMContentLoaded", function () {
	// Obtiene el elemento input con id 'moneyammount'
	var moneyAmountInput = document.getElementById("moneyammount");
	// Obtiene el elemento input con id 'money4'
	var money4Input = document.getElementById("money04");

	// Agrega un event listener para detectar cambios en el input 'moneyammount'
	moneyAmountInput.addEventListener("input", function () {
		// Actualiza el valor del input 'money4' con el valor actual del input 'moneyammount'
		money4Input.value = moneyAmountInput.value;
	});
});
