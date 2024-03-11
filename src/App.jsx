import Main from "./layout/Main";
import "./index.css";
import ItemContextProvider from "./store/itemContext";

function App() {
  return (
    <section className='App'>
      <ItemContextProvider>
        <Main />
      </ItemContextProvider>
    </section>
  );
}

export default App;
