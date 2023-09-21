import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Main from "./pages/Main";
import Room from "./pages/Room";

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <Header />
      </header>
      <Routes>
        <Route exact path='/' element={<Main />} />
        <Route path='/conv' element={<Room />} />
      </Routes>
    </div>
  );
}

export default App;
