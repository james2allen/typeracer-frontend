import { useNavigate } from "@solidjs/router";

export default function GameMenu() {
  const navigate = useNavigate();

  return (
    <div class="">
      <h1 class="mb-3 mt-16 text-3xl">Welcome to Typeracer</h1>
      <button
        class="mb-2 mr-2 rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        onClick={() => navigate("/game/create")}
      >
        Create Game
      </button>
      <button
        class="mb-2 mr-2 rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        onClick={() => navigate("/game/join")}
      >
        Join Game
      </button>
    </div>
  );
}
