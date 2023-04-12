import { createSignal } from "solid-js";
import socket from "../socketConfig";

export default function StartBtn({ player, gameID }) {
  const [showBtn, setShowBtn] = createSignal(true);
  const { isPartyLeader } = player;

  const startGame = (e) => {
    socket.emit("timer", { playerID: player._id, gameID });
    setShowBtn(false);
  };

  return (
    <>
      <Show when={isPartyLeader && showBtn()}>
        <button
          class="mb-2 mr-2 rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          onClick={startGame}
        >
          Start Game
        </button>
      </Show>
    </>
  );
}
