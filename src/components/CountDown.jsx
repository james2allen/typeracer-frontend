import { createSignal, onMount } from "solid-js";
import socket from "../socketConfig";

export default function CountDown() {
  const [timer, setTimer] = createSignal({ countDown: "", msg: "" });
  onMount(() => {
    socket.on("timer", (data) => {
      setTimer(data);
    });
    socket.on("done", () => {
      socket.removeListener("timer");
    });
  });

  return (
    <div class="rounded-md bg-slate-400 p-12">
      <h1 class="ml-7 text-5xl font-bold">{timer().countDown}</h1>
      <h3>{timer().msg}</h3>
    </div>
  );
}
