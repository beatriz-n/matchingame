import "./src/style/settings/colors.css";
import "./src/style/elements/base.css";

import cardGame from "./src/components/cardGame";

const $root = document.querySelector('#root');
const $HTMLCardGame = cardGame();
$root.insertAdjacentHTML("beforeend",$HTMLCardGame);
