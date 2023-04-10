import { createSignal } from "solid-js";
import socket from "../socketConfig";

export default function JoinGame() {
  const [nickName, setNickName] = createSignal("");
  const [gameID, setGameID] = createSignal("");

  const onChangeNickName = (e) => {
    setNickName(e.target.value);
  };

  const onChangeGameID = (e) => {
    setGameID(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    socket.emit("join-game", { nickName: nickName(), gameID: gameID() });
    console.log(nickName());
  };

  return (
    <div class="container flex">
      <div>
        <h1>Join Game</h1>
        <form onSubmit={onSubmit}>
          <div>
            <label for="nickName">Enter Nick Name</label>
            <input
              type="text"
              name="nickName"
              value={nickName()}
              onChange={onChangeNickName}
              placeholder="Enter Nick Name"
              class=""
            />
          </div>
          <div>
            <label for="gameID">Enter Game ID</label>
            <input
              type="text"
              name="gameID"
              value={gameID()}
              onChange={onChangeGameID}
              placeholder="Enter Game ID"
              class=""
            />
          </div>
          <button
            class="mb-2 mr-2 rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            type="submit"
            onSubmit={onSubmit}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
