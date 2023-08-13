import { Outlet } from 'react-router-dom';
import Header from "./components/Header";
import Footer from "./components/Footer";
import './App.css';


function App() {

// TO DO: INSERT STUFF FROM NOTES

  return (
    <div>
      <Header fixed="top"/>
      <Outlet />
      <Footer fixed="bottom"/>
    {/* {DisplaySwitch(displayState)} */}
    </div>
  );
}

export default App;
