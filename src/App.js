import { makeStyles } from "@material-ui/core";
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Carousel from "./components/Banner/Carousel";
import Header from './components/Header';
import CoinPage from './Pages/CoinPage';
import Homepage from './Pages/HomePage';

const useStyles = makeStyles(() => ({
  App: {
    backgroundColor: "#14161a",
    color: "white",
    minHeight: "100vh",
  },
}));

function App() {
  const classes = useStyles();

  return (
    <BrowserRouter>
      <div className={classes.App}>
        <Header />
        {/* <Homepage/> */}
        {/* <CoinPage/> */}

        <Route exact path='/' element={<Homepage/>} />
        {/* <Route path="/coins/:id" element={CoinPage} exact /> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
