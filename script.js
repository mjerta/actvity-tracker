// fetch(
//   "https://api.trello.com/1/cards/64aceeef5a7fb8b7aa03f674/pluginData?key=07e64362b442fbd4613d132556e518c0&token=ATTA5339e95d2b6c82274949c448ca47d0ca51c40d3107340ceae8407ced5a8bb155BF7502A0"
// )
//   .then((res) => res.json())
//   .then((res) => console.log(res[0].value));

//get all the cards from specific trello board and put them in an array
const key = "07e64362b442fbd4613d132556e518c0";
const token =
  "ATTA5339e95d2b6c82274949c448ca47d0ca51c40d3107340ceae8407ced5a8bb155BF7502A0";
let getAllCardsUrl = `https://api.trello.com/1/boards/64c7f12d30d071439e4d0f07/cards?key=${key}&token=${token}`;
let getActivityUrl = `https://api.trello.com/1/cards/${cardId}/pluginData?key=${key}&token=${token}`;

getAllCardsFromBoard(getAllCardsUrl);
getTimeActivity(getActivityUrl);

async function getAllCardsFromBoard(url) {
  const response = await fetch(url);
  const allCards = await response.json();
  allCards.forEach((card) => {
    console.log(card.id);
    getTimeActivity(card);
  });
}

async function getTimeActivity(url) {
  const response = await fetch(url);
  const timeActivity = await response.json();
  console.log(timeActivity);
  timeActivity.forEach((el) => {
    console.log(el.value);
  });
}
