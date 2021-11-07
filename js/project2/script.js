function makeLi(value, link) {
	const li = document.createElement("li");
	const img = document.createElement("img");
	img.src = link;
	const text = document.createTextNode(value);
	li.appendChild(img);
	li.appendChild(text);
	// css
	img.style.width = "30px";
	img.style.height = "30px";
	img.style.marginTop = "5px";
	img.style.marginLeft = "10px";
	img.style.marginRight = "10px";
	img.style.borderRadius = "5px";
	li.style.fontSize = "40px";
	li.style.marginTop = "5px";

	return li;
}

const link1 = "./images/netflix.png";
const link2 = "./images/amazonprime.png";
const link3 = "./images/hotstar.png";
const link4 = "./images/voot.png";

let ol = document.getElementById("apps");
ol.appendChild(makeLi("Netflix", link1));
ol.appendChild(makeLi("Amazon prime", link2));
ol.appendChild(makeLi("Hotstar", link3));
ol.appendChild(makeLi("Voot", link4));
