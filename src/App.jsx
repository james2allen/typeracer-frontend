import styles from "./App.module.css";
import { Routes, Route } from "@solidjs/router";
import GameMenu from "./components/GameMenu";
import socket from "./socketConfig";
import { onMount } from "solid-js";
import CreateGame from "./components/CreateGame";

function App() {
  onMount(async () => {
    socket.on("test", (msg) => {
      console.log(msg);
    });
  });

  return (
    <div class={styles.App}>
      <Routes>
        <Route path="/" component={GameMenu} />
        <Route path="/game/create" component={CreateGame} />
      </Routes>
    </div>
  );
}

export default App;
