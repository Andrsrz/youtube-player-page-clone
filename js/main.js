const RE_1 = [];
const RE_2 = [];
const RE_3 = [];
const RE_4 = [];
const RE_5 = [];

const RECOMENDATIONS_ARR = [RE_1, RE_2, RE_3, RE_4, RE_5];

function createRecomendations(arr){
	let container = document.getElementById("site-main-video-recomendations");

	for(let i = 0; i < arr.length; i++){
		let divRecomendation = document.createElement("div");
		divRecomendation.setAttribute("class", "recomendation");
		let divLeft = document.createElement("div");
		divLeft.setAttribute("class", "recomendation-video");
		divRecomendation.appendChild(divLeft);
		let divRigth = document.createElement("div");
		divRigth.setAttribute("class", "recomendation-info");
		divRecomendation.appendChild(divRigth);
		container.appendChild(divRecomendation);
	}
}

createRecomendations(RECOMENDATIONS_ARR);
