import Counter from "./pages/Counter";
import Todos from "./pages/Todos";

const App = () => {

  return (
    <div className="w-full h-screen grid grid-cols-2">
      <Counter />
      <Todos />
    </div>
  );
}

export default App;