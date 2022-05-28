import cardGame from "./src/components/cardGame";

const $root = document.querySelector('#root');
const $HTMLCardGame = cardGame();
$root.insertAdjacentHTML("beforeend",$HTMLCardGame);
