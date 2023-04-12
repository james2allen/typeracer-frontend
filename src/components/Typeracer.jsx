import { createSignal } from "solid-js";
import socket from "../socketConfig";
import CountDown from "./CountDown";
import StartBtn from "./StartBtn";

const findPlayer = (players) => {
  return players.find((player) => player.socketID === socket.id);
};

export default function Typeracer({ gameState }) {
  const { _id, players } = gameState;
  const player = findPlayer(players);
  const [word, setWord] = createSignal("");

  return (
    <div class="mt-20 flex w-screen justify-center">
      <div class="flex flex-col rounded-md bg-slate-400 p-12">
        <CountDown />
        <StartBtn player={player} gameID={_id} />
        <input type="text" />
      </div>
    </div>
  );
}
