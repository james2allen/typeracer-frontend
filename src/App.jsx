import styles from "./App.module.css";
import { Routes, Route } from "@solidjs/router";
import GameMenu from "./components/GameMenu";
import socket from "./socketConfig";
import { onMount } from "solid-js";

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
      </Routes>
    </div>
  );
}

export default App;
