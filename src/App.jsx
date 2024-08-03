import "./App.css";
import ScrollTracker from "./components/ScrollTracker";
import Right from "./Right";
import { analytics } from "./firebase-config.js";

function App() {
  return (
    <>
      <ScrollTracker />

      <main className="relative mx-auto w-[85vw] laptop:flex laptop:gap-4">
        {/* <Left /> */}
        <Right />
      </main>
    </>
  );
}

export default App;
