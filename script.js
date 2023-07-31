fetch(
  "https://api.trello.com/1/cards/64aceeef5a7fb8b7aa03f674/pluginData?key=07e64362b442fbd4613d132556e518c0&token=ATTA5339e95d2b6c82274949c448ca47d0ca51c40d3107340ceae8407ced5a8bb155BF7502A0"
)
  .then((res) => res.json())
  .then((data) => console.log(data[0].value));
