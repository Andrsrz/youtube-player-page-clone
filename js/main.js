const RE_1 = new Recomendation("AZKABAN - WITCHCRAFT AND WIZARDRY - Directo 3", "alexelcapo 76.010 visualizaciones Hace 4 d&iacute;as");
const RE_2 = new Recomendation("MINECRAFT DUNGEONS - Juego completo", "alexelcapo 274.085 visualizaciones Hace 3 d&iacute;as");
const RECOMENDATIONS_ARR = [RE_1, RE_2];

function createRecomendations(arr){
	let container = document.getElementById("site-main-video-recomendations");

	for(let i = 0; i < arr.length; i++){
		let divRecomendation = document.createElement("div");
		divRecomendation.setAttribute("class", "recomendation");
		let divLeft = document.createElement("div");
		divLeft.setAttribute("class", "recomendation-video");
		let icon = document.createElement("i");
		icon.setAttribute("class", "fas fa-image thumbnail");
		divLeft.appendChild(icon);
		divRecomendation.appendChild(divLeft);
		let divRigth = document.createElement("div");
		divRigth.setAttribute("class", "recomendation-info");
		let title = document.createElement("h2");
		title.innerHTML = arr[i].title;
		let des = document.createElement("h4");
		des.innerHTML = arr[i].des;
		divRigth.appendChild(title);
		divRigth.appendChild(des);
		divRecomendation.appendChild(divRigth);
		container.appendChild(divRecomendation);
	}
}

createRecomendations(RECOMENDATIONS_ARR);
