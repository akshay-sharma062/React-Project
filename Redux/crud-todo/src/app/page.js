import { Provider } from "react-redux";
import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";


export default function Home() {
  return (
   <>
    <Provider >
      <AddTodo />
      <Todos />
    </Provider>
   </>
  );
}
