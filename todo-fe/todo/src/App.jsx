import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import TodoList from "./components/TodoList";

function App() {
  return (
    <>
    <Header />
    <div>
      <NavBar />
      <TodoList />
    </div>
    <Outlet />
    </>
  );
}

export default App;
