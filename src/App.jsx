import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  return (
    <div className="bg-slate-900 w-full h-screen mx-auto p-3 text-slate-200 font-comic sm:w-96 sm:h-[800px] sm:rounded-2xl font-bold ">
      <Header />
      <Main />
    </div>
  );
}

export default App;
