function validatePassword() {
	function isAnyNumber(char) {
		var numArray = Array.from("0123456789");
		return numArray.includes(char);
	}
	const password = document.getElementById("password").value.split("");
	if (password.some(isAnyNumber) && password.length >= 8) {
		return true;
	}
	alert(
		"Password must have at least 8 characters & It must include at least 1 digit"
	);
	return false;
}
