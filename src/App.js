import Header from "./components/Header"
import News from "./components/News";
import Signin from "./components/Signin"
import Signup from "./components/Signup";
import Homepage from "./components/Homepage";
import NewsDetails from "./components/NewsDetails";
import NotFound from "./components/NotFound";
import {BrowserRouter as Router, Route} from 'react-router-dom'


function App() {
  return (
    <div>

        <Router>
            <Header />
            <Route exact path="/"><Homepage/></Route>
            <Route exact path="/news"><News/></Route>
            <Route path="/news/:id"><NewsDetails/></Route>
            <Route path="/signin"><Signin/></Route>
            <Route path="/signup"><Signup/></Route>

        </Router>
    </div>
  );
}

export default App;
