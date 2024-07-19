import "./App.css";
import ScrollTracker from "./components/ScrollTracker";
import Right from "./Right";
// import { Toaster, toast } from "sonner";

// export const EduContext = createContext();

function App() {
  return (
    <>
      <ScrollTracker />
      <main className="relative mx-auto w-[85vw] flex justify-center gap-4 ">
        {/* <Left /> */}
        <Right />
      </main>
    </>
  );
}

export default App;
