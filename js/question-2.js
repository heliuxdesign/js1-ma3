// Question 2

const url =
	"https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating";

const resultsContainer = document.querySelector(".results");

async function getFromApi() {
	try {
		let response = await fetch(url);
		let json = await response.json();
		const results = json.results;
		resultsContainer.innerHTML = "";
		for (let i = 0; i < results.length; i++) {
			if (i === 7) {
				break;
			}
			resultsContainer.innerHTML +=
				`<div class="result">` +
				`  Name: ${results[i].name}` +
				`  Rating: ${results[i].rating}` +
				`  Number of tags: ${results[i].tags.length}` +
				`</div>`;
		}
	} catch (error) {
		console.log("An error occured");
		resultsContainer.innerHTML = displayError("An error occured!");
	}
}
getFromApi();
