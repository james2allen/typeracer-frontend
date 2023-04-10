import { createSignal } from "solid-js";
import socket from "../socketConfig";

export default function CreateGame() {
  const [nickName, setNickName] = createSignal("");

  const onChange = (e) => {
    setNickName(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    socket.emit("create-game", nickName);
  };

  return (
    <div class="container flex">
      <div>
        <h1>Create Game</h1>
        <form onSubmit={onSubmit}>
          <div>
            <label for="nickName">Enter Nick Name</label>
            <input
              type="text"
              name="nickName"
              value={nickName}
              onChange={onChange}
              placeholder="Enter Nick Name"
              class=""
            />
          </div>
          <button
            class="mb-2 mr-2 rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
