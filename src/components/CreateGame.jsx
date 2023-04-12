import { createSignal } from "solid-js";
import socket from "../socketConfig";

export default function CreateGame() {
  const [nickName, setNickName] = createSignal("");

  const onChange = (e) => {
    setNickName(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    socket.emit("create-game", nickName());
    console.log(nickName());
  };

  return (
    <div class="mt-20 flex w-screen justify-center align-middle">
      <div class="flex flex-col rounded-lg bg-slate-300 p-12 align-middle">
        <h1 class="text-4xl">Create Game</h1>
        <form onSubmit={onSubmit}>
          <div class="mt-10 flex flex-col align-middle">
            <label for="nickName">Enter Name</label>
            <input
              type="text"
              name="nickName"
              value={nickName()}
              onChange={onChange}
              placeholder="Enter Name"
              class="px-2 py-1"
            />
          </div>
          <button
            class="mb-2 mr-2 mt-6 rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
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
