import styles from "./App.module.css";
import { Routes, Route, useNavigate } from "@solidjs/router";
import GameMenu from "./components/GameMenu";
import socket from "./socketConfig";
import { createEffect, createSignal, onCleanup, onMount } from "solid-js";
import CreateGame from "./components/CreateGame";
import JoinGame from "./components/JoinGame";
import Typeracer from "./components/Typeracer";

function App() {
  const navigate = useNavigate();
  const [gameState, setGameState] = createSignal({
    _id: "",
    isOpen: false,
    players: [],
    words: [],
  });

  onMount(async () => {
    socket.on("update-game", (game) => {
      console.log(game);
      setGameState(game);
    });
  });

  onCleanup(() => {
    socket.removeAllListeners();
  });

  createEffect(() => {
    if (gameState()._id !== "") {
      navigate(`/game/${gameState()._id}`);
    }
  });

  return (
    <div class={styles.App}>
      <Routes>
        <Route path="/" component={GameMenu} />
        <Route path="/game/create" component={CreateGame} />
        <Route path="/game/join" component={JoinGame} />
        <Route
          path="game/:gameID"
          element={<Typeracer gameState={gameState} />}
        />
      </Routes>
    </div>
  );
}

export default App;
